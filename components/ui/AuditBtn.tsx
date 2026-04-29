"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const RequestAuditButton = () => {
  return (
    <Link href="audit">
      <motion.button
        type="button"
        className="rounded-sm bg-secondary px-4 py-2 text-sm font-medium text-on-primary shadow-sm transition hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() =>
          trackEvent("audit_requested", {
            location: "navbar",
            label: "get ai audit",
          })
        }
      >
        Get AI Audit
      </motion.button>
    </Link>
  );
};

export default RequestAuditButton;
