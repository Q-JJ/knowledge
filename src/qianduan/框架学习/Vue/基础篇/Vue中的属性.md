---
icon: date
order: 3
headerDepth: 3
date: 2022-07-23
readingTime: N/A
word: N/A
lastUpdated: true
article: false
---

# 属性
## 数据代理

1. Object.defineproperty 方法

```javascript
<script type="text/javascript" >
			let number = 22
			let person = {
				name:'湫',
				sex:'男',
			}
			Object.defineProperty(person,'age',{
				// value:22,
				// enumerable:true, //控制属性是否可以枚举，默认值是false
				// writable:true, //控制属性是否可以被修改，默认值是false
				// configurable:true //控制属性是否可以被删除，默认值是false

				//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
				get(){
					console.log('读取age属性了')
					return number
				},
				//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
				set(value){
					console.log('修改了age属性，且值是',value)
					number = value
				}
			})
			console.log(person)
		</script>
```

2. Vue 中的数据代理：通过 vm 对象来代理 data 对象中属性的操作（读/写）

   好处：更加方便的操作 data 中的数据

   基本原理：通过 Object.defineProperty()把 data 对象中所有属性添加到 vm 上。为每一个添加到 vm 上的属性，都指定一个 getter/setter。在 getter/setter 内部去操作（读/写）data 中对应的属性。

## 计算属性（computed）

1. 定义：要用的属性不存在，要通过已有属性计算得来。
2. 原理：底层借助了 Objcet.defineproperty 方法提供的 getter 和 setter。
3. get 函数什么时候执行？
   (1).初次读取时会执行一次。
   (2).当依赖的数据发生改变时会被再次调用。
4. 优势：与 methods 实现相比，内部有缓存机制（复用），效率更高，调试方便。

```javascript
const vm = new Vue({
  el: "#root",
  data: {
    firstName: "张",
    lastName: "三",
  },
  computed: {
    //完整写法
    /* fullName:{
					get(){
						console.log('get被调用了')
						return this.firstName + '-' + this.lastName
					}
				} */
    //简写
    fullName() {
      console.log("get被调用了");
      return this.firstName + "-" + this.lastName;
    },
  },
});
```

## 侦听属性（watch）

1. 当被侦听的属性变化时, 回调函数自动调用, 进行相关操作。
2. 侦听的属性必须存在，才能进行监视。
3. 侦听的两种写法： - new Vue 时传入 watch 配置

   - 通过 vm.$watch 侦听

4. 深度侦听：
   - Vue 中的 watch 默认不监测对象内部值的改变（一层）。
   - 配置 **deep:true** 可以监测对象内部值改变（多层）。

> (1). Vue 自身可以侦听对象内部值的改变，但 Vue 提供的 watch 默认不可以！
>
> (2). 使用 watch 时根据数据的具体结构，决定是否采用深度侦听。

```javascript
data:{
				isHot:true,
				numbers:{
					a:1,
					b:1,
				}
			},
watch:{
				//侦听多级结构中某个属性的变化
				/* 'numbers.a':{
					immediate:true, //初始化时让handler调用一下
					handler(){
						console.log('a被改变了')
					}
				} */
				//侦听多级结构中所有属性的变化
				numbers:{
					deep:true,
					handler(){
						console.log('numbers改变了')
					}
				}
			}
```

简写：当配置项只有 handler。

```javascript
watch:{
				//正常写法
				/* isHot:{
					handler(newValue,oldValue){
						console.log('isHot被修改了',newValue,oldValue)
					}
				}, */
				//简写
				 isHot(newValue,oldValue){
					console.log('isHot被修改了',newValue,oldValue,this)
				}
			}
		

		//正常写法
		/* vm.$watch('isHot',{
			handler(newValue,oldValue){
				console.log('isHot被修改了',newValue,oldValue)
			}
		}) */

		//简写
		vm.$watch('isHot',(newValue,oldValue)=>{
			console.log('isHot被修改了',newValue,oldValue,this)
		})
```
::: info computed 和 watch 之间的区别
1. computed 能完成的功能，watch 都可以完成。

2. watch 能完成的功能，computed 不一定能完成，例如：watch 可以进行异步操作。

重要原则
    1. 所被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或 组件实例对象。
    2. 管理的函数（定时器的回调函数、ajax 的回调函数等、Promise 的回调函数），最好写成箭头函数，这样 this 的指向才是 vm 或 组件实例对象。
:::