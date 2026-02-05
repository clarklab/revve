'use client'

import { useEffect } from 'react'

export function DarkModePage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add('dark', 'dark-page')
    document.body.style.backgroundColor = '#2a1810'
    return () => {
      document.documentElement.classList.remove('dark', 'dark-page')
      document.body.style.backgroundColor = ''
    }
  }, [])

  return <>{children}</>
}
