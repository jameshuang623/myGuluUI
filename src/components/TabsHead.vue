<template>
  <div class="tabs-head">
    <slot></slot>
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
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border: 1px solid red;

  > .actions-wrapper{
    margin-left: auto; // 直接靠右边，疑问？？？
  }
}
</style>