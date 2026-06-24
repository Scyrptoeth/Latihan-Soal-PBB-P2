import { studyPackages } from "@/data/questionBank";
import { getCentralRedis, isCentralStorageConfigured } from "@/lib/centralStorage.server";
import type { PackageRatingStats, RatingBucket, RatingStore } from "@/lib/ratings";

type CentralSubmitInput = {
  packageId: string;
  score?: number;
  total?: number;
};

type CentralRatingInput = {
  packageId: string;
  rating: number;
};

const PACKAGE_SET_KEY = "latihan-soal-pbb-p2:ratings:packages";
const PACKAGE_HASH_PREFIX = "latihan-soal-pbb-p2:ratings:package:";
const EMPTY_BUCKETS: RatingBucket = [0, 0, 0, 0, 0];

function packageKey(packageId: string) {
  return `${PACKAGE_HASH_PREFIX}${packageId}`;
}

function toNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsedValue = Number(value);
    return Number.isFinite(parsedValue) ? parsedValue : 0;
  }

  return 0;
}

function normalizeStats(packageId: string, rawStats: Record<string, unknown>): PackageRatingStats | null {
  const packageName = typeof rawStats.packageName === "string" ? rawStats.packageName : "";

  if (!packageName) {
    return null;
  }

  return {
    packageId,
    packageName,
    categoryId: typeof rawStats.categoryId === "string" ? rawStats.categoryId : "pbb-p2",
    submitCount: toNumber(rawStats.submitCount),
    scoreCount: toNumber(rawStats.scoreCount),
    scoreSum: toNumber(rawStats.scoreSum),
    ratingCount: toNumber(rawStats.ratingCount),
    ratingSum: toNumber(rawStats.ratingSum),
    ratingBuckets: [1, 2, 3, 4, 5].map((rating) => toNumber(rawStats[`ratingBucket:${rating}`])) as RatingBucket,
    lastSubmittedAt: typeof rawStats.lastSubmittedAt === "string" ? rawStats.lastSubmittedAt : "",
    lastRatedAt: typeof rawStats.lastRatedAt === "string" ? rawStats.lastRatedAt : undefined
  };
}

function getKnownPackage(packageId: string) {
  return studyPackages.find((studyPackage) => studyPackage.id === packageId) ?? null;
}

export function isCentralRatingStorageConfigured() {
  return isCentralStorageConfigured();
}

export async function recordCentralPackageSubmit(input: CentralSubmitInput) {
  const redis = getCentralRedis();
  if (!redis) {
    throw new Error("central_rating_storage_not_configured");
  }

  const studyPackage = getKnownPackage(input.packageId);
  if (!studyPackage) {
    throw new Error("unknown_package");
  }

  const submittedAt = new Date().toISOString();
  const score = input.score;
  const shouldRecordScore =
    typeof score === "number" &&
    Number.isFinite(score) &&
    score >= 0 &&
    typeof input.total === "number" &&
    input.total === studyPackage.questions.length &&
    score <= input.total;

  await redis.sadd(PACKAGE_SET_KEY, studyPackage.id);
  await redis.hset(packageKey(studyPackage.id), {
    packageId: studyPackage.id,
    packageName: studyPackage.name,
    categoryId: "pbb-p2",
    lastSubmittedAt: submittedAt
  });
  await redis.hincrby(packageKey(studyPackage.id), "submitCount", 1);

  if (shouldRecordScore) {
    await redis.hincrby(packageKey(studyPackage.id), "scoreCount", 1);
    await redis.hincrby(packageKey(studyPackage.id), "scoreSum", score);
  }

  return { packageId: studyPackage.id, submittedAt };
}

export async function recordCentralPackageRating(input: CentralRatingInput) {
  const redis = getCentralRedis();
  if (!redis) {
    throw new Error("central_rating_storage_not_configured");
  }

  const studyPackage = getKnownPackage(input.packageId);
  if (!studyPackage) {
    throw new Error("unknown_package");
  }

  if (!Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5) {
    throw new Error("invalid_rating");
  }

  const ratedAt = new Date().toISOString();

  await redis.sadd(PACKAGE_SET_KEY, studyPackage.id);
  await redis.hset(packageKey(studyPackage.id), {
    packageId: studyPackage.id,
    packageName: studyPackage.name,
    categoryId: "pbb-p2",
    lastRatedAt: ratedAt
  });
  await redis.hincrby(packageKey(studyPackage.id), "ratingCount", 1);
  await redis.hincrby(packageKey(studyPackage.id), "ratingSum", input.rating);
  await redis.hincrby(packageKey(studyPackage.id), `ratingBucket:${input.rating}`, 1);

  return { packageId: studyPackage.id, ratedAt };
}

export async function readCentralRatingStore(): Promise<RatingStore> {
  const redis = getCentralRedis();
  if (!redis) {
    throw new Error("central_rating_storage_not_configured");
  }

  const packageIds = await redis.smembers<string[]>(PACKAGE_SET_KEY);

  const entries = await Promise.all(
    packageIds.map(async (packageId) => {
      const rawStats = await redis.hgetall<Record<string, unknown>>(packageKey(packageId));
      const stats = rawStats ? normalizeStats(packageId, rawStats) : null;

      return stats ? ([packageId, stats] as const) : null;
    })
  );

  return entries.reduce<RatingStore>((store, entry) => {
    if (!entry) {
      return store;
    }

    return {
      ...store,
      [entry[0]]: {
        ...entry[1],
        ratingBuckets: entry[1].ratingBuckets ?? [...EMPTY_BUCKETS]
      }
    };
  }, {});
}
