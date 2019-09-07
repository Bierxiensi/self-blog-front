<template>
    <div>
      <Button @click="test" type="primary">test</Button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    test () {
      axios.get('http://127.0.0.1:5000/hello').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
