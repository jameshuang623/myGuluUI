<template>
  <div class="wrapper" :class="{'error': error}">  <!-- 如果 error存在，就有error类，否则无 -->
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
    />
<!--    @input="$emit('input', $event)"-->
<!--    @focus="$emit('focus', $event)"-->
<!--    @blur="$emit('blur', $event)"-->

    <!-- input标签本身拥有 change 事件，当 change 触发之后，会触发一个事件对象名'change'，
    $event 是浏览器原生的 change 事件，vue 通过这种方式传个下一个监听的人，第一个参数是事件名，
    第二个往后是传参1，传参2……-->
    <template v-if="error"> <!-- <template>可以避免不必要的 div 标签，减少 CSS 设置-->
      <g-icon name="error" class="g-icon"></g-icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script lang="js">
export default {
  name: "Input",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly:{
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }

}
</script>

<style scoped lang="scss">
$height: 32px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #F1453D;
.wrapper {
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  > :not(:last-child){
    margin-right: .5em;
  }
  > input {
    height: 32px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:focus{
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
      outline: none;
    }

    &[disabled],&[readonly]{
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  .g-icon{
    fill: $red;
  }

  .errorMessage{
    color: $red;
  }
}

</style>