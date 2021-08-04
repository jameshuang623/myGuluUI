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
      // this.$toast('我是 message')


      this.$toast('<p><strong>你好</strong></p>', {
        enableHtml: true
        // closeButton:{
        //   text:'知道了',
        //   callback(){
        //     console.log('用户说他知道了')
        //   }
        //
        // }
      })
    }
  }
}
</script>

<style scoped lang="scss">

</style>