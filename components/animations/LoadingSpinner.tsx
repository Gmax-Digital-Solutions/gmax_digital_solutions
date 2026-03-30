'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}

export const LoadingSpinner = ({
  size = 'md',
  color = 'currentColor',
  className = ''
}: LoadingSpinnerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-transparent rounded-full`}
        style={{ borderTopColor: color }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
}

// Pulsing dots loading animation
export const LoadingDots = ({
  size = 'md',
  color = 'currentColor',
  className = ''
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  const dotVariants = {
    start: { scale: 1, opacity: 1 },
    end: { scale: 0.8, opacity: 0.5 }
  }

  const containerVariants = {
    start: {},
    end: {}
  }

  return (
    <motion.div
      className={`flex space-x-1 ${className}`}
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`rounded-full ${sizeClasses[size]}`}
          style={{ backgroundColor: color }}
          variants={dotVariants}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: index * 0.2
          }}
        />
      ))}
    </motion.div>
  )
}