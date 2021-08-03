<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: "Tab",
  props:{
    selected:{
      type: String,
      required: true
    },
    direction:{
      type: String,
      default: 'horizontal',
      validator(value){
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  created(){
    // this.$emit('update:selected', 'xxx')
  }

}
</script>

<style scoped lang="less">

</style>