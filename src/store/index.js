import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
import tag from './modules/tag'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    article,
    tag
  }
})
export default store
