import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    getall(state,payload){
      console.log(payload);
      state.list = payload
    }
  },
  actions: {
    async getall({commit}){
       var {movieDetails} = await fetch('/getFilm').then(res =>res.json())
      commit('getall',movieDetails)
    },
  },
  modules: {
  }
})
