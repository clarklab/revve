import { marked } from 'marked'
import type { BlogPost } from './types'

// Map slugs to images
const blogImages: Record<string, string> = {
  'speed-to-lead': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
  'no-code-playbook': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
  'multi-channel': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
  '3am-lead': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80',
  'chatbot-vs-agent': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80',
  'native-voice-announcement': 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80',
}

export function parseMarkdown(markdown: string, slug: string): BlogPost {
  const lines = markdown.split('\n')

  // Extract title from first # line
  const titleLine = lines.find((line) => line.startsWith('# '))
  const title = titleLine ? titleLine.replace(/^#\s+/, '') : 'Untitled'

  // Extract author and category from **By {Author} | {Category}** pattern
  const authorLine = lines.find((line) => line.match(/^\*\*By .+ \| .+\*\*$/))
  let author = 'Revve AI'
  let category = 'Insights'

  if (authorLine) {
    const match = authorLine.match(/^\*\*By (.+) \| (.+)\*\*$/)
    if (match) {
      author = match[1]
      category = match[2]
    }
  }

  // Find excerpt: first paragraph after the first horizontal rule
  let excerpt = ''
  let foundFirstDivider = false
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (foundFirstDivider) {
        // Skip empty lines and headers after divider
        let j = i + 1
        while (j < lines.length && (lines[j].trim() === '' || lines[j].trim().startsWith('#'))) {
          j++
        }
        // Collect paragraph text until empty line or divider
        const excerptLines: string[] = []
        while (j < lines.length && lines[j].trim() !== '' && lines[j].trim() !== '---' && !lines[j].trim().startsWith('#')) {
          excerptLines.push(lines[j])
          j++
        }
        excerpt = excerptLines
          .join(' ')
          .trim()
          // Strip any remaining markdown formatting
          .replace(/\*\*/g, '')
          .replace(/\*/g, '')
          .replace(/`/g, '')
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        break
      }
      foundFirstDivider = true
    }
  }

  // Calculate reading time (average 200 words per minute)
  const wordCount = markdown.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  // Parse markdown to HTML
  const content = marked.parse(markdown) as string

  return {
    slug,
    title,
    author,
    category,
    excerpt,
    content,
    readingTime,
    image: blogImages[slug] || 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80',
  }
}

export function extractSlugFromFilename(filename: string): string {
  // blog-01-speed-to-lead.md → speed-to-lead
  return filename
    .replace(/^blog-\d+-/, '')
    .replace(/\.md$/, '')
}
