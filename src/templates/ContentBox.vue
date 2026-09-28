<script setup>
import HeaderNav from './HeaderNav.vue'
</script>

<template>
  <div
    class="min-h-screen md:grid md:grid-cols-12 bg-mist-100 dark:bg-mist-950 text-black dark:text-white"
  >
    <div></div>
    <main class="md:col-span-10">
      <HeaderNav class="mb-3"></HeaderNav>
      <slot />
    </main>
    <div></div>
  </div>
</template>
