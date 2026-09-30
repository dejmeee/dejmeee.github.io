import BlogPage from '@/pages/BlogPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage, meta: { title: 'blog - dejmeee' } },
    // { path: '/blog/:slug', component: BlogPost },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? "dejmeee's place"
})

export default router
