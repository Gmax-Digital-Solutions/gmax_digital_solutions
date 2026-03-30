'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div
      className={`bg-surface-container-high rounded-lg shadow-sm border border-outline-variant/20 ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}