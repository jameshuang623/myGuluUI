<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
      <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
      <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
      <span class="content">
        <slot></slot>
      </span>
    </button>
</template>

<script lang="js">
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value){  //属性检查器
        return value === 'left' || value === 'right';
      }
    }
}
}
</script>

<style scoped lang="scss">
@import "../assets/global.css";

@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}



.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {border-color: var(--border-color-hover);}
  &:active {background-color: var(--button-active-bg);}
  &:focus{outline: none;}

  > .content {order: 2;}
  > .icon {
    order: 1;
    margin-right: .1em;
  }

  &.icon-right{
    > .content {order: 1;}
    > .icon {
      order: 2;
      margin-left: .1em;
      margin-right: 0;
    }
  }

  .loading{
    animation: spin 1s infinite linear;
  }
}



.g-button:hover {
  border-color: var(--border-color-hover);
}

.g-button:active {
  background-color: var(--button-active-bg);
}

.g-button:focus{
  outline: none;
}

</style>