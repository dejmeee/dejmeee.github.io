<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <header class="p-2 2xl:px-0">
    <nav class="flex justify-between p-3 primary-container">
      <RouterLink to="/" class="text-lg md:text-2xl font-jetbrains-mono link"> dejmeee's place </RouterLink>
      <div class="flex gap-4 md:text-lg items-center">
        <RouterLink to="/about" class="link"> About </RouterLink>
        <RouterLink to="/blog" class="link"> Blog </RouterLink>
        <RouterLink to="/not-a-page" class="link"> 404 Test </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
@reference "../style.css";

.link {
  @apply hover:text-tinted-primary-300 hover:underline active:text-tinted-primary-500;
}
</style>
