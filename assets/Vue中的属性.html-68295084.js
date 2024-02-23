import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-131d0148.js";const e={},p=t(`<h1 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h1><h2 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h2><ol><li>Object.defineproperty 方法</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> <span class="token operator">&gt;</span>
			<span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">22</span>
			<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;湫&#39;</span><span class="token punctuation">,</span>
				<span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
			Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
				<span class="token comment">// value:22,</span>
				<span class="token comment">// enumerable:true, //控制属性是否可以枚举，默认值是false</span>
				<span class="token comment">// writable:true, //控制属性是否可以被修改，默认值是false</span>
				<span class="token comment">// configurable:true //控制属性是否可以被删除，默认值是false</span>

				<span class="token comment">//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值</span>
				<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;读取age属性了&#39;</span><span class="token punctuation">)</span>
					<span class="token keyword">return</span> number
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token comment">//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值</span>
				<span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;修改了age属性，且值是&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
					number <span class="token operator">=</span> value
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>Vue 中的数据代理：通过 vm 对象来代理 data 对象中属性的操作（读/写）</p><p>好处：更加方便的操作 data 中的数据</p><p>基本原理：通过 Object.defineProperty()把 data 对象中所有属性添加到 vm 上。为每一个添加到 vm 上的属性，都指定一个 getter/setter。在 getter/setter 内部去操作（读/写）data 中对应的属性。</p></li></ol><h2 id="计算属性-computed" tabindex="-1"><a class="header-anchor" href="#计算属性-computed" aria-hidden="true">#</a> 计算属性（computed）</h2><ol><li>定义：要用的属性不存在，要通过已有属性计算得来。</li><li>原理：底层借助了 Objcet.defineproperty 方法提供的 getter 和 setter。</li><li>get 函数什么时候执行？<br> (1).初次读取时会执行一次。<br> (2).当依赖的数据发生改变时会被再次调用。</li><li>优势：与 methods 实现相比，内部有缓存机制（复用），效率更高，调试方便。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&quot;张&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&quot;三&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//完整写法</span>
    <span class="token comment">/* fullName:{
					get(){
						console.log(&#39;get被调用了&#39;)
						return this.firstName + &#39;-&#39; + this.lastName
					}
				} */</span>
    <span class="token comment">//简写</span>
    <span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;get被调用了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&quot;-&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="侦听属性-watch" tabindex="-1"><a class="header-anchor" href="#侦听属性-watch" aria-hidden="true">#</a> 侦听属性（watch）</h2><ol><li><p>当被侦听的属性变化时, 回调函数自动调用, 进行相关操作。</p></li><li><p>侦听的属性必须存在，才能进行监视。</p></li><li><p>侦听的两种写法： - new Vue 时传入 watch 配置</p><ul><li>通过 vm.$watch 侦听</li></ul></li><li><p>深度侦听：</p><ul><li>Vue 中的 watch 默认不监测对象内部值的改变（一层）。</li><li>配置 <strong>deep:true</strong> 可以监测对象内部值改变（多层）。</li></ul></li></ol><blockquote><p>(1). Vue 自身可以侦听对象内部值的改变，但 Vue 提供的 watch 默认不可以！</p><p>(2). 使用 watch 时根据数据的具体结构，决定是否采用深度侦听。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">isHot</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					<span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token comment">//侦听多级结构中某个属性的变化</span>
				<span class="token comment">/* &#39;numbers.a&#39;:{
					immediate:true, //初始化时让handler调用一下
					handler(){
						console.log(&#39;a被改变了&#39;)
					}
				} */</span>
				<span class="token comment">//侦听多级结构中所有属性的变化</span>
				<span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;numbers改变了&#39;</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简写：当配置项只有 handler。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token comment">//正常写法</span>
				<span class="token comment">/* isHot:{
					handler(newValue,oldValue){
						console.log(&#39;isHot被修改了&#39;,newValue,oldValue)
					}
				}, */</span>
				<span class="token comment">//简写</span>
				 <span class="token function">isHot</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isHot被修改了&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		

		<span class="token comment">//正常写法</span>
		<span class="token comment">/* vm.$watch(&#39;isHot&#39;,{
			handler(newValue,oldValue){
				console.log(&#39;isHot被修改了&#39;,newValue,oldValue)
			}
		}) */</span>

		<span class="token comment">//简写</span>
		vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;isHot&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isHot被修改了&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">computed 和 watch 之间的区别</p><ol><li><p>computed 能完成的功能，watch 都可以完成。</p></li><li><p>watch 能完成的功能，computed 不一定能完成，例如：watch 可以进行异步操作。</p></li></ol><p>重要原则<br> 1. 所被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或 组件实例对象。<br> 2. 管理的函数（定时器的回调函数、ajax 的回调函数等、Promise 的回调函数），最好写成箭头函数，这样 this 的指向才是 vm 或 组件实例对象。</p></div>`,15),l=[p];function o(i,c){return s(),a("div",null,l)}const d=n(e,[["render",o],["__file","Vue中的属性.html.vue"]]);export{d as default};
