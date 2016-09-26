<template lang="jade">
    .wrapper
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
            };
        }
    };
</script>

<style lang="scss">
    @import "../stylesheets/app.scss";
</style>
