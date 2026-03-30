'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.3
}: FadeUpProps) => {
  return (
    <motion.div
      variants={fadeUpVariants}
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