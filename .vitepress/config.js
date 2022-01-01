const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')
module.exports = {
  title: 'Web UI',
  description: 'You may don\'t need framework any more',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    repo: 'webszy/web-ui',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',

    // nav
    nav,

    // sidebar
    sidebar,

    // page meta
    editLinks: false,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const emoji = require('markdown-it-emoji');
      md.use(emoji)
    }
  }
}
