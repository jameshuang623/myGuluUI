<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
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
    this.eventBus.$on('update:selected', (item)=>{
      console.log(item)
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;

  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    width: 100px;

  }

  > .actions-wrapper{
    margin-left: auto; // 直接靠右边，疑问？？？
  }
}
</style>