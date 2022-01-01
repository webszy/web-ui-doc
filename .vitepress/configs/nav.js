const { getPath } = require('./utils')

module.exports = [
  { text: '介绍', link: '/introduction/' },
  { text: '使用', link: '/components/', activeMatch: getPath('^/components/') },
  {
    text: '更新日志',
    link:
      'https://github.com/webszy/web-ui/tags'
  }
]
