import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-131d0148.js";const t={},p=e(`<h1 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数" aria-hidden="true">#</a> 路由参数</h1><h2 id="query参数" tabindex="-1"><a class="header-anchor" href="#query参数" aria-hidden="true">#</a> query参数</h2><ol><li><p>传递参数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 跳转并携带query参数，to的字符串写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message/detail?id=666&amp;title=你好<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
            
<span class="token comment">&lt;!-- 跳转并携带query参数，to的对象写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
   <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      path:&#39;/home/message/detail&#39;,
      query:{
         id:666,
            title:&#39;你好&#39;
      }
   }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>接收参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id
$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="params参数" tabindex="-1"><a class="header-anchor" href="#params参数" aria-hidden="true">#</a> params参数</h2><ol><li><p>配置路由，声明接收params参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">component</span><span class="token operator">:</span>Home<span class="token punctuation">,</span>
   <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
         <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span>News
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
         <span class="token literal-property property">component</span><span class="token operator">:</span>Message<span class="token punctuation">,</span>
         <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
               <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span> <span class="token comment">//使用占位符声明接收params参数</span>
               <span class="token literal-property property">component</span><span class="token operator">:</span>Detail
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>传递参数</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/message/detail/666/你好<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
            
<span class="token comment">&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> 
   <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      name:&#39;xiangqing&#39;,
      params:{
         id:666,
            title:&#39;你好&#39;
      }
   }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！</p></blockquote></li><li><p>接收参数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="路由的props配置" tabindex="-1"><a class="header-anchor" href="#路由的props配置" aria-hidden="true">#</a> 路由的props配置</h2><p>作用：让路由组件更方便的收到参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
   <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;detail/:id&#39;</span><span class="token punctuation">,</span>
   <span class="token literal-property property">component</span><span class="token operator">:</span>Detail<span class="token punctuation">,</span>

   <span class="token comment">//第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件</span>
   <span class="token comment">// props:{a:900}</span>

   <span class="token comment">//第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件</span>
   <span class="token comment">// props:true</span>
   
   <span class="token comment">//第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件</span>
   <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">route</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">id</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
         <span class="token literal-property property">title</span><span class="token operator">:</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router-link-的-replace-属性" tabindex="-1"><a class="header-anchor" href="#router-link-的-replace-属性" aria-hidden="true">#</a> <code>&lt;router-link&gt;</code>的 replace 属性</h2><ol><li>作用：控制路由跳转时操作浏览器历史记录的模式</li><li>浏览器的历史记录有两种写入方式：分别为<code>push</code>和<code>replace</code>，<code>push</code>是追加历史记录，<code>replace</code>是替换当前记录。路由跳转时候默认为<code>push</code></li><li>如何开启<code>replace</code>模式：<code>&lt;router-link replace .......&gt;News&lt;/router-link&gt;</code></li></ol>`,10),l=[p];function i(o,c){return s(),a("div",null,l)}const d=n(t,[["render",i],["__file","路由参数.html.vue"]]);export{d as default};
