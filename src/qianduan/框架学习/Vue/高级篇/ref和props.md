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

# ref和Props

## ref属性

ref 被⽤来给元素或⼦组件注册引⽤信息（id的替代者）

- 应⽤在 html 标签上获取的是==真实 DOM元素==
- 应⽤在组件标签上获取的是组件实例对象（vc ）
- 使⽤⽅式
  1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
  2. 获取：```this.$refs.xxx```



## 3. props属性

1. 功能：让组件接收外部传过来的数据

2. 传递数据：```<Demo :name="xxx"/>```

3. 接收数据：

   - 第一种方式（只接收）：```props:['name'] ```

   - 第二种方式（限制类型）：```props:{name:String}```

   - 第三种方式（限制类型、限制必要性、指定默认值）：

     ```javascript
     props:{
      name:{
      type:String, //类型
      required:true, //必要性
      default:'湫' //默认值
      }
     }
     ```
::: info
props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
:::

4. props适用于：

   - 父组件 ==> 子组件 通信
   - 子组件 ==> 父组件 通信（要求父先给子一个函数）

5. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的(单向数据流[^1])

6. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。





[^1]:[单向数据流](https://v2.cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)