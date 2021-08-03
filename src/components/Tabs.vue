<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script lang="js">

import Vue from "vue";

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
  data(){
    return{
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },

  created(){
    // this.$emit('update:selected', 'xxx')
    // this.$emit('update:selected', '这是 this $emit 出来的数据')
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    // this.$emit('update:selected', '这是 this $emit 出来的数据')
  }
}
</script>

<style scoped lang="scss">

</style>