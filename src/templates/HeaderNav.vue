<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="py-3 px-2 flex justify-between bg-mist-200 dark:bg-mist-900">
    <RouterLink to="/"
      ><h1 class="font-geist-mono text-xl sm:text-2xl lg:text-4xl">dejmeee's place</h1></RouterLink
    >
    <div class="flex gap-3 lg:text-xl items-center">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/blog">Blog</RouterLink>
    </div>
  </nav>
</template>
