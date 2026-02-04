import type { ReactNode } from 'react'

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
        {icon}
        <h3 className="font-display text-base font-semibold leading-snug text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  )
}

// Icons (Lucide-style)
function UsersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-5 w-5 text-white"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function MessageSquareIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-5 w-5 text-white"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CircleCheckBigIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-5 w-5 text-white"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function HeadphonesIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-5 w-5 text-white"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-5 w-5 text-white"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block h-5 w-5 text-white"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

export function FeatureGrid() {
  return (
    <div className="mt-8 rounded-2xl bg-blue-600 px-10 py-12 md:px-16 md:py-16">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
      <FeatureItem
        icon={<UsersIcon />}
        title="Grow customers, not headcount."
        description="Up to 80% of routine inquiries are handled by AI, freeing your team to focus on complex cases that need a human touch."
      />
      <FeatureItem
        icon={<MessageSquareIcon />}
        title="Resolve cases 2x faster."
        description="Complex case hand off with full history and context, so customers never have to repeat themselves."
      />
      <FeatureItem
        icon={<CircleCheckBigIcon />}
        title="Built for banks."
        description="SOC 2 Type II, ISO 27001, GDPR compliant. Enterprise-grade security for regulated industries."
      />
      <FeatureItem
        icon={<HeadphonesIcon />}
        title="Available to help 24/7."
        description="Instant help on voice, chat, Zalo, and WhatsApp. Your customers get support whenever they need it."
      />
      <FeatureItem
        icon={<SparklesIcon />}
        title="Fluent in your language."
        description="Proprietary models built for Vietnamese, Bahasa, and English with native-level fluency and regional understanding."
      />
      <FeatureItem
        icon={<LayersIcon />}
        title="Omnichannel Agents."
        description="One conversation thread across voice, messaging (Zalo/WhatsApp/SMS), and handoffs, so every touchpoint continues with full history."
      />
      <FeatureItem
        icon={<UsersIcon />}
        title="Unified Contact Center."
        description="When AI hands to a team member, they get an interaction summary that helps them resolve the case 2x faster with live assistance."
      />
      <FeatureItem
        icon={<CircleCheckBigIcon />}
        title="Reliability & Guardrails Built-In."
        description="Set boundaries on what the AI can and can't say. Monitor live conversations for quality assurance."
      />
      <FeatureItem
        icon={<HeadphonesIcon />}
        title="Native Sounding Voice."
        description="Proprietary voice model delivers sub-1-second response time with regional accents, tuned on banking conversations so calls feel natural."
      />
      </div>
    </div>
  )
}
