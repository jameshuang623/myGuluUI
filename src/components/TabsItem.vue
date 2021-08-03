<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: "TabsItem",
  data(){
    return{
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name:{
      type: String || Number,
      required: true
    }
  },
  computed:{
    classes(){
      return {
        active: this.active
      }
    }
  },
  inject:['eventBus'],
  created() {
    this.eventBus.$on('update:selected',(name)=>{
      this.active = name === this.name;
    })
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected', this.name)
    }
  }

}
</script>

<style scoped lang="scss">
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;

  &.active{
    background: red;
  }
}
</style>