<template>
<div id="develop_main">
  <Form ref="articalForm" :model="articalForm" :rules="articalRule" :label-width="80">
    <FormItem label="文章标题" prop="title">
      <Input type="text" v-model="articalForm.title"></Input>
    </FormItem>
    <FormItem label="内容" prop="content">
      <div ref="editor" id="editor" ></div>
    </FormItem>
    <FormItem label="标签" prop="tag">
      <Input type="text" v-model="articalForm.tag"></Input>
    </FormItem>
    <FormItem label="作者" prop="createPeople">
      <Input type="text" v-model="articalForm.createPeople"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('articalForm')">Submit</Button>
    </FormItem>
  </Form>
  <Button @click="getContent">查看内容</Button>
</div>
</template>

<script>
import E from 'wangeditor'
import qs from 'qs'
export default {
  name: 'editor',
  data () {
    return {
      articalForm: {
        articalId: '11',
        title: 'title',
        content: 'zxyaily',
        tag: 'test',
        createTime: '',
        updateTime: '',
        createPeople: 'zxy'
      },
      editorContent: '',
      articalRule: {}
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/artical/insertArtical',
            data: qs.stringify(this.articalForm)
            // headers: {
            //   Authorization: 'Bearer ' + sessionStorage.getItem('token'),
            //   Accept: 'application/json'
            // },
            /** method 2 ,submit a form
             * data: {
                articalId: this.articalForm.title,
                title: this.articalForm.title,
                content: this.articalForm.content,
                tag: this.articalForm.tag,
                createTime: '1997-11-08',
                updateTime: '2019-09-18',
                createPeople: this.articalForm.createPeople
             },
             transformRequest: [function (data) {
                data = qs.stringify(data)
                return data
              }]
             *
             **/
            /** submit params in url
             * params: {
                articalId: this.articalForm.title,
                title: this.articalForm.title,
                content: this.articalForm.content,
                tag: this.articalForm.tag,
                createTime: '1997-11-08',
                updateTime: '2019-09-18',
                createPeople: this.articalForm.createPeople
              }
             *
             **/
          }).then(res => {
            console.log(58, res)
            if (res.data.status === 200) {
              this.$Message.success('上传成功')
            }
          })
        } else {
          this.$Message.error('请补全信息')
        }
      })
    },
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.content = html
    }
    editor.create()
  }
}
</script>

<style scoped>
#editor  {
  text-align:left;
}
#develop_main{
  /*background-color: #DFDBDB;*/
}
</style>
