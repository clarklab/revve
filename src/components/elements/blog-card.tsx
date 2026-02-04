import Link from 'next/link'
import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Eyebrow } from './eyebrow'
import { BlogImage } from './blog-image'
import { ArrowNarrowRightIcon } from '../icons/arrow-narrow-right-icon'

export function BlogCard({
  slug,
  title,
  category,
  excerpt,
  image,
  className,
  ...props
}: {
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
} & ComponentProps<'article'>) {
  return (
    <article
      className={clsx(
        'group flex flex-col rounded-4xl border border-taupe-200 bg-white p-5 transition-colors hover:border-taupe-300 dark:border-taupe-800 dark:bg-taupe-900 dark:hover:border-taupe-700',
        className,
      )}
      {...props}
    >
      <Link href={`/blog/${slug}`} className="block overflow-hidden rounded-2xl">
        <BlogImage
          src={image}
          alt={title}
          className="transition-transform duration-300 group-hover:scale-105"
          style={{ height: '180px', width: '100%' }}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 px-1 pt-5">
        <Eyebrow>{category}</Eyebrow>
        <h2 className="font-display text-xl/7 font-medium tracking-[-0.02em] text-taupe-950 dark:text-white">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>
        <p className="line-clamp-3 text-sm/6 text-taupe-700 dark:text-taupe-400">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm/7 font-medium text-taupe-950 transition-colors hover:text-taupe-700 dark:text-white dark:hover:text-taupe-300"
        >
          Read article <ArrowNarrowRightIcon className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
