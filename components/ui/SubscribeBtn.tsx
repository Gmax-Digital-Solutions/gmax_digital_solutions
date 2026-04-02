"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SubscribeBtn = () => {
  return (
    <Link href="#newsletter">
      <motion.button
        type="button"
        className="rounded-lg text-on-surface px-4 py-2 text-sm font-medium outline-1 transition hover:bg-on-surface/60 hover:text-on-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-focus"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Subscribe For Growth Tips
      </motion.button>
    </Link>
  );
};

export default SubscribeBtn;
