<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <header class="p-3 2xl:px-0">
    <nav class="flex justify-between p-3 primary-container">
      <RouterLink to="/" class="text-lg md:text-2xl font-jetbrains-mono nav-link"> dejmeee's place </RouterLink>
      <ul class="flex gap-4 md:text-lg items-center">
        <li><RouterLink to="/about" class="nav-link"> About </RouterLink></li>
        <li><RouterLink to="/blog" class="nav-link"> Blog </RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@reference "../style.css";

.nav-link {
  @apply hover:underline hover:text-tinted-primary-500 dark:hover:text-tinted-primary-300 active:text-tinted-primary-600 dark:active:text-tinted-primary-500;
}
</style>
