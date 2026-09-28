import { parse } from 'yaml'

const posts = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const blogPosts = Object.entries(posts)
  .map(([path, raw]) => {
    const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)

    if (!match) {
      // throw new Error(`Missing frontmatter in ${path}`)
      console.warn(`Skipping blog post without frontmatter: ${path}`)
      return null
    }

    const [, frontmatter, content] = match
    const data = parse(frontmatter)

    const filename = path.split('/').pop()
    const slug = filename.replace(/\.md$/, '')

    return {
      slug,
      ...data,
      content,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPost(slug) {
  return blogPosts.find((post) => post.slug === slug)
}
