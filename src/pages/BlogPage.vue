<script setup>
import PageWrapper from "@/templates/PageWrapper.vue"
import { blogPosts } from "@/utils/blog"

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date))
}
</script>

<template>
  <PageWrapper>
    <h1 class="text-3xl mb-3">Blog posts</h1>

    <article v-for="post in blogPosts" :key="post.slug" class="my-2">
      <RouterLink :to="`/blog/${post.slug}`" class="block p-3 group post-container">
        <h2 class="text-lg">{{ post.title }}</h2>
        <p class="text-black/60 dark:text-white/60 mb-1.5">{{ post.description }}</p>

        <div class="flex flex-col md:flex-row gap-2 md:justify-between md:items-center">
          <div class="flex gap-2">
            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4" viewBox="0 -960 960 960" fill="currentColor">
                <path
                  d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
              </svg>
              <time :datetime="post.date_published">{{ formatDate(post.date_published) }}</time>
            </div>

            &bull;

            <div class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4" viewBox="0 -960 960 960" fill="currentColor">
                <path
                  d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
              <time :datetime="post.date_edited">{{ formatDate(post.date_edited) }}</time>
            </div>
          </div>
          <ul v-if="post.tags?.length" class="flex gap-1.5 md:justify-end items-center">
            <li class="text-black/60 dark:text-white/60">Tags:</li>
            <li v-for="tag in post.tags" :key="tag" class="post-container-secondary py-1 px-2">{{ tag }}</li>
          </ul>
        </div>
      </RouterLink>
    </article>
    <div class="flex justify-center text-sm text-black/60 dark:text-white/60">End of page</div>
  </PageWrapper>
</template>

<style scoped>
@reference "../style.css";

.post-container {
  @apply bg-tinted-surface-300 dark:bg-tinted-surface-900 border-2 border-tinted-surface-400 dark:border-tinted-surface-800;

  @variant active {
    @apply bg-tinted-surface-400 dark:bg-tinted-surface-925 border-2 border-tinted-surface-500 dark:border-tinted-surface-900;
  }

  @variant hover {
    @apply transition-transform duration-150 scale-99;
  }

  @variant focus {
    @apply bg-tinted-surface-400 dark:bg-tinted-surface-925 border-2 border-tinted-surface-500 dark:border-tinted-surface-900;
  }
}

.post-container-secondary {
  @apply bg-tinted-surface-400 dark:bg-tinted-surface-800 border-2 border-tinted-surface-500 dark:border-tinted-surface-700;

  @variant group-active {
    @apply bg-tinted-surface-500 dark:bg-tinted-surface-900 border-2 border-tinted-surface-600 dark:border-tinted-surface-800;
  }

  @variant group-hover {
    @apply transition-transform duration-150 scale-99;
  }

  @variant group-focus {
    @apply bg-tinted-surface-500 dark:bg-tinted-surface-900 border-2 border-tinted-surface-600 dark:border-tinted-surface-800;
  }
}
</style>
