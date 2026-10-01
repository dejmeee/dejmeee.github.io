<script setup>
import PageWrapper from "@/templates/PageWrapper.vue"
import { RouterLink, useRoute } from "vue-router"
import { randomErrorKaomoji } from "@/utils/kaomoji"

const kaomoji = randomErrorKaomoji()
const route = useRoute()
</script>

<template>
  <PageWrapper>
    <div class="mx-auto flex flex-col gap-6 items-center justify-center min-h-full">
      <h2 class="text-6xl md:text-8xl">{{ kaomoji }}</h2>
      <h1 class="text-2xl md:text-4xl">Error {{ route.params.code }}</h1>
      <RouterLink to="/" class="button-container px-4 py-2">Go back home</RouterLink>
    </div>
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
