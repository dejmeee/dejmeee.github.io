import { Marked } from "marked"
import markedShiki from "marked-shiki"
import { createHighlighter } from "shiki"

const highlighter = await createHighlighter({
  themes: ["ayu-dark", "ayu-light"],
  langs: ["javascript", "typescript", "vue", "html", "css", "json", "markdown"],
})

const markdown = new Marked().use(
  markedShiki({
    highlight(code, lang) {
      return highlighter.codeToHtml(code, {
        lang: lang || "text",
        themes: { light: "ayu-light", dark: "ayu-dark" },
        defaultColor: "light-dark()",
      })
    },
  }),
)

export function renderMarkdown(source) {
  return markdown.parse(source)
}
