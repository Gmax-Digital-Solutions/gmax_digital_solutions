'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface BounceInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const bounceInVariants: Variants = {
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

export const BounceIn = ({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  once = true,
  amount = 0.3
}: BounceInProps) => {
  return (
    <motion.div
      variants={bounceInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}