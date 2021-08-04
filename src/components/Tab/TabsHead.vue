<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
<!--    <div class="line" ref="line" v-if="x"></div>-->
<!--    v-if 会控制 div 是否显示在 DOM 里-->
    <div class="actions-wrapper">
      <slot name="actions" class="actions"></slot>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "TabsHeader",
  inject:['eventBus'],
  created() {
    this.eventBus.$on('update:selected', (item, vm)=>{
      // this.x = true
      let {width, left} = vm.$el.getBoundingClientRect()
      // 原生 JS 的 API
      this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.transform = `translateX(${left - 20}px)`

      this.$refs.line.style.left = `${left - 20}px`
      // 这个 20 该如何引用到全局 CSS 中的 view-margin？
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;

  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;
  }

  > .actions-wrapper{
    margin-left: auto; // 直接靠右边，疑问？？？
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>