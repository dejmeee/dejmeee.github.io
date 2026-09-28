<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { getPost } from '../utils/blog'
import ContentBox from '@/templates/ContentBox.vue'

const route = useRoute()

const post = computed(() => getPost(route.params.slug))

const html = computed(() => {
  if (!post.value) return ''
  return marked(post.value.content)
})
</script>

<template>
  <ContentBox>
    <main v-if="post">
      <article>
        <h1>{{ post.title }}</h1>

        <p v-if="post.description">
          {{ post.description }}
        </p>

        <time>{{ post.date }}</time>

        <div class="prose dark:prose-invert" v-html="html" />
      </article>
    </main>

    <main v-else>
      <h1>404</h1>
      <p>Post not found.</p>
    </main>
  </ContentBox>
</template>
