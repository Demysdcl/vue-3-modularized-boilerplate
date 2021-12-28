<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })
    return { ...toRefs(state) }
  },
}
</script>

<template>
  <dvi></dvi>
</template>

<style lang="scss" scoped></style>
