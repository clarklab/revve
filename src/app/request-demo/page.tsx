'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LiquidMetal } from '@paper-design/shaders-react'
import { Container } from '@/components/elements/container'
import { Button } from '@/components/elements/button'

const expectItems = [
  {
    title: 'Not your typical sales demo',
    description:
      "It's a conversation designed to help you make an informed decision about how to use conversational AI agents to accelerate your pipeline",
    icon: (
      <svg className="size-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: '30-Minute Session',
    description:
      'A focused session where we discuss challenge, explore potential solutions and see if Revve AI can help your business achieve its revenue goal',
    icon: (
      <svg className="size-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Bring Your Team',
    description: 'Invite colleagues who would benefit from seeing how Revve AI can transform your operations.',
    icon: (
      <svg className="size-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'No Pressure',
    description: "Our demos are educational, not pushy. We're here to help you make the right decision for your business.",
    icon: (
      <svg className="size-6 text-brand-600 dark:text-brand-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
]

const learnCards = [
  {
    title: 'Text AI Agents',
    items: [
      'Text-based AI agents for website, email, SMS and more',
      'Human in the loop for critical conversation',
      'Intelligent follow up to ensure your business stay top of mind',
      'Guardrail and brand voice',
    ],
  },
  {
    title: 'Voice AI Agent',
    items: [
      'Natural-sounding voice conversations',
      'Intelligent call routing and handling',
      'Automatic call transcription and analysis',
      'Seamless handoff to human agents',
    ],
  },
  {
    title: 'Implementation & ROI',
    items: [
      'Quick and easy setup process',
      'Integration with your existing tools',
      'Expected ROI and performance metrics',
      'Customization options for your business',
    ],
  },
]

const testimonials = [
  {
    quote:
      'We love how the AI agents sounds both in chat and in phone call. We look forward to expanding Revve to other aspects of Dropoff business',
    name: 'Sean Spector',
    title: 'CEO',
    avatar: '/img/photos/photo-sean-spector.webp',
  },
  {
    quote:
      "Revve's dramatically improving our time-to-first-touch for leads and letting sales focus on closing, not chasing.",
    name: 'Marcy Comer',
    title: 'CMO',
    avatar: '/img/photos/photo-mary-comer.webp',
  },
  {
    quote: 'Revve AI agents not only wow our customers when they get instant response but can also close deals',
    name: 'Linh Thai',
    title: 'CEO',
    avatar: '/img/photos/photo-linh-tahi.webp',
  },
]

function CheckIcon() {
  return (
    <svg className="mt-0.5 size-5 shrink-0 text-brand-600 dark:text-brand-400" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function RequestDemoPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
  })

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#2E1106] py-16 sm:py-24">
        <LiquidMetal
          speed={0.25}
          softness={0.1}
          repetition={2}
          shiftRed={0.3}
          shiftBlue={0.3}
          distortion={0.07}
          contour={0.4}
          scale={2}
          rotation={0}
          shape="metaballs"
          angle={70}
          colorBack="#00000000"
          colorTint="#FFFFFF"
          className="absolute inset-0 h-full w-full opacity-50"
        />
        <Container className="relative z-10 text-center">
          <h1 className="font-display text-4xl/tight font-semibold tracking-[-0.04em] text-white sm:text-5xl/tight">
            See Revve AI in Action
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base/6 font-semibold text-white/80">
            Schedule a personalized demo and discover how our AI agents can transform your go-to-market strategy
          </p>
        </Container>
      </section>

      {/* Two-Column: What to Expect + Form */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="font-display text-3xl/9 font-medium tracking-[-0.03em] text-brand-950 dark:text-white sm:text-[2.5rem]/10">
                What to Expect in Your Demo
              </h2>
              <div className="mt-10 flex flex-col gap-8">
                {expectItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-brand-950 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm/6 text-brand-700 dark:text-white/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* After Your Demo Callout */}
              <div className="mt-10 rounded-xl border border-brand-200 bg-brand-100/60 p-6 dark:border-brand-800 dark:bg-brand-950/50">
                <h3 className="font-display text-sm font-bold text-brand-950 dark:text-white">After Your Demo</h3>
                <p className="mt-1 text-sm/6 text-brand-700 dark:text-white/60">
                  You&apos;ll receive a recording of your session, additional resources, and a custom implementation plan
                  tailored to your needs.
                </p>
              </div>

              <p className="mt-6 text-sm text-brand-600 dark:text-brand-400">
                Your data privacy is our priority. All information shared during the demo is kept confidential.
              </p>

              {/* What You'll Learn */}
              <h2 className="mt-16 font-display text-3xl/9 font-medium tracking-[-0.03em] text-brand-950 dark:text-white sm:text-[2.5rem]/10">
                What You&apos;ll Learn in the Demo
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-6">
                {learnCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-lg bg-white p-8 ring-1 ring-taupe-950/5 dark:bg-taupe-900 dark:ring-white/10"
                  >
                    <h3 className="font-display text-lg font-semibold text-brand-950 dark:text-white">{card.title}</h3>
                    <ul className="mt-6 flex flex-col gap-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm/6 text-brand-700 dark:text-white/60">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Form Card */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-lg bg-white p-8 ring-1 ring-taupe-950/5 dark:bg-taupe-900 dark:ring-white/10">
                <h2 className="font-display text-2xl font-semibold text-brand-950 dark:text-white">Request Your Demo</h2>
                <p className="mt-2 text-sm/6 text-brand-700 dark:text-white/60">
                  Fill out the form below and our team will reach out to schedule your personalized demo.
                </p>

                <form
                  className="mt-8 flex flex-col gap-2.5"
                  onSubmit={(e) => {
                    e.preventDefault()
                  }}
                >
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-brand-950 dark:text-white">
                        First name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => updateField('firstName', e.target.value)}
                        className="mt-1.5 block w-full rounded border border-taupe-300 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-taupe-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 dark:border-taupe-700 dark:bg-taupe-900 dark:text-white dark:placeholder:text-taupe-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-brand-950 dark:text-white">
                        Last name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => updateField('lastName', e.target.value)}
                        className="mt-1.5 block w-full rounded border border-taupe-300 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-taupe-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 dark:border-taupe-700 dark:bg-taupe-900 dark:text-white dark:placeholder:text-taupe-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-950 dark:text-white">
                      Company name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => updateField('company', e.target.value)}
                      className="mt-1.5 block w-full rounded border border-taupe-300 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-taupe-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 dark:border-taupe-700 dark:bg-taupe-900 dark:text-white dark:placeholder:text-taupe-500"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-950 dark:text-white">
                      Email <span className="text-brand-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="mt-1.5 block w-full rounded border border-taupe-300 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-taupe-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 dark:border-taupe-700 dark:bg-taupe-900 dark:text-white dark:placeholder:text-taupe-500"
                      placeholder="john@acme.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-950 dark:text-white">
                      Phone number <span className="text-brand-600">*</span>
                    </label>
                    <div className="mt-1.5 flex">
                      <span className="inline-flex items-center rounded-l border border-r-0 border-taupe-300 bg-taupe-50 px-3 text-sm text-brand-700 dark:border-taupe-700 dark:bg-taupe-800 dark:text-white/60">
                        +1
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="block w-full rounded-r border border-taupe-300 bg-white px-3 py-2 text-sm text-brand-950 placeholder:text-taupe-400 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 dark:border-taupe-700 dark:bg-taupe-900 dark:text-white dark:placeholder:text-taupe-500"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="mt-2 w-full">
                    Request Demo
                  </Button>
                </form>

                <p className="mt-4 text-center text-xs text-taupe-500 dark:text-taupe-400">
                  Your information is secure and will never be shared with third parties
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between gap-8 rounded-md bg-brand-600/5 p-6 text-sm/7 text-brand-950 dark:bg-white/5 dark:text-white"
              >
                <blockquote className="relative">
                  <span className="text-4xl leading-none text-brand-600 dark:text-brand-400">&ldquo;</span>
                  <p className="mt-2">{t.quote}</p>
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="flex size-12 overflow-hidden rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/5">
                    <Image src={t.avatar} alt="" className="size-full object-cover" width={160} height={160} />
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-brand-700 dark:text-brand-400">{t.title}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
