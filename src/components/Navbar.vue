<script setup>
import { ref } from 'vue'

import { navLinks } from '../constants'
import { logo } from '../assets/img/images'

const mobileMenu = ref(false)
</script>

<template>
  <nav class="navbar-container">
    <div class="navbar-wrapper mx-auto">
      <button class="mobile-menu-trigger" @click="mobileMenu = !mobileMenu">
        <vIcon v-if="!mobileMenu" name="hi-menu" />
        <vIcon v-else name="hi-x" />
      </button>
      <ul class="mobile-menu" :class="[mobileMenu === true ? 'active' : '']">
        <li class="mobile-menu__list">
          <router-link to="#" class="mobile-menu__link">
            Home
          </router-link>
        </li>
        <li v-for="(link, index) in navLinks" :key="index" class="mobile-menu__list">
          <router-link :to="link.name" class="mobile-menu__link">
            <span class="mobile-menu__link--subtitle">{{ link.subtitle }}</span>
            <span class="mobile-menu__link--title">{{ link.title }}</span>
          </router-link>
        </li>
        <li class="mobile-menu__list mobile-menu__list--login">
          <router-link to="#" class="mobile-menu__link">Login</router-link>
        </li>
      </ul>
      <div class="flex items-center gap-10">
        <div class="navbar-logo">
          <router-link to="/">
            <img :src="logo" alt="Brand logo" class="navbar-logo__img">
          </router-link>
        </div>
        <ul class="navbar-menu-left">
          <li v-for="(link, index) in navLinks" :key="index" class="navbar-menu__list">
            <router-link :to="link.name" class="navbar-menu__link">
              <span class="navbar-menu__link--subtitle">{{ link.subtitle }}</span>
              <span class="navbar-menu__link--title">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="navbar-menu-right">
        <li class="navbar-menu__list">
          <router-link to="#" class="navbar-menu__link">Login</router-link>
        </li>
        <li class="navbar-menu__list navbar-menu__list--cart">
          <router-link to="#" class="navbar-menu__link">
            <vIcon name="hi-solid-shopping-cart" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>