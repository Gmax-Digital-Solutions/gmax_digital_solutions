"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  // Scroll-triggered mode (original behaviour)
  once?: boolean;
  amount?: number | "some" | "all";
  // Controlled mode — pass this to drive mount/unmount animations
  isVisible?: boolean;
}

const getSlideVariants = (
  direction: "left" | "right" | "up" | "down",
): Variants => {
  const distance = 30;
  const initialPosition = {
    left: { x: -distance, opacity: 0 },
    right: { x: distance, opacity: 0 },
    up: { y: -distance, opacity: 0 },
    down: { y: distance, opacity: 0 },
  };

  return {
    hidden: initialPosition[direction],
    visible: { x: 0, y: 0, opacity: 1 },
    exit: initialPosition[direction], // mirrors hidden — slides back out the same way it came in
  };
};

export const SlideIn = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.3,
  isVisible,
}: SlideInProps) => {
  const variants = getSlideVariants(direction);

  // ── Controlled mode (menu open/close, modals, drawers) ──────────────────
  // When isVisible is passed, AnimatePresence handles mount/unmount
  // and animate drives the active state instead of whileInView
  if (isVisible !== undefined) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // ── Scroll-triggered mode (original behaviour, unchanged) ───────────────
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
