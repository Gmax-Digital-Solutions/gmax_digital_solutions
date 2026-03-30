import { useAnimation } from 'framer-motion'
import { useState } from 'react'

export const useAnimationOnHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const handleMouseEnter = () => {
    setIsHovered(true)
    controls.start('hover')
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    controls.start('idle')
  }

  return {
    controls,
    isHovered,
    hoverProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }
  }
}