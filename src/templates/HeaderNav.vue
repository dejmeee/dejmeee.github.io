<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="py-4 px-6 flex justify-between primary-container sm:mt-4">
    <RouterLink to="/">
      <h1
        class="font-geist-mono text-xl sm:text-2xl lg:text-4xl hover:underline hover:text-pfp-primary"
      >
        dejmeee's place
      </h1>
    </RouterLink>
    <div class="flex gap-5 lg:text-xl items-center">
      <RouterLink to="/projects" class="hover:underline hover:text-pfp-primary"
        >Projects</RouterLink
      >
      <RouterLink to="/blog" class="hover:underline hover:text-pfp-primary">Blog</RouterLink>
    </div>
  </nav>
</template>
