/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

module.exports = [
    {
        name: '关于',
        model: 'About',
        id: 1,
        path: '/about'
    }, {
        name: 'Random Quote',
        model: 'Quote',
        id: 1,
        path: '/quote'
    }, {
        name: '设置',
        model: 'Settings',
        id: 2,
        subMenus: [{
            id: 3,
            name: '修改密码',
            path: '/settings/password'
        }, {
            id: 4,
            name: '账户管理',
            path: '/settings/admin'
        }]
    }
];