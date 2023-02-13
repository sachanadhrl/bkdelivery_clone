<script setup>
import { computed } from 'vue'

import store from '../store'
import MenuCard from '../components/MenuCard.vue'
import Carousel from '../components/Carousel.vue'

const allMenus = computed(() => store.state.menus.data)
store.dispatch("getMenus")

</script>

<template>
  <!-- <Carousel /> -->

  <div class="container">
    <h1 class="text-center md:text-3xl font-flame-bold text-yellow-800 my-6">
      Our Menus
    </h1>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-5">
      <MenuCard :allMenus="allMenus" />
    </div>
  </div>
</template>