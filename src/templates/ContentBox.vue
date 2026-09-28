<script setup>
import FooterCopyright from './FooterCopyright.vue'
import HeaderNav from './HeaderNav.vue'
</script>

<template>
  <div
    class="min-h-screen md:grid md:grid-cols-12 bg-mist-100 dark:bg-mist-950 text-black dark:text-white"
  >
    <div></div>
    <main class="min-h-screen md:col-span-10 flex flex-col">
      <HeaderNav class="mb-3"></HeaderNav>
      <div class="px-2.5 lg:px-0"><slot /></div>
      <FooterCopyright class="mt-auto pb-2 text-center"></FooterCopyright>
    </main>
    <div></div>
  </div>
</template>
