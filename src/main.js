// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store'
import hljs from 'highlight.js'
import './assets/css/markdown/dark.scss' // 引入代码高亮的css

import axios from 'axios'
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
Vue.use(iView)
Vue.config.productionTip = false

// 封装成一个指令
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
