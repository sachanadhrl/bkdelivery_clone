import { createStore } from "vuex"

import { urlFor, sanityApi } from '../_api/sanity-client'

const store = createStore({
  state: {
    menus: {
      data: {}
    }
  },
  actions: {
    async getMenus({ commit }) {
      const query = '*[_type == "menus"]'
      const allMenus = await sanityApi.fetch(query)
        try {
          commit("GET_MENUS", allMenus)
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