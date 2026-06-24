import { DEVELOPER_RATING_ACCESS_STORAGE_KEY, parseRatingStore, type RatingStore } from "@/lib/ratings";

type RatingSyncResult =
  | { ok: true; source: "central" }
  | { ok: false; source: "local"; error: string };

async function postRatingEvent(body: Record<string, unknown>): Promise<RatingSyncResult> {
  try {
    const response = await fetch("/api/ratings", {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      return { ok: false, source: "local", error: payload?.error ?? `http_${response.status}` };
    }

    return { ok: true, source: "central" };
  } catch (error) {
    return { ok: false, source: "local", error: error instanceof Error ? error.message : "network_error" };
  }
}

export function syncPackageSubmit(packageId: string, score: number, total: number) {
  return postRatingEvent({
    action: "submit",
    packageId,
    score,
    total
  });
}

export function syncPackageRating(packageId: string, rating: number) {
  return postRatingEvent({
    action: "rating",
    packageId,
    rating
  });
}

export async function fetchCentralRatingStoreWithToken(token: string): Promise<
  | { ok: true; source: "central"; store: RatingStore }
  | { ok: false; source: "local"; error: string }
> {
  const normalizedToken = token.trim();

  if (!normalizedToken) {
    return { ok: false, source: "local", error: "missing_developer_token" };
  }

  try {
    const response = await fetch("/api/ratings", {
      headers: {
        Authorization: `Bearer ${normalizedToken}`
      }
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      return { ok: false, source: "local", error: payload?.error ?? `http_${response.status}` };
    }

    const payload = (await response.json()) as { store?: unknown };
    return { ok: true, source: "central", store: parseRatingStore(JSON.stringify(payload.store ?? {})) };
  } catch (error) {
    return { ok: false, source: "local", error: error instanceof Error ? error.message : "network_error" };
  }
}

export async function fetchCentralRatingStore(): Promise<
  | { ok: true; source: "central"; store: RatingStore }
  | { ok: false; source: "local"; error: string }
> {
  const token = window.localStorage.getItem(DEVELOPER_RATING_ACCESS_STORAGE_KEY);

  if (!token) {
    return { ok: false, source: "local", error: "missing_developer_token" };
  }

  return fetchCentralRatingStoreWithToken(token);
}
