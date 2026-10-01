import AboutPage from "@/pages/AboutPage.vue"
import BlogPage from "@/pages/BlogPage.vue"
import BlogPost from "@/pages/BlogPost.vue"
import ErrorPage from "@/pages/ErrorPage.vue"
import HomePage from "@/pages/HomePage.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutPage, meta: { title: "about - dejmeee" } },
    // Blog
    { path: "/blog", component: BlogPage, meta: { title: "blog - dejmeee" } },
    { path: "/blog/:slug", component: BlogPost },
    // Errors
    { path: "/error/:code", name: "error-page", component: ErrorPage, meta: { title: "error - dejmeee" } },
    { path: "/:pathMatch(.*)*", redirect: "/error/404" },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? "dejmeee's place"
})

export default router
