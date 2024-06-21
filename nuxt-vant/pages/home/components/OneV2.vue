<template>
  <div class="container">
    <div class="l-view">
      <h2 class="f-32 primary-color animate_FadeInLeft animate_delay-1 bold">
        植物租摆 绿化养护
      </h2>
      <h2
        class="f-32 primary-color animate_FadeInLeft animate_delay-1 bold m-t-8"
      >
        因为专心 所以专业
      </h2>
      <p
        class="m-t-16 f-14 w-185 desc animate_FadeInLeft animate_delay-2 lh-24"
      >
        绿之景专注于室内美陈、办公室植物租赁与养护，针对环境的搭配提供定制化方案。可为机关、实业单位、商业大厦、酒店、写字楼等提供日常植物租摆、节假绿植组景、会议租摆等服务。
      </p>
      <div class="btn-list m-t-26 animate_FadeInLeft animate_delay-3">
        <van-button
          class="apiPointer w-140 h-48"
          data-pointerId="1-2-0"
          data-msg="首页绿植套餐"
          type="primary"
          block
          round
          @click="$router.push('/combo')"
          >绿植套餐</van-button>
        <van-button
          class="contactBtn apiPointer w-140 h-48 m-t-28"
          block
          type="primary"
          data-pointerId="1-1-9"
          data-msg="首页案例展示"
          round
          plain
          @click="$router.push('/case')"
          >案例展示</van-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.container {
  padding: 28px 0px 44px 16px;
  position: relative;
}
.desc {
  color: rgba(69, 77, 50, 1);
}
.HomeBanner {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
