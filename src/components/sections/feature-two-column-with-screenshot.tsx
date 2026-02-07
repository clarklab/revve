'use client'

import Image from 'next/image'
import { useRef, useState, useEffect, type ComponentProps } from 'react'
import { clsx } from 'clsx/lite'
import { motion } from 'framer-motion'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'

// ---------------------------------------------------------------------------
// Icon components
// ---------------------------------------------------------------------------

function OmnichannelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} aria-hidden="true" className="mt-1 size-5 flex-none text-brand-600 dark:text-brand-400">
      <path d="M1.40253 4.96499L3.93003 2.43749C3.96753 2.39999 4.03503 2.39999 4.07253 2.43749L6.60003 4.96499" />
      <path d="M16.005 17.6025C17.3305 17.6025 18.405 16.528 18.405 15.2025C18.405 13.877 17.3305 12.8025 16.005 12.8025C14.6796 12.8025 13.605 13.877 13.605 15.2025C13.605 16.528 14.6796 17.6025 16.005 17.6025Z" />
      <path d="M11.205 22.4025V20.5275C11.205 20.235 11.4375 20.0025 11.73 20.0025H20.28C20.5725 20.0025 20.805 20.235 20.805 20.5275V22.4025" />
      <path d="M16.005 7.2075C17.3305 7.2075 18.405 6.13298 18.405 4.8075C18.405 3.48202 17.3305 2.4075 16.005 2.4075C14.6796 2.4075 13.605 3.48202 13.605 4.8075C13.605 6.13298 14.6796 7.2075 16.005 7.2075Z" />
      <path d="M11.205 12V10.125C11.205 9.83251 11.4375 9.60001 11.73 9.60001H20.28C20.5725 9.60001 20.805 9.83251 20.805 10.125V12" />
      <path d="M4.005 2.4075V12.8025H8.00251V22.4025" />
    </svg>
  )
}

function ContactCenterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} aria-hidden="true" className="mt-1 size-5 flex-none text-brand-600 dark:text-brand-400">
      <path d="M12.015 20.7975C14.4423 20.7975 16.41 18.8298 16.41 16.4025C16.41 13.9752 14.4423 12.0075 12.015 12.0075C9.5877 12.0075 7.62 13.9752 7.62 16.4025C7.62 18.8298 9.5877 20.7975 12.015 20.7975Z" />
      <path d="M12 20.79C15.641 20.79 18.5925 17.8384 18.5925 14.1975C18.5925 10.5566 15.641 7.60501 12 7.60501C8.35909 7.60501 5.40753 10.5566 5.40753 14.1975C5.40753 17.8384 8.35909 20.79 12 20.79Z" />
      <path d="M12 20.7975C16.8587 20.7975 20.7975 16.8587 20.7975 12C20.7975 7.14129 16.8587 3.20251 12 3.20251C7.14129 3.20251 3.20251 7.14129 3.20251 12C3.20251 16.8587 7.14129 20.7975 12 20.7975Z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} aria-hidden="true" className="mt-1 size-5 flex-none text-brand-600 dark:text-brand-400">
      <path d="M6.40501 20.0025H3.20251V4.005H6.40501" />
      <path d="M17.6025 4.005H20.7975V20.0025H17.6025" />
      <path d="M6 12C7.20482 9.75724 9.44521 8.25 12.01 8.25C14.5748 8.25 16.7952 9.75724 18 12" strokeWidth={2} />
      <ellipse cx="12" cy="14" rx="3" ry="3" transform="rotate(-90 12 14)" strokeWidth={2} />
    </svg>
  )
}

function VoiceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} aria-hidden="true" className="mt-1 size-5 flex-none text-brand-600 dark:text-brand-400">
      <path d="M12 20.7975C16.8587 20.7975 20.7975 16.8587 20.7975 12C20.7975 7.14129 16.8587 3.20251 12 3.20251C7.14129 3.20251 3.20251 7.14129 3.20251 12C3.20251 16.8587 7.14129 20.7975 12 20.7975Z" />
      <path d="M16.4025 12C16.4025 14.43 14.43 16.4025 12 16.4025C9.57 16.4025 7.5975 14.43 7.5975 12" />
    </svg>
  )
}

function EscalationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeMiterlimit={10} aria-hidden="true" className="mt-1 size-5 flex-none text-brand-600 dark:text-brand-400">
      <path d="M20.7525 12H16.8" />
      <path d="M20.0025 4.8075L16.8 7.20749" />
      <path d="M20.0025 19.2L16.8 16.8" />
      <path d="M4.005 8.805H8.0025L13.1925 5.83501C13.3725 5.73001 13.59 5.86501 13.59 6.06751V17.9475C13.59 18.15 13.3725 18.2775 13.1925 18.18L8.0025 15.21H4.005" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Feature data
// ---------------------------------------------------------------------------

type Feature = {
  icon: () => React.JSX.Element
  title: string
  description: string
  video: string
  poster: string
}

