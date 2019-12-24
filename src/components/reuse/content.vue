<template>
<!--    <div style="background-color: #bcbcbc; font-size: 30px">-->
  <div>
      <h1>{{article.title}}</h1>
      <div style="border: 1px dashed black; font-size: 20px">
        <span>作者:{{article.author}}</span>
        <span>访问量:</span>
        <span>发布时间:{{article.createTime}}</span>
        <span>更新时间:{{article.createTime}}</span>
        <span>Tags:{{article.tag}}</span>
      </div>
      <div style="text-align: left">
        <div v-highlight v-html="article.content" class="content"></div>
<!--    <VueMarkdown v-highlight :source="article.content"></VueMarkdown>-->
<!--    v-if="article.isMarkDownEditor === 1"   <p v-else v-html='article.content' style="height: 80px"></p>-->
<!--    <mavon-editor v-if="articleForm.isMarkDownEditor === 1" :ishljs="true" v-model="article.content">markDown</mavon-editor>-->
<!--    <Editor v-else :on-change="onStemChange" ref="editor"></Editor>-->
      </div>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState } from 'vuex'
export default {
  name: 'content',
  components: {VueMarkdown},
  // created () {
  //   console.log(9, this.$route.params.article)
  // }
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      article: (state) => state.article.article
    })
  },
  created () {
    this.selectArticleById()
  },
  methods: {
    selectArticleById () {
      let id = sessionStorage.getItem('articleId')
      this.$store.dispatch('article/GET_ARTICLE_BY_ID', id)
    }
  }
}
</script>

<style scoped>

</style>
