<template>
  <div class="container  m-t-10">
    <van-button block>111</van-button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData (context) {

    return { project: 'nuxt' }
  }
}
</script>

<style  lang="less" scoped>
.container {
  min-height: 100vh;
}
</style>
