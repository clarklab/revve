import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'

export function HeroLeftAlignedWithDemo({
  eyebrow,
  headline,
  subheadline,
  cta,
  demo,
  sideElement,
  footer,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline: ReactNode
  cta?: ReactNode
  demo?: ReactNode
  sideElement?: ReactNode
  footer?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('relative -mt-(--scroll-padding-top) pb-16', className)} {...props}>
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/img/video/hero.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full opacity-25"
        />
        {/* Gradient fade to background */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-50 from-55% to-transparent dark:from-brand-950" />
      </div>
      {/* Full-width overlay element for flow diagram */}
      {sideElement && (
        <div className="pointer-events-none absolute inset-0 z-10 hidden overflow-visible lg:block">
          {sideElement}
        </div>
      )}
      <Container className="relative z-10 flex flex-col gap-16 pt-48">
        <div className="flex flex-col gap-32">
          <div className="relative flex flex-col items-start gap-6">
            {eyebrow}
            <Heading className="max-w-5xl">{headline}</Heading>
            <Text size="lg" className="flex max-w-3xl flex-col gap-4">
              {subheadline}
            </Text>
            {cta}
          </div>
          {demo}
        </div>
        {footer}
      </Container>
    </section>
  )
}
