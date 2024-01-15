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

# ReactRouter 6
安装：`npm install --save react-router-dom`

与React Router 5.x 版本相比，改变了什么？
1. 内置组件的变化：移除`<Switch/>` ，新增 `<Routes/>`等。
2. 语法的变化：`component={About}` 变为 `element={<About/>}`等。
3. 新增多个hook：`useParams`、`useNavigate`、`useMatch`等。

## 路由组件传递参数
### 1. params参数

路由链接(携带参数)：`<Link to='/demo/test/tom/18'}>详情</Link>`

注册路由(声明接收)：`<Route path="/demo/test/:name/:age" component={Test}/>`

接收参数：this.props.match.params

### 2. search参数

路由链接(携带参数)：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`

注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`

接收参数：this.props.location.search

备注：获取到的search是urlencoded编码字符串，需要借助querystring解析

### 3. state参数

路由链接(携带参数)：`<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>`

注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`

接收参数：this.props.location.state

备注：刷新也可以保留住参数

## Redirect的使用	

1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由

```jsx
<Switch>
	<Route path="/about" component={About}/>
	<Route path="/home" component={Home}/>
	<Redirect to="/about"/>
</Switch>
```

## 路由跳转

- `this.props.history.push()` 方法用于在JS中实现页面跳转
- `this.props.history.go(-1)` 用来实现页面的前进（1）和后退(-1)