'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface FlipInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'horizontal' | 'vertical'
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const getFlipVariants = (direction: 'horizontal' | 'vertical'): Variants => {
  if (direction === 'horizontal') {
    return {
      hidden: { opacity: 0, rotateY: -90 },
      visible: { opacity: 1, rotateY: 0 }
    }
  }
  return {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 }
  }
}

export const FlipIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'horizontal',
  className = '',
  once = true,
  amount = 0.3
}: FlipInProps) => {
  const variants = getFlipVariants(direction)

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}