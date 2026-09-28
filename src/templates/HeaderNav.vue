<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="py-5 px-3 flex justify-between bg-mist-200 dark:bg-mist-900 border-b-2 sm:border-2 sm:mt-3 border-mist-300 dark:border-mist-800"
  >
    <RouterLink to="/"
      ><h1
        class="font-geist-mono text-xl sm:text-2xl lg:text-4xl hover:underline hover:text-pfp-primary"
      >
        dejmeee's place
      </h1></RouterLink
    >
    <div class="flex gap-3 lg:text-xl items-center">
      <RouterLink to="/projects" class="hover:underline hover:text-pfp-primary"
        >Projects</RouterLink
      >
      <RouterLink to="/blog" class="hover:underline hover:text-pfp-primary">Blog</RouterLink>
    </div>
  </nav>
</template>
