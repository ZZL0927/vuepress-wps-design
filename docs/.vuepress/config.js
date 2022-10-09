// .vuepress/config.js or themePath/index.js
module.exports = {
  themeConfig: {
    nav: [
      { text: "设计", link: "/design/" },
      {
        text: "组件",
        items: [
          { text: "windows", link: "/components/windows/versions/1.0.0" },
          { text: "web", link: "/components/web/" },
          { text: "ios", link: "/components/ios/" },
          { text: "android", link: "/components/android/" },
        ],
      },
      { text: "资源", link: "/resource/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar: {
      "/components/windows/versions/1.0.0/": [
        {
          title: "开始",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "introduce",
            "Input",
            "password-Input",
            "Search",
            "introduce",
            "Input",
            "password-Input",
            "Search",
            "introduce",
            "Input",
            "password-Input",
            "Search",
            "introduce",
            "Input",
            "password-Input",
            "Search",
            "introduce",
            "Input",
            "password-Input",
            "Search",
            "introduce",
            "Input",
            "password-Input",
            "Search",
          ],
        },
        {
          title: "基础组件",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "inputnumber",
            "radio",
            "checkbox",
            "switch",
          ],
        },
      ],
      "/components/windows/versions/2.0.0/": [
        {
          title: "开始",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "introduce",
            "Input",
            "password-Input",
            "Search",
          ],
        },
        {
          title: "基础组件",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "inputnumber",
            "radio",
            "checkbox",
            "switch",
          ],
        },
      ],
      "/components/web/": [
        {
          title: "介绍",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "introduce",
            "log",
            "order",
            "qt",
          ],
        },
        {
          title: "web组件",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            "layout",
            "color",
            "typography",
            "button",
          ],
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
    "@zilongzhang/vuepress-plugin-anchor",
  ],
};
