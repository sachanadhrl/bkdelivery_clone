<script setup>
import { useRouter } from 'vue-router'

import { urlFor } from '../_api/sanity-client'

const router = useRouter()

const props = defineProps({
  allMenus: Object
})
</script>

<template>
  <div v-for="menu in allMenus" :key="menu.menu_slug?.current"
    @click="router.push({ name: 'menus-variant', params: { slug: menu.menu_slug?.current } })"
    class="card cursor-pointer">
    <div class="card-header">
      <img :src="urlFor(menu.menu_image)" :alt="menu.menu_name" class="card-img">
    </div>
    <div class="card-body flex justify-between items-start gap-2">
      <h2 class="card-title">
        {{ menu.menu_name }}
      </h2>
      <router-link :to="{ name: 'menus-variant', params: { slug: menu.menu_slug?.current } }"
        class="btn btn-primary hidden lg:block">
        Order
      </router-link>
    </div>
  </div>
</template>