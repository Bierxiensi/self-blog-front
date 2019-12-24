<template>
    <div class="zxyaily-card" style="text-align:center">
      <div class="author">
        <img src="@/assets/yz/zongjie1.jpg" style="border-radius: 128px;">
        <h2>zxy</h2>
      </div>
      <div id="personal_signature">
        <h3>"</h3>
        <p style="color: white">zxyaily</p>
        <h3>"</h3>
      </div>
      <div id="personalInfo">
        <div><img src="@/assets/authorInfoPanel/github.png"></div>
        <div><img src="@/assets/authorInfoPanel/mailbox.png"></div>
        <div><img src="@/assets/authorInfoPanel/csdn.png"></div>
        <div><img src="@/assets/authorInfoPanel/qq.png"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'authorInfoPanel'
}
</script>

<style scoped>
.zxyaily-card{
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  background-image: url("../../assets/authorInfoPanel/personal_bg.jpg");
  background-repeat:  no-repeat;
  background-size: 100%;
  display: grid;
  grid-template-rows: 16em 10em 9em;
  grid-gap: 0;
}
.author{
  background-image: url("../../assets/authorInfoPanel/personal_author.png");
  /*border: 1px solid red;*/
  background-position: 2em 0em;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.zxyaily-card :before{
  background-image: url("../../assets/authorInfoPanel/personal_author.png");
  background-position: left;
  background-repeat: no-repeat;
}
#personalInfo {
  display: flex;
  justify-content:space-around;
  align-items: center;
  /*flex-direction: column;*/
  /*border: 1px solid red;*/
}
#personal_signature{
  background-color: #DFDBDB;
}
</style>
