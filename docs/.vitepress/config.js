
const {
    getBackendNav,
    getFrontendNav,
    getToolsNav,

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
        getBackendNav,
        { 
          text: '前端', 
          items: [
            {text: 'Js', link: '/frontend/js/index', activeMatch: '/frontend/js/'}
          ]
        },
        {

        }
      ],

      sidebar: {
         '/backend/java/': [
             {
                 text: 'java基础',
                 collapsible: true,
                 items: [
                     {text: '面向对象' , link : '/backend/java/'},
                     {text: 'Java高级' , link: '/backend/java/senior'}
                 ]
             }
         ]
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