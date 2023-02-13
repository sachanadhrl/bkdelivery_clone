import { createStore } from "vuex"

import { sanityApi } from '../_api/sanity-client'

const store = createStore({
  state: {
    menus: {
      data: {}
    }
  },
  actions: {
    async getMenus({ commit }) {
      const query = '*[_type == "menus"]'
      try {
        const allMenus = await sanityApi.fetch(query)
        setTimeout(() => {
          commit("GET_MENUS", allMenus)
        }, 2000)
      } catch (err) {
        throw err
      }
    }
  },
  mutations: {
    GET_MENUS: (state, menus) => {
      state.menus.data = menus
    }
  }
})

export default store