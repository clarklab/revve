import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Eyebrow } from '../elements/eyebrow'
import { Heading } from '../elements/heading'
import { BlogImage } from '../elements/blog-image'

export function BlogPostHero({
  title,
  category,
  author,
  readingTime,
  image,
  className,
  ...props
}: {
  title: string
  category: string
  author: string
  readingTime: number
  image: string
} & ComponentProps<'header'>) {
  return (
    <header className={clsx('py-16 sm:py-20', className)} {...props}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Eyebrow>{category}</Eyebrow>
            <Heading className="text-4xl/10 sm:text-5xl/12">{title}</Heading>
            <div className="flex items-center gap-2 text-sm/7 text-brand-600 dark:text-brand-400">
              <span>{author}</span>
              <span aria-hidden="true">·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
          <BlogImage
            src={image}
            alt={title}
            className="rounded-2xl"
            style={{ height: '400px', width: '100%' }}
          />
        </div>
      </div>
    </header>
  )
}
