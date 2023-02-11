import { createApp } from 'vue'
import 'tw-elements'

import router from './router'
import store from './store'
import './style.scss'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { HiSolidShoppingCart, HiMenu, HiX } from 'oh-vue-icons/icons'
addIcons(HiSolidShoppingCart, HiMenu, HiX)

createApp(App)
.component('vIcon', OhVueIcon)
.use(router)
.use(store)
.mount('#app')
