<script setup>
import ContentBox from '@/templates/ContentBox.vue'
</script>

<template>
  <ContentBox>
    <h1 class="text-red-500">Hello world</h1>
    <p>This is a demo :D</p>
    <RouterLink to="/about">Go to about</RouterLink>
  </ContentBox>
</template>
