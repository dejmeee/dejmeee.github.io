import { Marked } from "marked"
import markedShiki from "marked-shiki"
import { createHighlighter } from "shiki"

const highlighter = await createHighlighter({
  themes: ["one-dark-pro"],
  langs: ["javascript", "typescript", "vue", "html", "css", "json", "bash", "markdown"],
})

const markdown = new Marked().use(
  markedShiki({
    highlight(code, lang) {
      return highlighter.codeToHtml(code, {
        lang: lang || "text",
        theme: "one-dark-pro",
      })
    },
  }),
)

export function renderMarkdown(source) {
  return markdown.parse(source)
}
