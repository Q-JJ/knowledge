---
icon: date
order: 1
headerDepth: 3
date: 2022-07-23
readingTime: N/A
word: N/A
lastUpdated: true
article: false
---

# 路由route

:::info 白话理解
一个路由就是一组映射关系（key - value），route就像是快递分拣中某一条工作线，它起到限制和放行的作用，路由守卫就好比在分拣前、装车前的检查。回到Vue中，route可以配置页面的路由规则，配置跳转的页面；可以设置路由守卫来达到某个条件后执行某些操作，你可以配置一个全局路由守卫，也可以在不同页面配置组件内守卫。
:::

1. 前端路由：key是路径，value是组件。

2. 创建路由组件【一般放在views|pages文件夹】

3. 创建router文件夹，index.js

## 基本使用

1. 安装vue-router，命令：```npm i vue-router```

2. 应用插件：```Vue.use(VueRouter)```

3. 编写router配置项:

   ```js
   //引入VueRouter
   import VueRouter from 'vue-router'
   //引入Luyou 组件
   import About from '../components/About'
   import Home from '../components/Home'
   
   //创建router实例对象，去管理一组一组的路由规则
   const router = new VueRouter({
      routes:[
         {
            path:'/about',
            component:About
         },
         {
            path:'/home',
            component:Home
         }
      ]
   })
   
   //暴露router
   export default router
   ```

4. 实现切换（active-class可配置高亮样式）

   ```vue
   <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```vue
   <router-view></router-view>
   ```
:::warning 
 - 路由组件通常存放在```pages```文件夹，一般组件通常存放在```components```文件夹。
 - 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
 - 每个组件都有自己的```$route```属性，里面存储着自己的路由信息。
 - 整个应用只有一个router，可以通过组件的```$router```属性获取到。
:::

## 多级路由

1. 配置路由规则，使用children配置项：

   ```js
   routes:[
      {
         path:'/about',
         component:About,
      },
      {
         path:'/home',
         component:Home,
         children:[ //通过children配置子级路由
            {
               path:'news', //此处一定不要写：/news
               component:News
            },
            {
               path:'message',//此处一定不要写：/message
               component:Message
            }
         ]
      }
   ]
   ```

2. 跳转（要写完整路径）：

   ```vue
   <router-link to="/home/news">News</router-link>
   ```

## 命名路由

1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
         path:'/demo',
         component:Demo,
         children:[
            {
               path:'test',
               component:Test,
               children:[
                  {
                            name:'hello' //给路由命名
                     path:'welcome',
                     component:Hello,
                  }
               ]
            }
         ]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
         :to="{
            name:'hello',
            query:{
               id:666,
                  title:'你好'
            }
         }"
      >跳转</router-link>
      ```
