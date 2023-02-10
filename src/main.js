import { createApp } from 'vue'
import 'tw-elements'

import router from './router'
import store from './store'
import './style.scss'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiShoppingCart } from 'oh-vue-icons/icons'
addIcons(HiShoppingCart)

createApp(App)
.component('vIcon', OhVueIcon)
.use(router)
.use(store)
.mount('#app')
