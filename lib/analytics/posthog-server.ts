const POSTHOG_API_KEY =
  process.env.POSTHOG_API_KEY || process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST =
  process.env.POSTHOG_HOST ||
  process.env.NEXT_PUBLIC_POSTHOG_HOST ||
  "https://app.posthog.com";
const POSTHOG_CAPTURE_ENDPOINT = `${POSTHOG_HOST.replace(/\/+$/, "")}/capture/`;

const sendPosthog = async (payload: Record<string, any>) => {
  if (!POSTHOG_API_KEY) {
    console.warn(
      "PostHog API key is not configured. Skipping server-side analytics.",
    );
    return;
  }

  try {
    await fetch(POSTHOG_CAPTURE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ api_key: POSTHOG_API_KEY, ...payload }),
    });
  } catch (error) {
    console.error("Failed to send event to PostHog:", error);
  }
};

export const captureServerEvent = async (
  event: string,
  distinct_id: string,
  properties: Record<string, any> = {},
) => {
  return sendPosthog({
    event,
    distinct_id,
    properties,
  });
};

export const identifyServerUser = async (
  distinct_id: string,
  properties: Record<string, any> = {},
) => {
  return sendPosthog({
    event: "$identify",
    distinct_id,
    properties,
  });
};
