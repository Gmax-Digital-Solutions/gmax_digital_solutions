import { useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export const useStaggerAnimation = (itemCount: number, staggerDelay: number = 0.1) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      // Start container animation
      controls.start('visible')

      // Stagger individual items
      const timeouts: NodeJS.Timeout[] = []
      for (let i = 0; i < itemCount; i++) {
        const timeout = setTimeout(() => {
          controls.start(`item-${i}`)
        }, i * staggerDelay * 1000)
        timeouts.push(timeout)
      }

      return () => {
        timeouts.forEach(clearTimeout)
      }
    }
  }, [isInView, controls, itemCount, staggerDelay])

  const getItemVariants = (index: number) => ({
    hidden: { opacity: 0, y: 20 },
    [`item-${index}`]: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  })

  return {
    ref,
    controls,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    getItemVariants
  }
}