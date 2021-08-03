<template>
  <div class="wrapper">
    <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
    <g-button icon="settings" :loading="loading2" @click="loading2 = !loading2">按钮</g-button>
    <g-button icon="settings" iconPosition="right" :loading="loading3" @click="loading3 = !loading3">按钮</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script lang="js">
export default {
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  > *{
    margin-right: .5em;
    margin-top: .5em;
  }
}
</style>