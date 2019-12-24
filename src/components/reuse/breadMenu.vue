<template>
  <div style="background-color: #bcbcbc; font-size: 30px">
    <div>
      <span>首页</span>
      <span>>></span>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'breadMenu',
  created () {
    console.log(9, this.$route.params.article)
  }
}
</script>

<style scoped>

</style>
