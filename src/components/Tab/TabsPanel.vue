<template>
  <div class="tabs-panel" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: "TabsPanel",
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String || Number, // String | Number 报错
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
}
</script>

<style scoped lang="scss">
.tabs-panel {
  padding: 1em;
  &.active {
  }
}
</style>