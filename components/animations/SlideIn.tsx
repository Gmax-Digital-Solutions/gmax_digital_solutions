'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const getSlideVariants = (direction: 'left' | 'right' | 'up' | 'down'): Variants => {
  const distance = 30
  const initialPosition = {
    left: { x: -distance, opacity: 0 },
    right: { x: distance, opacity: 0 },
    up: { y: -distance, opacity: 0 },
    down: { y: distance, opacity: 0 }
  }

  return {
    hidden: initialPosition[direction],
    visible: { x: 0, y: 0, opacity: 1 }
  }
}

export const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.3
}: SlideInProps) => {
  const variants = getSlideVariants(direction)

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