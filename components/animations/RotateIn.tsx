'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface RotateInProps {
  children: ReactNode
  delay?: number
  duration?: number
  degrees?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const rotateInVariants: Variants = {
  hidden: (degrees: number) => ({
    opacity: 0,
    rotate: degrees,
    scale: 0.8
  }),
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1
  }
}

export const RotateIn = ({
  children,
  delay = 0,
  duration = 0.6,
  degrees = -10,
  className = '',
  once = true,
  amount = 0.3
}: RotateInProps) => {
  return (
    <motion.div
      custom={degrees}
      variants={rotateInVariants}
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