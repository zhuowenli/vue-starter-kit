<template lang="jade">
    .side-nav.fixed
        .logo
            a(v-link="{name: 'home'}") LOGO
        ul.collapsible(data-collapsible="accordion")
            li.bold(v-for='(index, menu) in menus')
                template(v-if="menu.subMenus")
                    a.collapsible-header.waves-effect.waves-red {{menu.name}}
                    ul.collapsible-body
                        li(v-for='sub in menu.subMenus')
                            a.waves-effect.waves-red(v-link="{path: sub.path}") {{sub.name}}
                template(v-else)
                    a.waves-effect.waves-red(v-link="{path: menu.path}") {{menu.name}}
</template>

<script>
    import menus from "../services/menu.js";

    export default {
        data () {
            return {
                menus
            }
        },
        created () {
            // $('.side-nav').sideNav();
        }
    }
</script>

<style lang="scss" scoped>
    .side-nav{
        .logo a{
            font-size: 40px;
            text-align: center;
        }
        li{
            line-height: 44px;
            a{
                height: 44px;
                line-height: 44px;
                font-size: 13px;
                color: #444;
            }
            .collapsible-header{
                background-color: transparent;
                border: none;
                line-height: inherit;
                height: inherit;
                padding: 0 30px;
            }
            .collapsible-body{
                a{
                    padding: 0 37.5px 0 45px;
                }
                .v-link-active{
                    background-color: #ee6e73;
                    color: #fff
                }
            }
        }
    }
    .bold > a {
        font-weight: bold;
    }
</style>