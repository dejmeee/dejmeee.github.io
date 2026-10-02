<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <header class="p-3 2xl:px-0">
    <nav class="flex justify-between p-3 primary-container">
      <RouterLink to="/" class="sm:text-lg md:text-2xl font-jetbrains-mono nav-link hover:scale-102">
        dejmeee's place
      </RouterLink>
      <ul class="flex gap-2 md:gap-4 md:text-lg items-center">
        <li><RouterLink to="/about" class="inline-block nav-link hover:scale-105"> About </RouterLink></li>
        <li><RouterLink to="/blog" class="inline-block nav-link hover:scale-105"> Blog </RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@reference "../style.css";

.nav-link {
  @apply hover:underline transition-transform duration-150
  hover:text-tinted-primary-500 dark:hover:text-tinted-primary-300
  active:text-tinted-primary-600 dark:active:text-tinted-primary-500;
}
</style>
