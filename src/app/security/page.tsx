import type { Metadata } from 'next'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { DarkModePage } from '@/components/elements/dark-mode-page'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'

export const metadata: Metadata = {
  title: 'Security | Revve AI',
  description: 'Enterprise-grade security and compliance. Learn how Revve AI protects your data.',
}

// Shield icon
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

// Lock icon
function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export default function SecurityPage() {
  return (
    <DarkModePage>
      <div className="min-h-screen bg-[#151528]">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
              <ShieldIcon className="h-4 w-4" />
              Enterprise Security
            </div>
            <h1 className="font-display text-5xl/12 tracking-[-0.04em] text-white sm:text-6xl/none">
              Your data is safe with us
            </h1>
            <p className="mt-6 text-lg/8 text-white/70">
              Revve AI is built with security at its core. We use industry-leading practices to ensure your customer data remains protected, private, and compliant.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <ButtonLink href="#" size="lg" color="light">
                View Security Docs
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 - SOC 2 */}
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <ShieldIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-medium text-white">SOC 2 Type II Certified</h3>
              <p className="mt-4 text-base/7 text-white/70">
                We maintain SOC 2 Type II certification, demonstrating our commitment to security, availability, and confidentiality. Our controls are audited annually by independent third parties.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Annual third-party audits
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Continuous monitoring
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Documented security policies
                </li>
              </ul>
            </div>

            {/* Card 2 - Encryption */}
            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <LockIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-2xl font-medium text-white">End-to-End Encryption</h3>
              <p className="mt-4 text-base/7 text-white/70">
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Your customer conversations and sensitive information are protected at every step.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  TLS 1.3 in transit
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  AES-256 at rest
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  Key rotation policies
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <FAQsTwoColumnAccordion
        id="security-faqs"
        headline="Security FAQs"
        subheadline={<p>Common questions about our security practices and compliance.</p>}
      >
        <Faq
          id="security-faq-1"
          question="Where is my data stored?"
          answer="All customer data is stored in SOC 2 certified data centers in the United States and Singapore. We use AWS and Google Cloud Platform with multi-region redundancy for high availability."
        />
        <Faq
          id="security-faq-2"
          question="Do you share data with third parties?"
          answer="We never sell your data. We only share data with third-party sub-processors necessary to provide our services, and all sub-processors are contractually bound to the same security standards."
        />
        <Faq
          id="security-faq-3"
          question="How do you handle data deletion requests?"
          answer="We comply with GDPR and CCPA deletion requests. Upon request, we permanently delete all customer data within 30 days, including backups. We provide written confirmation once deletion is complete."
        />
        <Faq
          id="security-faq-4"
          question="What happens if there's a security incident?"
          answer="We have a comprehensive incident response plan. Affected customers are notified within 72 hours of discovery. We conduct thorough post-incident reviews and share findings to prevent future occurrences."
        />
        <Faq
          id="security-faq-5"
          question="Can I get a copy of your security documentation?"
          answer="Yes. We provide our SOC 2 report, penetration test summaries, and security questionnaire responses under NDA. Contact our security team at security@revve.ai to request access."
        />
      </FAQsTwoColumnAccordion>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="rounded-3xl bg-white/5 p-12 text-center ring-1 ring-white/10">
            <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
              Have security questions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base/7 text-white/70">
              Our security team is happy to answer any questions, provide documentation, or walk through our security practices.
            </p>
            <div className="mt-8">
              <ButtonLink href="mailto:security@revve.ai" size="lg" color="light">
                Contact Security Team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      </div>
    </DarkModePage>
  )
}
