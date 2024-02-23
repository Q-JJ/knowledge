const e=JSON.parse('{"key":"v-0718ace4","path":"/%E7%BB%8F%E9%AA%8C%E5%B0%8F%E8%AE%B0/24-1-2.html","title":"Vue3组件通信应用（porps/emit）","lang":"zh-CN","frontmatter":{"title":"Vue3组件通信应用（porps/emit）","order":7,"headerDepth":3,"date":"2023-12-15T00:00:00.000Z","readingTime":"N/A","word":"N/A","lastUpdated":true,"category":["经验小记"],"tag":["面试"],"description":"Vue3组件通信应用（porps/emit） dialog封装 在写table相关页面中， 一般都会用dialog弹窗的功能来实现新增或修改的功能。这时候需要弹出很多个不同的弹出框，如果都在一个vue页面中写，会显得代码非常累赘和混乱，且复用性不强。这时候可以将dialog单独封装成一个组件，提高代码的可读性和复用性。 封装成独立组件，需要考虑到组件之间的通信，Vue3中有很多组件通信的方式，这里结合功能采用porps/emit来实现，页面TS采用setup语法糖。props主要用于父子组件通信之间。 user为用户管理页面，index在这里作为父组件，dialog作为子组件。","head":[["meta",{"property":"og:url","content":"https://q-jj.github.io/knowledge/knowledge/%E7%BB%8F%E9%AA%8C%E5%B0%8F%E8%AE%B0/24-1-2.html"}],["meta",{"property":"og:site_name","content":"湫的知识海洋"}],["meta",{"property":"og:title","content":"Vue3组件通信应用（porps/emit）"}],["meta",{"property":"og:description","content":"Vue3组件通信应用（porps/emit） dialog封装 在写table相关页面中， 一般都会用dialog弹窗的功能来实现新增或修改的功能。这时候需要弹出很多个不同的弹出框，如果都在一个vue页面中写，会显得代码非常累赘和混乱，且复用性不强。这时候可以将dialog单独封装成一个组件，提高代码的可读性和复用性。 封装成独立组件，需要考虑到组件之间的通信，Vue3中有很多组件通信的方式，这里结合功能采用porps/emit来实现，页面TS采用setup语法糖。props主要用于父子组件通信之间。 user为用户管理页面，index在这里作为父组件，dialog作为子组件。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-22T07:59:07.000Z"}],["meta",{"property":"article:author","content":"Yivn"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:published_time","content":"2023-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-22T07:59:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue3组件通信应用（porps/emit）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-22T07:59:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yivn\\"}]}"]]},"headers":[{"level":2,"title":"dialog封装","slug":"dialog封装","link":"#dialog封装","children":[{"level":3,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}]}],"git":{"createdTime":1708588747000,"updatedTime":1708588747000,"contributors":[{"name":"Q-JJ","email":"J001222@163.com","commits":1}]},"readingTime":{"minutes":2.62,"words":785},"filePathRelative":"经验小记/24-1-2.md","localizedDate":"2023年12月15日","excerpt":"<h1> Vue3组件通信应用（porps/emit）</h1>\\n<h2> dialog封装</h2>\\n<p>在写table相关页面中， 一般都会用dialog弹窗的功能来实现新增或修改的功能。这时候需要弹出很多个不同的弹出框，如果都在一个vue页面中写，会显得代码非常累赘和混乱，且复用性不强。这时候可以将dialog单独封装成一个组件，提高代码的可读性和复用性。</p>\\n<p>封装成独立组件，需要考虑到组件之间的通信，Vue3中有很多组件通信的方式，这里结合功能采用porps/emit来实现，页面TS采用setup语法糖。props主要用于父子组件通信之间。</p>\\n<p>user为用户管理页面，index在这里作为父组件，dialog作为子组件。</p>","autoDesc":true}');export{e as data};
