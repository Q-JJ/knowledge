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

# redux

Redux 是React最常用的集中状态管理工具，类似于Vue中的Pinia（Vuex），可以独立于框架运行

作用：集中式管理react应用中多个组件**共享**的状态。
![redux原理图](redux%E5%8E%9F%E7%90%86%E5%9B%BE.png)

## 三个核心概念

### action（对象）

1. 动作的对象

2. 包含2个属性

   - type：标识属性, 值为字符串, 唯一, 必要属性

   - data：数据属性, 值类型任意, 可选属性

```js
// type属性，表示当前动作的标识
// 其他的参数：表示这个动作需要用到的一些数据
{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }
```



### reducer（函数）

1. 用于初始化状态、加工状态。
2. 加工时，根据旧的state和action， 产生新的state的纯函数 



### store（对象，唯一）

1. 将state、action、reducer联系在一起的对象

2. 如何得到此对象?

   ```js
   import {createStore} from 'redux'
   import reducer from './reducers'
   const store = createStore(reducer)
   ```

3. getState()：获取state

4. dispatch(action)：分发action, 触发reducer调用, 更新的state

5. subscribe(listener): 注册监听, 当产生了新的state时, 自动调用





