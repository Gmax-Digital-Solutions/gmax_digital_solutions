'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface CardHoverProps {
  children: ReactNode
  className?: string
  delay?: number
}

const cardHoverVariants: Variants = {
  rest: { scale: 1, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' },
  hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }
};

export const CardHover = ({ children, className = '' }: CardHoverProps) => {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className={className}
    >
      {children}
    </motion.div>
  );
};

