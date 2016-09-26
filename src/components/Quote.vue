<template>
    <div class="row">
        <div class="quote-wrapper">
            <h2>Random Quote</h2>
            <p>{{{quote}}}</p>
        </div>
    </div>
</template>

<script>
    import { getQuote } from '../models/quote';

    export default {
        name: 'Quote',
        data: function () {
            return {
                quote: ''
            };
        },
        ready: function () {
            getQuote(this).then(function (res) {
                this.$set('quote', res.data[0].content);
            }, function (res) {
                console.log(res);
            });
        }
    };
</script>

<style lang="scss">
    // Styles
    .quote-wrapper{
        box-shadow: 0 3px 1px -2px rgba(0,0,0,.14);
        padding: 2em;
        border: 1px solid #ccc;
        margin-top: 1em;
    }
</style>