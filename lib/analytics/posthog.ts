import posthog from "posthog-js";

export const trackEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    posthog.capture(event, properties);
  }
};
