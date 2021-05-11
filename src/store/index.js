import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:20
  },
  mutations: {
    add(state){
      state.count++
    },
    jian(state){
      state.count=state.count-4
    }
  },
  actions: {
    jian1(context){
      setTimeout(() => {
        context.commit("jian")
      }, 2000);
      
    }
  },
  modules: {
  }
})
