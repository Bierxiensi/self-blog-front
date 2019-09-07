<style scoped>
  .layout-footer-center{
    text-align: center;
    z-index: 0
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <myHeader></myHeader>
      <router-view></router-view>
      <Footer class="layout-footer-center">2019-2099 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<script>
import myHeader from '../reuse/header'
export default {
  components: {
    myHeader
  },
  data () {
    return {

    }
  }
}
</script>
