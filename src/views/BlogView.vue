<script setup>
import ContentBox from '@/templates/ContentBox.vue'
import { blogPosts } from '../utils/blog'
</script>

<template>
  <ContentBox>
    <article v-for="post in blogPosts" :key="post.slug" class="primary-container mb-3">
      <RouterLink :to="`/blog/${post.slug}`" class="block p-4">
        <h2>{{ post.title }}</h2>

        <p>{{ post.description }}</p>

        <time>{{ post.date }}</time>

        <div v-if="post.tags?.length" class="flex gap-1">
          <span v-for="tag in post.tags" :key="tag">
            {{ tag }}
          </span>
        </div>
      </RouterLink>
    </article>
  </ContentBox>
</template>
