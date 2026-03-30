'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  once?: boolean
  amount?: number | "some" | "all"
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
  once = true,
  amount = 0.3
}: StaggerContainerProps) => {
  const customContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  return (
    <motion.div
      variants={customContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const StaggerItem = ({
  children,
  className = ''
}: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}