<template>
    <div class="wrapper">
        <router-view/>
        <wxc-tab-bar :tab-titles="tabTitles"
                     :tab-styles="tabStyles"
                     title-type="icon"
                     @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">

        </wxc-tab-bar>
    </div>
</template>

<script>
  import { WxcTabBar, Utils } from "weex-ui"
  import Config from "./tabbarConfig"

  export default {
    name: "App",
    data () {
      return {
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
            dot: true,
            router: "friends",
          },
          {
            title: "账号",
            icon: "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
            activeIcon: "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png",
            dot: true,
            router: "profile",
          },
        ],
        tabStyles: Config.tabStyles,
      }
    },
    components: { WxcTabBar },
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
    },
  }
</script>

<style scoped>
    .wrapper {
        justify-content: center;
        align-items: center;
    }
</style>
