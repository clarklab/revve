import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { HeroFloatingCards } from '@/components/elements/hero-floating-cards'
import { HeroFlowDiagram } from '@/components/elements/hero-flow-diagram'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { Container } from '@/components/elements/container'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { FeaturesBentoGrid } from '@/components/sections/features-bento-grid'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { FeatureTwoColumnWithScreenshot } from '@/components/sections/feature-two-column-with-screenshot'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import { FeatureGrid } from '@/components/sections/feature-grid'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={<AnnouncementBadge href="/blog/native-voice-announcement" text={<><strong>New</strong>: Revve Native Voice is live</>} cta="Read more" />}
        headline={<>AI-powered customer<br className="hidden lg:block" /> ops for BFSI.</>}
        subheadline={
          <p>
            Resolve routine issues automatically, escalate complex cases with full context, and keep your systems in sync across your customer channels.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/request-demo" size="lg">
              Book a Demo
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See use cases <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        sideElement={<HeroFlowDiagram />}
        demo={
          <div className="relative">
            <div className="relative overflow-hidden rounded-t-lg">
              <Screenshot className="!rounded-none" wallpaper="brand" placement="bottom">
                <Image
                  src="/img/screenshots/preview-inbox.webp"
                  alt="Revve AI inbox preview"
                  className="bg-white/75 dark:bg-black/75"
                  width={3440}
                  height={1990}
                />
              </Screenshot>
              <HeroFloatingCards />
            </div>
            <div className="flex flex-col items-center gap-6 rounded-b-lg bg-brand-600/10 px-8 py-12 dark:bg-white/5">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">Trusted by leading companies</p>
              <div className="flex flex-wrap items-center justify-center gap-16 sm:gap-20">
                <Image
                  src="/img/logos/LOGO-VIB-Blue.png"
                  alt="VIB"
                  width={160}
                  height={64}
                  className="logo-monotone h-8 w-auto object-contain"
                />
                <Image
                  src="/img/logos/LOGO-hong-leong.png"
                  alt="Hong Leong"
                  width={200}
                  height={64}
                  className="logo-monotone h-8 w-auto object-contain"
                />
                <Image
                  src="/img/logos/LOGO-Rollick.png"
                  alt="Rollick"
                  width={180}
                  height={64}
                  className="logo-monotone h-6 w-auto object-contain"
                />
                <Image
                  src="/img/logos/LOGO-Eagleview.png"
                  alt="EagleView"
                  width={220}
                  height={64}
                  className="logo-monotone h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        }
      />
      {/* Features */}
      <FeaturesBentoGrid id="features" />
      {/* Built For Scale */}
      <FeatureTwoColumnWithScreenshot id="built-for-scale" />
      {/* Feature Grid */}
      <section className="py-16">
        <Container>
          <FeatureGrid />
        </Container>
      </section>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="What our customers are saying"
        subheadline={<p>We've given these customers a significant discount in exchange for their honest reviews.</p>}
      >
        <Testimonial
          quote={
            <p>
              We love how the AI agents sounds both in chat and in phone call. We look forward to expanding Revve to other aspects of Dropoff business
            </p>
          }
          img={<Image src="/img/photos/photo-sean-spector.webp" alt="" className="not-dark:bg-white/75 dark:bg-black/75" width={160} height={160} />}
          name="Sean Spector"
          byline="CEO"
        />
        <Testimonial
          quote={
            <p>
              Revve&apos;s dramatically improving our time-to-first-touch for leads and letting sales focus on closing, not chasing.
            </p>
          }
          img={<Image src="/img/photos/photo-mary-comer.webp" alt="" className="not-dark:bg-white/75 dark:bg-black/75" width={160} height={160} />}
          name="Marcy Comer"
          byline="CMO"
        />
        <Testimonial
          quote={
            <p>
              Revve AI agents not only wow our customers when they get instant response but can also close deals
            </p>
          }
          img={<Image src="/img/photos/photo-linh-tahi.webp" alt="" className="not-dark:bg-white/75 dark:bg-black/75" width={160} height={160} />}
          name="Linh Thai"
          byline="CEO"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion
        id="faqs"
        headline="Common Questions"
        subheadline={
          <>
            <p>Find detailed answers and implementation guides in our documentation.</p>
            <div>
              <SoftButtonLink href="/docs">View the Docs</SoftButtonLink>
            </div>
          </>
        }
      >
        <Faq
          id="faq-1"
          question="Can Revve be deployed on-premise, or is it cloud-only?"
          answer="Both. We support cloud deployment and on-premise installation on your infrastructure. On-premise requires GPU servers (we provide specs - approximately 25 concurrent calls per server)."
        />
        <Faq
          id="faq-2"
          question="How long does implementation take?"
          answer="Most deployments go live in 2-4 weeks from contract signing to production. Timeline includes: system integration, voice model training for your use cases, agent configuration, and testing."
        />
        <Faq
          id="faq-3"
          question="Does Revve integrate with our CRM and existing systems?"
          answer="Yes. We have pre-built integrations with many tools, like Salesforce and HubSpot. For custom CRMs or collections platforms, we integrate via API and webhooks. We push call transcripts, recordings, and results data to your systems in real-time or batched to your data warehouse."
        />
        <Faq
          id="faq-4"
          question="How does pricing work? Is it per minute or per call?"
          answer="We charge an annual subscription to the platform, a one-time setup fee, and a charge by unique customers reached per month (not per minute or per call). This means if a customer receives 5 or 100 calls in a month, it's the same cost, giving you the freedom to reach your customers as much as you want without worrying about being over charged. Failed connection attempts don't count - only successful reach."
        />
        <Faq
          id="faq-5"
          question="Can we deploy Revve across multiple countries (Vietnam, Malaysia, Thailand)?"
          answer="Yes. Revve supports Vietnamese, Mandarin, Bahasa, and English with regional accent variations (Hanoi/Saigon Vietnamese, Malaysian Mandarin). Each geography can run localized campaigns while sharing the same platform infrastructure. Configuration is per-market to respect local regulations and customer preferences."
        />
        <Faq
          id="faq-6"
          question="Do we need IT or developers to update campaigns and scripts?"
          answer="No. Operations teams configure campaigns in plain language - like instructing a human agent. Change tone, messaging, workflows, or add new scenarios in minutes without code or IT tickets. IT handles initial integration and infrastructure, then business users manage day-to-day campaign operations independently."
        />
        <Faq
          id="faq-7"
          question="How does Revve's voice quality compare to other solutions? Will customers know it's AI?"
          answer="Revve uses a proprietary Vietnamese voice model trained specifically on banking conversations, with sub-1-second response time. We support regional accents (Hanoi, Saigon) and can clone your agent's voice (requires 2 hours of recording). Listen to samples on this website to see for yourself."
        />
        <Faq
          id="faq-8"
          question="Does Revve handle voice only, or can it manage chat and messaging too?"
          answer="Full omnichannel. Revve orchestrates voice calls, Zalo (personal and OA), WhatsApp, SMS, Facebook Messenger, web chat, and mobile app chat in unified workflows. For example, if a voice call fails, Revve can automatically send a Zalo message. When escalating to humans, agents see the conversation history across all channels."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing – hidden for now, keeping in codebase
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your business needs."
        plans={
          <>
            <Plan
              name="Starter"
              price="$12"
              period="/mo"
              subheadline={<p>Small teams getting started with shared inboxes</p>}
              features={[
                'Shared inbox for up to 2 mailboxes',
                'Tagging & assignment',
                'Private notes',
                'Automatic replies',
                'Email support',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Growth"
              price="$49"
              period="/mo"
              subheadline={<p>Growing teams needing collaboration and insights</p>}
              badge="Most popular"
              features={[
                'Everything in Starter',
                'Inbox Agent',
                'Unlimited mailboxes',
                'Collision detection',
                'Snippets and templates',
                'Reporting dashboard',
                'Slack integration',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />
            <Plan
              name="Pro"
              price="$299"
              period="/mo"
              subheadline={<p>Support-focused organizations and larger teams</p>}
              features={[
                'Everything in Growth',
                'Custom roles & permissions',
                'Automation engine',
                'API access',
                'SLA tracking',
                'SSO support',
                'SOC 2 compliance',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      */}
      {/* Call To Action */}
      <section id="call-to-action" className="py-16">
        <Container>
          <div className="rounded-4xl bg-brand-600 px-8 py-14 sm:px-14 sm:py-20">
            <h2 className="font-display text-3xl/9 font-medium tracking-[-0.03em] text-pretty text-white sm:text-[2.5rem]/10">
              Ready to scale your customer operations?
            </h2>
            <div className="mt-8">
              <figure className="flex flex-col items-start gap-1">
                <div className="relative drop-shadow-sm">
                  <div className="rounded-2xl bg-white/25 px-6 py-5">
                    <blockquote className="text-pretty text-white/80">
                      &ldquo;Revve AI&apos;s ability to provide a more natural, human-like response was a critical factor for us. It moves beyond the robotic interactions our customers dislike and allows for a more effective and positive re-engagement.&rdquo;
                    </blockquote>
                  </div>
                  <svg className="ml-8 h-3 w-5 text-white/25" viewBox="0 0 20 12" fill="currentColor" preserveAspectRatio="none">
                    <path d="M0 0L10 12L20 0Z" />
                  </svg>
                </div>
                <figcaption className="mt-3 flex items-end gap-3 pl-6">
                  <Image src="/img/logos/LOGO-VIB-Blue.png" alt="VIB" width={160} height={64} className="h-6 w-auto brightness-0 invert" />
                  <span className="text-sm leading-none text-white/60">VIB Contact Center Manager</span>
                </figcaption>
              </figure>
            </div>
            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <ButtonLink href="/request-demo" color="light" className="px-8 py-4 text-xl">
                Book a Demo
              </ButtonLink>
              <ul className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:gap-4">
                <li className="flex items-center gap-1.5"><svg className="size-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>30-min personalized demo</li>
                <li className="flex items-center gap-1.5"><svg className="size-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>Custom ROI analysis</li>
                <li className="flex items-center gap-1.5"><svg className="size-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>No commitment</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
