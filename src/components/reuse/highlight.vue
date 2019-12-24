<template>
<div></div>
</template>

<script>
import '@/assets/css/markdown/dark.scss' // 引入代码高亮的css
import hljs from 'highlight.js'
import Vue from 'vue'
export default {
  name: 'highlight'
}
// 封装成一个指令
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
</script>

<style scoped>

</style>
