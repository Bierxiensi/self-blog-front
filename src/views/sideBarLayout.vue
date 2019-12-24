<template>
<!--  style="border: solid 1px red; border: solid 1px blue;" -->
  <div style="display: grid; grid-template-rows: 35em 35em 19em 35em; grid-gap: 2em">
    <div style="border-radius: 1em">
      <author-info-panel></author-info-panel>
    </div>
    <div style="border-radius: 1em">
      <new-article-panel></new-article-panel>
    </div>
    <div style="border-radius: 1em">
      <hot-article-panel></hot-article-panel>
    </div>
    <div>
      <tag-panel></tag-panel>
    </div>
  </div>
</template>

<script>
import authorInfoPanel from '@/components/reuse/authorInfoPanel'
import newArticlePanel from '@/components/reuse/newArticlePanel'
import hotArticlePanel from '@/components/reuse/hotArticlePanel'
import tagPanel from '@/components/reuse/tagPanel'
export default {
  components: {authorInfoPanel, newArticlePanel, hotArticlePanel, tagPanel},
  mounted () {},
  methods: {}

}
</script>

<style scoped>

</style>
