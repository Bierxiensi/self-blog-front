<template>
  <div id="content_container">
    <div id="left_content">
<!--      <my-content></my-content>-->
      <router-view></router-view>
    </div>
    <div id="right_content">
      <sideBar></sideBar>
      <!--<router-view name="sideBar"></router-view>-->
    </div>
  </div>
</template>

<script>
import myContent from '../components/reuse/content'
import sideBar from './sideBarLayout'
export default {
  components: {
    myContent,
    sideBar
  }
}
</script>

<style scoped>
#content_container{
  display: flex;
  /*align-items: center;*/
  justify-content:center;
  /*flex-direction:column;*/
  border: solid 1px yellow;
  /*flex-wrap: nowrap;*/
}
#left_content{
  margin: 2em 1em;
  /*border: solid 1px red;*/
  height: auto;
  width: 80em;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
#right_content{
  margin: 2em 1em;
  height: auto;
  width: 30em;
}
</style>
