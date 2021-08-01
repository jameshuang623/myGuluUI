<template>
  <div class="wrapper">
    <div class="box">
      <g-input value="张三" disabled></g-input>
      <g-input value="李四" readonly></g-input>
      <g-input value="王五"></g-input>
    </div>
    <div class="box">
      <g-input value="王" error="姓名不能少于两个字"></g-input>
    </div>

  </div>
</template>

<script lang="js">
export default {
  name: "InputPage"
}
</script>

<style scoped lang="scss">
.box{
  margin: 20px;
  > *{
    margin-right: .5em;
  }
}
</style>