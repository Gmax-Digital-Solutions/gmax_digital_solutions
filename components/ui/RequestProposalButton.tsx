"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics/posthog";

const RequestProposalButton = () => {
  return (
    <Link href="contact#proposal">
      <motion.button
        type="button"
        className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-on-primary shadow-sm transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() =>
          trackEvent("proposal_requested", {
            location: "navbar",
            label: "request proposal",
          })
        }
      >
        Request Proposal
      </motion.button>
    </Link>
  );
};

export default RequestProposalButton;
