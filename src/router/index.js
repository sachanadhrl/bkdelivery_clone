import { createRouter, createWebHistory } from "vue-router"

const Index = () => import("../view/Index.vue")

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router