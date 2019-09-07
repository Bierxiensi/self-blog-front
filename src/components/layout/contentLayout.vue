<template>
  <div id="content_container">
    <div id="left_content">
      <router-view></router-view>
    </div>
    <div id="right_content">
<!--      <Button>test</Button>-->
      <sideBar></sideBar>
<!--      <router-view name="sideBar"></router-view>-->
    </div>
  </div>
</template>

<script>
import sideBar from '../reuse/sideBar'
export default {
  components: {
    sideBar
  }
}
</script>

<style scoped>
#content_container{
  display: flex;
  align-items: center;
  justify-content:center;
  /*flex-direction:column;*/
  border: solid 1px yellow;
  /*flex-wrap: nowrap;*/
}
#left_content{
  margin: 2em 1em;
  border: solid 1px red;
  height: auto;
  width: 80em;
}
#right_content{
  margin: 2em 1em;
  border: solid 1px blue;
  height: auto;
  width: 30em;
}
</style>
