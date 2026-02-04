import type { Metadata } from 'next'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { BlogCard } from '@/components/elements/blog-card'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { getAllPosts } from '@/lib/blog/posts'

export const metadata: Metadata = {
  title: 'Blog | Revve AI',
  description: 'Insights and playbooks for modern GTM teams. Strategies for AI-powered sales, lead conversion, and revenue growth.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex max-w-3xl flex-col gap-4">
            <Heading>Insights & Playbooks</Heading>
            <Text size="lg" className="text-pretty">
              Strategies, frameworks, and hard-won lessons for modern GTM teams building AI-powered sales motions.
            </Text>
          </div>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="pb-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} slug={post.slug} title={post.title} category={post.category} excerpt={post.excerpt} image={post.image} />
            ))}
          </div>
        </Container>
      </section>

      {/* Call To Action */}
      <CallToActionSimple
        headline="Ready to see it in action?"
        subheadline={
          <p>
            Join hundreds of teams using Revve AI to respond faster, convert more leads, and close deals around the clock.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Book a Demo
            </ButtonLink>
            <PlainButtonLink href="#" size="lg">
              See use cases <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
