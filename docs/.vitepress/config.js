const {


    getBackendSidebar,
    getFrontendSidebar,
    getToolsSidebar,

} = require('./catalog')

export default {
    title: 'AnZQ',
    description: 'Just playing around.',
    base: '/blog/',

    themeConfig: {
        siteTitle: 'AnZQ-Blog', // 站点名称 和 上面的title显示的是同一个
        //logo: '/my-bolg.svg',

        nav: [
            {
                text: '后端',
                items: [
                    {text: 'Java', link: '/backend/java/index', activeMatch: '/backend/java/'}
                ]
            },
            {
                text: '前端',
                items: [
                    {text: 'Js', link: '/frontend/js/index', activeMatch: '/frontend/js/'}
                ]
            },
            {
                text: '工具',
                link: '/tools/index',
                activeMathch: '/tools/'
            }
        ],

        sidebar: {
            '/backend/java/': getBackendSidebar(),
            '/frontend/js/' : getFrontendSidebar(),
            '/tools/': getToolsSidebar()
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/anzq-yy/blog'}
        ],


        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-2022 Evan You'
        }

    }

}