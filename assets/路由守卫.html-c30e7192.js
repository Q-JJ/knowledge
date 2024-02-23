const n=JSON.parse(`{"key":"v-315acbd4","path":"/qianduan/%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0/Vue/4.%E8%B7%AF%E7%94%B1Route/%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB.html","title":"路由守卫","lang":"zh-CN","frontmatter":{"icon":"date","order":4,"headerDepth":3,"date":"2022-07-23T00:00:00.000Z","readingTime":"N/A","word":"N/A","lastUpdated":true,"article":false,"description":"路由守卫 作用：对路由进行权限控制。 分类：全局守卫、独享守卫、组件内守卫 应用：可以在页面跳转前的条件判断，比如登录后的跳转；页面浏览的权限判断；用户退出系统后页面跳转到登录页，等等。 全局守卫 //全局前置守卫：初始化时执行、每次路由切换前执行 router.beforeEach((to,from,next)=&gt;{ console.log('beforeEach',to,from) if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制 if(localStorage.getItem('name') === 'admin'){ //权限控制的具体规则 next() //放行 }else{ alert('暂无权限查看') // next({name:'guanyu'}) } }else{ next() //放行 } }) //全局后置守卫：初始化时执行、每次路由切换后执行 router.afterEach((to,from)=&gt;{ console.log('afterEach',to,from) if(to.meta.title){ document.title = to.meta.title //修改网页的title }else{ document.title = 'vue_test' } })","head":[["meta",{"property":"og:url","content":"https://q-jj.github.io/knowledge/knowledge/qianduan/%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0/Vue/4.%E8%B7%AF%E7%94%B1Route/%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB.html"}],["meta",{"property":"og:site_name","content":"湫的知识海洋"}],["meta",{"property":"og:title","content":"路由守卫"}],["meta",{"property":"og:description","content":"路由守卫 作用：对路由进行权限控制。 分类：全局守卫、独享守卫、组件内守卫 应用：可以在页面跳转前的条件判断，比如登录后的跳转；页面浏览的权限判断；用户退出系统后页面跳转到登录页，等等。 全局守卫 //全局前置守卫：初始化时执行、每次路由切换前执行 router.beforeEach((to,from,next)=&gt;{ console.log('beforeEach',to,from) if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制 if(localStorage.getItem('name') === 'admin'){ //权限控制的具体规则 next() //放行 }else{ alert('暂无权限查看') // next({name:'guanyu'}) } }else{ next() //放行 } }) //全局后置守卫：初始化时执行、每次路由切换后执行 router.afterEach((to,from)=&gt;{ console.log('afterEach',to,from) if(to.meta.title){ document.title = to.meta.title //修改网页的title }else{ document.title = 'vue_test' } })"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-04T12:24:58.000Z"}],["meta",{"property":"article:author","content":"Yivn"}],["meta",{"property":"article:published_time","content":"2022-07-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-04T12:24:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"路由守卫\\",\\"description\\":\\"路由守卫 作用：对路由进行权限控制。 分类：全局守卫、独享守卫、组件内守卫 应用：可以在页面跳转前的条件判断，比如登录后的跳转；页面浏览的权限判断；用户退出系统后页面跳转到登录页，等等。 全局守卫 //全局前置守卫：初始化时执行、每次路由切换前执行 router.beforeEach((to,from,next)=&gt;{ console.log('beforeEach',to,from) if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制 if(localStorage.getItem('name') === 'admin'){ //权限控制的具体规则 next() //放行 }else{ alert('暂无权限查看') // next({name:'guanyu'}) } }else{ next() //放行 } }) //全局后置守卫：初始化时执行、每次路由切换后执行 router.afterEach((to,from)=&gt;{ console.log('afterEach',to,from) if(to.meta.title){ document.title = to.meta.title //修改网页的title }else{ document.title = 'vue_test' } })\\"}"]]},"headers":[{"level":2,"title":"全局守卫","slug":"全局守卫","link":"#全局守卫","children":[]},{"level":2,"title":"独享守卫：只有前置没有后置","slug":"独享守卫-只有前置没有后置","link":"#独享守卫-只有前置没有后置","children":[]},{"level":2,"title":"组件内守卫","slug":"组件内守卫","link":"#组件内守卫","children":[]}],"git":{"createdTime":1699100698000,"updatedTime":1699100698000,"contributors":[{"name":"Q-JJ","email":"J001222@163.com","commits":1}]},"readingTime":{"minutes":1.15,"words":345},"filePathRelative":"qianduan/框架学习/Vue/4.路由Route/路由守卫.md","localizedDate":"2022年7月23日","excerpt":"<h1> 路由守卫</h1>\\n<ol>\\n<li>\\n<p>作用：对路由进行权限控制。</p>\\n</li>\\n<li>\\n<p>分类：<strong>全局守卫、独享守卫、组件内守卫</strong></p>\\n</li>\\n<li>\\n<p>应用：可以在页面跳转前的条件判断，比如登录后的跳转；页面浏览的权限判断；用户退出系统后页面跳转到登录页，等等。</p>\\n</li>\\n</ol>\\n<h2> 全局守卫</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">//全局前置守卫：初始化时执行、每次路由切换前执行</span>\\nrouter<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">beforeEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">to<span class=\\"token punctuation\\">,</span>from<span class=\\"token punctuation\\">,</span>next</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span>\\n   console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'beforeEach'</span><span class=\\"token punctuation\\">,</span>to<span class=\\"token punctuation\\">,</span>from<span class=\\"token punctuation\\">)</span>\\n   <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>to<span class=\\"token punctuation\\">.</span>meta<span class=\\"token punctuation\\">.</span>isAuth<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">//判断当前路由是否需要进行权限控制</span>\\n      <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>localStorage<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getItem</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'name'</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">===</span> <span class=\\"token string\\">'admin'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">//权限控制的具体规则</span>\\n         <span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">//放行</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n         <span class=\\"token function\\">alert</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'暂无权限查看'</span><span class=\\"token punctuation\\">)</span>\\n         <span class=\\"token comment\\">// next({name:'guanyu'})</span>\\n      <span class=\\"token punctuation\\">}</span>\\n   <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">next</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">//放行</span>\\n   <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">//全局后置守卫：初始化时执行、每次路由切换后执行</span>\\nrouter<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">afterEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">to<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">from</span></span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span>\\n   console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'afterEach'</span><span class=\\"token punctuation\\">,</span>to<span class=\\"token punctuation\\">,</span>from<span class=\\"token punctuation\\">)</span>\\n   <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>to<span class=\\"token punctuation\\">.</span>meta<span class=\\"token punctuation\\">.</span>title<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span> \\n      document<span class=\\"token punctuation\\">.</span>title <span class=\\"token operator\\">=</span> to<span class=\\"token punctuation\\">.</span>meta<span class=\\"token punctuation\\">.</span>title <span class=\\"token comment\\">//修改网页的title</span>\\n   <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n      document<span class=\\"token punctuation\\">.</span>title <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'vue_test'</span>\\n   <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
