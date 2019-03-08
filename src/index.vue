<template>
  <div class="app-wrapper">
    <tab-bar
        :tabTitles="tabTitles"
        @navigateTo="handleNavigator"
        v-if="true"
    ></tab-bar>
    <router-view :style="contentStyle"></router-view>
    <!--<wxc-tab-bar :tab-titles="tabTitles"-->
    <!--:tab-styles="tabStyles"-->
    <!--title-type="icon"-->
    <!--@wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">-->

    <!--</wxc-tab-bar>-->
  </div>
</template>

<script>
  import { WxcTabBar, Utils, WxcButton, WxcMinibar } from "weex-ui"
  import TabBar from "./components/tabBar"
  import HeaderBar from "./components/header"

  const modal = weex.requireModule("modal")
  import Config from "./tabbarConfig"

  export default {
    name: "App",
    data () {
      return {
        contentStyle: {},
        tabTitles: [
          {
            title: "发现",
            icon: "https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png",
            activeIcon: "https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png",
            badge: 0,
            router: "findings",
          },
          {
            title: "视频",
            icon: "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
            activeIcon: "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png",
            badge: 0,
            router: "video",
          },
          {
            title: "我的",
            icon: "https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",
            activeIcon: "https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png",
            badge: 0,
            router: "music",
          },
          {
            title: "朋友",
            icon: "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
            activeIcon: "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png",
            badge: 5,
            dot: false,
            router: "friends",
          },
          {
            title: "账号",
            icon: "https://gw.alicdn.com/tfs/TB1hedfSpXXXXchXXXXXXXXXXXX-72-72.png",
            activeIcon: "https://gw.alicdn.com/tfs/TB1mrXaSpXXXXaqXpXXXXXXXXXX-72-72.png",
            dot: true,
            router: "profile",
          },
        ],
        tabStyles: Config.tabStyles,
      }
    },
    components: { TabBar, HeaderBar, WxcTabBar, WxcButton, WxcMinibar },
    created () {
      const tabPageHeight = Utils.env.getPageHeight()
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + "px" }
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page
        this.$router.push("/friends")
      },
      wxcButtonClicked () {
        this.$router.push("/friends")
      },
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ "message": "click rightButton!", "duration": 1 })
      },
      handleNavigator (params) {
        this.$router.push(params.routerName)
      },
    },
  }
</script>

<style scoped>
  .app-wrapper {
    width: 750px;
    justify-content: center;
    align-items: center;
  }
</style>
