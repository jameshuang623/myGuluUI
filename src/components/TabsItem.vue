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
      type: String || Number, // String | Number 报错
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
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }

}
</script>

<style scoped lang="scss">
$blue: blue;
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
}
</style>