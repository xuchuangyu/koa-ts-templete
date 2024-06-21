<template>
  <div class="container  m-t-10">
    <NuxtLogo />
    <OneV2 />
    <van-button block>{{ project }}</van-button>
  </div>
</template>

<script>
import OneV2 from './components/OneV2.vue'
export default {
  name: 'IndexPage',
  components: {
    OneV2
  },
  asyncData (context) {
    return { project: 'xuchuangyu' }
  }
}
</script>

<style  lang="less" scoped>
.container {
  min-height: 100vh;
}
</style>
