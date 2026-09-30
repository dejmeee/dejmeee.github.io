<script setup>
import PageFooter from './PageFooter.vue';
import PageHeader from './PageHeader.vue';
</script>

<template>
  <PageHeader></PageHeader>
  <main>
    <slot></slot>
  </main>
  <PageFooter></PageFooter>
</template>
