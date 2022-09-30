// .vuepress/config.js or themePath/index.js
module.exports = {
  themeConfig: {
    nav: [
      { text: "设计", link: "/design/" },
      {
        text: "组件",
        items: [
          { text: "windows", link: "/components/windows/" },
          { text: "web", link: "/components/web/" },
          { text: "ios", link: "/components/ios/" },
          { text: "android", link: "/components/android/" },
        ],
      },
      { text: "资源", link: "/resource/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar: {
      "/components/windows": [
        {
          title: "开始",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "/introduce",
            "/1 copy",
            "/1 copy 2",
            "/1 copy 3",
          ],
        },
        {
          title: "基础组件",
          collapsable: false,
          sidebarDepth: 0,
          children: ["/introduce", "/1 copy", "/1 copy 2", "/1 copy 3"],
        },
      ],
      "/components/web": [
        {
          title: "介绍",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "/1",
            "/1 copy",
            "/1 copy 2",
            "/1 copy 3",
          ],
        },
        {
          title: "web组件",
          collapsable: false,
          sidebarDepth: 0,
          children: ["/1", "/1 copy", "/1 copy 2", "/1 copy 3"],
        },
      ],
    },
  },

  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
};
