import { Variants } from 'framer-motion'

// Common easing functions
export const easing = {
  smooth: "easeInOut",
  bounce: "easeOut",
  elastic: "easeInOut"
}

// Fade animations
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// Slide animations
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 }
}

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

// Scale animations
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

export const scaleOutVariants: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 }
}

// Rotate animations
export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.8 },
  visible: { opacity: 1, rotate: 0, scale: 1 }
}

// Bounce animations
export const bounceInVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.3 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
}

// Flip animations
export const flipHorizontalVariants: Variants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 }
}

export const flipVerticalVariants: Variants = {
  hidden: { opacity: 0, rotateX: -90 },
  visible: { opacity: 1, rotateX: 0 }
}

// Stagger animations
export const staggerContainerVariants = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay
    }
  }
})

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

// Page transition variants
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

// Hover animations
export const hoverScaleVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.05 }
}

export const hoverLiftVariants: Variants = {
  idle: { y: 0 },
  hover: { y: -5 }
}

// Loading animations
export const pulseVariants: Variants = {
  idle: { scale: 1, opacity: 1 },
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity
    }
  }
}

// Common transition configs
export const transitionConfig = {
  smooth: {
    duration: 0.6,
    ease: easing.smooth
  },
  bounce: {
    type: "spring",
    damping: 12,
    stiffness: 100
  },
  fast: {
    duration: 0.3,
    ease: easing.smooth
  },
  slow: {
    duration: 1.2,
    ease: easing.smooth
  }
}