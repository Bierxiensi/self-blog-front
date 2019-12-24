<template>
  <div>
    <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
      backLearn
     <p v-html="test"></p>
    </Content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: ''
    }
  }
}
</script>

<style scoped>

</style>
