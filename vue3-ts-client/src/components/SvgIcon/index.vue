<template>
  <!-- 没有height 就取 width -->
  <svg :class="svgClass" aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '10px',
  },
  height: {
    type: String,
    default: '10px',
  },
  hoverColor: {
    // hover效果颜色，如果不传递就默认是 color属性的颜色
    type: String,
    default: '',
  },
})

const iconName = computed(() => {
  return `#icon-${props.icon}`
})
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})

const hover = props.hoverColor ? props.color : props.hoverColor
</script>
<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  overflow: hidden;
  color: v-bind(color);
}
</style>
