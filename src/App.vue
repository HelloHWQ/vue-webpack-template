<template>
  <div>
    <h1 @click="show">测试组件是否能够打包成功------{{ msg }}！</h1>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      msg: 'ok'
    }
  },
  methods: {
    show() {
      console.log('ok')
    }
  }
}
</script>

<style scoped>
  h1{
    color: pink;
  }
</style>
