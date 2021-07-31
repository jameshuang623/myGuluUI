<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
      <svg v-if="icon" class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg>
      <span class="content">
        <slot></slot>
      </span>
    </button>
</template>

<script lang="js">
export default {
  props: {
    icon: {},
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