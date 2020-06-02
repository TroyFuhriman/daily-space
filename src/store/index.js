import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=OrFTPutMv7aBxx4IxuOy0TFnHBfdd7G6phXqwMbD"
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    space: []
  },
  mutations: {
    space(state, data) {
      state.space = data
    }
  },
  actions: {
    async searchApi({ commit, dispatch }) {
      try {
        let res = await _api.get('')
        console.log(res.data)
        commit("space", res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
