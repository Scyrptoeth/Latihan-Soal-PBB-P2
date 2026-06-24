import {
  isCentralRatingStorageConfigured,
  readCentralRatingStore,
  recordCentralPackageRating,
  recordCentralPackageSubmit
} from "@/lib/ratingAnalytics.server";

export const runtime = "nodejs";

type RatingEventBody = {
  action?: unknown;
  packageId?: unknown;
  rating?: unknown;
  score?: unknown;
  total?: unknown;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

function getAdminToken(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }

  return authHeader.slice("Bearer ".length).trim();
}

function isDeveloperAuthorized(request: Request) {
  const configuredToken = process.env.RATING_ADMIN_TOKEN;
  const requestToken = getAdminToken(request);

  return Boolean(configuredToken && requestToken && requestToken === configuredToken);
}

function getErrorStatus(error: unknown) {
  const message = error instanceof Error ? error.message : "";

  if (message === "unknown_package" || message === "invalid_rating") {
    return 400;
  }

  if (message === "central_rating_storage_not_configured") {
    return 503;
  }

  return 500;
}

export async function GET(request: Request) {
  if (!isCentralRatingStorageConfigured()) {
    return jsonResponse({ ok: false, error: "central_rating_storage_not_configured" }, 503);
  }

  if (!process.env.RATING_ADMIN_TOKEN) {
    return jsonResponse({ ok: false, error: "rating_admin_token_not_configured" }, 503);
  }

  if (!isDeveloperAuthorized(request)) {
    return jsonResponse({ ok: false, error: "unauthorized" }, 401);
  }

  try {
    const store = await readCentralRatingStore();

    return jsonResponse({ ok: true, store, source: "central" });
  } catch (error) {
    return jsonResponse({ ok: false, error: error instanceof Error ? error.message : "unknown_error" }, getErrorStatus(error));
  }
}

export async function POST(request: Request) {
  if (!isCentralRatingStorageConfigured()) {
    return jsonResponse({ ok: false, error: "central_rating_storage_not_configured" }, 503);
  }

  let body: RatingEventBody;

  try {
    body = (await request.json()) as RatingEventBody;
  } catch {
    return jsonResponse({ ok: false, error: "invalid_json" }, 400);
  }

  if (typeof body.packageId !== "string") {
    return jsonResponse({ ok: false, error: "invalid_package_id" }, 400);
  }

  try {
    if (body.action === "submit") {
      const result = await recordCentralPackageSubmit({
        packageId: body.packageId,
        score: typeof body.score === "number" ? body.score : undefined,
        total: typeof body.total === "number" ? body.total : undefined
      });

      return jsonResponse({ ok: true, source: "central", ...result });
    }

    if (body.action === "rating") {
      const result = await recordCentralPackageRating({
        packageId: body.packageId,
        rating: typeof body.rating === "number" ? body.rating : Number.NaN
      });

      return jsonResponse({ ok: true, source: "central", ...result });
    }

    return jsonResponse({ ok: false, error: "invalid_action" }, 400);
  } catch (error) {
    return jsonResponse({ ok: false, error: error instanceof Error ? error.message : "unknown_error" }, getErrorStatus(error));
  }
}
