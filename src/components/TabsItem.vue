<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: "TabsItem",
  props:{
    disabled:{
      type: Boolean,
      default: false
    }

  }

}
</script>

<style scoped lang="less">

</style>