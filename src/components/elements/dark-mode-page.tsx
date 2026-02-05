'use client'

import { useEffect } from 'react'

export function DarkModePage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('dark', 'dark-page')
    document.body.style.backgroundColor = 'oklch(50% 0.18 45)'
    return () => {
      document.documentElement.classList.remove('dark', 'dark-page')
      document.body.style.backgroundColor = ''
    }
  }, [])

  return <>{children}</>
}
