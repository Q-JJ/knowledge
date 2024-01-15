---
icon: date
order: 2
headerDepth: 3
date: 2022-07-23
readingTime: N/A
word: N/A
lastUpdated: true
article: false
---



# redux核心API

## 核心API
- createstore()：创建包含指定reducer的store对象

- store对象: redux库最核心的管理对象
    - state
    - reducer
- 核心方法:
    - getState()
    - dispatch(action)
    - subscribe(listener)
- 具体编码:
    - store.getState()
    - store.dispatch({type:'INCREMENT', number})
    - store.subscribe(render)
- applyMiddleware()：应用上基于redux的中间件(插件库)

- combineReducers()：合并多个reducer函数



## react-redux

![react-redux](react-redux.png)

:::info API

1. Provider：让所有的组件都接收到 Store
    ```jsx
        // main.js
        <Provider store={store}>
        <App />
        </Provider>
    ```

2. useSelector()：从 Store 提取 State 数据，并监听 State 中数据的更新，只要数据发生变化，就自动重新渲染组件。
    ```jsx
        const count = useSelector(state => {
        return {
        count: state.count,
        }
    })
    ```

3. useDispatch(): 从 Store 中直接获取 dispatch 方法。
    ```jsx
    const dispatch = useDispatch()
    const handleCountChange = () => {
         dispatch(add(1))
      }
    ```
:::