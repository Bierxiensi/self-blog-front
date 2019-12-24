<template>
 <div class="zxyaily-card">
   <h2 style=" line-height: 1.7em;
      overflow: auto;
      padding: 6px 10px;
      border-left: 5px solid #e21121;
      border-bottom: 4px solid #43bce2">标签云</h2>
     <div v-for="tag in tagList" :key="tag.id" style="float: left; padding: 0.4em">
       <div style="background-color: #00b0bd; border-radius: 0.3em">
         <h3 style="cursor: pointer; color: white; padding: 0.3em"  @click="selectArticleById(tag.id)">{{tag.tag}}</h3>
       </div>
     </div>
 </div>
</template>

<script>
import pageMixin from '@/mixins/pageMixin'
import { mapState } from 'vuex'
export default {
  name: 'tagPanel',
  mixins: [pageMixin],
  computed: {
    ...mapState({
      tagList: (state) => state.tag.tagList
    })
  },
  methods: {
    async requestListData () {
      let payload = {
        currentPage: 0,
        pageSize: 999
      }
      await this.$store.dispatch('tag/GET_TAG_LIST', payload)
    },
    selectArticleById (id) {
      this.$Message.success('selectArticleById')
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
</style>
