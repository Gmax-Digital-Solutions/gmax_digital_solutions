"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const SubscribeBtn = () => {
  return (
    <Link
      href="#newsletter"
      className="rounded-lg text-on-surface px-8 py-4 font-bold transition-transform hover:-translate-y-1 active:scale-95 outline-1  hover:bg-on-surface/60 hover:text-on-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus"
      onClick={() =>
        trackEvent("subscribe_button", {
          location: "homepage_hero",
          label: "subscribe_btn",
        })
      }
    >
      Subscribe For Growth Tips
    </Link>
  );
};

export default SubscribeBtn;
