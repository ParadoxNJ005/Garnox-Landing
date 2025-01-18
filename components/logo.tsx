import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Logo() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check if the user prefers dark mode or light mode
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    setTheme(preferredTheme)

    // You can also listen to changes in the theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={theme === 'dark' ? '/logo.svg' : '/golo.svg'}
        alt="Sembreaker Logo"
        width={40}
        height={40}
      />
      <span className="text-2xl font-bold text-gray-900">Sembreaker</span>
    </div>
  )
}
