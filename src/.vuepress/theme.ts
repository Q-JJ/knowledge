import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);


export default hopeTheme({
  hostname: "https://q-jj.github.io/knowledge/",

  author: {
    name: "Yivn",
  },
  breadcrumb :false,
  iconAssets: "iconfont",

  // 页面跳转
  repo: "https://github.com/Q-JJ",

  docsDir: "src",

  // navbar
  navbar,
  logo: "/cat2.svg",
  navbarLayout: {
    start: ["Brand"],
    end: ["Links", "Language", "Repo", "Outlook", "Search"],
  },

  // sidebar
  sidebar,

  footer: "Yivn",
  // 是否默认显示页脚
  displayFooter: true,

  // blog 描述
  blog: {
    description: "寡言的前端开发者.",
    intro: "/intro.html",
    roundAvatar: true,
    avatar: "/logo.png",
    // 是否显示在侧边栏
    // sidebarDisplay:'always',
    medias: {
      Email: "mailto:J001222@163.com",
      GitHub: "https://github.com/Q-JJ",
      Lark:"https://www.yuque.com/u33335366/kfzs",
      // MediaY: [
      //   // 链接
      //   "https://mediay.com/UserY/",
      //   // 图标地址
      //   path.resolve(__dirname, "public/assets/icon/12.png"),
      // ],
    },
  },
  // 加密
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: true,
    copyCode:true,
    comment: {
      comment: false,
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
