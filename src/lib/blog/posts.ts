import fs from 'fs'
import path from 'path'
import { parseMarkdown, extractSlugFromFilename } from './parser'
import type { BlogPost } from './types'

const BLOG_DIR = path.join(process.cwd(), 'blog-posts')

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'))

  const posts = files.map((file) => {
    const filePath = path.join(BLOG_DIR, file)
    const markdown = fs.readFileSync(filePath, 'utf-8')
    const slug = extractSlugFromFilename(file)
    return parseMarkdown(markdown, slug)
  })

  // Reverse so newest posts (highest number) appear first
  return posts.reverse()
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'))

  for (const file of files) {
    const fileSlug = extractSlugFromFilename(file)
    if (fileSlug === slug) {
      const filePath = path.join(BLOG_DIR, file)
      const markdown = fs.readFileSync(filePath, 'utf-8')
      return parseMarkdown(markdown, slug)
    }
  }

  return null
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  const allPosts = getAllPosts()
  const otherPosts = allPosts.filter((post) => post.slug !== currentSlug)

  // Return random selection of posts
  const shuffled = otherPosts.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'))
  return files.map((file) => extractSlugFromFilename(file))
}
