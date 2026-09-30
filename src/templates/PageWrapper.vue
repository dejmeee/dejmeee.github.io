<script setup>
import PageFooter from "./PageFooter.vue"
import PageHeader from "./PageHeader.vue"
</script>

<template>
  <div
    class="min-h-screen bg-tinted-surface-200 dark:bg-tinted-surface-950 text-black dark:text-white md:flex justify-center">
    <div class="mx-auto w-full max-w-7xl min-h-screen flex flex-col">
      <PageHeader></PageHeader>
      <main class="px-4 xl:px-2"><slot /></main>
      <PageFooter class="mt-auto py-1"></PageFooter>
    </div>
  </div>
</template>
