import BlogPost from '@/views/BlogPost.vue'
import BlogView from '@/views/BlogView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/blog', component: BlogView },
    { path: '/blog/:slug', component: BlogPost },
  ],
})

export default router
