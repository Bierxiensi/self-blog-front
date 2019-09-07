<template>
  <div >
    <div id="backImg">
      <img src="../assets/yz/timg.jpg" id="bg_blur">
    </div>
    <Divider />
    <div id="main">
      <Row style="background:#F4F6F8;padding:1em">
        <Col span="1" offset="7">
          <Card style="width:164px;border-radius:50%">
            <div style="text-align:center;">
              <img src="../assets/yz/zongjie.jpg" style="border-radius:64px">
            </div>
            <p>111</p>
          </Card>
        </Col>
        <Col span="1" offset="7">
          <Card style="width:164px;border-radius:50%">
            <div style="text-align:center">
              <img src="../assets/yz/boniu.jpg" style="border-radius:64px">
            </div>
            <p>111</p>
          </Card>
        </Col>
      </Row>
    </div>
    <div id="body">
    <!-- Vertical Timeline -->
    <section id="conference-timeline">
      <Divider style="border: #00b0bd solid 5px"/>
      <div class="timeline-start">Start</div>
      <div class="conference-center-line"></div>
      <div class="conference-timeline-content">
        <!-- Article -->
        <div class="timeline-article">
          <div class="content-left-container">
            <div class="content-left">
              <p>这里是内容<span class="article-number">01</span></p>
            </div>
          </div>
          <div class="content-right-container">
            <div class="content-right">
              <Card style="width:320px">
                <div style="text-align:center">
                  <img src="../assets/logo.png">
                  <h3>A high quality UI Toolkit based on Vue.js</h3>
                </div>
              </Card>
              <Tag checkable color="primary">标签一</Tag>
              <Tag checkable color="success">标签二</Tag>
              <Tag checkable color="error">标签三</Tag>
              <Tag checkable color="warning">标签四</Tag>
<!--              <p>这里是内容-->
<!--                <span class="article-number">02</span></p>-->
            </div>
          </div>
          <div class="meta-date">
            <span class="date">18</span>
            <span class="month">APR</span>
          </div>
        </div>
        <!-- // Article -->
      </div>
      <div class="timeline-end">End</div>
    </section>
    <!-- // Vertical Timeline -->
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
export default {
  mounted () {
    // this.$refs.dotted.style.left = this.$refs.circular[0].offsetLeft - 12 + 'px'
  },
  data () {
    return {
      date: '',
      month: ''
    }
  }
}
</script>

<style scoped>
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
#bg_blur {  /*背景虚化*/
  /*-webkit-filter: blur(10px); !* Chrome, Opera *!*/
  /*-moz-filter: blur(10px);*/
  /*-ms-filter: blur(10px);*/
  /*filter: blur(10px);*/
}
#main {
  margin-top: 3em;
  text-align: center;
}
/*外部css样式*/
body {
  /*background: #e6e6e6;*/
  /*font-family: "Roboto", sans-serif;*/
  /*font-weight: 400;*/
}

/*===== Vertical Timeline =====*/
#conference-timeline {
  position: relative;
  max-width: 1420px;
  width: 100%;
  margin: 0 auto;
}
/*起点、终点*/
#conference-timeline .timeline-start,
#conference-timeline .timeline-end {
  display: table;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  background: #00b0bd;
  padding: 15px 23px;
  /*color: #fff;*/
  /*max-width: 5%;*/
  /*width: 100%;*/
  /*text-align: center;*/
  margin: 0 auto;
}
/*左右分割线*/
#conference-timeline .conference-center-line {
  position: absolute;
  width: 3px;
  height: 100%;
  /*top: 0;*/
  left: 50%;
  margin-left: -2px;
  background: #00b0bd;
  z-index: 0;
}
#conference-timeline .conference-timeline-content {
  padding-top: 67px;
  padding-bottom: 67px;
}
.timeline-article {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
}
.timeline-article .content-left-container,
.timeline-article .content-right-container {
  max-width: 44%;
  width: 100%;
}
.timeline-article .content-left,
.timeline-article .content-right {
  position: relative;
  width: auto;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,.03);
  padding: 27px 25px;
}
.timeline-article p {
  margin: 0 0 0 60px;
  padding: 0;
  font-weight: 400;
  color: #242424;
  font-size: 14px;
  line-height: 24px;
  position: relative;
}
.timeline-article p span.article-number {
  position: absolute;
  font-weight: 300;
  font-size: 44px;
  top: 10px;
  left: -60px;
  color: #00b0bd;
}
.timeline-article .content-left-container {
  float: left;
}
.timeline-article .content-right-container {
  float: right;
}
.timeline-article .content-left:before,
.timeline-article .content-right:before{
  position: absolute;
  top: 20px;
  font-size: 23px;
  font-family: "FontAwesome";
  color: #fff;
}
.timeline-article .content-left:before {
  content: "\f0da";
  right: -8px;
}
.timeline-article .content-right:before {
  content: "\f0d9";
  left: -8px;
}
.timeline-article .meta-date {
  position: absolute;
  top: 0;
  left: 50%;
  width: 62px;
  height: 62px;
  margin-left: -31px;
  color: #fff;
  border-radius: 100%;
  background: #00b0bd;
}
.timeline-article .meta-date .date,
.timeline-article .meta-date .month {
  display: block;
  text-align: center;
  font-weight: 900;
}
.timeline-article .meta-date .date {
  font-size: 30px;
  line-height: 40px;
}
.timeline-article .meta-date .month {
  font-size: 18px;
  line-height: 10px;
}
/*===== // Vertical Timeline =====*/

/*===== Resonsive Vertical Timeline =====*/
@media only screen and (max-width: 830px) {
  #conference-timeline .timeline-start,
  #conference-timeline .timeline-end {
    margin: 0;
  }
  #conference-timeline .conference-center-line {
    margin-left: 0;
    left: 50px;
  }
  .timeline-article .meta-date {
    margin-left: 0;
    left: 20px;
  }
  .timeline-article .content-left-container,
  .timeline-article .content-right-container {
    max-width: 100%;
    width: auto;
    float: none;
    margin-left: 110px;
    min-height: 53px;
  }
  .timeline-article .content-left-container {
    margin-bottom: 20px;
  }
  .timeline-article .content-left,
  .timeline-article .content-right {
    padding: 10px 25px;
    min-height: 65px;
  }
  .timeline-article .content-left:before {
    content: "\f0d9";
    right: auto;
    left: -8px;
  }
  .timeline-article .content-right:before {
    display: none;
  }
}
@media only screen and (max-width: 400px) {
  .timeline-article p {
    margin: 0;
  }
  .timeline-article p span.article-number {
    display: none;
  }

}
/*===== // Resonsive Vertical Timeline =====*/
</style>
