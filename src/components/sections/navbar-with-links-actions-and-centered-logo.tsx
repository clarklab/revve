'use client'

import Link from 'next/link'

import { ElDialog, ElDialogPanel, ElDisclosure } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from 'react'

import { ChevronDownIcon } from '../icons/chevron-down-icon'

export function NavbarLink({
  children,
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center justify-between gap-2 text-3xl/10 font-medium text-taupe-950 lg:text-sm/7 dark:text-white',
        className,
      )}
      {...props}
    >
      {children}
      <span className="inline-flex p-1.5 opacity-0 group-hover:opacity-100 lg:hidden" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </Link>
  )
}

export function NavbarLogo({ className, href, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return <Link href={href} {...props} className={clsx('inline-flex items-stretch', className)} />
}

export function NavbarDropdown({ label, children }: { label: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative max-lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group inline-flex items-center gap-1 text-sm/7 font-medium text-taupe-950 dark:text-white"
      >
        {label}
        <ChevronDownIcon className={clsx('size-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-3 min-w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-taupe-950/5 dark:bg-taupe-900 dark:ring-white/10">
          <div className="flex flex-col">{children}</div>
        </div>
      )}
    </div>
  )
}

export function NavbarDropdownMobile({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        command="--toggle"
        commandfor={`mobile-menu-${id}`}
        className="flex w-full items-center justify-between text-3xl/10 font-medium text-taupe-950 dark:text-white"
      >
        {label}
        <ChevronDownIcon className="size-6 transition-transform in-aria-expanded:rotate-180" />
      </button>
      <ElDisclosure id={`mobile-menu-${id}`} hidden className="mt-4 flex flex-col gap-2 pl-4">
        {children}
      </ElDisclosure>
    </div>
  )
}

export function NavbarDropdownItem({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description?: string
}) {
  return (
    <Link href={href} className="group block rounded-lg px-3 py-2.5 hover:bg-taupe-100 dark:hover:bg-white/5">
      <div className="font-medium text-taupe-950 group-hover:text-taupe-600 dark:text-white dark:group-hover:text-taupe-300">
        {title}
      </div>
      {description && <div className="mt-0.5 text-sm text-taupe-500 dark:text-taupe-400">{description}</div>}
    </Link>
  )
}

export function NavbarDropdownItemMobile({
  href,
  title,
  description,
}: {
  href: string
  title: string
  description?: string
}) {
  return (
    <Link
      href={href}
      className="group block rounded-lg py-2 text-lg font-medium text-taupe-700 hover:text-taupe-950 dark:text-taupe-400 dark:hover:text-white"
    >
      {title}
      {description && <span className="ml-2 text-sm text-taupe-500 dark:text-taupe-500">— {description}</span>}
    </Link>
  )
}

export function NavbarWithLinksActionsAndCenteredLogo({
  links,
  mobileLinks,
  logo,
  actions,
  className,
  ...props
}: {
  links: ReactNode
  mobileLinks?: ReactNode
  logo: ReactNode
  actions: ReactNode
} & ComponentProps<'header'>) {
  return (
    <header className={clsx('sticky top-0 z-10 bg-taupe-100 dark:bg-taupe-950', className)} {...props}>
      <style>{`:root { --scroll-padding-top: 5.25rem }`}</style>
      <nav>
        <div className="mx-auto flex h-(--scroll-padding-top) max-w-7xl items-center gap-4 px-6 lg:px-10">
          <div className="flex items-center">{logo}</div>
          <div className="flex flex-1 translate-y-0.5 gap-6 pl-4 max-lg:hidden">{links}</div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex shrink-0 items-center gap-5">{actions}</div>

            <button
              command="show-modal"
              commandfor="mobile-menu"
              aria-label="Toggle menu"
              className="inline-flex rounded-full p-1.5 text-taupe-950 hover:bg-taupe-950/10 lg:hidden dark:text-white dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <ElDialog className="lg:hidden">
          <dialog id="mobile-menu" className="backdrop:bg-transparent">
            <ElDialogPanel className="fixed inset-0 bg-taupe-100 px-6 py-6 lg:px-10 dark:bg-taupe-950">
              <div className="flex justify-end">
                <button
                  command="close"
                  commandfor="mobile-menu"
                  aria-label="Toggle menu"
                  className="inline-flex rounded-full p-1.5 text-taupe-950 hover:bg-taupe-950/10 dark:text-white dark:hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-6">{mobileLinks || links}</div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>
      </nav>
    </header>
  )
}
