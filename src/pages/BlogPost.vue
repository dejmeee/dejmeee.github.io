<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { marked } from "marked"
import { getPost } from "../utils/blog"
import PageWrapper from "@/templates/PageWrapper.vue"
import { randomErrorKaomoji } from "@/utils/kaomoji"

const kaomoji = randomErrorKaomoji()

const route = useRoute()

const post = computed(() => getPost(route.params.slug))

const html = computed(() => {
  if (!post.value) return ""
  return marked(post.value.content)
})
</script>

<template>
  <PageWrapper>
    <!-- REALLY TEMPORARY STYLES, literally just the garbage from the old site copied over for visualisation -->
    <div v-if="post">
      <article>
        <div class="flex gap-4">
          <RouterLink to="/blog" class="inline-flex gap-1 items-end primary-container px-3 py-1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="1.25rem"
              fill="currentColor">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg
            ><span class="text-xl">Back</span></RouterLink
          >
          <aside class="flex gap-1 items-center text-xl">
            <h1 class="font-medium">{{ post.title }}</h1>
            &bull;
            <p v-if="post.description">
              {{ post.description }}
            </p>
            &bull;
            <time>{{ post.date }}</time>
          </aside>
        </div>
        <hr class="mt-4 border-0.5 border-mist-500 dark:border-mist-700" />
        <!-- WHY IS THIS SQUISHED TO ONE SIDE AND NOT TAKING UP THE FULL PAGE LIKE ON THE OLD SITE???? -->
        <div class="prose dark:prose-invert max-w-none mt-4" v-html="html" />
      </article>
    </div>

    <div v-else>
      <h2>{{ kaomoji }}</h2>
      <h1>404</h1>
      <p>Post not found.</p>
    </div>
  </PageWrapper>
</template>
