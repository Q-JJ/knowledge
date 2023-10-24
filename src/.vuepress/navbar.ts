/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-17 17:20:59
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-24 23:23:50
 */
import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端学习",
    icon: "pen-to-square",
    prefix: "/qianduan/",
    children: [
      {
        text: "基础",
        icon: "pen-to-square",
        prefix: "基础/",
        children: [
          { text: "TypeScript", icon: "pen-to-square", link: "TypeScript" },
        ],
      },
      {
        text: "框架学习",
        icon: "pen-to-square",
        prefix: "框架学习/",
        children: [
          { text: "Vue", icon: "pen-to-square", link: "Vue" },
        ],
      },
    ],
  },
  // "/demo/",
 
  "/经验小记/",
  "/intro"
]);
