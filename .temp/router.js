import Vue from 'vue'
/*global Vue*/
import Router from "vue-router"

import Video from "@/page/video"
import Findings from "@/page/findings"
import Music from "@/page/music"
import Profile from "@/page/profile"
import Friends from "@/page/friends"

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: "/",
      redirect:"Findings"
    },
    {
      path: "/findings",
      name: "Findings",
      component: Findings,
    },
    {
      path: "/video",
      name: "Video",
      component: Video,
    },
    {
      path: "/music",
      name: "Music",
      component: Music,
    },
    {
      path: "/friends",
      name: "Friends",
      component: Friends,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
})
