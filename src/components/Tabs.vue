<template>
  <div class="tabs">
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
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'TabsHeader'){
        vm.$children.forEach((childVm) => {
          if (childVm.$options.name === 'TabsItem' && childVm.name === this.selected){
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
    // this.eventBus.$emit('update:selected', this.selected)
    // this.$emit('update:selected', '这是 this $emit 出来的数据')
  }
}
</script>

<style scoped lang="scss">

</style>