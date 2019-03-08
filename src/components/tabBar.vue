<template>
  <div class="wrapper" :class="[customStyles]">
    <div class="bar-item" v-for="(item,index) in tabTitles" @click="routerToPage(item.router,index)">
      <image class="bar-icon" :src="currentIndex===index?item.activeIcon:item.icon">
      </image>
      <text class="notice-dot" v-if="item.dot"></text>
      <text class="i-notice" v-if="item.badge>0">{{item.badge}}</text>
      <text class="bar-txt" :class="[isActive(index)]">{{item.title}}</text>
    </div>
  </div>
</template>
<style scoped>
  .wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
  }

  .bar-item {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bar-icon {
    width: 60px;
    height: 60px;
  }

  .bar-txt {
    color: #666;
    text-align: center;
  }

  .bar-active {
    color: #ffc700;
  }

  .bar-txt {
    font-size: 22px;
    padding-top: 2px;
  }

  .i-notice {
    position: absolute;
    z-index: 10000;
    top: 0px;
    right: 20px;
    height: 30px;
    width: 30px;
    border-radius: 100%;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    background-color: #f00;
  }

  .notice-dot {
    position: absolute;
    z-index: 10000;
    top: 0px;
    right: 30px;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background-color: #f00;
  }
</style>
<script>
  export default {
    name: "tabBar",
    props: {
      customStyles: {},
      tabTitles: {
        type: Array,
        required: true,
      },
    },
    computed: {},
    data () {
      return {
        currentIndex: 0,
      }
    },
    mounted () {
    },
    methods: {
      isActive (index) {
        return this.currentIndex === index ? "bar-active" : ""
      },
      routerToPage (routerName, index) {
        this.currentIndex = index
        this.$emit("navigateTo", { routerName })
      },
    },
  }
</script>

