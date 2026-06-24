import type { StudyPackage } from "@/types/learning";

export type RatingBucket = [number, number, number, number, number];

export type PackageRatingStats = {
  packageId: string;
  packageName: string;
  categoryId: string;
  submitCount: number;
  scoreCount: number;
  scoreSum: number;
  ratingCount: number;
  ratingSum: number;
  ratingBuckets: RatingBucket;
  lastSubmittedAt: string;
  lastRatedAt?: string;
};

export type RatingStore = Record<string, PackageRatingStats>;

export const RATING_STORAGE_KEY = "latihan-soal-pbb-p2:package-ratings:v1";
export const DEVELOPER_RATING_ACCESS_STORAGE_KEY = "latihan-soal-pbb-p2:developer-rating-access-key";

const RATING_STORE_EVENT = "latihan-soal-pbb-p2:rating-store-updated";
const EMPTY_BUCKETS: RatingBucket = [0, 0, 0, 0, 0];

function createEmptyBuckets(): RatingBucket {
  return [...EMPTY_BUCKETS];
}

function normalizeBuckets(value: unknown): RatingBucket {
  if (!Array.isArray(value)) {
    return createEmptyBuckets();
  }

  return [0, 1, 2, 3, 4].map((index) => {
    const bucketValue = value[index];
    return typeof bucketValue === "number" && Number.isFinite(bucketValue) && bucketValue > 0 ? bucketValue : 0;
  }) as RatingBucket;
}

function createPackageStats(studyPackage: StudyPackage, submittedAt: string): PackageRatingStats {
  return {
    packageId: studyPackage.id,
    packageName: studyPackage.name,
    categoryId: "pbb-p2",
    submitCount: 0,
    scoreCount: 0,
    scoreSum: 0,
    ratingCount: 0,
    ratingSum: 0,
    ratingBuckets: createEmptyBuckets(),
    lastSubmittedAt: submittedAt
  };
}

function normalizeStats(value: unknown, fallbackPackageId: string): PackageRatingStats | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const rawStats = value as Partial<PackageRatingStats>;

  if (typeof rawStats.packageName !== "string") {
    return null;
  }

  return {
    packageId: typeof rawStats.packageId === "string" ? rawStats.packageId : fallbackPackageId,
    packageName: rawStats.packageName,
    categoryId: typeof rawStats.categoryId === "string" ? rawStats.categoryId : "pbb-p2",
    submitCount: typeof rawStats.submitCount === "number" && rawStats.submitCount > 0 ? rawStats.submitCount : 0,
    scoreCount: typeof rawStats.scoreCount === "number" && rawStats.scoreCount > 0 ? rawStats.scoreCount : 0,
    scoreSum: typeof rawStats.scoreSum === "number" && rawStats.scoreSum > 0 ? rawStats.scoreSum : 0,
    ratingCount: typeof rawStats.ratingCount === "number" && rawStats.ratingCount > 0 ? rawStats.ratingCount : 0,
    ratingSum: typeof rawStats.ratingSum === "number" && rawStats.ratingSum > 0 ? rawStats.ratingSum : 0,
    ratingBuckets: normalizeBuckets(rawStats.ratingBuckets),
    lastSubmittedAt: typeof rawStats.lastSubmittedAt === "string" ? rawStats.lastSubmittedAt : "",
    lastRatedAt: typeof rawStats.lastRatedAt === "string" ? rawStats.lastRatedAt : undefined
  };
}

export function parseRatingStore(rawValue: string | null): RatingStore {
  if (!rawValue) {
    return {};
  }

  try {
    const parsedValue = JSON.parse(rawValue) as Record<string, unknown>;
    if (!parsedValue || typeof parsedValue !== "object") {
      return {};
    }

    return Object.entries(parsedValue).reduce<RatingStore>((store, [packageId, value]) => {
      const stats = normalizeStats(value, packageId);
      if (!stats) {
        return store;
      }

      return {
        ...store,
        [packageId]: stats
      };
    }, {});
  } catch {
    return {};
  }
}

export function getRatingStoreSnapshot() {
  if (typeof window === "undefined") {
    return "{}";
  }

  return window.localStorage.getItem(RATING_STORAGE_KEY) ?? "{}";
}

export function getServerRatingStoreSnapshot() {
  return "{}";
}

export function subscribeToRatingStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(RATING_STORE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(RATING_STORE_EVENT, onStoreChange);
  };
}

export function writeRatingStore(store: RatingStore) {
  window.localStorage.setItem(RATING_STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(RATING_STORE_EVENT));
}

export function recordPackageSubmit(
  store: RatingStore,
  studyPackage: StudyPackage,
  submittedAt: string,
  score?: number
): RatingStore {
  const currentStats = store[studyPackage.id] ?? createPackageStats(studyPackage, submittedAt);
  const shouldRecordScore = typeof score === "number" && Number.isFinite(score) && score >= 0;

  return {
    ...store,
    [studyPackage.id]: {
      ...currentStats,
      packageId: studyPackage.id,
      packageName: studyPackage.name,
      categoryId: "pbb-p2",
      submitCount: currentStats.submitCount + 1,
      scoreCount: shouldRecordScore ? currentStats.scoreCount + 1 : currentStats.scoreCount,
      scoreSum: shouldRecordScore ? currentStats.scoreSum + score : currentStats.scoreSum,
      lastSubmittedAt: submittedAt
    }
  };
}

export function recordPackageRating(
  store: RatingStore,
  studyPackage: StudyPackage,
  rating: number,
  ratedAt: string
): RatingStore {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return store;
  }

  const currentStats = store[studyPackage.id] ?? createPackageStats(studyPackage, ratedAt);
  const nextBuckets = [...currentStats.ratingBuckets] as RatingBucket;
  nextBuckets[rating - 1] += 1;

  return {
    ...store,
    [studyPackage.id]: {
      ...currentStats,
      packageId: studyPackage.id,
      packageName: studyPackage.name,
      categoryId: "pbb-p2",
      ratingCount: currentStats.ratingCount + 1,
      ratingSum: currentStats.ratingSum + rating,
      ratingBuckets: nextBuckets,
      lastRatedAt: ratedAt
    }
  };
}

export function getAverageRating(stats: PackageRatingStats) {
  return stats.ratingCount > 0 ? stats.ratingSum / stats.ratingCount : null;
}

export function getAverageScore(stats: PackageRatingStats) {
  return stats.scoreCount > 0 ? stats.scoreSum / stats.scoreCount : null;
}