const FEATURES: Feature[] = [
  {
    icon: OmnichannelIcon,
    title: 'Omnichannel Agents',
    description:
      'Revve keeps one conversation thread across voice, messaging (Zalo/WhatsApp/SMS), and handoffs, so every touchpoint continues with full history.',
    video: '/img/video/OnmichannelAnimation.mp4',
    poster: '/img/screenshots/preview-inbox.webp',
  },
  {
    icon: ContactCenterIcon,
    title: 'Unified Contact Center',
    description:
      'Revve puts both in one system \u2013 when AI hands to a team member, they get an interaction summary that helps them resolve the case 2\u00d7 faster with live assistance.',
    video: '/img/video/InboxAnimated.mp4',
    poster: '/img/screenshots/preview-inbox.webp',
  },
  {
    icon: ShieldIcon,
    title: 'Reliability & Guardrails Built-In',
    description:
      "Set boundaries on what the AI can and can\u2019t say. Monitor live conversations for quality assurance.",
    video: '/img/video/GuardrailsAnimated.mp4',
    poster: '/img/screenshots/preview-inbox.webp',
  },
  {
    icon: VoiceIcon,
    title: 'Native Sounding Voice',
    description:
      "Revve's proprietary voice model delivers sub-1-second response time with regional accents, tuned on banking conversations so calls feel natural.",
    video: '/img/video/VoiceAnimated.mp4',
    poster: '/img/screenshots/preview-inbox.webp',
  },
  {
    icon: EscalationIcon,
    title: 'Smart Escalation',
    description:
      "Revve's AI agents provide interaction summaries during hand-offs, enabling your team to help faster and more accurately.",
    video: '/img/video/EscalationAnimation.mp4',
    poster: '/img/screenshots/preview-inbox.webp',
  },
]

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FeatureScrollItem({
  feature,
  isActive,
  onClick,
}: {
  feature: Feature
  isActive: boolean
  onClick: () => void
}) {
  const Icon = feature.icon
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex w-full cursor-pointer gap-x-3 rounded-lg p-4 text-left text-base/7 transition-all duration-500',
        isActive
          ? 'bg-taupe-100 opacity-100 dark:bg-white/5'
          : 'opacity-35 hover:opacity-60',
      )}
    >
      <Icon />
      <span className="text-taupe-600 dark:text-taupe-400">
        <strong className="font-semibold text-taupe-950 dark:text-white">
          {feature.title}.
        </strong>{' '}
        {feature.description}
      </span>
    </div>
  )
}

function MediaContainer({
  activeIndex,
  videoRefs,
}: {
  activeIndex: number
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>
}) {
  return (
    <motion.div
      key={activeIndex}
      className="relative aspect-[1440/1080] w-full overflow-hidden rounded-xl border-2 border-brand-600 bg-brand-600 shadow-xl dark:bg-brand-700"
      animate={{ scale: [1, 0.92, 0.92, 1.03, 1], rotate: [0, -1.5, -1.5, 0.5, 0] }}
      transition={{ duration: 0.5, times: [0, 0.15, 0.3, 0.65, 1], ease: 'easeOut' }}
    >
      {FEATURES.map((feature, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ opacity: i === activeIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <video
            ref={(el) => {
              videoRefs.current[i] = el
            }}
            src={feature.video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function FeatureTwoColumnWithScreenshot({
  className,
  ...props
}: ComponentProps<'section'>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Pause inactive videos, play + reset active video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === activeIndex) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [activeIndex])

  return (
    <section
      className={clsx('relative isolate py-16', className)}
      {...props}
    >
      {/* Desktop: two-column with sticky preview pane */}
      <Container className="hidden lg:block">
        <div className="grid grid-cols-2 items-start gap-x-16 py-16">
          {/* Left column – header + feature list */}
          <div>
            <Eyebrow>Built For Scale</Eyebrow>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-pretty text-taupe-950 sm:text-5xl dark:text-white">
              Everything needed to scale operations
            </h2>
            <p className="mt-6 text-xl/8 text-taupe-700 dark:text-taupe-300">
              Deploy AI agents that scale operations and delight customers, all
              with no code. We don&apos;t mean <em>low code</em>, we mean{' '}
              <strong>literally no code</strong>.
            </p>
            <div className="mt-10 space-y-2">
              {FEATURES.map((feature, i) => (
                <FeatureScrollItem
                  key={i}
                  feature={feature}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Right column – sticky media pane */}
          <div className="sticky top-24">
            <MediaContainer activeIndex={activeIndex} videoRefs={videoRefs} />
          </div>
        </div>
      </Container>

      {/* Mobile: stacked layout */}
      <Container className="lg:hidden">
        <Eyebrow>Built For Scale</Eyebrow>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-pretty text-taupe-950 sm:text-5xl dark:text-white">
          Everything needed to scale operations
        </h2>
        <p className="mt-6 text-xl/8 text-taupe-700 dark:text-taupe-300">
          Deploy AI agents that scale operations and delight customers, all
          with no code. We don&apos;t mean <em>low code</em>, we mean{' '}
          <strong>literally no code</strong>.
        </p>
        <ul role="list" className="mt-10 space-y-8 text-taupe-600 dark:text-taupe-400">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <li key={i}>
                <div className="flex gap-x-3 text-base/7">
                  <Icon />
                  <span>
                    <strong className="font-semibold text-taupe-950 dark:text-white">
                      {feature.title}.
                    </strong>{' '}
                    {feature.description}
                  </span>
                </div>
                <div className="mt-4 overflow-hidden rounded-xl bg-brand-600 shadow-xl dark:bg-brand-700">
                  {feature.video ? (
                    <video
                      src={feature.video}
                      poster={feature.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full"
                    />
                  ) : (
                    <Image
                      src={feature.poster}
                      alt={feature.title}
                      width={3440}
                      height={1990}
                      className="w-full"
                    />
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
