const { getPath } = require('./utils')

module.exports = {
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/introduction/')]: getGuideSidebar()
}

function getComponentsSidebar() {
  return [
    {
      text: '指南',
      link: '/components/',
    },
    {
      text: '组件',
      children: [
        {
          text: 'Loading - 加载状态',
          link: '/components/Loading'
        },
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        {
          text: '1. 为什么开始这个项目',
          link: '/introduction/index'
        },
        {
          text: '2. Google官方文档',
          link: '/introduction/googleDocs'
        }
      ]
    }
  ]
}

