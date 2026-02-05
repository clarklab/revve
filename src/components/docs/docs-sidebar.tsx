'use client'

import { clsx } from 'clsx/lite'
import { useEffect, useRef, useState } from 'react'

export interface DocSection {
  id: string
  title: string
}

export function DocsSidebar({ sections, contentId }: { sections: DocSection[]; contentId?: string }) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id ?? '')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const sidebarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    )

    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (element) {
        sectionObserver.observe(element)
      }
    }

    return () => sectionObserver.disconnect()
  }, [sections])

  // Watch for when content area ends to hide sidebar before footer
  useEffect(() => {
    const content = document.getElementById(contentId ?? 'docs-content')
    if (!content) return

    const handleScroll = () => {
      const contentRect = content.getBoundingClientRect()
      const sidebarHeight = sidebarRef.current?.offsetHeight ?? 400
      const navbarHeight = 84 // --scroll-padding-top
      const buffer = 24 // margin from top

      // Hide sidebar when content bottom is above where sidebar would end
      const contentBottomVisible = contentRect.bottom > navbarHeight + buffer + sidebarHeight
      setIsVisible(contentBottomVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [contentId])

  const handleClick = (id: string) => {
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  const activeTitle = sections.find((s) => s.id === activeSection)?.title ?? sections[0]?.title

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        ref={sidebarRef}
        className={clsx(
          'fixed top-[calc(var(--scroll-padding-top)+1.5rem)] hidden w-56 overflow-y-auto rounded-xl border border-brand-200 bg-brand-50 px-3 py-4 shadow-sm transition-opacity duration-200 lg:block dark:border-brand-800 dark:bg-brand-900',
          'left-[max(1.5rem,calc(50%-38rem))]',
          isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        style={{ maxHeight: 'calc(100vh - var(--scroll-padding-top) - 3rem)' }}
      >
        <nav className="flex flex-col gap-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => handleClick(section.id)}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                activeSection === section.id
                  ? 'bg-brand-200 text-brand-950 dark:bg-white/10 dark:text-white'
                  : 'text-brand-600 hover:bg-brand-100 hover:text-brand-950 dark:text-brand-400 dark:hover:bg-white/5 dark:hover:text-white'
              )}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile Dropdown */}
      <div className="fixed left-0 right-0 top-[--scroll-padding-top] z-10 border-b border-brand-200 bg-brand-50 px-6 py-3 lg:hidden dark:border-brand-800 dark:bg-brand-950">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex w-full items-center justify-between rounded-lg border border-brand-200 bg-white px-4 py-2.5 text-sm font-medium text-brand-950 dark:border-brand-700 dark:bg-brand-900 dark:text-white"
        >
          <span>{activeTitle}</span>
          <svg
            className={clsx('size-4 transition-transform', mobileMenuOpen && 'rotate-180')}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {mobileMenuOpen && (
          <nav className="absolute left-0 right-0 top-full border-b border-brand-200 bg-white px-6 py-2 shadow-lg dark:border-brand-800 dark:bg-brand-900">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => handleClick(section.id)}
                className={clsx(
                  'block rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                  activeSection === section.id
                    ? 'bg-brand-200 text-brand-950 dark:bg-white/10 dark:text-white'
                    : 'text-brand-600 hover:bg-brand-100 hover:text-brand-950 dark:text-brand-400 dark:hover:bg-white/5 dark:hover:text-white'
                )}
              >
                {section.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </>
  )
}
