import Image from 'next/image'
import type { ComponentProps } from 'react'
import { clsx } from 'clsx/lite'
import { ButtonLink } from '../elements/button'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'

const USE_CASES = [
  {
    title: 'Collections',
    description:
      'Automate payment reminders, negotiation, and follow-ups without scaling your collections team.',
    photo: '/img/photos/usecase-collections.webp',
  },
  {
    title: 'Customer Service',
    description:
      'Handle high-volume support across voice, chat, and messaging while keeping humans for complex cases.',
    photo: '/img/photos/usecase-customer-service.webp',
  },
  {
    title: 'Telesales',
    description:
      'Scale outbound campaigns for product launches, lead qualification, and customer engagement.',
    photo: '/img/photos/usecase-telesales.webp',
  },
  {
    title: 'Loan Origination',
    description:
      'Guide customers through applications, verify documents, and accelerate approvals with AI assistance.',
    photo: '/img/photos/usecase-loan-origination.webp',
  },
  {
    title: 'Account Services',
    description:
      'Handle balance inquiries, transaction disputes, and account updates instantly across all channels.',
    photo: '/img/photos/usecase-account-services.webp',
  },
  {
    title: 'Fraud Prevention',
    description:
      'Detect suspicious activity, verify identities, and resolve alerts faster with AI-powered triage.',
    photo: '/img/photos/usecase-fraud-prevention.webp',
  },
]

function UseCaseCard({
  title,
  description,
  photo,
}: {
  title: string
  description: string
  photo: string
}) {
  return (
    <article className="group flex-none w-[280px] sm:w-[320px] lg:w-[360px] snap-start">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg ring-1 ring-taupe-950/5 dark:ring-white/10">
        <Image
          src={photo}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-3">{description}</p>
        </div>
      </div>
    </article>
  )
}

export function UseCasesScroll({ className, ...props }: Omit<ComponentProps<'section'>, 'children'>) {
  return (
    <section className={clsx('py-16 overflow-hidden', className)} {...props}>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>Use Cases</Eyebrow>
            <Subheading>Built for every customer touchpoint</Subheading>
          </div>
          <ButtonLink href="/request-demo" className="hidden sm:inline-flex">
            Book a Demo
          </ButtonLink>
        </div>

        {/* Scroll area INSIDE Container, breaks out on right with negative margin */}
        <div className="relative mt-10 -mr-6 lg:-mr-10">
          {/* Right edge fade indicator */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-6 z-10 w-16 bg-gradient-to-l from-brand-50 to-transparent dark:from-brand-950" />

          {/* Scrollable cards - pr matches the negative margin to extend to viewport edge */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pr-6 lg:pr-10 scrollbar-hide">
            {USE_CASES.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
