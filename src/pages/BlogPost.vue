<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { ref, onMounted, onUnmounted, watch } from "vue"
import { marked } from "marked"
import { renderMarkdown } from "@/utils/markdown"
import { getPost } from "@/utils/blog"
import { randomErrorKaomoji } from "@/utils/kaomoji"
import PageWrapper from "@/templates/PageWrapper.vue"

// Error
const kaomoji = randomErrorKaomoji()

// Post data
const route = useRoute()
const post = computed(() => getPost(route.params.slug))
// const html = computed(() => {
//   if (!post.value) return ""
//   return marked(post.value.content)
// })

const html = ref("")
const isRendering = ref(false)

watch(
  () => post.value?.content,
  async (content) => {
    if (!content) {
      html.value = ""
      return
    }

    isRendering.value = true
    html.value = await renderMarkdown(content)
    isRendering.value = false
  },
  { immediate: true },
)

// Up button
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

const showButton = ref(false)
const handleScroll = () => {
  showButton.value = window.scrollY > 300
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<template>
  <PageWrapper>
    <div v-if="isRendering">Loading code...</div>

    <div v-else-if="post">
      <article>
        <div class="prose dark:prose-invert mt-4" v-html="html" />
      </article>
    </div>

    <div v-else class="mx-auto flex flex-col gap-6 items-center justify-center min-h-full">
      <h2 class="text-6xl md:text-8xl">{{ kaomoji }}</h2>
      <h1 class="text-2xl md:text-4xl">404 - post not found</h1>
      <RouterLink to="/blog" class="button-container px-4 py-2">Go back to the blog list</RouterLink>
    </div>

    <button v-if="showButton" class="fixed right-6 bottom-6 primary-container" @click="scrollToTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" class="h-8">
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
      </svg>
    </button>
  </PageWrapper>
</template>

<style scoped>
@reference "../style.css";

.button-container {
  @apply bg-tinted-surface-300 dark:bg-tinted-surface-900 border-2 border-tinted-surface-400 dark:border-tinted-surface-800;

  @variant active {
    @apply bg-tinted-surface-400 dark:bg-tinted-surface-925 border-2 border-tinted-surface-500 dark:border-tinted-surface-900;
  }

  @variant focus {
    @apply bg-tinted-surface-400 dark:bg-tinted-surface-925 border-2 border-tinted-surface-500 dark:border-tinted-surface-900;
  }
}
</style>
