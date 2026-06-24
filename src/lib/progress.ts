import type { TestAttempt } from "@/types/learning";

export type AttemptStore = Record<string, TestAttempt[]>;

export const ATTEMPT_STORAGE_KEY = "latihan-soal-pbb-p2:test-attempts:v1";
const ATTEMPT_STORE_EVENT = "latihan-soal-pbb-p2:attempt-store-updated";

export function parseAttemptStore(rawValue: string | null): AttemptStore {
  if (!rawValue) {
    return {};
  }

  try {
    const parsedValue = JSON.parse(rawValue) as AttemptStore;
    return parsedValue && typeof parsedValue === "object" ? parsedValue : {};
  } catch {
    return {};
  }
}

export function getAttemptStoreSnapshot() {
  if (typeof window === "undefined") {
    return "{}";
  }

  return window.localStorage.getItem(ATTEMPT_STORAGE_KEY) ?? "{}";
}

export function getServerAttemptStoreSnapshot() {
  return "{}";
}

export function subscribeToAttemptStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(ATTEMPT_STORE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(ATTEMPT_STORE_EVENT, onStoreChange);
  };
}

export function writeAttemptStore(store: AttemptStore) {
  window.localStorage.setItem(ATTEMPT_STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new Event(ATTEMPT_STORE_EVENT));
}

export function createAttemptId(packageId: string, attemptNumber: number) {
  return `${packageId}-${attemptNumber}-${Date.now()}`;
}
