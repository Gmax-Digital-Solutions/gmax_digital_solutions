'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  scale?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const scaleInVariants: Variants = {
  hidden: (scale: number) => ({ opacity: 0, scale }),
  visible: { opacity: 1, scale: 1 }
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.6,
  scale = 0.95,
  className = '',
  once = true,
  amount = 0.3
}: ScaleInProps) => {
  return (
    <motion.div
      custom={scale}
      variants={scaleInVariants}
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