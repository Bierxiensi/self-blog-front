<template>
  <div>
    <div id="backImg">
      <img src="@/assets/yz/timg.jpg" id="bg_blur">
    </div>
    <Divider/>
    <div id="main">
      <Row style="background:#F4F6F8;padding:1em">
        <Col span="1" offset="7">
          <Card style="width:164px;border-radius:50%">
            <div style="text-align:center;">
              <img src="@/assets/yz/zongjie.jpg" style="border-radius:64px">
            </div>
            <p>111</p>
          </Card>
        </Col>
        <Col span="1" offset="7">
          <Card style="width:164px;border-radius:50%">
            <div style="text-align:center">
              <img src="@/assets/yz/boniu.jpg" style="border-radius:64px">
            </div>
            <p>111</p>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainIntroduce'
}
</script>

<style scoped>
  #main {
    margin-top: 3em;
    text-align: center;
  }
  #backImg {
    width: 100%;
    height: 450px;
  }
  div img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    z-index: -5;
  }
  div img {  /*背景虚化*/
    -webkit-filter: blur(10px); /* Chrome, Opera */
    /*-moz-filter: blur(10px);*/
    /*-ms-filter: blur(10px);*/
    /*filter: blur(10px);*/
  }
</style>
