<template>
  <div class="wrapper">
    <header-bar></header-bar>
  </div>
</template>

<script>

  import HeaderBar from "./../components/header"

  export default {
    name: "Friends",
    components: {
      HeaderBar,
    },
    data () {
      return {
        name: "Friends",
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
