<script setup>
import PageWrapper from "@/templates/PageWrapper.vue"
import { RouterLink, useRoute } from "vue-router"
import { randomErrorKaomoji } from "@/utils/kaomoji"

const kaomoji = randomErrorKaomoji()
const route = useRoute()
</script>

<template>
  <PageWrapper>
    <div class="flex flex-col items-center justify-items-center min-h-full">
      <h2>{{ kaomoji }}</h2>
      <h1>Error {{ route.params.code }}</h1>
      <RouterLink to="/">Go back home</RouterLink>
    </div>
  </PageWrapper>
</template>
