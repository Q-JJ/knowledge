---
icon: date
order: 6
headerDepth: 3
date: 2022-07-23
readingTime: N/A
word: N/A
lastUpdated: true
article: false
---

# Vue

## MVVM
[MVVM](../../qianduan/框架学习/Vue/基础篇/Vue.md)

## 生命周期
[生命周期](../../qianduan/框架学习/Vue/基础篇/生命周期.md)


## computed与watch

既能用 computed 实现又可以用 watch 监听来实现的功能，推荐用 computed。
 重点在于 computed 的缓存功能， computed 计算属性是用来声明式的描述一个值依赖了其它的值，当所依赖的值或者变量改变时，计算属性也会跟着改变；computed会自动计算更新
  watch 监听的是已经在 data 中定义的变量，当该变量变化时，会触发 watch 中的方法。watch不会有缓存

**使用场景** 

`computed`：当一个属性受多个属性影响的时候使用，例：购物车商品结算功能 

`watch`：当一条数据影响多条数据的时候使用，例：搜索数据

## nextTick

1. 语法：```this.$nextTick(回调函数)```

:::info 本质
对 JavaScript 执行原理 EventLoop 的一种应用。 nextTick是将回调函数放到一个异步队列中，保证在异步更新DOM的watcher后面，从而获取到更新后的DOM。
:::

2. 作用：在下一次 DOM 更新结束后执行其指定的回调。
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

## vue组件的通信方式

- `props`/`$emit` 父子组件通信

  父->子`props`，子->父 `$on、$emit` 获取父子组件实例 `parent、children` `Ref `获取实例的方式调用组件的属性或者方法 父->子孙 `Provide、inject` 官方不推荐使用，但是写组件库时很常用

- `$emit`/`$on` 自定义事件 兄弟组件通信

  `Event Bus` 实现跨组件通信 `Vue.prototype.$bus = new Vue()` 自定义事件

- vuex 跨级组件通信

  Vuex、`$attrs、$listeners` `Provide、inject`

- slot 插槽
  专门实现父向子组件通信

- provied和inject

## keep-alive的实现

作用：将不活动的组件实例保存在内存中，实现组件缓存，保持这些组件的状态，以避免反复渲染导致的性能问题。

场景：tabs标签页、后台导航，vue性能优化

原理：`Vue.js`内部将`DOM`节点抽象成了一个个的`VNode`节点，`keep-alive`组件的缓存也是基于`VNode`节点的而不是直接存储`DOM`结构。它将满足条件`（pruneCache与pruneCache）`的组件在`cache`对象中缓存起来，在需要重新渲染的时候再将`vnode`节点从`cache`对象中取出并渲染。

## Vuex

[Vuex](../../qianduan/框架学习/Vue/3.Vuex/介绍.md)



## Vue的性能优化

- 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher 
- v-if和v-for不能连用，如果需要使用v-for给每项元素绑定事件时使用事件代理 
- SPA 页面采用keep-alive缓存组件 
- 在更多的情况下，使用v-if替代v-show 
- key保证唯一 
- 使用路由懒加载、异步组件 
- 防抖、节流 
- 第三方模块按需导入 
- 图片懒加载 
- 使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。
- 使用cdn加载第三方模块 
- SEO优化 
- 预渲染 
- 服务端渲染SSR 


