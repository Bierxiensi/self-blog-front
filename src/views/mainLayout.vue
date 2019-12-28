<style scoped>
  .layout-footer-center{
    text-align: center;
    z-index: 0
  }
  #main_layout{
    /*加载背景图*/
    /*background-image: url(../../assets/logo.png);*/
    /*!* 背景图垂直、水平均居中 *!*/
    /*background-position: center center;*/
    /*!* 背景图不平铺 *!*/
    /*background-repeat: no-repeat;*/
    /*!* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 *!*/
    /*background-attachment: fixed;  //此条属性必须设置否则可能无效/*/
    /*!* 让背景图基于容器大小伸缩 *!*/
    /*!*background-size: cover;*!*/
    /*!* 设置背景颜色，背景图加载过程中会显示背景色 *!*/
    /*background-color: #CCCCCC;*/
  }
</style>
<template>
  <div id="main">
    <Layout id="main_layout">
      <zxyaily-header></zxyaily-header>
      <router-view></router-view>
      <Footer class="layout-footer-center">2019-至今 &copy; zxyaily</Footer>
      <BackTop></BackTop>
    </Layout>
  </div>
</template>
<script>
import zxyailyHeader from '@/components/reuse/header'
export default {
  components: {
    zxyailyHeader
  },
  data () {
    return {

    }
  }
}
</script>
