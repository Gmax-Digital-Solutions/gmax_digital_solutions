'use client'

import React, { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  className?: string
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  const [squares, setSquares] = useState<Array<{ id: number; delay: number }>>([])

  useEffect(() => {
    const numSquares = 20
    const newSquares = Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      delay: Math.random() * 3,
    }))
    setSquares(newSquares)
  }, [])

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {squares.map((square) => (
        <div
          key={square.id}
          className="absolute w-16 h-16 bg-primary/5 rounded-lg animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${square.delay}s`,
            animationDuration: '3s',
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground