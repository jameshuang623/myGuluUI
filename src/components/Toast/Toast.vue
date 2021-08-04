<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script lang="js">
// import Vue from "vue";                //"vue" 这个名字也可能会变
//
// Vue.prototype.$toast = function (){  // 这样写不确定能否改写 $toast
//   console.log('我是 toast')          // 侵入性太强
// }
export default {
  name: "Toast"
}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast{
  color: white;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
  padding: 0 16px;
}
</style>