import posthog from "posthog-js";

export const trackEvent = (event: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    posthog.capture(event, properties);
  }
};

export const identifyUser = (id: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    posthog.identify(id);

    if (properties && Object.keys(properties).length > 0) {
      if (posthog.people && typeof posthog.people.set === "function") {
        posthog.people.set(properties);
      } else {
        posthog.capture("$identify", properties);
      }
    }
  }
};
