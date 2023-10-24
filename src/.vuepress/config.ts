/*
 * @Descripttion: 
 * @version: 
 * @Author: JnannJ
 * @Date: 2023-10-17 17:20:59
 * @LastEditors: JnannJ
 * @LastEditTime: 2023-10-18 19:12:47
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/knowledge/",

  lang: "zh-CN",
  title: "湫的知识海洋",
  description: "湫的知识海洋",

  theme

  // Enable it with pwa
  // shouldPrefetch: false,
});
