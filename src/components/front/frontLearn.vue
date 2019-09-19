<template>
    <div>
      <Button @click="test" type="primary">test</Button>
      <Table :columns="columns" :data="data"></Table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      personalInfo: '',
      data: [],
      columns: [
        {
          title: 'id',
          key: 'id'
        },
        {
          title: 'Name',
          key: 'name'
        }
      ]
    }
  },
  methods: {
    test () {
      axios.get('http://127.0.0.1:5000/').then(res => {
        this.data = res.data.data
        console.log(res.data.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
