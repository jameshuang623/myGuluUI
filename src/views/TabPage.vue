<template>
  <div class="wrapper">
    <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
      <!--    <g-tabs selected="selectedTab" @update:selected="selectedTab = $event">-->
      <g-tabs-head>
        <template slot="actions">
          <g-button>设置</g-button>
        </template>
        <g-tabs-item name="woman">
          <g-icon name="settings"></g-icon>
          美女
        </g-tabs-item>
        <g-tabs-item name="finance" disabled>
          财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          体育
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-panel name="woman">
          美女相关资讯
        </g-tabs-panel>
        <g-tabs-panel name="finance">
          财经相关资讯
        </g-tabs-panel>
        <g-tabs-panel name="sports">
          体育相关资讯
        </g-tabs-panel>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script lang="js">
export default {
  name: "TabPage",
  data() {
    return {
      selectedTab: 'sports'
    }
  },
  methods:{
    yyy(data){
      console.log('yyy')
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">

</style>