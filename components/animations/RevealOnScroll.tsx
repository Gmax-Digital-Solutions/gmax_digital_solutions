'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  distance?: number
  className?: string
  once?: boolean
  threshold?: number
}

export const RevealOnScroll = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className = '',
  once = true,
  threshold = 0.1
}: RevealOnScrollProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  const getInitialVariant = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance }
      case 'down':
        return { opacity: 0, y: -distance }
      case 'left':
        return { opacity: 0, x: distance }
      case 'right':
        return { opacity: 0, x: -distance }
      case 'fade':
        return { opacity: 0 }
      default:
        return { opacity: 0, y: distance }
    }
  }

  const getVisibleVariant = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      case 'fade':
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: getInitialVariant(),
        visible: getVisibleVariant()
      }}
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