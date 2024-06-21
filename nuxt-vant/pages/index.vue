<template>
  <div class="container  m-t-10">
    <van-button block>111</van-button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData (context) {
    console.log(context.env.baseUrl)
    console.log(process.env.baseUrl)
    return { project: 'nuxt' }
  }
}
</script>

<style  lang="less" scoped>
.container {
  min-height: 100vh;
}
</style>
