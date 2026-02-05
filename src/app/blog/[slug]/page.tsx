import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
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

        </div>
      </article>

      <BlogRelatedPosts posts={relatedPosts} />

      {/* Call To Action */}
      <section className="py-16">
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
