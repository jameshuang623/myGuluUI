<template>
  <div class="wrapper">
    <button @click="showToast">点我</button>
  </div>
</template>

<script lang="js">
export default {
  name: "ToastPage",
  created() {
  },
  methods:{
    showToast(){
      this.$toast('我是 message')
    }
  }
}
</script>

<style scoped lang="scss">

</style>