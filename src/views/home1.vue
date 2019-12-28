<template>
  <div>
    <main-introduce></main-introduce>
    <!-- Vertical Timeline -->
    <section id="conference-timeline">
      <Divider style="border: #00b0bd solid 5px"/>
      <div class="timeline-start">Start</div>
      <div class="conference-center-line"></div>
      <div class="conference-timeline-content">
        <!-- Article v-for="article in lyArticleList" :key="article.articleId" v-if="article.author === 'zxy'"-->
        <div class="timeline-article" v-for="article in zxyAndLyArticleList" :key="article.zxy.articleId">
            <!-- <div v-for="article in zxyArticleList" :key="article.articleId">-->
            <div class="content-left-container" v-if="article.zxy" @click="selectArticleById (article.zxy.articleId)" style="cursor: pointer">
              <div class="content-left" style="display: grid; grid-template-rows: 4vh 30vh 15vh 4vh; text-align: left">
                <div><span class="article-number" style="font-size: 1.5em;font-weight: bold">{{article.zxy.title}}</span></div>
                <div style="align-items: center; text-align: center"><img src="http://www.jzdlink.com/wordpress/wp-content/uploads/2019/05/201905260001.jpg" style="width: 100%; height: 100%"></div>
                <!--<div v-html="article.zxy.content" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;border: 1px solid red"></div>-->
                <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap; padding: 1em; font-size: 1.2em">{{article.zxy.introduce}}</div>
                <div style="display: grid; grid-template-columns: 8vw 3vw 10vw; align-items: center">
                  <div><Icon type="ios-time" size="20"/>{{article.zxy.createTime}}</div>
                  <div><Icon type="ios-person-outline" size="24"/>{{article.zxy.author}}</div>
                  <div><Icon type="ios-bookmark-outline" size="24"/><Tag color="primary" v-for="tag in article.zxy.tag" :key="tag.id">{{tag}}</Tag></div>
                </div>
              </div>
            </div>
            <!--</div>-->
            <!--<div v-for="article in lyArticleList" :key="article.articleId">-->
            <div class="content-right-container" v-if="article.ly" @click="selectArticleById(article.ly.articleId)" style="cursor: pointer">
              <div class="content-right" style="display: grid; grid-template-rows: 4vh 30vh 15vh 4vh; text-align: left">
                <div><span class="article-number" style="font-size: 1.5em;font-weight: bold">{{article.ly.title}}</span></div>
                <div style="align-items: center; text-align: center"><img src="http://www.jzdlink.com/wordpress/wp-content/uploads/2019/05/201905260001.jpg" style="width: 100%; height: 100%"></div>
                <!--<div v-html="article.ly.content" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;"></div>-->
                <div style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap; padding: 1em; font-size: 1.2em">{{article.ly.introduce}}</div>
                <div style="display: grid; grid-template-columns: 8vw 3vw 10vw; align-items: center">
                  <div><Icon type="ios-time" size="20"/>{{article.ly.createTime}}</div>
                  <div><Icon type="ios-person-outline" size="24"/>{{article.ly.author}}</div>
                  <div><Icon type="ios-bookmark-outline" size="24"/><Tag color="primary" v-for="tag in article.ly.tag" :key="tag">{{tag}}</Tag></div>
                </div>
              </div>
            </div>
            <!--</div>-->
          <div class="meta-date">
            <span class="date">18</span>
            <span class="month">APR</span>
          </div>
        </div>
        <!-- // Article -->
      </div>
      <div class="timeline-end">End</div>
    </section>
    <!-- // Vertical Timeline // mapActions,  -->
  </div>
</template>

<script>
import pageMixin from '@/mixins/pageMixin'
import { mapState } from 'vuex'
import mainIntroduce from '@/components/reuse/mainIntroduce'
// import { GET_HOME_PAGE_ARTICLE_LIST } from '@/store/actions'
export default {
  mixins: [pageMixin],
  components: { mainIntroduce },
  mounted () {
    // this.$refs.dotted.style.left = this.$refs.circular[0].offsetLeft - 12 + 'px'
    // console.log(68, this.listData, this.homePageArticleList, this.zxyArticleList, this.lyArticleList, this.zxyAndLyArticleList)
  },
  data () {
    return {
      date: '',
      month: '',
      listData: this.$store.state.article.homePageArticleList
    }
  },
  computed: {
    ...mapState({
      zxyAndLyArticleList: (state) => state.article.zxyAndLyArticleList,
      homePageArticleList: (state) => state.article.homePageArticleList,
      zxyArticleList: (state) => state.article.zxyArticleList,
      lyArticleList: (state) => state.article.lyArticleList
    })
  },
  methods: {
    // ...mapActions(['GET_HOME_PAGE_ARTICLE_LIST']),
    async requestListData () {
      let payload = {
        currentPage: 0,
        pageSize: 10
      }
      await this.$store.dispatch('article/GET_ZXY_AND_LY_ARTICLE_LIST', payload)
      // await this.$store.dispatch('article/GET_HOME_PAGE_ARTICLE_LIST', payload)
      // await this.$store.dispatch('article/GET_ZXY_ARTICLE_LIST', payload)
      // await this.$store.dispatch('article/GET_LY_ARTICLE_LIST', payload)
      // this.$axios.get('http://127.0.0.1:5000/article/getAllArticleByPaginate', {
      //   params: {
      //     currentPage: 0,
      //     pageSize: 10
      //   }}).then(res => {
      //   this.listData = res.data.data
      //   console.log(res.data.data)
      // })
    },
    selectArticleById (articleId) {
      this.$Message.success('selectArticleById')
      sessionStorage.setItem('articleId', articleId)
      // this.$store.commit('home/get_article_id', article.articleId)
      // this.$router.push({name: 'content', params: {article: article}})
      this.$router.push('/zxyaily/content')
    }
  }
}
</script>

<style scoped>
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
  height: 96%;
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
