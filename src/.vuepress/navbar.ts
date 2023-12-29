/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-17 17:20:59
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-26 21:27:46
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
          { text: "HTML和CSS", icon: "pen-to-square", link: "HTML和CSS" },
          { text: "JS", icon: "pen-to-square", link: "JS" },
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
      {
        text: "项目实战",
        icon: "pen-to-square",
        prefix: "项目实战/",
        children: [
          { text: "湫管理系统", icon: "pen-to-square", link: "湫管理系统" },
        ],
      },
    ],
  },
  // "/demo/",
 
  "/经验小记/",
  "/intro"
]);
