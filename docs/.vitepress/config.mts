import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: 'logo.svg' }]
  ],
  base:"/CoC7thChm-docs/",
  lang: 'zh-CN',
  title: "COCchmhelpdoc",
  description: "帮助编辑不全书",
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: 'COC不全书帮助手册',
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vitejs/docs-cn/edit/main/:path',
      text: '为此页提供修改建议',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      },
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存到搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索供应商'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为这个查询应该有结果？',
            reportMissingResultsLinkText: '向我们反馈'
          }
        }
      },
    },

    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: 'index' },
      { text: '新手入门', link: '/start/start' },
      {
        text: '参与项目',
        items: [
          { text: 'github入门', link: '/github/github' },
          { text: '使用github网站', link: '/github/githubhttp' },
          { text: '使用githubdesktop', link: '/github/githubdesktop' },
          { text: '使用git', link: '/github/git' }
        ]
      },
      {
        text: '编辑指南',
        items: [
        {
          text: "Winchm",
          items: [
            { text: '用Winchm编辑', link: '/Winchm/Winchm' },
            { text: '新建项目', link: '/Winchm/newfile' },
            { text: '编辑目录', link: '/Winchm/directory' },
            { text: '文字编辑', link: '/Winchm/word' },
            { text: '添加其他元素', link: '/Winchm/otherstr' }
          ]
        },
        {
          text: "编程",
          items: [
            { text: '原理', link: '/VScode/code' },
            { text: 'html基础', link: '/VScode/html' },
            { text: '安装相关程序', link: '/VScode/program' },
            { text: 'VScode使用技巧', link: '/VScode/VScodetips' },
            { text: '生成wcp目录', link: '/VScode/wcpdirectory' },
            { text: '编辑载入正文', link: '/VScode/text' }
          ]
        }
        ]
      },
      {
        text: '编辑守则',
        items: [
          { text: '编辑守则', link: '/creed/creed' },
          { text: '格式一致', link: '/creed/1.format' },
          { text: '查阅为上', link: '/creed/2.read' },
          { text: '忠于原译', link: '/creed/3.translation' },
          { text: '做到美观', link: '/creed/4.beautiful' },
          { text: '规范编辑', link: '/creed/5.edit' }
        ]
      },
      {
        text: '示范页面',
        items: [
          { text: '创造背景', link: '/demonstration/1' },
          { text: '创造怪物', link: '/demonstration/2' },
          { text: '第二卷 神话神祗', link: '/demonstration/3' },
          { text: '科学 (专攻）', link: '/demonstration/4' },
          { text: '罪犯', link: '/demonstration/5' },
          { text: '莎布·尼古拉斯的黑山羊幼崽', link: '/demonstration/6' },
          { text: '修格斯主宰', link: '/demonstration/7' },
          { text: '奈亚拉托提普', link: '/demonstration/8' }
        ]
      }
    ],

    sidebar: {
      '/github/': [
        {
          text: '参与项目',
          items: [
            { text: '使用github', link: '/github/github' },
            { text: '使用github网站', link: '/github/githubhttp' },
            { text: '使用githubdesktop', link: '/github/githubdesktop' },
            { text: '使用git', link: '/github/git' }
          ]
        }
      ],
      '/Winchm/': [
        {
          text: '编辑项目',
          items: [
            {
              text: "Winchm",
              items: [
                { text: '用Winchm编辑', link: '/Winchm/Winchm' },
                { text: '新建项目', link: '/Winchm/newfile' },
                { text: '编辑目录', link: '/Winchm/directory' },
                { text: '文字编辑', link: '/Winchm/word' },
                { text: '添加其他元素', link: '/Winchm/otherstr' }
              ]
            },
            {
              text: "编程",
              items: [
                { text: '原理', link: '/VScode/code' },
                { text: 'html基础', link: '/VScode/html' },
                { text: '安装相关程序', link: '/VScode/program' },
                { text: 'VScode使用技巧', link: '/VScode/VScodetips' },
                { text: '生成wcp目录', link: '/VScode/wcpdirectory' },
                { text: '编辑载入正文', link: '/VScode/text' }
              ]
            }
          ]
        }
      ],
      '/VScode/': [
        {
          text: '编辑项目',
          items: [
            {
              text: "Winchm",
              items: [
                { text: '用Winchm编辑', link: '/Winchm/Winchm' },
                { text: '新建项目', link: '/Winchm/newfile' },
                { text: '编辑目录', link: '/Winchm/directory' },
                { text: '文字编辑', link: '/Winchm/word' },
                { text: '添加其他元素', link: '/Winchm/otherstr' }
              ]
            },
            {
              text: "编程",
              items: [
                { text: '原理', link: '/VScode/code' },
                { text: 'html基础', link: '/VScode/html' },
                { text: '安装相关程序', link: '/VScode/program' },
                { text: 'VScode使用技巧', link: '/VScode/VScodetips' },
                { text: '生成wcp目录', link: '/VScode/wcpdirectory' },
                { text: '编辑载入正文', link: '/VScode/text' }
              ]
            }
          ]
        }
      ],
      '/creed/': [
        {
          text: '编辑项目',
          items: [
            { text: '编辑守则', link: '/creed/creed' },
            { text: '格式一致', link: '/creed/1.format' },
            { text: '查阅为上', link: '/creed/2.read' },
            { text: '忠于原译', link: '/creed/3.translation' },
            { text: '做到美观', link: '/creed/4.beautiful' },
            { text: '规范编辑', link: '/creed/5.edit' }
          ]
        },
      ],
      '/demonstration/': [
        {
          text: '示范页面',
          items: [
            { text: '创造背景', link: '/demonstration/1' },
            { text: '创造怪物', link: '/demonstration/2' },
            { text: '第二卷 神话神祗', link: '/demonstration/3' },
            { text: '科学 (专攻）', link: '/demonstration/4' },
            { text: '罪犯', link: '/demonstration/5' },
            { text: '莎布·尼古拉斯的黑山羊幼崽', link: '/demonstration/6' },
            { text: '修格斯主宰', link: '/demonstration/7' },
            { text: '奈亚拉托提普', link: '/demonstration/8' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/COC7thChm' },
    ]
  }
})
