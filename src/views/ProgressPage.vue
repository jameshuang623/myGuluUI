<template>
  <div class="wrapper">
    <Progress :data-done="50"></Progress>
    <Progress :data-done="20"></Progress>
  </div>
</template>

<script lang="js">
import Progress from "../components/Progress/Progress";
export default {
  name: "ProgressPage",
  components: {Progress}
}
</script>

<style scoped lang="scss">

</style>