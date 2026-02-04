'use client'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { TypewriterOnce } from './typewriter'

export function Eyebrow({ children, className, ...props }: ComponentProps<'div'>) {
  const text = typeof children === 'string' ? children : null

  return (
    <div className={clsx('font-mono text-xs font-bold uppercase tracking-wide text-taupe-700 dark:text-taupe-400', className)} {...props}>
      {text ? (
        <TypewriterOnce text={text} typingSpeed={35} />
      ) : (
        children
      )}
    </div>
  )
}
