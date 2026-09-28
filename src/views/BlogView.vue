<script setup>
import ContentBox from '@/templates/ContentBox.vue'
import { blogPosts } from '../utils/blog'
</script>

<template>
  <ContentBox>
    <article v-for="post in blogPosts" :key="post.slug" class="bg-mist-500 mb-4 p-4">
      <RouterLink :to="`/blog/${post.slug}`">
        <h2>{{ post.title }}</h2>

        <p>{{ post.description }}</p>

        <time>{{ post.date }}</time>
      </RouterLink>
    </article>
  </ContentBox>
</template>
