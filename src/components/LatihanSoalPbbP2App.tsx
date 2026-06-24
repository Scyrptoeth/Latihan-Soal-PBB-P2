"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  Layers3,
  Mail,
  MessageCircle,
  RotateCcw,
  Send,
  Star,
  X,
  XCircle
} from "lucide-react";
import Image from "next/image";
import { type FormEvent, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { studyPackages } from "@/data/questionBank";
import {
  createAttemptId,
  getAttemptStoreSnapshot,
  getServerAttemptStoreSnapshot,
  parseAttemptStore,
  subscribeToAttemptStore,
  writeAttemptStore
} from "@/lib/progress";
import {
  DEVELOPER_RATING_ACCESS_STORAGE_KEY,
  getAverageRating,
  getAverageScore,
  getRatingStoreSnapshot,
  getServerRatingStoreSnapshot,
  parseRatingStore,
  recordPackageRating,
  recordPackageSubmit,
  subscribeToRatingStore,
  writeRatingStore
} from "@/lib/ratings";
import { fetchCentralRatingStore, syncPackageRating, syncPackageSubmit } from "@/lib/ratingSync";
import { FEEDBACK_MAX_LENGTH } from "@/lib/feedback";
import { submitAnonymousFeedback } from "@/lib/feedbackSync";
import type { RatingStore } from "@/lib/ratings";
import type { LearningQuestion, StoredAnswer, StudyPackage, TestAttempt } from "@/types/learning";

type LearningMode = "flipcard" | "test";
type Mode = "home" | "choice" | LearningMode;
type ConfirmationDialog = "submit" | "retake" | null;
type RatingAnalyticsSource = "central" | "local";
type AnonymousFeedbackStatus = "idle" | "sending" | "sent" | "error";

const optionLabels = ["A", "B", "C", "D"];
const ratingOptions = [1, 2, 3, 4, 5] as const;
const SUBJECT_NAME = "PBB-P2";
const SUBJECT_DESCRIPTION = "Pajak Bumi dan Bangunan Perdesaan dan Perkotaan";

function GitHubMark() {
  return (
    <svg aria-hidden="true" height="18" viewBox="0 0 24 24" width="18">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.86 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function getAnswerMap(answers: StoredAnswer[]) {
  return new Map(answers.map((answer) => [answer.questionId, answer.selectedOptionIndex]));
}

function getPackageScore(currentPackage: StudyPackage, answers: StoredAnswer[]) {
  const answerMap = getAnswerMap(answers);
  return currentPackage.questions.reduce((score, question) => {
    return answerMap.get(question.id) === question.correctOptionIndex ? score + 1 : score;
  }, 0);
}

function createEmptyAnswers(questions: LearningQuestion[]): StoredAnswer[] {
  return questions.map((question) => ({
    questionId: question.id,
    selectedOptionIndex: null
  }));
}

function getExplanationParagraphs(explanation: string) {
  return explanation
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function getDeveloperDashboardSnapshot() {
  if (typeof window === "undefined") {
    return "closed";
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get("developer") !== "ratings") {
    return "closed";
  }

  const configuredKey = window.localStorage.getItem(DEVELOPER_RATING_ACCESS_STORAGE_KEY);
  const requestedKey = params.get("key");

  return process.env.NODE_ENV === "development" || (configuredKey && requestedKey === configuredKey) ? "open" : "closed";
}

function getServerDeveloperDashboardSnapshot() {
  return "closed";
}

function subscribeToDeveloperDashboard(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener("popstate", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("popstate", onStoreChange);
  };
}

function isEditableTarget(target: EventTarget | null) {
  return target instanceof HTMLElement && Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
}

function getAnonymousFeedbackErrorMessage(error: string | null) {
  if (!error) {
    return null;
  }

  if (error === "central_feedback_storage_not_configured") {
    return "Feedback belum dapat dikirim karena storage terpusat belum aktif.";
  }

  if (error === "invalid_feedback") {
    return "Tulis feedback terlebih dahulu sebelum mengirim.";
  }

  return "Feedback belum berhasil dikirim. Silakan coba lagi.";
}

export function LatihanSoalPbbP2App() {
  const [mode, setMode] = useState<Mode>("home");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(studyPackages[0]?.id ?? null);
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [answers, setAnswers] = useState<StoredAnswer[]>([]);
  const [submittedAttempt, setSubmittedAttempt] = useState<TestAttempt | null>(null);
  const [confirmationDialog, setConfirmationDialog] = useState<ConfirmationDialog>(null);
  const [pendingFeedbackAttempt, setPendingFeedbackAttempt] = useState<TestAttempt | null>(null);
  const [feedbackRating, setFeedbackRating] = useState<number | null>(null);
  const [isDeveloperDashboardDismissed, setIsDeveloperDashboardDismissed] = useState(false);
  const [centralRatingStore, setCentralRatingStore] = useState<RatingStore | null>(null);
  const [ratingAnalyticsSource, setRatingAnalyticsSource] = useState<RatingAnalyticsSource>("local");
  const [ratingAnalyticsError, setRatingAnalyticsError] = useState<string | null>(null);
  const [anonymousFeedback, setAnonymousFeedback] = useState("");
  const [anonymousFeedbackStatus, setAnonymousFeedbackStatus] = useState<AnonymousFeedbackStatus>("idle");
  const [anonymousFeedbackError, setAnonymousFeedbackError] = useState<string | null>(null);

  const attemptStoreSnapshot = useSyncExternalStore(
    subscribeToAttemptStore,
    getAttemptStoreSnapshot,
    getServerAttemptStoreSnapshot
  );
  const ratingStoreSnapshot = useSyncExternalStore(
    subscribeToRatingStore,
    getRatingStoreSnapshot,
    getServerRatingStoreSnapshot
  );
  const developerDashboardSnapshot = useSyncExternalStore(
    subscribeToDeveloperDashboard,
    getDeveloperDashboardSnapshot,
    getServerDeveloperDashboardSnapshot
  );

  const attemptStore = useMemo(() => parseAttemptStore(attemptStoreSnapshot), [attemptStoreSnapshot]);
  const ratingStore = useMemo(() => parseRatingStore(ratingStoreSnapshot), [ratingStoreSnapshot]);

  const currentPackage = useMemo(() => {
    if (!selectedPackageId) {
      return null;
    }

    return studyPackages.find((studyPackage) => studyPackage.id === selectedPackageId) ?? null;
  }, [selectedPackageId]);

  const packageAttempts = currentPackage ? attemptStore[currentPackage.id] ?? [] : [];
  const currentQuestion = currentPackage?.questions[cardIndex] ?? null;
  const answerMap = getAnswerMap(answers);
  const answeredCount = answers.filter((answer) => answer.selectedOptionIndex !== null).length;
  const answeredNumbers = answers.flatMap((answer, index) => (answer.selectedOptionIndex !== null ? [index + 1] : []));
  const unansweredNumbers = answers.flatMap((answer, index) => (answer.selectedOptionIndex === null ? [index + 1] : []));
  const latestAttempt = packageAttempts.at(-1);
  const isDeveloperDashboardOpen = developerDashboardSnapshot === "open" && !isDeveloperDashboardDismissed;
  const activeRatingStore = centralRatingStore ?? ratingStore;

  const ratingStats = useMemo(() => {
    return Object.values(activeRatingStore).sort((firstStats, secondStats) => {
      if (secondStats.submitCount !== firstStats.submitCount) {
        return secondStats.submitCount - firstStats.submitCount;
      }

      return firstStats.packageName.localeCompare(secondStats.packageName, "id");
    });
  }, [activeRatingStore]);

  useEffect(() => {
    let isCancelled = false;

    async function loadCentralRatings() {
      const result = await fetchCentralRatingStore();
      if (isCancelled) {
        return;
      }

      if (result.ok) {
        setCentralRatingStore(result.store);
        setRatingAnalyticsSource("central");
        setRatingAnalyticsError(null);
        return;
      }

      setCentralRatingStore(null);
      setRatingAnalyticsSource("local");
      setRatingAnalyticsError(result.error);
    }

    if (isDeveloperDashboardOpen) {
      void loadCentralRatings();
    }

    return () => {
      isCancelled = true;
    };
  }, [isDeveloperDashboardOpen, ratingStoreSnapshot]);

  useEffect(() => {
    function preventCopy(event: Event) {
      if (isEditableTarget(event.target)) {
        return;
      }

      event.preventDefault();
    }

    function preventCopyShortcut(event: KeyboardEvent) {
      if (isEditableTarget(event.target)) {
        return;
      }

      const blockedKeys = ["a", "c", "p", "s", "u", "x"];
      if ((event.ctrlKey || event.metaKey) && blockedKeys.includes(event.key.toLowerCase())) {
        event.preventDefault();
      }
    }

    document.addEventListener("contextmenu", preventCopy);
    document.addEventListener("copy", preventCopy);
    document.addEventListener("cut", preventCopy);
    document.addEventListener("dragstart", preventCopy);
    document.addEventListener("selectstart", preventCopy);
    document.addEventListener("keydown", preventCopyShortcut);

    return () => {
      document.removeEventListener("contextmenu", preventCopy);
      document.removeEventListener("copy", preventCopy);
      document.removeEventListener("cut", preventCopy);
      document.removeEventListener("dragstart", preventCopy);
      document.removeEventListener("selectstart", preventCopy);
      document.removeEventListener("keydown", preventCopyShortcut);
    };
  }, []);

  function activateMode(nextMode: Mode) {
    if (nextMode === "home") {
      setMode("home");
      return;
    }

    const nextPackage = currentPackage ?? studyPackages[0] ?? null;
    setMode(nextMode);

    if (!nextPackage) {
      setSelectedPackageId(null);
      setAnswers([]);
      setSubmittedAttempt(null);
      return;
    }

    if (nextPackage.id !== selectedPackageId) {
      setSelectedPackageId(nextPackage.id);
      setAnswers(createEmptyAnswers(nextPackage.questions));
      setSubmittedAttempt(null);
    }

    setCardIndex(0);
    setIsCardOpen(false);
  }

  function selectPackage(packageId: string) {
    const nextPackage = studyPackages.find((studyPackage) => studyPackage.id === packageId);
    if (!nextPackage) {
      return;
    }

    setSelectedPackageId(packageId);
    setCardIndex(0);
    setIsCardOpen(false);
    setAnswers(createEmptyAnswers(nextPackage.questions));
    setSubmittedAttempt(null);
  }

  function selectAnswer(questionId: string, selectedOptionIndex: number) {
    if (submittedAttempt) {
      return;
    }

    setAnswers((currentAnswers) =>
      currentAnswers.map((answer) =>
        answer.questionId === questionId ? { ...answer, selectedOptionIndex } : answer
      )
    );
  }

  function requestSubmitTest() {
    if (!currentPackage || submittedAttempt || pendingFeedbackAttempt) {
      return;
    }

    setConfirmationDialog("submit");
  }

  function submitTest() {
    if (!currentPackage) {
      return;
    }

    const score = getPackageScore(currentPackage, answers);
    const attemptNumber = packageAttempts.length + 1;
    const submittedAt = new Date().toISOString();
    const attempt: TestAttempt = {
      id: createAttemptId(currentPackage.id, attemptNumber),
      packageId: currentPackage.id,
      score,
      total: currentPackage.questions.length,
      percentage: Math.round((score / currentPackage.questions.length) * 100),
      submittedAt,
      answers
    };
    const nextStore = {
      ...attemptStore,
      [currentPackage.id]: [...packageAttempts, attempt]
    };

    writeAttemptStore(nextStore);
    writeRatingStore(recordPackageSubmit(parseRatingStore(getRatingStoreSnapshot()), currentPackage, submittedAt, score));
    void syncPackageSubmit(currentPackage.id, score, currentPackage.questions.length);
    setFeedbackRating(null);
    setPendingFeedbackAttempt(attempt);
  }

  function requestRetakeTest() {
    if (!currentPackage || pendingFeedbackAttempt) {
      return;
    }

    setConfirmationDialog("retake");
  }

  function retakeTest() {
    if (!currentPackage) {
      return;
    }

    setAnswers(createEmptyAnswers(currentPackage.questions));
    setSubmittedAttempt(null);
    setMode("test");
  }

  function confirmDialogAction() {
    const nextAction = confirmationDialog;
    setConfirmationDialog(null);

    if (nextAction === "submit") {
      submitTest();
      return;
    }

    if (nextAction === "retake") {
      retakeTest();
    }
  }

  function finishFeedback(rating?: number) {
    if (!pendingFeedbackAttempt) {
      return;
    }

    if (rating && currentPackage) {
      writeRatingStore(recordPackageRating(parseRatingStore(getRatingStoreSnapshot()), currentPackage, rating, new Date().toISOString()));
      void syncPackageRating(currentPackage.id, rating);
    }

    setSubmittedAttempt(pendingFeedbackAttempt);
    setPendingFeedbackAttempt(null);
    setFeedbackRating(null);
  }

  async function handleAnonymousFeedbackSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = anonymousFeedback.trim();
    if (!message) {
      setAnonymousFeedbackStatus("error");
      setAnonymousFeedbackError("invalid_feedback");
      return;
    }

    setAnonymousFeedbackStatus("sending");
    setAnonymousFeedbackError(null);

    const result = await submitAnonymousFeedback(message);
    if (result.ok) {
      setAnonymousFeedback("");
      setAnonymousFeedbackStatus("sent");
      return;
    }

    setAnonymousFeedbackStatus("error");
    setAnonymousFeedbackError(result.error);
  }

  function moveCard(direction: -1 | 1) {
    if (!currentPackage) {
      return;
    }

    setCardIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;
      return Math.min(Math.max(nextIndex, 0), currentPackage.questions.length - 1);
    });
    setIsCardOpen(false);
  }

  const anonymousFeedbackPanel = (
    <section
      className={`anonymous-feedback-panel ${mode === "home" ? "is-home-grid" : ""}`}
      aria-labelledby="anonymous-feedback-title"
    >
      <div className="anonymous-feedback-copy">
        <span className="anonymous-feedback-icon">
          <MessageCircle aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="eyebrow">Feedback Anonim</p>
          <h3 id="anonymous-feedback-title">Beri feedback secara anonim di sini</h3>
        </div>
      </div>
      <form className="anonymous-feedback-form" onSubmit={handleAnonymousFeedbackSubmit}>
        <label className="anonymous-feedback-field">
          <span>Isi feedback</span>
          <textarea
            maxLength={FEEDBACK_MAX_LENGTH}
            onChange={(event) => {
              setAnonymousFeedback(event.target.value);
              if (anonymousFeedbackStatus !== "idle") {
                setAnonymousFeedbackStatus("idle");
                setAnonymousFeedbackError(null);
              }
            }}
            placeholder="Tulis saran, kendala, atau masukan singkat untuk website ini."
            rows={2}
            value={anonymousFeedback}
          />
        </label>
        <button className="anonymous-feedback-submit" disabled={anonymousFeedbackStatus === "sending"} type="submit">
          <Send aria-hidden="true" size={18} />
          {anonymousFeedbackStatus === "sending" ? "Mengirim" : "Kirim feedback"}
        </button>
      </form>
      {anonymousFeedbackStatus === "sent" ? (
        <p className="anonymous-feedback-status is-success">
          <CheckCircle2 aria-hidden="true" size={18} />
          Terima kasih. Feedback anonim Anda sudah terkirim.
        </p>
      ) : null}
      {anonymousFeedbackStatus === "error" ? (
        <p className="anonymous-feedback-status is-error">
          <XCircle aria-hidden="true" size={18} />
          {getAnonymousFeedbackErrorMessage(anonymousFeedbackError)}
        </p>
      ) : null}
    </section>
  );

  return (
    <>
      <a className="skip-link" href="#workspace">
        Lewati ke materi
      </a>
      <main className={`app-shell ${isSidebarExpanded ? "" : "is-sidebar-collapsed"}`}>
        <aside className="side-rail" aria-label="Navigasi belajar">
          <div className="brand-block">
            <a
              aria-label="Buka halaman utama Latihan Soal PBB-P2"
              className={`brand-mark ${isSidebarExpanded ? "is-wide" : "is-square"}`}
              href="https://persiapantubel.com/product"
            >
              <Image
                alt=""
                className="brand-image"
                height={isSidebarExpanded ? 974 : 256}
                priority
                sizes={isSidebarExpanded ? "(max-width: 1180px) calc(100vw - 32px), 233px" : "58px"}
                src={isSidebarExpanded ? "/latihan-soal-pbb-p2-header.svg" : "/latihan-soal-pbb-p2-logo.svg"}
                width={isSidebarExpanded ? 2560 : 256}
              />
            </a>
          </div>

          <button
            aria-expanded={isSidebarExpanded}
            aria-label={isSidebarExpanded ? "Ringkas sidebar paket" : "Perluas sidebar paket"}
            className="sidebar-toggle"
            onClick={() => setIsSidebarExpanded((value) => !value)}
            type="button"
          >
            {isSidebarExpanded ? <ChevronLeft aria-hidden="true" size={18} /> : <ChevronRight aria-hidden="true" size={18} />}
            <span>{isSidebarExpanded ? "Ringkas" : "Perluas"}</span>
          </button>

          <nav className="topic-list" aria-label="Daftar paket latihan">
            <button
              className={`topic-button ${mode === "home" ? "is-active" : ""}`}
              onClick={() => activateMode("home")}
              type="button"
              title={SUBJECT_NAME}
            >
              <Home aria-hidden="true" size={18} />
              <span>
                <strong>Beranda</strong>
                <small>{SUBJECT_NAME}</small>
              </span>
            </button>
            {studyPackages.map((studyPackage) => (
              <button
                className={`topic-button ${studyPackage.id === currentPackage?.id && mode !== "home" ? "is-active" : ""}`}
                key={studyPackage.id}
                onClick={() => {
                  selectPackage(studyPackage.id);
                  setMode("choice");
                }}
                type="button"
                title={studyPackage.name}
              >
                <Layers3 aria-hidden="true" size={18} />
                <span>
                  <strong>{studyPackage.name}</strong>
                  <small>{studyPackage.questions.length} soal</small>
                </span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="workspace" id="workspace">
          <header className={`topbar ${mode === "home" ? "is-home" : ""}`}>
            <div className="topbar-title">
              <p className="eyebrow">{mode === "home" ? "Progres Belajar" : SUBJECT_NAME}</p>
              <h2>{mode === "home" ? "Beranda" : currentPackage ? currentPackage.name : "Pilih Paket"}</h2>
            </div>
            {mode === "home" ? (
              <a
                aria-label="Latihan Soal PBB-P2, bagian dari persiapantubel.com"
                className="home-brand-banner"
                href="https://persiapantubel.com/product"
              >
                <Image
                  alt="Latihan Soal PBB-P2, bagian dari persiapantubel.com"
                  className="home-brand-image"
                  height={974}
                  priority
                  sizes="(max-width: 860px) calc(100vw - 40px), 486px"
                  src="/latihan-soal-pbb-p2-header.svg"
                  width={2560}
                />
              </a>
            ) : null}
            <div className="mode-switch" aria-label="Mode belajar">
              <a href="/PBB-P-2.pdf" rel="noreferrer" target="_blank">
                <FileText aria-hidden="true" size={18} />
                Materi
              </a>
              <button
                aria-pressed={mode === "home"}
                className={mode === "home" ? "is-active" : ""}
                onClick={() => activateMode("home")}
                type="button"
              >
                <Home aria-hidden="true" size={18} />
                Beranda
              </button>
              <button
                aria-pressed={mode === "flipcard"}
                className={mode === "flipcard" ? "is-active" : ""}
                onClick={() => activateMode("flipcard")}
                type="button"
              >
                <BookOpen aria-hidden="true" size={18} />
                Flipcard
              </button>
              <button
                aria-pressed={mode === "test"}
                className={mode === "test" ? "is-active" : ""}
                onClick={() => activateMode("test")}
                type="button"
              >
                <ClipboardCheck aria-hidden="true" size={18} />
                Tes
              </button>
              <ThemeToggle />
            </div>
          </header>

          {mode === "home" ? null : anonymousFeedbackPanel}

          {mode === "home" ? null : (
            <section className={`package-picker ${currentPackage ? "has-selection" : ""}`} aria-label="Pilih paket soal">
              <div className="package-strip">
                {studyPackages.map((studyPackage) => (
                  <button
                    className={studyPackage.id === currentPackage?.id ? "is-active" : ""}
                    key={studyPackage.id}
                    aria-pressed={studyPackage.id === currentPackage?.id}
                    onClick={() => selectPackage(studyPackage.id)}
                    type="button"
                  >
                    <span>{studyPackage.name}</span>
                    <small>{studyPackage.questions.length} soal</small>
                  </button>
                ))}
              </div>
            </section>
          )}

          {isDeveloperDashboardOpen ? (
            <section className="developer-analytics" aria-label="Dashboard penilaian developer">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Developer</p>
                  <h3>Penilaian paket</h3>
                </div>
                <button className="developer-panel-close" onClick={() => setIsDeveloperDashboardDismissed(true)} type="button">
                  <X aria-hidden="true" size={18} />
                  Tutup
                </button>
              </div>
              <p className="developer-note">
                {ratingAnalyticsSource === "central"
                  ? "Data ini dibaca dari storage terpusat. Panel tidak muncul di navigasi publik."
                  : "Storage terpusat belum aktif atau tidak dapat diakses, jadi panel menampilkan data lokal di browser ini."}
              </p>
              {ratingAnalyticsError ? <p className="developer-warning">Status storage pusat: {ratingAnalyticsError}</p> : null}
              {ratingStats.length > 0 ? (
                <div className="developer-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Paket</th>
                        <th scope="col">Submit</th>
                        <th scope="col">Skor rata-rata</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Rata-rata</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ratingStats.map((stats) => {
                        const averageRating = getAverageRating(stats);
                        const averageScore = getAverageScore(stats);

                        return (
                          <tr key={stats.packageId}>
                            <td>{stats.packageName}</td>
                            <td>{stats.submitCount}</td>
                            <td>{averageScore === null ? "-" : averageScore.toFixed(1)}</td>
                            <td>{stats.ratingCount}</td>
                            <td>{averageRating === null ? "-" : averageRating.toFixed(1)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="empty-state">
                  {ratingAnalyticsSource === "central"
                    ? "Belum ada data submit atau penilaian di storage terpusat."
                    : "Belum ada data submit atau penilaian lokal di browser ini."}
                </p>
              )}
            </section>
          ) : null}

          {mode !== "home" && currentPackage ? (
            <section
              className={`package-mode-panel ${mode === "choice" ? "is-choice" : `is-swap is-${mode}-swap`}`}
              aria-label={mode === "choice" ? "Pilih cara belajar" : "Pindah mode belajar"}
            >
              {mode === "choice" ? (
                <>
                  <div className="section-heading">
                    <div>
                      <p className="eyebrow">Pilih mode</p>
                      <h3>Pilih cara belajar</h3>
                    </div>
                  </div>
                  <div className="mode-choice-grid">
                    <button onClick={() => activateMode("flipcard")} type="button">
                      <span className="mode-choice-icon">
                        <BookOpen aria-hidden="true" size={24} />
                      </span>
                      <span>
                        <strong>Flipcard</strong>
                        <small>Kartu tanya jawab</small>
                      </span>
                      <ArrowRight aria-hidden="true" size={20} />
                    </button>
                    <button onClick={() => activateMode("test")} type="button">
                      <span className="mode-choice-icon">
                        <ClipboardCheck aria-hidden="true" size={24} />
                      </span>
                      <span>
                        <strong>Tes</strong>
                        <small>Latihan pilihan ganda</small>
                      </span>
                      <ArrowRight aria-hidden="true" size={20} />
                    </button>
                  </div>
                </>
              ) : mode === "flipcard" ? (
                <button className="mode-swap-button" onClick={() => activateMode("test")} type="button">
                  <ClipboardCheck aria-hidden="true" size={20} />
                  <span>
                    <strong>Lanjut ke Tes</strong>
                    <small>{currentPackage.name}</small>
                  </span>
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              ) : (
                <button className="mode-swap-button" onClick={() => activateMode("flipcard")} type="button">
                  <BookOpen aria-hidden="true" size={20} />
                  <span>
                    <strong>Buka Flipcard</strong>
                    <small>{currentPackage.name}</small>
                  </span>
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              )}
            </section>
          ) : null}

          {mode === "home" ? (
            <section className="home-dashboard" aria-label="Beranda progres belajar">
              <div className="home-panel package-grid-panel">
                <div className="section-heading">
                  <div>
                    <p className="eyebrow">PBB-P2</p>
                    <h3>Pilih Paket Soal</h3>
                  </div>
                </div>
                <div className="package-grid">
                  {studyPackages.map((studyPackage) => {
                    const attempts = attemptStore[studyPackage.id] ?? [];
                    const bestScore = attempts.reduce((best, attempt) => Math.max(best, attempt.percentage), 0);
                    const isAttempted = attempts.length > 0;

                    return (
                      <button
                        aria-label={`Buka ${studyPackage.name}, ${studyPackage.questions.length} soal${isAttempted ? `, skor terbaik ${bestScore}%` : ""}`}
                        className={`package-grid-card ${isAttempted ? "is-attempted" : ""}`}
                        key={studyPackage.id}
                        onClick={() => {
                          selectPackage(studyPackage.id);
                          setMode("choice");
                        }}
                        type="button"
                      >
                        <span className="package-grid-icon">
                          <Layers3 aria-hidden="true" size={20} />
                        </span>
                        <span className="package-grid-info">
                          <strong>{studyPackage.name}</strong>
                          <small>{studyPackage.questions.length} soal</small>
                        </span>
                        {isAttempted ? (
                          <span className="package-grid-score">{bestScore}%</span>
                        ) : (
                          <ArrowRight aria-hidden="true" size={18} />
                        )}
                      </button>
                    );
                  })}
                </div>
                {anonymousFeedbackPanel}
              </div>
            </section>
          ) : !currentPackage || !currentQuestion || mode === "choice" ? null : mode === "flipcard" ? (
            <section className="study-surface" aria-label="Flipcard">
              <div className="study-header">
                <div>
                  <p className="eyebrow">Flipcard {cardIndex + 1} dari {currentPackage.questions.length}</p>
                  <h3>{currentQuestion.topic}</h3>
                </div>
                <div className="progress-track" aria-hidden="true">
                  <span style={{ width: `${((cardIndex + 1) / currentPackage.questions.length) * 100}%` }} />
                </div>
              </div>

              <button
                aria-label={isCardOpen ? "Tampilkan pertanyaan" : "Tampilkan jawaban"}
                aria-pressed={isCardOpen}
                className={`flipcard ${isCardOpen ? "is-open" : ""}`}
                onClick={() => setIsCardOpen((value) => !value)}
                type="button"
              >
                <span className="flipcard-inner">
                  <span aria-hidden={isCardOpen} className="flipcard-face flipcard-front">
                    <span className="card-kicker">Pertanyaan</span>
                    <span className="card-text">{currentQuestion.question}</span>
                  </span>
                  <span aria-hidden={!isCardOpen} className="flipcard-face flipcard-back">
                    <span className="card-kicker">Jawaban</span>
                    <span className="card-answer-content">
                      <span className="card-answer">{currentQuestion.answer}</span>
                      <span className="card-explanation">
                        {getExplanationParagraphs(currentQuestion.explanation).map((paragraph) => (
                          <span key={paragraph}>{paragraph}</span>
                        ))}
                      </span>
                    </span>
                  </span>
                </span>
              </button>

              <div className="action-row">
                <button disabled={cardIndex === 0} onClick={() => moveCard(-1)} type="button">
                  <ArrowLeft aria-hidden="true" size={18} />
                  Sebelumnya
                </button>
                <button onClick={() => setIsCardOpen((value) => !value)} type="button">
                  <RotateCcw aria-hidden="true" size={18} />
                  Balik kartu
                </button>
                <button
                  disabled={cardIndex === currentPackage.questions.length - 1}
                  onClick={() => moveCard(1)}
                  type="button"
                >
                  Berikutnya
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </div>
            </section>
          ) : (
            <section className="test-layout" aria-label="Tes">
              <div className="test-main">
                <div className="test-status">
                  <div>
                    <p className="eyebrow">Tes tetap urut</p>
                    <h3>{answeredCount}/{currentPackage.questions.length} dijawab</h3>
                  </div>
                  {submittedAttempt ? (
                    <div className="score-badge">
                      <BarChart3 aria-hidden="true" size={18} />
                      {submittedAttempt.score}/{submittedAttempt.total}
                    </div>
                  ) : null}
                </div>

                <section className="answer-map" aria-label="Status pengerjaan soal">
                  <div className="answer-map-summary">
                    <div>
                      <span>Total soal</span>
                      <strong>{currentPackage.questions.length}</strong>
                    </div>
                    <div>
                      <span>Sudah dijawab</span>
                      <strong>{answeredCount}</strong>
                    </div>
                    <div>
                      <span>Belum dijawab</span>
                      <strong>{currentPackage.questions.length - answeredCount}</strong>
                    </div>
                  </div>
                </section>

                <section className="answer-map-pins" aria-label="Nomor soal berdasarkan status jawaban">
                  <div className="answer-map-columns">
                    <div>
                      <p>Nomor sudah dijawab</p>
                      <div className="question-chips">
                        {answeredNumbers.length > 0 ? (
                          answeredNumbers.map((number) => (
                            <a
                              aria-label={`Ke soal ${number}, sudah dijawab`}
                              className="is-answered"
                              href={`#question-${currentPackage.questions[number - 1].id}`}
                              key={number}
                            >
                              {number}
                            </a>
                          ))
                        ) : (
                          <span className="chip-empty">Belum ada</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <p>Nomor belum dijawab</p>
                      <div className="question-chips">
                        {unansweredNumbers.map((number) => (
                          <a
                            aria-label={`Ke soal ${number}, belum dijawab`}
                            className="is-unanswered"
                            href={`#question-${currentPackage.questions[number - 1].id}`}
                            key={number}
                          >
                            {number}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <ol className="question-list">
                  {currentPackage.questions.map((question, questionIndex) => {
                    const selectedOptionIndex = answerMap.get(question.id) ?? null;
                    const isCorrect = selectedOptionIndex === question.correctOptionIndex;
                    const isWrong = submittedAttempt && selectedOptionIndex !== null && !isCorrect;
                    const isUnanswered = submittedAttempt && selectedOptionIndex === null;

                    return (
                      <li className="question-item" id={`question-${question.id}`} key={question.id}>
                        <div className="question-heading">
                          <span>{questionIndex + 1}</span>
                          <div>
                            <p>{question.topic}</p>
                            <h4>{question.question}</h4>
                          </div>
                        </div>

                        <div className="option-grid">
                          {question.options.map((option, optionIndex) => {
                            const isSelected = selectedOptionIndex === optionIndex;
                            const isAnswer = question.correctOptionIndex === optionIndex;
                            const optionState =
                              submittedAttempt && isAnswer
                                ? "is-correct"
                                : submittedAttempt && isSelected && !isAnswer
                                  ? "is-wrong"
                                  : isSelected
                                    ? "is-selected"
                                    : "";

                            return (
                              <button
                                className={`option-button ${optionState}`}
                                disabled={Boolean(submittedAttempt)}
                                key={option}
                                aria-pressed={isSelected}
                                onClick={() => selectAnswer(question.id, optionIndex)}
                                type="button"
                              >
                                <span>{optionLabels[optionIndex]}</span>
                                {option}
                              </button>
                            );
                          })}
                        </div>

                        {submittedAttempt ? (
                          <div className={`review-box ${isCorrect ? "is-correct" : "is-review"}`}>
                            {isCorrect ? <CheckCircle2 aria-hidden="true" size={18} /> : <XCircle aria-hidden="true" size={18} />}
                            <div>
                              <strong>
                                {isCorrect ? "Benar" : isWrong ? "Jawaban belum tepat" : isUnanswered ? "Tidak dijawab" : "Review"}
                              </strong>
                              <p>Jawaban benar: {question.answer}</p>
                              <div className="review-explanation">
                                {getExplanationParagraphs(question.explanation).map((paragraph) => (
                                  <p key={paragraph}>{paragraph}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ol>

                <div className="sticky-actions">
                  {submittedAttempt ? (
                    <button onClick={requestRetakeTest} type="button">
                      <RotateCcw aria-hidden="true" size={18} />
                      Kerjakan Ulang
                    </button>
                  ) : (
                    <button onClick={requestSubmitTest} type="button">
                      <ClipboardCheck aria-hidden="true" size={18} />
                      Submit Tes
                    </button>
                  )}
                </div>
              </div>

              <section className="attempt-panel" aria-label="Riwayat percobaan">
                <p className="panel-label">Riwayat</p>
                {packageAttempts.length === 0 ? (
                  <p className="empty-state">Belum ada percobaan.</p>
                ) : (
                  <ol className="attempt-list">
                    {packageAttempts.map((attempt, index) => (
                      <li key={attempt.id}>
                        <span>Percobaan {index + 1}</span>
                        <strong>{attempt.score}/{attempt.total}</strong>
                        <small>{attempt.percentage}%</small>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            </section>
          )}

          <footer className="site-footer" aria-label="Informasi situs">
            <p>Latihan Soal PBB-P2: Persiapkan diri untuk ujian dan asesmen Pajak Bumi dan Bangunan Perdesaan dan Perkotaan.</p>
            <div className="site-footer-links">
              <a href="https://github.com/Scyrptoeth/Latihan-Soal-PBB-P2" rel="noreferrer" target="_blank">
                <GitHubMark />
                GitHub
              </a>
              <a className="site-footer-whatsapp" href="https://wa.me/6282294116001" rel="noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" size={18} />
                <span>Saran & Kendala: 0822-9411-6001</span>
              </a>
              <a className="site-footer-email" href="mailto:dedekfidelis@gmail.com">
                <Mail aria-hidden="true" size={18} />
                <span>Email: dedekfidelis@gmail.com</span>
              </a>
            </div>
            <p className="site-footer-copy">&copy; 2026 Latihan Soal PBB-P2</p>
            <a className="back-to-top" href="#workspace" aria-label="Kembali ke atas">
              <ArrowUp aria-hidden="true" size={22} />
            </a>
          </footer>
        </section>
      </main>

      {confirmationDialog ? (
        <div className="dialog-backdrop">
          <section
            aria-describedby="confirmation-dialog-copy"
            aria-labelledby="confirmation-dialog-title"
            aria-modal="true"
            className="app-dialog"
            role="alertdialog"
          >
            <p className="dialog-kicker">Konfirmasi</p>
            <h3 id="confirmation-dialog-title">
              {confirmationDialog === "submit" ? "Yakin ingin submit tes?" : "Yakin ingin mengerjakan ulang?"}
            </h3>
            <p id="confirmation-dialog-copy">
              {confirmationDialog === "submit"
                ? `Jawaban pada ${currentPackage?.name ?? "tes ini"} akan dikunci dan hasil tes akan ditampilkan setelah konfirmasi.`
                : `Jawaban pada ${currentPackage?.name ?? "tes ini"} akan dikosongkan agar Anda bisa memulai dari awal.`}
            </p>
            <div className="dialog-actions">
              <button autoFocus className="dialog-secondary" onClick={() => setConfirmationDialog(null)} type="button">
                Batal
              </button>
              <button className="dialog-primary" onClick={confirmDialogAction} type="button">
                {confirmationDialog === "submit" ? "Ya, Submit Tes" : "Ya, Kerjakan Ulang"}
              </button>
            </div>
          </section>
        </div>
      ) : null}

      {pendingFeedbackAttempt ? (
        <div className="dialog-backdrop">
          <section
            aria-describedby="feedback-dialog-copy"
            aria-labelledby="feedback-dialog-title"
            aria-modal="true"
            className="app-dialog feedback-dialog"
            role="dialog"
          >
            <p className="dialog-kicker">Penilaian tes</p>
            <h3 id="feedback-dialog-title">Terima kasih sudah mengerjakan {currentPackage?.name ?? "tes ini"}</h3>
            <p id="feedback-dialog-copy">
              Terima kasih telah menggunakan website kami. Semoga lulus dan sukses dalam ujian PBB-P2. Jika berkenan, beri
              penilaian untuk pengalaman mengerjakan {currentPackage?.name ?? "tes ini"} agar kami bisa terus meningkatkan pelayanan.
            </p>
            <div className="rating-picker" aria-label="Beri penilaian 1 sampai 5 bintang">
              {ratingOptions.map((rating) => (
                <button
                  aria-label={`Beri ${rating} bintang`}
                  aria-pressed={feedbackRating === rating}
                  className={feedbackRating && rating <= feedbackRating ? "is-filled" : ""}
                  key={rating}
                  onClick={() => setFeedbackRating(rating)}
                  type="button"
                >
                  <Star aria-hidden="true" size={28} />
                </button>
              ))}
            </div>
            <div className="dialog-actions">
              <button className="dialog-secondary" onClick={() => finishFeedback()} type="button">
                Lewati dan Lihat Hasil
              </button>
              <button
                className="dialog-primary"
                disabled={!feedbackRating}
                onClick={() => (feedbackRating ? finishFeedback(feedbackRating) : undefined)}
                type="button"
              >
                Kirim Penilaian
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
