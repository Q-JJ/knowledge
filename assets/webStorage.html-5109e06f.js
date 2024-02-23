const e=JSON.parse(`{"key":"v-17212032","path":"/qianduan/%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0/Vue/5.%E5%85%B6%E4%BB%96/webStorage.html","title":"webStorage","lang":"zh-CN","frontmatter":{"icon":"date","order":2,"headerDepth":3,"date":"2022-07-23T00:00:00.000Z","readingTime":"N/A","word":"N/A","lastUpdated":true,"article":false,"description":"webStorage 存储内容大小一般支持5MB左右（不同浏览器可能还不一样） 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。 相关API xxxxxStorage.setItem('key', 'value'); 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。 xxxxxStorage.getItem('person'); ​ 该方法接受一个键名作为参数，返回键名对应的值。 xxxxxStorage.removeItem('key'); ​ 该方法接受一个键名作为参数，并把该键名从存储中删除。 xxxxxStorage.clear() ​ 该方法会清空存储中的所有数据。 SessionStorage存储的内容会随着浏览器窗口关闭而消失。 LocalStorage存储的内容，需要手动清除才会消失。 xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。 JSON.parse(null)的结果依然是null。","head":[["meta",{"property":"og:url","content":"https://q-jj.github.io/knowledge/knowledge/qianduan/%E6%A1%86%E6%9E%B6%E5%AD%A6%E4%B9%A0/Vue/5.%E5%85%B6%E4%BB%96/webStorage.html"}],["meta",{"property":"og:site_name","content":"湫的知识海洋"}],["meta",{"property":"og:title","content":"webStorage"}],["meta",{"property":"og:description","content":"webStorage 存储内容大小一般支持5MB左右（不同浏览器可能还不一样） 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。 相关API xxxxxStorage.setItem('key', 'value'); 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。 xxxxxStorage.getItem('person'); ​ 该方法接受一个键名作为参数，返回键名对应的值。 xxxxxStorage.removeItem('key'); ​ 该方法接受一个键名作为参数，并把该键名从存储中删除。 xxxxxStorage.clear() ​ 该方法会清空存储中的所有数据。 SessionStorage存储的内容会随着浏览器窗口关闭而消失。 LocalStorage存储的内容，需要手动清除才会消失。 xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。 JSON.parse(null)的结果依然是null。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-29T03:52:20.000Z"}],["meta",{"property":"article:author","content":"Yivn"}],["meta",{"property":"article:published_time","content":"2022-07-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-29T03:52:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"webStorage\\",\\"description\\":\\"webStorage 存储内容大小一般支持5MB左右（不同浏览器可能还不一样） 浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。 相关API xxxxxStorage.setItem('key', 'value'); 该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。 xxxxxStorage.getItem('person'); ​ 该方法接受一个键名作为参数，返回键名对应的值。 xxxxxStorage.removeItem('key'); ​ 该方法接受一个键名作为参数，并把该键名从存储中删除。 xxxxxStorage.clear() ​ 该方法会清空存储中的所有数据。 SessionStorage存储的内容会随着浏览器窗口关闭而消失。 LocalStorage存储的内容，需要手动清除才会消失。 xxxxxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null。 JSON.parse(null)的结果依然是null。\\"}"]]},"headers":[],"git":{"createdTime":1699100698000,"updatedTime":1703821940000,"contributors":[{"name":"Q-JJ","email":"J001222@163.com","commits":2}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"qianduan/框架学习/Vue/5.其他/webStorage.md","localizedDate":"2022年7月23日","excerpt":"<h1> webStorage</h1>\\n<ol>\\n<li>\\n<p>存储内容大小一般支持5MB左右（不同浏览器可能还不一样）</p>\\n</li>\\n<li>\\n<p>浏览器端通过 <strong>Window.sessionStorage</strong> 和 <strong>Window.localStorage</strong> 属性来实现本地存储机制。</p>\\n</li>\\n<li>\\n<p>相关API</p>\\n<ul>\\n<li>\\n<p><code>xxxxxStorage.setItem('key', 'value');</code><br>\\n该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。</p>\\n</li>\\n<li>\\n<p><code>xxxxxStorage.getItem('person');</code></p>\\n<p>​    该方法接受一个键名作为参数，返回键名对应的值。</p>\\n</li>\\n<li>\\n<p><code>xxxxxStorage.removeItem('key');</code></p>\\n<p>​    该方法接受一个键名作为参数，并把该键名从存储中删除。</p>\\n</li>\\n<li>\\n<p><code> xxxxxStorage.clear()</code></p>\\n<p>​    该方法会清空存储中的所有数据。</p>\\n</li>\\n</ul>\\n<blockquote>\\n<ol>\\n<li>SessionStorage存储的内容会随着浏览器窗口关闭而消失。</li>\\n<li>LocalStorage存储的内容，需要手动清除才会消失。</li>\\n<li><code>xxxxxStorage.getItem(xxx)</code>如果xxx对应的value获取不到，那么getItem的返回值是null。</li>\\n<li><code>JSON.parse(null)</code>的结果依然是null。</li>\\n</ol>\\n</blockquote>\\n</li>\\n</ol>","autoDesc":true}`);export{e as data};
