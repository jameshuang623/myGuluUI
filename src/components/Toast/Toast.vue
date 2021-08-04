<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script lang="js">
// import Vue from "vue";                //"vue" 这个名字也可能会变
//
// Vue.prototype.$toast = function (){  // 这样写不确定能否改写 $toast
//   console.log('我是 toast')          // 侵入性太强
// }
export default {
  name: "Toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default: () => {  // 当类型为对象时，必须写成函数形式！
        return {
          text: '关闭', callback: undefined
        }

      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }


  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove() // 不写这一行，删不掉
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }


}
</script>

<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  color: white;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;

  >.message{
    padding: 8px 0;
  }
}

.close {
  padding-left: 16px;
  flex-shrink: 0;
}

.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>