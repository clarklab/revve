import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { HeroFloatingCards } from '@/components/elements/hero-floating-cards'
import { HeroFlowDiagram } from '@/components/elements/hero-flow-diagram'
import { Link } from '@/components/elements/link'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import { FeatureGrid } from '@/components/sections/feature-grid'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={<AnnouncementBadge href="/blog/native-voice-announcement" text={<><strong>New</strong>: Revve Native Voice is live</>} cta="Read more" />}
        headline="Customer support that feels like a conversation."
        subheadline={
          <p>
            Resolve routine issues automatically, escalate complex cases with full context, and keep your systems in sync across your customer channels.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
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
            <Screenshot className="rounded-lg" wallpaper="brand" placement="bottom">
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
        }
        footer={
          <div className="flex flex-col items-center gap-6">
            <p className="font-mono text-xs font-bold uppercase tracking-wide text-brand-600 dark:text-brand-400">Trusted by leading companies</p>
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
            <FeatureGrid />
          </div>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Revve does it all"
        headline="Automate customer operations across all channels from one platform"
        subheadline={
          <p>
            From first contact to resolution, Revve orchestrates your customer workflows so you can scale operations without increasing headcount.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="brand" placement="bottom-right">
                  <Image
                    src="/img/screenshots/1-left-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-left-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-left-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-left-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-left-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-left-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-left-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Shared Inbox"
              subheadline={
                <p>
                  Keep every customer conversation in one clean, collaborative inbox. A single source of truth is much
                  easier to ignore.
                </p>
              }
              cta={
                <Link href="#">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="brand" placement="bottom-left">
                  <Image
                    src="/img/screenshots/1-right-1000-top-800.webp"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-right-1000-top-800.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-660.webp"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-right-1800-top-660.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/1-right-1300-top-1300.webp"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-right-1300-top-1300.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/1-right-1800-top-1250.webp"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/1-color-taupe-right-1800-top-1250.webp"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Inbox Agent"
              subheadline={
                <p>Get valuable context without having to read through your customer's long, angry email thread.</p>
              }
              cta={
                <Link href="#">
                  See how it works <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Built for scale"
        headline="Everything needed to scale operations"
        subheadline={
          <p>
            Deploy AI agents that scale operations and delight customers, all with no code. We don't mean <em>low code</em>, we mean <strong>literally no code. Not one line</strong>.
          </p>
        }
      >
        <Stat stat="2x" text="Resolved cases with complex case hand off with full history." />
        <Stat stat="20k" text="Applications recovered per month" />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="What our customers are saying"
        subheadline={<p>We've given these customers a significant discount in exchange for their honest reviews.</p>}
      >
        <Testimonial
          quote={
            <p>
              Revve AI's ability to provide a more natural, human-like response was a critical factor for us. It moves beyond the robotic interactions our customers dislike and allows for a more effective and positive re-engagement.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="VIB Contact Center Manager"
          byline="Contact Center Manager at VIB"
        />
        <Testimonial
          quote={
            <p>
              We use Oatmeal's automation features to make cancellation requests disappear into a black hole, improving
              our retention rates by over 300%.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Lynn Marshall"
          byline="Founder at Pine Labs"
        />
        <Testimonial
          quote={
            <p>
              I've been using the spare time that Oatmeal has freed up to work not just one, but two other jobs, all
              while hitting my core KPIs. My bosses have no idea.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Rajat Singh"
          byline="Head of Support at Concise"
        />
        <Testimonial
          quote={
            <p>
              Oatmeal has given us key insights into how much our customers absolutely hate using our product and how we
              can improve it to stop them from leaving us.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="John Walters"
          byline="CPO at Orbital"
        />
        <Testimonial
          quote={
            <p>
              As a solo founder, Oatmeal has been a lifesaver. It makes it look like Looply is an actual company with
              multiple employees, when in reality it's just me and an AI.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Noah Gold"
          byline="CEO at Looply"
        />
        <Testimonial
          quote={
            <p>
              Thanks to Oatmeal, we've managed to cut our support costs in half by laying off dozens of employees, while
              still improving response times and customer satisfaction.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Mark Levinson"
          byline="COO at Quirk"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion
        id="faqs"
        headline="Questions & Answers"
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
      {/* Pricing */}
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
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to make customer support feel simple again?"
        subheadline={
          <p>
            Join hundreds of teams using Oatmeal to deliver faster, friendlier email support — using a massive network
            of low wage workers stationed around the globe
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Book a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
