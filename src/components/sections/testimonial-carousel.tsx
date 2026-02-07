'use client'

import { clsx } from 'clsx/lite'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'

const TESTIMONIALS = [
  {
    headline: "A more natural, human-like response was a critical factor for us.",
    subtext: "It moves beyond the robotic interactions our customers dislike and allows for a more effective and positive re-engagement.",
    name: "VIB Contact Center",
    title: "Manager",
    logo: "/img/logos/LOGO-VIB-Blue.png",
    photo: "/img/photos/photo-vib.webp",
  },
  {
    headline: "Revve's dramatically improving our time-to-first-touch for leads.",
    subtext: "Now sales can focus on closing, not chasing.",
    name: "Marcy Comer",
    title: "CMO",
    logo: "/img/logos/LOGO-Eagleview.png",
    photo: "/img/photos/photo-mary-comer.webp",
  },
  {
    headline: "We love how the AI agents sound both in chat and in phone call.",
    subtext: "We look forward to expanding Revve to other aspects of Gamefly business.",
    name: "Sean Spector",
    title: "CEO",
    logo: "/img/logos/LOGO-gamefly.svg",
    photo: "/img/photos/photo-sean-spector.webp",
  },
]

export function TestimonialCarousel({ className, ...props }: ComponentProps<'section'>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      goToNext()
    }, 7000)

    return () => clearInterval(timer)
  }, [isPaused, goToNext])

  const testimonial = TESTIMONIALS[activeIndex]

  return (
    <section
      className={clsx('py-24 sm:py-32', className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      {...props}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_432px] lg:gap-20">
          {/* Quote Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand-600">
                <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" fill="currentColor" className="text-white">
                  <path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92Z"/>
                </svg>
              </span>
              <Eyebrow>Trusted by the best</Eyebrow>
            </div>

            <div className="relative h-[340px] sm:h-[300px] lg:h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 flex flex-col"
                >
                  <blockquote className="flex-1">
                    <p className="font-display text-3xl font-medium leading-tight tracking-tight text-brand-950 sm:text-4xl lg:text-5xl dark:text-white">
                      {testimonial.headline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-brand-700 sm:text-lg lg:text-xl dark:text-brand-300">
                      {testimonial.subtext}
                    </p>
                  </blockquote>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Logo and Navigation dots */}
            <div className="mt-6 flex items-end justify-between">
              <div className="relative h-18 w-48">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0"
                  >
                    {testimonial.logo && (
                      <Image
                        src={testimonial.logo}
                        alt=""
                        width={270}
                        height={108}
                        className="h-18 w-auto object-contain dark:brightness-0 dark:invert"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex gap-2 pb-1">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={clsx(
                      'h-2 rounded-full transition-all duration-300',
                      index === activeIndex
                        ? 'w-8 bg-brand-600 dark:bg-brand-400'
                        : 'w-2 bg-brand-300 hover:bg-brand-400 dark:bg-brand-700 dark:hover:bg-brand-600'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[352px] overflow-hidden rounded-2xl shadow-xl sm:max-w-[392px] lg:max-w-[432px] lg:rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 280px, 360px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              {/* Name and title */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <p className="text-xl font-semibold sm:text-2xl">
                      <span className="rounded bg-brand-600 px-2 py-0.5 text-white box-decoration-clone">{testimonial.name}</span>
                    </p>
                    {testimonial.title && (
                      <p className="mt-1 text-lg sm:text-xl">
                        <span className="rounded bg-brand-600 px-2 py-0.5 text-white box-decoration-clone">{testimonial.title}</span>
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
