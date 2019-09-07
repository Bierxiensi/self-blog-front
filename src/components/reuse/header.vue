<template>
 <div id="header">
   <div id="header_container">
     <div id="imgArea"><img src="../../assets/sucai/logo.png"></div>
     <div id="menu">
       <div id="item" v-for="item in menuItem" :key="item.name">
         <router-link :to=item.path id="linkItem">{{item.name}}</router-link></div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      menuItem: [{
        path: '/home',
        name: '主页',
        meta: {
          icon: 'md-musical-notes'
        }
      },
      {
        path: '/zxyaily/frontLearn',
        name: '前端学习',
        meta: {
          icon: 'ios-musical-note-outline'
        }
      },
      {
        path: '/zxyaily/backLearn',
        name: '后端学习',
        meta: {
          icon: 'ios-musical-note'
        }
      },
      {
        path: '/zxyaily/backLearn',
        name: '关于我们'
      },
      {
        path: '/zxyaily/backLearn',
        name: '生活随笔'
      },
      {
        path: '/zxyaily/backLearn',
        name: '留言板'
      }
      ]
    }
  }
}
</script>

<style scoped>
#header{
  display: flex;
  align-items: center;
  justify-content:center;
  flex-wrap: nowrap;
  /*border: solid 1px green;*/
  height: 7em;
  background-color: #474748;
  opacity: 0.9;
  /*position: relative;*/
}
#header_container{
  display: flex;
  align-items: center;
  justify-content:space-between;
  /*border: solid 1px greenyellow;*/
  /*height: 7em;*/
  width: 70%;
  /*margin-left: 15%;*/
}
#imgArea{
  /*border: solid 5px mediumblue;*/
  height: auto;
  width: auto;
  /*float: left;*/
}
#menu{
  display: flex;
  align-items: center;
  justify-content:center;
  /*border: solid 1px green;*/
  height: auto;
  float: right;
  /*width: auto;*/
  font-size: 1.6em;
}
#item{
  /*border: solid 1px red;*/
  /*float: left;*/
  /*padding: 0em 1em 0em 1em;*/
  padding: 1.5em 1.5em 1em 1.5em;
}
#linkItem {
  color: white;
}
#linkItem:hover{
  color: orange;
}
#linkItem:active{
  color: orange;
}
</style>
