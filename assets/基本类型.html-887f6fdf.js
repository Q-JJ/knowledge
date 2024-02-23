const e=JSON.parse('{"key":"v-7865fcfe","path":"/qianduan/%E5%9F%BA%E7%A1%80/TypeScript/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html","title":"基本类型","lang":"zh-CN","frontmatter":{"icon":"date","order":2,"headerDepth":3,"date":"2022-09-10T00:00:00.000Z","readingTime":"N/A","word":"N/A","lastUpdated":true,"article":false,"description":"基本类型 类型声明 通过类型声明可以指定 TS 中变量（参数、形参）的类型，指定了以后就不可以修改了！ 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，不符合就报错（即使有错误，也会编译） 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值 let 变量: 类型; let 变量: 类型 = 值; function fn(参数: 类型, 参数: 类型): 类型2{ //类型2为返回值类型 ... }","head":[["meta",{"property":"og:url","content":"https://q-jj.github.io/knowledge/knowledge/qianduan/%E5%9F%BA%E7%A1%80/TypeScript/%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"湫的知识海洋"}],["meta",{"property":"og:title","content":"基本类型"}],["meta",{"property":"og:description","content":"基本类型 类型声明 通过类型声明可以指定 TS 中变量（参数、形参）的类型，指定了以后就不可以修改了！ 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，不符合就报错（即使有错误，也会编译） 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值 let 变量: 类型; let 变量: 类型 = 值; function fn(参数: 类型, 参数: 类型): 类型2{ //类型2为返回值类型 ... }"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-15T05:24:04.000Z"}],["meta",{"property":"article:author","content":"Yivn"}],["meta",{"property":"article:published_time","content":"2022-09-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-15T05:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"基本类型\\",\\"description\\":\\"基本类型 类型声明 通过类型声明可以指定 TS 中变量（参数、形参）的类型，指定了以后就不可以修改了！ 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，不符合就报错（即使有错误，也会编译） 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值 let 变量: 类型; let 变量: 类型 = 值; function fn(参数: 类型, 参数: 类型): 类型2{ //类型2为返回值类型 ... }\\"}"]]},"headers":[{"level":2,"title":"类型声明","slug":"类型声明","link":"#类型声明","children":[]},{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[{"level":3,"title":"number 类型","slug":"number-类型","link":"#number-类型","children":[]},{"level":3,"title":"string 类型","slug":"string-类型","link":"#string-类型","children":[]},{"level":3,"title":"字面量","slug":"字面量","link":"#字面量","children":[]},{"level":3,"title":"any：关闭了 TS 类型检测","slug":"any-关闭了-ts-类型检测","link":"#any-关闭了-ts-类型检测","children":[]},{"level":3,"title":"unknown：不能直接赋值给其他变量","slug":"unknown-不能直接赋值给其他变量","link":"#unknown-不能直接赋值给其他变量","children":[]},{"level":3,"title":"void","slug":"void","link":"#void","children":[]},{"level":3,"title":"never","slug":"never","link":"#never","children":[]},{"level":3,"title":"object 类型","slug":"object-类型","link":"#object-类型","children":[]},{"level":3,"title":"array 类型","slug":"array-类型","link":"#array-类型","children":[]},{"level":3,"title":"tuple 类型","slug":"tuple-类型","link":"#tuple-类型","children":[]},{"level":3,"title":"enum 类型：：为一组数值赋予友好的名字","slug":"enum-类型-为一组数值赋予友好的名字","link":"#enum-类型-为一组数值赋予友好的名字","children":[]}]},{"level":2,"title":"联合类型","slug":"联合类型","link":"#联合类型","children":[]},{"level":2,"title":"类型断言","slug":"类型断言","link":"#类型断言","children":[]},{"level":2,"title":"类型别名","slug":"类型别名","link":"#类型别名","children":[]}],"git":{"createdTime":1698161267000,"updatedTime":1705296244000,"contributors":[{"name":"Q-JJ","email":"J001222@163.com","commits":3}]},"readingTime":{"minutes":3.57,"words":1070},"filePathRelative":"qianduan/基础/TypeScript/基本类型.md","localizedDate":"2022年9月10日","excerpt":"<h1> 基本类型</h1>\\n<h2> 类型声明</h2>\\n<ol>\\n<li>通过类型声明可以指定 TS 中变量（参数、形参）的类型，指定了以后就不可以修改了！</li>\\n<li>指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，不符合就报错（即使有错误，也会编译）</li>\\n<li>简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值</li>\\n</ol>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code>  <span class=\\"token keyword\\">let</span> 变量<span class=\\"token operator\\">:</span> 类型<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">let</span> 变量<span class=\\"token operator\\">:</span> 类型 <span class=\\"token operator\\">=</span> 值<span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span>参数<span class=\\"token operator\\">:</span> 类型<span class=\\"token punctuation\\">,</span> 参数<span class=\\"token operator\\">:</span> 类型<span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span> 类型<span class=\\"token number\\">2</span><span class=\\"token punctuation\\">{</span>     <span class=\\"token comment\\">//类型2为返回值类型</span>\\n      <span class=\\"token operator\\">...</span>\\n  <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
