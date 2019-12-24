<template>
  <div class="zxyaily-card">
    <h2 style=" line-height: 1.7em;
      overflow: auto;
      padding: 6px 10px;
      border-left: 5px solid #e21121;
      border-bottom: 4px solid #43bce2">最新文章</h2>
    <div style="text-align: left; display: grid; grid-template-columns: auto; grid-gap: 0.5em;">
      <div v-for="(article, i) in articleList" :key="article.articleId" style="border-bottom: 1px dashed #49494d; display: flex; justify-content: left; align-items: center; height: 2.7em;">
        <a href="#" class="demo-badge1" style="margin-left: 1em" v-if="i + 1 === 1">{{i + 1}}</a>
        <a href="#" class="demo-badge" style="margin-left: 1em" v-else>{{i + 1}}</a>
        <h3 style="cursor: pointer; margin-left: 0.4em"  @click="selectArticleById(article.articleId)">{{article.title}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import pageMixin from '@/mixins/pageMixin'
import { mapState } from 'vuex'
export default {
  name: 'newArticlePanel',
  mixins: [pageMixin],
  computed: {
    ...mapState({
      articleList: (state) => state.article.homePageArticleList
    })
  },
  data () {
    return {
      i: 0
    }
  },
  created () {},
  methods: {
    async requestListData () {
      let payload = {
        currentPage: 0,
        pageSize: 10
      }
      await this.$store.dispatch('article/GET_HOME_PAGE_ARTICLE_LIST', payload)
    },
    selectArticleById (articleId) {
      console.log(44, articleId)
      sessionStorage.setItem('articleId', articleId)
      this.$store.dispatch('article/GET_ARTICLE_BY_ID', articleId)
      // this.$Message.success('selectArticleById')
    }
  }
}
</script>

<style scoped>
.zxyaily-card{
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.demo-badge1{
  color: white;
  width: 2em;
  height: 2em;
  line-height: 2em;
  background: #5aeeed;
  border-radius: 3px;
  display: inline-block;
  align-content: center;
  text-align: center;
}
.demo-badge{
  color: white;
  width: 2em;
  height: 2em;
  line-height: 2em;
  background: #49494d;
  border-radius: 3px;
  display: inline-block;
  align-content: center;
  text-align: center;
}
</style>
