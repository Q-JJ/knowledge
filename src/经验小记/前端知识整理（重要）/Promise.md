---
icon: date
order: 10
headerDepth: 3
date: 2022-07-23
readingTime: N/A
word: N/A
lastUpdated: true
article: false
---

# Promise

## 手写Promise
一个promise有三种状态：pending（初始状态），fulfilled（成功），rejected（失败）。










### then方法
then方法有两个回调函数onFulfilled和onRejected，当promise成功执行第一个函数参数，失败执行第二个函数参数。

处理逻辑[^1]：如果 onFulfilled 不是一个函数，则内部会被替换为一个恒等函数（(x) => x），它只是简单地将兑现值向前传递。如果 onRejected 不是一个函数，则内部会被替换为一个抛出器函数（(x) => { throw x; }），它会抛出它收到的拒绝原因。

```js
then(onFulfilled,onRejected){
    onFulfilled  = typeof onFulfilled === 'function'?onFulfilled:x=>x
    onRejected  = typeof onRejected === 'function'?onRejected:x=>{throw x}
    if(this.state === FULFILLED){
        onFulfilled(this.result)
    }else if(this.state === REJECTED){
        onRejected(this.result)
    }
}

// test
new MyPromise((resolve, reject) => {
    resolve("你好");
}).then(
    res => {
        console.log("成功回调:", res);
    },
    err => {
        console.log("成功回调:",err);
    }
); 
```
### 异步调用和多次调用
   多次调用：新增一个实例属性handlers，用于存放回调函数。在then中，如果状态是pending，则不需要执行回调函数，进行保存。当调用resolve或reject后，取出handlers中的回调函数依次执行。
   
   异步调用：采用queueMicrotask实现，在回调函数外套queueMicrotask。

```js
    queueMicrotask(() => {
             onFulfilled(this.result)
          })    

```


### 链式编程
本质：在then中返回一个新的Promise实例
```js

then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : x => x
        onRejected = typeof onRejected === 'function' ? onRejected : x => { throw x }

        // 1. 返回新Promise实例
        const p2 = new MyPromise((resolve, reject) => {
          if (this.state === FULFILLED) {
            queueMicrotask(() => {
          
              try {
                const x = onFulfilled(this.result)
                if(x instanceof MyPromise){
                    x.then(res=>resolve(x),err=>reject(err))
                }else{
                    resolve(x)
                }
               
              } catch (error) {
                // 2.2 处理异常
                // console.log('捕获异常:', error)
                reject(error)
              }
            })
          }
          else if (this.state === REJECTED) {
            queueMicrotask(() => {
              onRejected(this.result)
            })
          }
          else if (this.state === PENDING) {
            this.#handlers.push({
              onFulfilled: () => {
                queueMicrotask(() => {
                  onFulfilled(this.result)
                })
              }, onRejected: () => {
                queueMicrotask(() => {
                  onRejected(this.result)
                })
              }
            })
          }

        })

        return p2
      }





    const p = new MyPromise((resolve, reject) => {
      resolve(1)
    })
    p.then(res => {
      console.log('p1:', res)
      throw 'throw-error'
      return 2
    }).then(res => {
      console.log('p2:', res)
    }, err => {
      console.log('p2:', err)
    })

```

```js
    // 定义状态变量
    const PENDING = 'pending'
    const FULFILLED = 'fulfilled'
    const REJECTED = 'rejected'

   class MyPromise{
    state = PENDING
    result = undefined
    // 用于存储回调函数，私有属性
    #handlers = []
    constructor(func){

        const resolve =(result)=>{
            // 改状态: pending->fulfilled
            if(this.state === PENDING){
                this.state = FULFILLED
                this.result = result
                this.#handlers.forEach(({onFulfilled})=>onFulfilled(this.result))
            }
        }
        const reject=(result)=>{
            // 改状态: pending->rejected
            if(this.state === PENDING){
                this.state = REJECTED
                this.result = result
                this.#handlers.forEach(({onRejected})=>onRejected(this.result))
            }
        }
    func(resolve,reject)
   }
//    then方法
    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled === 'function'?onFulfilled:x=>x
        onRejected = typeof onRejected === 'function'?onRejected:x=>{throw x}

        if(this.state === FULFILLED){
          queueMicrotask(() => {
             onFulfilled(this.result)
          })
        }else if(this.state === REJECTED){
          queueMicrotask(() => {
            onRejected(this.result)
          })
        }else if(this.state === PENDING){
            this.#handlers.push({
            onFulfilled: () => {
              queueMicrotask(() => {
                onFulfilled(this.result)
              })
            }, onRejected: () => {
              queueMicrotask(() => {
                onRejected(this.result)
              })
            }
          })
        }
    }
   }

```
