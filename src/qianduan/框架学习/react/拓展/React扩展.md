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

# React 拓展

## 1. setState

### 2 种写法

1. 对象式：`setState(stateChange, [callback])`
   - stateChange 为状态改变对象(该对象可以体现出状态的更改)
   - callback 是可选的回调函数, 它在状态更新完毕、界面也更新后(render 调用后)才被调用
2. 函数式：`setState(updater, [callback])`
   - updater 为返回 stateChange 对象的函数。
   - updater 可以接收到 state 和 props。
   - callback 是可选的回调函数, 它在状态更新、界面也更新后(render 调用后)才被调用。

:::info 总结

1. 对象式的 setState 是函数式的 setState 的简写方式(语法糖)

2. 使用原则
   - 如果新状态不依赖于原状态 ===> 使用对象方式
   - 如果新状态依赖于原状态 ===> 使用函数方式
   - 如果需要在 setState()执行后获取最新的状态数据, 要在第二个 callback 函数中读取

:::

## 2. 路由组件 lazyLoad

```js
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))

	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```

## 3. Fragment

```jsx
//作用：可以不用必须有一个真实的 DOM 根标签了
    <Fragment><Fragment>
    <></>
```

## 4. Context

一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```jsx
// 1.创建Context容器对象：
	const XxxContext = React.createContext()

// 2.渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>

// 3.后代组件读取数据：
	//第一种方式:仅适用于类组件
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

## 6. render props

### 如何向组件内部动态传入带内容的结构(标签)?

1. Vue 中: 使用 slot 技术, 也就是通过组件标签体传入结构 `<A><B/></A>`

2. React 中:
	- 使用 children props: 通过组件标签体传入结构
	- 使用 render props: 通过组件标签属性传入结构,而且可以携带数据，一般用 render 函数属性

### children props
```jsx
    <A>
      <B>xxxx</B>
    </A>
    {this.props.children}
    //问题: 如果B组件需要A组件内的数据, ==> 做不到
```
### render props
```jsx
    <A render={(data) => <C data={data}></C>}></A>
    //A组件: {this.props.render(内部state数据)}
   	//C组件: 读取A组件传入的数据显示 {this.props.data}
```