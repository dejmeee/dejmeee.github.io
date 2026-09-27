<script setup>
import HeaderNav from './HeaderNav.vue'
</script>

<template>
  <div
    class="min-h-screen grid grid-cols-6 bg-mist-100 dark:bg-mist-900 text-black dark:text-white"
  >
    <div></div>
    <main class="col-span-4">
      <nav><HeaderNav></HeaderNav></nav>
      <slot />
    </main>
    <div></div>
  </div>
</template>
