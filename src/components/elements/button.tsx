import Link from 'next/link'

import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

const sizes = {
  md: 'px-3 py-1',
  lg: 'px-4 py-2',
}

export function Button({
  size = 'md',
  type = 'button',
  color = 'dark/light',
  className,
  ...props
}: {
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light'
} & ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded text-sm/7 font-medium',
        color === 'dark/light' &&
          'bg-brand-600 text-white hover:bg-brand-700 dark:bg-white dark:text-brand-900 dark:hover:bg-brand-50',
        color === 'light' && 'bg-white text-brand-900 hover:bg-brand-50',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function ButtonLink({
  size = 'md',
  color = 'dark/light',
  className,
  href,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light'
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded text-sm/7 font-medium',
        color === 'dark/light' &&
          'bg-brand-600 text-white hover:bg-brand-700 dark:bg-white dark:text-brand-900 dark:hover:bg-brand-50',
        color === 'light' && 'bg-white text-brand-900 hover:bg-brand-50',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function SoftButton({
  size = 'md',
  type = 'button',
  className,
  ...props
}: {
  size?: keyof typeof sizes
} & ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded bg-brand-600/10 text-sm/7 font-medium text-brand-700 hover:bg-brand-600/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function SoftButtonLink({
  size = 'md',
  href,
  className,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-1 rounded bg-brand-600/10 text-sm/7 font-medium text-brand-700 hover:bg-brand-600/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function PlainButton({
  size = 'md',
  color = 'dark/light',
  type = 'button',
  className,
  ...props
}: {
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light'
} & ComponentProps<'button'>) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded text-sm/7 font-medium',
        color === 'dark/light' && 'text-brand-700 hover:bg-brand-600/10 dark:text-white dark:hover:bg-white/10',
        color === 'light' && 'text-white hover:bg-white/15 dark:hover:bg-white/10',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}

export function PlainButtonLink({
  size = 'md',
  color = 'dark/light',
  href,
  className,
  ...props
}: {
  href: string
  size?: keyof typeof sizes
  color?: 'dark/light' | 'light'
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded text-sm/7 font-medium',
        color === 'dark/light' && 'text-brand-700 hover:bg-brand-600/10 dark:text-white dark:hover:bg-white/10',
        color === 'light' && 'text-white hover:bg-white/15 dark:hover:bg-white/10',
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
