<template lang="jade">
    .top-nav
        .container
            .nav-wrapper
                .page-title(v-text="$route.name | capitalize")
</template>

<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
    .top-nav{
        color: #fff;
        background-color: #ee6e73;
        width: 100%;
        height: 122px;
        line-height: 122px;
        .nav-wrapper {
            position: relative;
            height: 100%;
        }
        .page-title{
            font-size: 48px;
        }
    }
    @media only screen and (max-width: 992px){
        .top-nav .nav-wrapper{
            text-align: center;
            .page-title{
                font-size: 32px;
            }
        }
    }
</style>