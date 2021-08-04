<template>
  <div class="wrapper">
    <button @click="onProgress">Custom Progress Bar</button>
    <div class="progress">
      <div class="progress-done" data-done="70" ref="progress">
        {{dataDone}}%
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "Progress",
  props:{
    dataDone:{
      type: Number,
      default: 70
    }
  },
  methods:{
    onProgress(){
      this.$refs.progress.style.width = this.dataDone + '%';
      this.$refs.progress.style.opacity = 1;
    }
  }

}
</script>

<style scoped lang="scss">
.progress {
  background-color: #d8d8d8;
  border-radius: 20px;
  position: relative;
  margin: 15px 0;
  height: 30px;
  width: 300px;
}

.progress-done {
  height: 100%;
  width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to left, #F2709C, #FF9472);
  box-shadow: 0 3px 3px -5px #F2709C, 0 2px 5px #F2709C;
  border-radius: 20px;
  color: #fff;
  opacity: 0;
  transition: 1s ease 0.3s;
}
</style>