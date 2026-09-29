<script setup>
import ContentBox from '@/templates/ContentBox.vue'
import { blogPosts } from '../utils/blog'
</script>

<template>
  <ContentBox>
    <h1 class="text-2xl font-medium mb-2">Blog posts</h1>
    <article
      v-for="post in blogPosts"
      :key="post.slug"
      class="primary-container mb-3 transition-transform duration-100 ease-in-out hover:scale-99"
    >
      <RouterLink :to="`/blog/${post.slug}`" class="block p-4 group">
        <div class="flex flex-col gap-1">
          <div
            class="flex gap-1 text-xl font-semibold group-hover:text-pfp-primary group-hover:underline"
          >
            <h2>{{ post.title }}</h2>
            <!-- &bull;
            <time>{{ post.date }}</time> -->
          </div>
          <p>{{ post.description }}</p>
          <div v-if="post.tags?.length" class="flex gap-1">
            <span v-for="tag in post.tags" :key="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </RouterLink>
    </article>
  </ContentBox>
</template>
