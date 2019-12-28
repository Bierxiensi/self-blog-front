<template>
  <div>
    <div v-for="article in articleList" :key="article.articleId" style=" padding: 1em">
      <div style="margin-bottom: 1em;line-height: 4em;text-align:left;">
        <span style="font-size: 1.5em">{{article.title}}</span></div>
      <div style="display: grid; grid-template-columns: 25em 53em;padding-bottom: 1em; text-align:left;">
        <img src="http://www.jzdlink.com/wordpress/wp-content/uploads/2019/05/201905260001.jpg" width="280" height="150"/>
        <div style="display:grid; grid-template-rows: 8.5em 4em">
          <div style="text-align:left;font-size: 1.2em">
            <span>{{article.introduce}}</span>
          </div>
          <div><Button type="warning" style="float: right; font-size: larger">阅读全文</Button></div>
        </div>
      </div>
      <div style="font-size: 14px; display: grid; grid-template-columns: 8em 8em 15em 15em 21em;line-height: 30px;background-color: #f6f6f6;">
        <span style="">作者:{{article.author}}</span>
        <span style="">访问量:{{article.reading}}</span>
        <span style="">发布时间:{{article.createTime}}</span>
        <span style="">更新时间:{{article.createTime}}</span>
        <span style="">
          Tags:<Tag  type="border" v-for="Tag in article.tag" :key="Tag.id">{{Tag.tag}}</Tag>
        </span>
      </div>
      <div style="border-bottom: 1px dashed #49494d; margin-top: 1em"></div>
    </div>
    <Page :total="total" show-total @on-change="currentPage" @on-page-size-change="pageSize" style="padding-bottom: 1em" />
  </div>
</template>

<script>
import pageMixin from '@/mixins/pageMixin'
import { mapState } from 'vuex'
export default {
  mixins: [pageMixin],
  data () {
    return {}
  },
  computed: {
    ...mapState({
      articleList: (state) => state.article.homePageArticleList
    })
  },
  methods: {
    async requestListData () {
      let payload = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      let total = await this.$store.dispatch('article/GET_HOME_PAGE_ARTICLE_LIST', payload)
      this.total = total
    },
    _pageSizeChanged () {},
    _pageChanged () {}
  }
}
</script>

<style scoped>

</style>
