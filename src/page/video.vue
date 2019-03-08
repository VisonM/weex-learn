<template>
  <div class="wrapper">
    <header-bar></header-bar>
  </div>
</template>

<script>

  import HeaderBar from "./../components/header"

  export default {
    name: "Video",
    components: {
      HeaderBar,
    },
    data () {
      return {
        name: "video",
      }
    },
    mounted () {
      console.log("friends mounted")
    },
    methods: {},
  }
</script>

<style scoped>

</style>
