import { createRouter, createWebHistory } from "vue-router"

const Index = () => import("../view/Index.vue")
const Menu = () => import("../view/menu/Menu.vue")
const Promos = () => import("../view/promo/Promos.vue")

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/menus",
    name: "menu",
    component: Menu
  },
  {
    path: "/promotions",
    name: "promotions",
    component: Promos
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router