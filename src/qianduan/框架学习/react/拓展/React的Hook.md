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

# react Hooks

三个常用的Hook：`useState()、useEffect()、useRef()`

## State Hook
State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作

```jsx
    const [xxx, setXxx] = React.useState(initValue) 
    //参数: 第一次初始化指定的值在内部作缓存
    //返回值: 包含2个元素的数组:1.state值 2. 更新函数
```


## Effect Hook
 Effect Hook 可以让你在函数组件中执行副作用[^1]操作(用于模拟类组件中的生命周期钩子)
 | **依赖项**     | **副作用功函数的执行时机**      |
| -------------- | ------------------------------- |
| 没有依赖项     | 组件初始渲染 + 组件更新时执行   |
| 空数组依赖     | 只在初始渲染时执行一次          |
| 添加特定依赖项 | 组件初始渲染 + 依赖项变化时执行 |
```jsx
    useEffect(() => { 
     // 在此可以执行任何带副作用操作
        return () => { // 在组件卸载前执行
        // 在此做一些收尾工作, 比如清除定时器/取消订阅等
        }
    }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
```

## Ref Hook
Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据

语法: `const refContainer = useRef()`

作用:保存标签对象,功能与React.createRef()一样


## 自定义Hook

自定义Hook是以 `use打头的函数`，通过自定义Hook函数可以用来`实现逻辑的封装和复用`


```jsx
// 封装自定义Hook
// 问题: 布尔切换的逻辑 当前组件耦合在一起的 不方便复用
// 解决思路: 自定义hook
import { useState } from "react"
function useToggle () {
  // 可复用的逻辑代码
  const [value, setValue] = useState(true)
  const toggle = () => setValue(!value)

  // 哪些状态和回调函数需要在其他组件中使用 return
  return {
    value,
    toggle
  }
}

function App () {
  const { value, toggle } = useToggle()
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App
```



## DOM节点hook

### forwardRef

作用：允许组件使用ref将一个**DOM节点**暴露给父组件

```jsx
import { forwardRef, useRef } from "react"
// 子组件
// function Son () {
//   return <input type="text" />
// }
const Son = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})

// 父组件
function App () {
  const sonRef = useRef(null)
  const showRef = () => {
    console.log(sonRef)
    sonRef.current.focus()
  }
  return (
    <>
      <Son ref={sonRef} />
      <button onClick={showRef}>focus</button>
    </>
  )
}

export default App
```

### useImperativeHandle

作用：暴露子组件内部的**方法**

```jsx
import { forwardRef, useImperativeHandle, useRef } from "react"

// 子组件

const Son = forwardRef((props, ref) => {
  // 实现聚焦逻辑
  const inputRef = useRef(null)
  const focusHandler = () => {
    inputRef.current.focus()
  }

  // 把聚焦方法暴露出去
  useImperativeHandle(ref, () => {
    return {
      // 暴露的方法
      focusHandler
    }
  })
  return <input type="text" ref={inputRef} />
})


// 父组件
function App () {
  const sonRef = useRef(null)
  const focusHandler = () => {
    console.log(sonRef.current)
    sonRef.current.focusHandler()
  }
  return (
    <>
      <Son ref={sonRef} />
      <button onClick={focusHandler}>focus</button>
    </>
  )
}

export default App
```





[^1]: **React中的副作用操作**：发ajax请求数据获取、设置订阅 / 启动定时器、手动更改真实DOM