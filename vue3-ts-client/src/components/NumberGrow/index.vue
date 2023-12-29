<template>
  <span>{{ printVal }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // <count-in :startVal='0' :endVal='100.525' :speed='800' :decimals="3" :isReverse=false />
  props: {
    startVal: {
      type: Number,
      default: null,
    },
    endVal: {
      type: Number,
      default: null,
    },
    speed: {
      type: Number,
      default: 5,
    },
    decimals: {
      // 是否是小数
      type: Number,
      default: 0,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      start: +this.startVal,
      end: +this.endVal,
      formatSpeed: +this.speed || 5,
    }
  },
  computed: {
    formatDecimals(): number {
      // 是否整数
      const formatDecimals =
        (this as any).decimals > 0 ? (this as any).decimals : 0
      return formatDecimals
    },
    decimalsLen(): number {
      // 1 = 0.001 * decimalsLen(x);
      const decimalsLen = Math.pow(10, this.formatDecimals)
      return decimalsLen
    },
    printVal() {
      // 保留几位小数
      const start = (this as any).start.toFixed(this.formatDecimals)
      return start
    },
  },
  methods: {
    accumulativeMachine() {
      setTimeout(() => {
        if (this.isReverse) {
          const decimals = this.formatDecimals === 0 ? 0 : 1 / this.decimalsLen
          const formatSpeed = this.formatSpeed / this.decimalsLen + decimals
          this.start -= formatSpeed
          if (this.printVal <= this.end) {
            this.start = this.end
            return
          }
        } else {
          const decimals = this.formatDecimals === 0 ? 0 : 1 / this.decimalsLen
          const formatSpeed = this.formatSpeed / this.decimalsLen + decimals
          this.start += formatSpeed
          if (this.printVal >= this.end) {
            this.start = this.end
            return
          }
        }
        this.accumulativeMachine()
      }, 8)
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.accumulativeMachine()
    })
  },
})
</script>

<style>
.number-grow-warp {
  transform: translateZ(0);
}
</style>
