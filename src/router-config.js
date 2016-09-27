/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Quote from './components/Quote.vue';
import page404 from './components/404.vue';

export function routerConfig (router) {
    router.map({
        '*': {
            component: page404
        },
        '/': {
            name: 'home',
            component: Home
        },
        '/about': {
            name: 'about',
            component: About
        },
        '/quote': {
            name: 'quote',
            component: Quote
        }
    });
}
