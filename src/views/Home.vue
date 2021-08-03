<template>
  <div>
      <router-link to="/home/button">
        button 组件
      </router-link>
      |
      <router-link to="/home/input">
        input 组件
      </router-link>
      |
      <router-link to="/home/tab">
        tab 组件
      </router-link>

    <router-view></router-view>

  </div>

</template>

<script>

export default {
  name: 'Home',
}
</script>
