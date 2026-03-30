'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxScrollProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const ParallaxScroll = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up'
}: ParallaxScrollProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const transformUp = useTransform(scrollYProgress, [0, 1], [0, -speed * 100])
  const transformDown = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const transformLeft = useTransform(scrollYProgress, [0, 1], [0, -speed * 100])
  const transformRight = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  const y = direction === 'up' ? transformUp : direction === 'down' ? transformDown : 0
  const x = direction === 'left' ? transformLeft : direction === 'right' ? transformRight : 0

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      className={className}
    >
      {children}
    </motion.div>
  )
}