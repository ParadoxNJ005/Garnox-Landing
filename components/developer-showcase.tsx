'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const developers = [
  { name: 'Gaurav Chettri', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/gaurav-chhetri-a9a254250/' },
  { name: 'Grish Gautam', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/grish-gautam-2613b82a7/' },
  { name: 'Naitik Jain', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/naitik-jain-b48316290/' },
  { name: 'Aarav Kashyap', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/aarav-kashyap-a061b72a4/' },
  { name: 'Vansh Dhawan', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/vanshdvn2505/' },
  { name: 'Gaurav Chettri', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/gaurav-chhetri-a9a254250/' },
  { name: 'Grish Gautam', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/grish-gautam-2613b82a7/' },
  { name: 'Naitik Jain', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/naitik-jain-b48316290/' },
  { name: 'Aarav Kashyap', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/aarav-kashyap-a061b72a4/' },
  { name: 'Vansh Dhawan', image: '/d1.jpg', linkedin: 'https://www.linkedin.com/in/vanshdvn2505/' },
  
]

export function DeveloperShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth
      const animationDuration = scrollWidth / 50

      const animate = () => {
        if (scrollContainer.scrollLeft >= scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
        requestAnimationFrame(animate)
      }

      const animationId = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden bg-white bg-opacity-50 backdrop-blur-sm py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-800">Meet Our Team</h2>
      <motion.div 
        ref={scrollRef}
        className="flex overflow-x-hidden"
        style={{ width: '200%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[...developers, ...developers].map((dev, index) => (
          <motion.div 
            key={index} 
            className="flex-none w-48 mx-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={dev.linkedin} target="_blank" rel="noopener noreferrer">
              <motion.div 
                className="bg-white rounded-full overflow-hidden shadow-lg mb-4 transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={dev.image || "/placeholder.svg"}
                  alt={dev.name}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </motion.div>
            </Link>
            <p className="text-center font-semibold text-blue-800">{dev.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

