<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: "TabsBody",
  inject:['eventBus'],
  created() {
  }
}
</script>

<style scoped lang="scss">

</style>