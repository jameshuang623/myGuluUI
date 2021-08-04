<template>
  <div class="wrapper">
    <div class="link">
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
      |
      <router-link to="/home/toast">
        toast 组件
      </router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>


  </div>

</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss">

.link{
  //text-align: center;
  padding: 20px;
}
.view{
  margin-left: var(--view-margin);
  margin-right: var(--view-margin);



}
</style>
