import BlogPage from "@/pages/BlogPage.vue"
import NotFound from "@/pages/error/NotFound.vue"
import HomePage from "@/pages/HomePage.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomePage },
    { path: "/blog", component: BlogPage, meta: { title: "blog - dejmeee" } },
    // { path: '/blog/:slug', component: BlogPost },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? "dejmeee's place"
})

export default router
