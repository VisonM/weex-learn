<template>
  <div class="wrapper" :style="">
    <header-bar></header-bar>
    <div></div>
  </div>

</template>
<style scoped>

</style>
<script>
  import HeaderBar from "./../components/header"

  export default {
    name: "Findings",
    components: { HeaderBar },
    data: () => ({}),
    created () {

    },
    mounted(){
      console.log("/playlist/catlist",this.$api,this.Axios("/playlist/catlist"))
    },
    methods: {

    },
  }
</script>

<style scoped>
  .wrapper {
    width: 750px;
    padding-top: 100px;
    padding-bottom: 120px;
    background-color: green;
  }
</style>
