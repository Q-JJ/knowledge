import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-131d0148.js";const p={},e=t(`<h1 id="跨域通信" tabindex="-1"><a class="header-anchor" href="#跨域通信" aria-hidden="true">#</a> 跨域通信</h1><h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h2><p>含义：限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互</p><p>源：协议、域名、端口（http协议的默认端口是80）。</p><p>限制：这个源的文档没有权利去操作另一个源的文档。限制体现在以下：</p><ul><li>Cookie、LocalStorage和IndexDB无法获取。</li><li>无法获取和操作DOM。</li><li>不能发送Ajax请求。我们要注意，Ajax只适合<strong>同源</strong>的通信。</li></ul><h2 id="前后端通信" tabindex="-1"><a class="header-anchor" href="#前后端通信" aria-hidden="true">#</a> 前后端通信</h2><ul><li><p>Ajax：不支持跨域。</p></li><li><p>WebSocket：不受同源策略的限制，支持跨域。</p></li><li><p>CORS：不受同源策略的限制，支持跨域。同时支持同源和跨域的Ajax。</p></li></ul><h3 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h3><ol><li>创建XMLHttpRequest 对象。</li><li>使用open方法设置请求的参数。open(method, url, 是否异步)。</li><li>发送请求。</li><li>注册事件。 注册<strong>onreadystatechange</strong>事件，状态改变时就会调用。</li><li>获取返回的数据，更新UI。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#btnAjax&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// （1）创建异步对象</span>
        <span class="token keyword">var</span> ajaxObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// （2）设置请求的参数。method为GET、POST</span>
        ajaxObj<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  			<span class="token comment">// 2.5 若method为POST。则需加入该语句</span>
  					<span class="token comment">// xhr.setRequestHeader(&quot;content-type&quot;,&quot;application/x-www-form-urlencoded&quot;);</span>
  
        <span class="token comment">// （3）发送请求 （若为post请求，需携带参数）</span>
        ajaxObj<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//（4）注册事件。 onreadystatechange事件，状态改变时就会调用。</span>
        ajaxObj<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 为了保证 数据 完整返回，我们一般会判断 两个值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ajaxObj<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> ajaxObj<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据返回成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 修改页面的显示</span>
                document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> ajaxObj<span class="token punctuation">.</span>responseText<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨域通信方式" tabindex="-1"><a class="header-anchor" href="#跨域通信方式" aria-hidden="true">#</a> 跨域通信方式</h2><ol><li><p>JSONP：通过<code>&lt;script&gt;</code>标签的异步加载来实现的。比如说，head标签里，可以通过<code>&lt;script&gt;</code>标签的src，里面放url，加载很多在线的插件。这就是用到了JSONP。</p></li><li><p>WebSocket：服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息</p></li><li><p>CORS：跨域时，浏览器会拦截Ajax请求，并在http头中加Origin。</p></li><li><p>fetch 是一个比较新的API，用来实现CORS通信。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/some/url/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//类似于 ES6中的promise</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 出错了，等价于 then 的第二个参数，但这样更好用更直观</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Hash</p></li><li><p>postMessage(H5)</p></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 窗口A(http:A.com)向跨域的窗口B(http:B.com)发送信息</span>
 	Bwindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://B.com&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//这里强调的是B窗口里的window对象</span>
 	
 	<span class="token comment">// 在窗口B中监听 message 事件</span>
    Awindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//获取 ：url。这里指：http://A.com</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//获取：A window对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//获取传过来的数据</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","跨域通信.html.vue"]]);export{d as default};
