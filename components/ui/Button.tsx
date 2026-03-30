'use client'

import { motion } from 'framer-motion'
import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'rounded-lg px-4 py-2 text-sm font-medium shadow-sm transition focus:outline-none focus-visible:ring-2'
  
  const variantClasses = {
    primary: 'bg-primary text-on-primary hover:bg-primary/90 focus-visible:ring-primary-focus',
    secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90 focus-visible:ring-secondary-focus',
    outline: 'border border-outline bg-transparent text-on-surface hover:bg-surface-variant focus-visible:ring-outline'
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}