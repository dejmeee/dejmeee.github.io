<script setup>
import PageFooter from "./PageFooter.vue"
import PageHeader from "./PageHeader.vue"
</script>

<template>
  <div
    class="min-h-screen md:flex justify-center bg-tinted-surface-200 dark:bg-tinted-surface-950 text-black dark:text-white">
    <div class="mx-auto w-full max-w-6xl min-h-screen flex flex-col tab-focus">
      <PageHeader></PageHeader>
      <main class="px-5 xl:px-2"><slot /></main>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>
