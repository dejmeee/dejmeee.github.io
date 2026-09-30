<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <header class="p-2 2xl:px-0">
    <nav
      class="flex justify-between p-3 bg-tinted-surface-300 dark:bg-tinted-surface-900 border-2 border-tinted-surface-400 dark:border-tinted-surface-800">
      <RouterLink to="/" class="text-2xl hover:text-tinted-primary-300 hover:underline active:text-tinted-primary-500">
        dejmeee's place
      </RouterLink>
      <div class="flex gap-3 text-lg">
        <RouterLink to="/blog" class="hover:text-tinted-primary-300 hover:underline active:text-tinted-primary-500">
          Blog
        </RouterLink>
        <RouterLink
          to="/not-a-page"
          class="hover:text-tinted-primary-300 hover:underline active:text-tinted-primary-500">
          404
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
