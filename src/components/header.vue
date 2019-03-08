<template>
  <div class="wrapper">
    <div class="header__left flex-center">
      <wxc-icon style="color: white" name="back"></wxc-icon>
      <text>{{leftText}}</text>
    </div>
    <div class="header__title flex-center">
      <text style="color: white">{{title}}</text>
    </div>
    <div class="header__right flex-center">
      <wxc-icon style="color: white" name="add"></wxc-icon>
    </div>
  </div>
</template>

<script>
  import { WxcIcon } from "weex-ui"

  export default {
    name: "header",
    components: {
      WxcIcon,
    },
    data () {
      return {
        title: "标题",
        leftText: "",
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    z-index: 10001;
    opacity: .99;
    background-color: #ffc700;
    border-bottom: 1px solid #f5f5f5;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__left {
    width: 100px;
    height: 100%;
  }

  .header__title {
    flex: 1;
    height: 100%;
  }

  .header__right {
    width: 100px;
    height: 100%;
  }
</style>
