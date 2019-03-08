<template>
    <div class="wrapper">
        <header-bar></header-bar>
    </div>
</template>

<script>

    import HeaderBar from "./../components/header"

    export default {
        name: "Music",
        components: {
            HeaderBar,
        },
        data () {
            return {
                name: "Music",
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
