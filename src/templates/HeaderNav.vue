<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="py-5 px-3 flex justify-between bg-mist-200 dark:bg-mist-900 border-b-2 sm:border-x-2 border-mist-300 dark:border-mist-800"
  >
    <RouterLink to="/"
      ><h1 class="font-geist-mono text-xl sm:text-2xl lg:text-4xl">dejmeee's place</h1></RouterLink
    >
    <div class="flex gap-3 lg:text-xl items-center">
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
    </div>
  </nav>
</template>
