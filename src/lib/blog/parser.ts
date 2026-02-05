import { marked } from 'marked'
import type { BlogPost } from './types'

// Map slugs to images
const blogImages: Record<string, string> = {
  'speed-to-lead': '/img/blog/speed-to-lead.webp',
  'no-code-playbook': '/img/blog/no-code-playbook.webp',
  'multi-channel': '/img/blog/multi-channel.webp',
  '3am-lead': '/img/blog/3am-lead.webp',
  'chatbot-vs-agent': '/img/blog/chatbot-vs-agent.webp',
  'native-voice-announcement': '/img/blog/native-voice-announcement.webp',
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
    image: blogImages[slug] || '/img/blog/speed-to-lead.webp',
  }
}

export function extractSlugFromFilename(filename: string): string {
  // blog-01-speed-to-lead.md → speed-to-lead
  return filename
    .replace(/^blog-\d+-/, '')
    .replace(/\.md$/, '')
}
