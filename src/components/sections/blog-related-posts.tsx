import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'
import { Subheading } from '../elements/subheading'
import { BlogCard } from '../elements/blog-card'
import type { BlogPost } from '@/lib/blog/types'

export function BlogRelatedPosts({
  posts,
  className,
  ...props
}: {
  posts: BlogPost[]
} & ComponentProps<'section'>) {
  if (posts.length === 0) return null

  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container>
        <Subheading className="mb-10">Continue reading</Subheading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} slug={post.slug} title={post.title} category={post.category} excerpt={post.excerpt} image={post.image} />
          ))}
        </div>
      </Container>
    </section>
  )
}
