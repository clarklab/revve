'use client'

import { useEffect, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

// Voice wave animation component
function VoiceWave() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="w-0.5 rounded-full bg-emerald-500"
          animate={{
            height: [4, 12, 6, 14, 4],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Phone icon
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

// WhatsApp icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// Typing dots animation
function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white/70"
          animate={{
            y: [0, -4, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Cycling status text component
function CyclingStatus() {
  const statuses = ['Replying...', 'Reading message...', 'Updating ticket...']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statuses.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <TypingDots />
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-white/90"
        >
          {statuses[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// Call in Progress Card
function CallCard() {
  const [seconds, setSeconds] = useState(154) // Start at 2:34

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const formattedTime = `${minutes}:${secs.toString().padStart(2, '0')}`

  return (
    <div className="flex w-80 flex-col gap-4 rounded-2xl bg-white p-6 shadow-2xl shadow-black/25 ring-1 ring-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
            <PhoneIcon className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">Voice Call</div>
            <div className="text-lg font-semibold text-gray-900">Call in Progress</div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1.5">
          <motion.div
            className="h-2 w-2 rounded-full bg-brand-500"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs font-semibold text-brand-700">Live</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Agent Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-sm font-bold text-white">
            H
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-900">Hoa Tran</span>
              <VoiceWave />
            </div>
            <div className="text-sm text-gray-500">AI Agent</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold tabular-nums text-gray-900">{formattedTime}</div>
          <div className="text-xs text-gray-500">Duration</div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Stats */}
      <div className="flex items-center justify-between text-center">
        <div>
          <div className="text-lg font-semibold text-gray-900">94%</div>
          <div className="text-xs text-gray-500">Retention</div>
        </div>
        <div className="h-8 w-px bg-gray-200" />
        <div>
          <div className="text-lg font-semibold text-gray-900">4.8</div>
          <div className="text-xs text-gray-500">CSAT</div>
        </div>
        <div className="h-8 w-px bg-gray-200" />
        <div>
          <div className="text-lg font-semibold text-emerald-600">Resolved</div>
          <div className="text-xs text-gray-500">Status</div>
        </div>
      </div>
    </div>
  )
}

// WhatsApp Card
function WhatsAppCard() {
  return (
    <div className="flex w-80 flex-col gap-4 rounded-2xl bg-white p-6 shadow-2xl shadow-black/25 ring-1 ring-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
            <WhatsAppIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-wide text-gray-500">WhatsApp</div>
            <div className="text-sm font-semibold text-gray-900">+84 912 345 678</div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1.5">
          <motion.div
            className="h-2 w-2 rounded-full bg-brand-500"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          <span className="text-xs font-semibold text-brand-700">Active</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Message Preview */}
      <div className="flex flex-col gap-2.5">
        {/* Customer message 1 */}
        <div className="flex items-end gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
            C
          </div>
          <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2">
            <p className="text-sm text-gray-700">Hi, I need help with my order #4521</p>
          </div>
        </div>

        {/* Agent message 1 */}
        <div className="flex items-end justify-end gap-2">
          <div className="rounded-2xl rounded-br-sm bg-green-600 px-3.5 py-2">
            <p className="text-sm text-white">Hi! I'd be happy to help. Let me look up your order.</p>
          </div>
        </div>

        {/* Customer message 2 */}
        <div className="flex items-end gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
            C
          </div>
          <div className="rounded-2xl rounded-bl-sm bg-gray-100 px-3.5 py-2">
            <p className="text-sm text-gray-700">It says delivered but I haven't received it</p>
          </div>
        </div>

        {/* Agent typing */}
        <div className="flex items-end justify-end gap-2">
          <div className="rounded-2xl rounded-br-sm bg-green-600 px-3.5 py-2.5">
            <CyclingStatus />
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroFloatingCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      {/* Left Card - Call in Progress */}
      <motion.div
        className="absolute left-[5%] top-[calc(12%+4rem)] z-10 origin-top-left scale-50 sm:left-[8%] sm:scale-75 lg:left-[12%] lg:top-[calc(18%+4rem)] lg:scale-100 xl:left-[18%]"
        initial={{ opacity: 0, x: -40, y: 30, rotate: 0 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: -4 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CallCard />
        </motion.div>
      </motion.div>

      {/* Right Card - WhatsApp */}
      <motion.div
        className="absolute bottom-[12%] right-[5%] z-10 origin-bottom-right scale-50 sm:bottom-[15%] sm:right-[8%] sm:scale-75 lg:bottom-[18%] lg:right-[12%] lg:scale-100 xl:right-[18%]"
        initial={{ opacity: 0, x: 40, y: -30, rotate: 0 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 4 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <WhatsAppCard />
        </motion.div>
      </motion.div>
    </div>
  )
}
