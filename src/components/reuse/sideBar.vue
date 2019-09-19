<template>
  <div>
    <Card style="width:25em;margin-bottom: 2em">
      <div id="personalInfo" style="text-align:center">
        <img src="../../assets/logo.png">
        <h3 id="person_info">A high quality UI Toolkit based on Vue.js</h3>
        <div id="personal_signature">
          <h3>"</h3>
          <p style="color: white">zxyaily</p>
          <h3>"</h3>
        </div>
        <div id="personal_href">
          <div><img src="../../assets/OK/github.png"></div>
          <div><img src="../../assets/OK/mailbox.png"></div>
          <div><img src="../../assets/OK/csdn.png"></div>
          <div><img src="../../assets/OK/qq.png"></div>
        </div>
      </div>
    </Card>
    <Card>
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        最新文章
      </p>
    </Card>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  mounted () {
    // this.getPersonalInfo()
  },
  methods: {
    // getPersonalInfo () {
    //   axios.get('http://127.0.0.1:5000/').then(res => {
    //     console.log(res.data.data)
    //   })
    // }
  }

}
</script>

<style scoped>
#personalInfo {
  display: flex;
  flex-direction: column
}
#personal_signature{
  background-color: #DFDBDB;
}
#personal_href{
  display: flex;
  justify-content:space-around;
  padding: 1em;
}
</style>
