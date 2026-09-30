<script setup>
import PageWrapper from '@/templates/PageWrapper.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <PageWrapper>
    <h1 class="text-tinted-primary-500">You did it!</h1>
    <p>Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the documentation</p>

    <RouterLink to="/blog">Link</RouterLink>
  </PageWrapper>
</template>
