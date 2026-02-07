import Image from 'next/image'
import type { ComponentProps } from 'react'
import { Section } from '../elements/section'

interface TestimonialData {
  quote: string
  name: string
  title: string
  image: string
  logo: string
}

const TESTIMONIALS: TestimonialData[] = [
  {
    quote: "We love how the AI agents sound both in chat and in phone call. We look forward to expanding Revve to other aspects of Dropoff business.",
    name: "Sean Spector",
    title: "CEO",
    image: "/img/photos/photo-sean-spector.webp",
    logo: "/img/logos/LOGO-VIB-Blue.png",
  },
  {
    quote: "Revve's dramatically improving our time-to-first-touch for leads and letting sales focus on closing, not chasing.",
    name: "Marcy Comer",
    title: "CMO",
    image: "/img/photos/photo-mary-comer.webp",
    logo: "/img/logos/LOGO-hong-leong.png",
  },
  {
    quote: "Revve AI agents not only wow our customers when they get instant response but can also close deals.",
    name: "Linh Thai",
    title: "CEO",
    image: "/img/photos/photo-linh-tahi.webp",
    logo: "/img/logos/LOGO-Rollick.png",
  },
  {
    quote: "Reduced our support ticket backlog by 60% in the first month. The AI handles routine inquiries flawlessly.",
    name: "David Chen",
    title: "VP Operations",
    image: "/img/avatars/10-size-160.webp",
    logo: "/img/logos/LOGO-Eagleview.png",
  },
  {
    quote: "Our CSAT scores jumped 15 points. Customers love getting instant, accurate answers 24/7.",
    name: "Sarah Mitchell",
    title: "Head of Customer Success",
    image: "/img/avatars/11-size-160.webp",
    logo: "/img/logos/LOGO-VIB-Blue.png",
  },
  {
    quote: "Integration was seamless. Revve connected to our existing systems in days, not months.",
    name: "James Rodriguez",
    title: "CTO",
    image: "/img/avatars/12-size-160.webp",
    logo: "/img/logos/LOGO-Rollick.png",
  },
]

function TestimonialCard({ quote, name, title, image, logo }: TestimonialData) {
  return (
    <article className="w-96 shrink-0 sm:w-[28rem]">
      {/* Speech bubble */}
      <div className="relative min-h-44 rounded-2xl bg-white p-8 pb-6 shadow-lg dark:bg-white/10">
        <p className="text-base/7 text-brand-900 dark:text-white">
          &ldquo;{quote}&rdquo;
        </p>
        <Image
          src={logo}
          alt="Company logo"
          width={80}
          height={20}
          className="mt-4 h-5 w-auto opacity-40 dark:invert"
        />
        {/* Tail/pointer */}
        <div className="absolute -bottom-2 left-10 size-4 rotate-45 bg-white dark:bg-white/10" />
      </div>
      {/* Speaker info below */}
      <div className="mt-6 flex items-center gap-3 pl-9">
        <Image
          src={image}
          alt={name}
          width={32}
          height={32}
          className="size-8 rounded-full object-cover"
        />
        <p className="text-base text-brand-950 dark:text-white">
          <span className="font-semibold">{name}</span>
          <span className="text-brand-700 dark:text-brand-400">, {title}</span>
        </p>
      </div>
    </article>
  )
}

export function TestimonialsMarquee(props: Omit<ComponentProps<typeof Section>, 'children'>) {
  return (
    <Section {...props}>
      <div className="ml-[calc(-50vw+50%)] w-screen overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={`a-${index}`} {...testimonial} />
          ))}
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={`b-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  )
}
