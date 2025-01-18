'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const screenshots = [
  { src: '/a.png', alt: 'Login Screen' },
  { src: '/a.png', alt: 'Profile Selection' },
  { src: '/a.png', alt: 'Materials View' },
  { src: '/a.png', alt: 'Calendar' },
]

export function AppScreenshots() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    const scroll = async () => {
      await controls.start({ x: -(scrollWidth - clientWidth), transition: { duration: 20, ease: "linear" } })
      await controls.start({ x: 0, transition: { duration: 0 } })
      scroll()
    }

    scroll()

    return () => controls.stop()
  }, [controls])

  return (
    <div className="overflow-hidden">
      <motion.div 
        ref={scrollRef}
        className="flex space-x-4"
        animate={controls}
        style={{ width: `${screenshots.length * 320}px` }}
      >
        {screenshots.map((screenshot, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={screenshot.src || "/placeholder.svg"}
              alt={screenshot.alt}
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

