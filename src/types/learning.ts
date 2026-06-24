export type CorrectOptionIndex = 0 | 1 | 2 | 3;

export type SourceRef = {
  title: string;
  url: string;
  note: string;
};

export type LearningQuestion = {
  id: string;
  topic: string;
  question: string;
  answer: string;
  options: [string, string, string, string];
  correctOptionIndex: CorrectOptionIndex;
  explanation: string;
  source: SourceRef;
};

export type StudyPackage = {
  id: string;
  name: string;
  label: string;
  questions: LearningQuestion[];
};

export type StoredAnswer = {
  questionId: string;
  selectedOptionIndex: number | null;
};

export type TestAttempt = {
  id: string;
  packageId: string;
  score: number;
  total: number;
  percentage: number;
  submittedAt: string;
  answers: StoredAnswer[];
};
