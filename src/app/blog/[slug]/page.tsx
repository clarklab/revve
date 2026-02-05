import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ButtonLink } from '@/components/elements/button'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { BlogPostHero } from '@/components/sections/blog-post-hero'
import { BlogRelatedPosts } from '@/components/sections/blog-related-posts'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/lib/blog/posts'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Revve AI',
    }
  }

  return {
    title: `${post.title} | Revve AI Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  return (
    <>
      <BlogPostHero title={post.title} category={post.category} author={post.author} readingTime={post.readingTime} image={post.image} />

      {/* Article Content */}
      <article className="pb-16">
        <div className="mx-auto max-w-2xl px-6">
          {/* Prose Content */}
          <div
            className="prose prose-brand dark:prose-invert max-w-none space-y-6 text-base/7 text-brand-700 dark:text-brand-400 [&_a]:font-semibold [&_a]:text-brand-950 [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-white [&_blockquote]:border-l-2 [&_blockquote]:border-brand-300 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-brand-600 dark:[&_blockquote]:border-brand-700 dark:[&_blockquote]:text-brand-400 [&_h2]:mt-12 [&_h2]:text-xl/8 [&_h2]:font-medium [&_h2]:text-brand-950 dark:[&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-lg/7 [&_h3]:font-medium [&_h3]:text-brand-950 dark:[&_h3]:text-white [&_hr]:my-8 [&_hr]:border-brand-200 dark:[&_hr]:border-brand-800 [&_li]:pl-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:text-brand-700 dark:[&_p]:text-brand-400 [&_strong]:font-semibold [&_strong]:text-brand-950 dark:[&_strong]:text-white [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-brand-200 [&_td]:px-4 [&_td]:py-2 dark:[&_td]:border-brand-700 [&_th]:border [&_th]:border-brand-200 [&_th]:bg-brand-100 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-brand-950 dark:[&_th]:border-brand-700 dark:[&_th]:bg-brand-800 dark:[&_th]:text-white [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* End CTA Box */}
          <div className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center dark:border-brand-800 dark:bg-brand-900">
            <h3 className="font-display text-xl/8 font-medium text-brand-950 dark:text-white">Ready to see it in action?</h3>
            <p className="mt-2 text-sm/6 text-brand-600 dark:text-brand-400">
              Stop losing deals to slow follow-up. Deploy AI agents that engage leads instantly.
            </p>
            <div className="mt-6">
              <ButtonLink href="#" size="lg">
                Book a Demo
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>

      <BlogRelatedPosts posts={relatedPosts} />

      <CallToActionSimple
        headline="Transform your lead response today"
        subheadline={
          <p>
            Join hundreds of teams using Revve AI to respond faster, convert more leads, and close deals around the clock.
          </p>
        }
        cta={
          <ButtonLink href="#" size="lg">
            Book a Demo
          </ButtonLink>
        }
      />
    </>
  )
}
