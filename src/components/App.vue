<template lang="jade">
    header.header
        top-nav
        .container
            a.button.waves-effect.waves-circle.waves-light.hide-on-large-only( href="javascript:void(0)" data-activates="slide-out")
                i.icon.icon-more
        side-nav
    main
        .container
            .row
                router-view( transition="test" transition-mode="out-in" keep-alive)
</template>

<script>
    import SideNav from './SideNav.vue';
    import TopNav from './TopNav.vue';

    export default {
        components: {
            SideNav,
            TopNav
        },
        data () {
            return {
                authenticating: false
            }
        }
    }
</script>

<style lang="scss">
    html{
        font-family: 'PingHei',
                     'Helvetica Neue',      // OSX，English
                     'Helvetica',
                     "PingFang SC",         // OSX，苹方（华康信凭黑）
                     "Hiragino Sans GB",    // OSX，冬青黑体
                     'STHeitiSC-Light',     // OSX，华文黑体
                     "Source Han Sans CN",  // 思源黑体
                     "Source Han Sans SC",  // 思源黑体
                     'Microsoft YaHei',     // Win，微软雅黑
                     'WenQuanYi Micro Hei', // Linux，文泉驿微米黑
                     'Arial',               // Win
                     sans-serif;
        font-size: 16px;
        font-weight: 300;
    }
    .container {
        margin: 0 auto;
        max-width: 1280px;
        width: 90%;
        .row{
            margin-left: -0.75rem;
            margin-right: -0.75rem;
            margin-bottom: 20px;
        }
    }
    .header{
        padding-left: 240px;
        .button{
            position: absolute;
            text-align: center;
            height: 48px;
            width: 48px;
            line-height: 48px;
            left: 7.5%;
            top: 37px;
            float: none;
            margin-left: 1.5rem;
            color: #fff;
            font-size: 36px;
            z-index: 2;
            cursor: pointer;
        }
    }

    main{
        padding-left: 240px;
    }

    @media only screen and (min-width: 601px){
        .container {
            width: 85%;
        }
    }
    @media only screen and (max-width: 992px){
        .header, main{
            padding-left: 0;
        }
    }
</style>
