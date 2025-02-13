"use client";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || "null";
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    posthog.init(posthogKey, {
      api_host: posthogHost,
      person_profiles: "always",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
