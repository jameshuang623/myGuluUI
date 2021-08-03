<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
      type: String || Number, // String | Number 报错
      required: true
    }
  },
  computed:{
    classes(){
      return {
        active: this.active,
        disabled: this.disabled,
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
    onClick(){
      if (this.disabled) return
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }

}
</script>

<style scoped lang="scss">
$blue: blue;
$disabled-text-color: grey;
.tabs-item{
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &.active{
    color: $blue;
    font-weight: bold;
  }

  &.disabled{
    color: $disabled-text-color;
  }
}
</style>