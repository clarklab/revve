import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx/lite'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

function BentoCard({
  eyebrow,
  title,
  description,
  children,
  className,
  flush,
  mediaClassName,
}: {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
  flush?: boolean
  mediaClassName?: string
}) {
  return (
    <div className={clsx('relative', className)}>
      <div className="absolute inset-0 rounded-lg bg-white dark:bg-taupe-900" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg,0.5rem)+1px)]">
        {children && (
          <div className={clsx('flex items-center justify-center bg-white dark:bg-brand-950/50', mediaClassName || 'h-52', !flush && 'p-6')}>
            {children}
          </div>
        )}
        <div className="p-8 pt-4">
          <h3 className="text-sm/4 font-semibold text-brand-600 dark:text-brand-400">{eyebrow}</h3>
          <p className="mt-2 text-lg font-medium tracking-tight text-taupe-950 dark:text-white">{title}</p>
          {description && <p className="mt-2 max-w-lg text-sm/6 text-taupe-600 dark:text-taupe-400">{description}</p>}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-taupe-950/5 dark:outline-white/10" />
    </div>
  )
}

// Icons for bento cards
function OmnichannelIcon() {
  return (
    <svg className="h-16 w-16 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function ContactCenterIcon() {
  return (
    <svg className="h-16 w-16 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function VoiceIcon() {
  return (
    <svg className="h-16 w-16 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}

function GuardrailsIcon() {
  return (
    <svg className="h-16 w-16 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function EscalationIcon() {
  return (
    <svg className="h-16 w-16 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export function FeaturesBentoGrid({
  className,
  ...props
}: Omit<ComponentProps<'section'>, 'children'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <Eyebrow>Revve does it all</Eyebrow>
            <Subheading>Automate customer operations across all channels from one platform</Subheading>
          </div>
          <Text className="text-pretty">
            <p>From first contact to resolution, Revve orchestrates your customer workflows so you can scale operations without increasing headcount.</p>
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:auto-rows-auto">
          {/* Top left - large */}
          <BentoCard
            className="lg:col-span-3 max-lg:rounded-t-4xl lg:rounded-tl-4xl [&>div:first-child]:max-lg:rounded-t-4xl [&>div:first-child]:lg:rounded-tl-4xl [&>div:nth-child(2)]:max-lg:rounded-t-[calc(2rem+1px)] [&>div:nth-child(2)]:lg:rounded-tl-[calc(2rem+1px)] [&>div:last-child]:max-lg:rounded-t-4xl [&>div:last-child]:lg:rounded-tl-4xl"
            eyebrow="Grow customers, not headcount"
            title="Up to 80% of routine inquiries are handled by AI"
            flush
            mediaClassName="h-52 lg:h-auto"
          >
            <Image
              src="/img/screenshots/bento-ai.webp"
              alt="AI handling routine inquiries"
              width={1440}
              height={736}
              className="h-full w-full object-cover"
            />
          </BentoCard>

          {/* Top right - large */}
          <BentoCard
            className="lg:col-span-3 lg:rounded-tr-4xl [&>div:first-child]:lg:rounded-tr-4xl [&>div:nth-child(2)]:lg:rounded-tr-[calc(2rem+1px)] [&>div:last-child]:lg:rounded-tr-4xl"
            eyebrow="Resolve cases 2x faster"
            title="Complex case hand off with full history"
            flush
            mediaClassName="h-52 lg:h-auto"
          >
            <Image
              src="/img/screenshots/bento-faster.webp"
              alt="Resolve cases 2x faster"
              width={1440}
              height={736}
              className="h-full w-full object-cover"
            />
          </BentoCard>

          {/* Bottom left - small */}
          <BentoCard
            className="lg:col-span-2 lg:rounded-bl-4xl [&>div:first-child]:lg:rounded-bl-4xl [&>div:nth-child(2)]:lg:rounded-bl-[calc(2rem+1px)] [&>div:last-child]:lg:rounded-bl-4xl"
            eyebrow="Built for banks"
            title="SOC 2 Type II, ISO 27001, GDPR, and more"
            flush
          >
            <Image
              src="/img/screenshots/bento-banks.webp"
              alt="Built for banks"
              width={3440}
              height={1990}
              className="h-full w-full object-cover"
            />
          </BentoCard>

          {/* Bottom center - small */}
          <BentoCard
            className="lg:col-span-2"
            eyebrow="Available to help 24/7"
            title="Instant help on voice, chat, Zalo, and WhatsApp"
            flush
          >
            <Image
              src="/img/screenshots/bento-available.webp"
              alt="Available 24/7 across all channels"
              width={3440}
              height={1990}
              className="h-full w-full object-cover"
            />
          </BentoCard>

          {/* Bottom right - small */}
          <BentoCard
            className="lg:col-span-2 max-lg:rounded-b-4xl lg:rounded-br-4xl [&>div:first-child]:max-lg:rounded-b-4xl [&>div:first-child]:lg:rounded-br-4xl [&>div:nth-child(2)]:max-lg:rounded-b-[calc(2rem+1px)] [&>div:nth-child(2)]:lg:rounded-br-[calc(2rem+1px)] [&>div:last-child]:max-lg:rounded-b-4xl [&>div:last-child]:lg:rounded-br-4xl"
            eyebrow="Fluent in your language"
            title="Proprietary models built for Vietnamese, Bahasa and English"
            flush
          >
            <Image
              src="/img/screenshots/bento-language.webp"
              alt="Multi-language support"
              width={3440}
              height={1990}
              className="h-full w-full object-cover"
            />
          </BentoCard>
        </div>
      </Container>
    </section>
  )
}
