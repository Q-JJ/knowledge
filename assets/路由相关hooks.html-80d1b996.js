import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-131d0148.js";const p={},e=t(`<h1 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> Hooks</h1><h3 id="_1-useroutes" tabindex="-1"><a class="header-anchor" href="#_1-useroutes" aria-hidden="true">#</a> 1. useRoutes()</h3><ol><li><p>作用：根据路由表，动态创建<code>&lt;Routes&gt;</code>和<code>&lt;Route&gt;</code>。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">//路由表配置：src/routes/index.js</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;../pages/About&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../pages/Home&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Navigate<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">element</span><span class="token operator">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span><span class="token punctuation">/&gt;</span></span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">element</span><span class="token operator">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span><span class="token punctuation">/&gt;</span></span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">element</span><span class="token operator">:</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Navigate</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">//App.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>NavLink<span class="token punctuation">,</span>useRoutes<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&#39;./routes&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//根据路由表生成对应的路由规则</span>
	<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token function">useRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			......
      </span><span class="token punctuation">{</span><span class="token comment">/* 注册路由 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token punctuation">{</span>element<span class="token punctuation">}</span><span class="token plain-text">
		  ......
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_2-usenavigate" tabindex="-1"><a class="header-anchor" href="#_2-usenavigate" aria-hidden="true">#</a> 2. useNavigate()</h3><ol><li><p>作用：返回一个函数用来实现编程式导航。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useNavigate<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//第一种使用方式：指定具体的路径</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> 
    <span class="token comment">//第二种使用方式：传入数值进行前进或后退，类似于5.x中的 history.go()方法</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handle<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">按钮</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-useparams" tabindex="-1"><a class="header-anchor" href="#_3-useparams" aria-hidden="true">#</a> 3. useParams()</h3><ol><li><p>作用：回当前匹配路由的<code>params</code>参数，类似于5.x中的<code>match.params</code>。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./pages/User.jsx&#39;</span>

<span class="token keyword">function</span> <span class="token function">ProfilePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取URL中携带过来的params参数</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Routes</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>users/:id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">User</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Routes</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_4-usesearchparams" tabindex="-1"><a class="header-anchor" href="#_4-usesearchparams" aria-hidden="true">#</a> 4. useSearchParams()</h3><ol><li><p>作用：用于读取和修改当前位置的 URL 中的查询字符串。</p></li><li><p>返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useSearchParams<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Detail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span>search<span class="token punctuation">,</span>setSearch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> id <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> title <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> content <span class="token operator">=</span> search<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
				</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setSearch</span><span class="token punctuation">(</span><span class="token string">&#39;id=008&amp;title=哈哈&amp;content=嘻嘻&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">点我更新一下收到的search参数</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">消息编号：</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">消息标题：</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">消息内容：</span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
	<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_5-uselocation" tabindex="-1"><a class="header-anchor" href="#_5-uselocation" aria-hidden="true">#</a> 5. useLocation()</h3><ol><li><p>作用：获取当前 location 信息，对标5.x中的路由组件的<code>location</code>属性。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useLocation<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Detail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;@&#39;</span><span class="token punctuation">,</span>x<span class="token punctuation">)</span>
  <span class="token comment">// x就是location对象: </span>
	<span class="token comment">/*
		{
      hash: &quot;&quot;,
      key: &quot;ah9nv6sz&quot;,
      pathname: &quot;/login&quot;,
      search: &quot;?name=zs&amp;age=18&quot;,
      state: {a: 1, b: 2}
    }
	*/</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">消息编号：</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">消息标题：</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
			</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">消息内容：</span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
	<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_6-usematch" tabindex="-1"><a class="header-anchor" href="#_6-usematch" aria-hidden="true">#</a> 6. useMatch()</h3><ol><li><p>作用：返回当前匹配信息，对标5.x中的路由组件的<code>match</code>属性。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login/:page/:pageSize<span class="token punctuation">&quot;</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Login</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavLink</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login/1/10<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">登录</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavLink</span></span><span class="token punctuation">&gt;</span></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> match <span class="token operator">=</span> <span class="token function">useMatch</span><span class="token punctuation">(</span><span class="token string">&#39;/login/:x/:y&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token comment">//输出match对象</span>
  <span class="token comment">//match对象内容如下：</span>
  <span class="token comment">/*
  	{
      params: {x: &#39;1&#39;, y: &#39;10&#39;}
      pathname: &quot;/LoGin/1/10&quot;  
      pathnameBase: &quot;/LoGin/1/10&quot;
      pattern: {
      	path: &#39;/login/:x/:y&#39;, 
      	caseSensitive: false, 
      	end: false
      }
    }
  */</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Login</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_7-useinroutercontext" tabindex="-1"><a class="header-anchor" href="#_7-useinroutercontext" aria-hidden="true">#</a> 7. useInRouterContext()</h3><p>​ 作用：如果组件在 <code>&lt;Router&gt;</code> 的上下文中呈现，则 <code>useInRouterContext</code> 钩子返回 true，否则返回 false。</p><h3 id="_8-usenavigationtype" tabindex="-1"><a class="header-anchor" href="#_8-usenavigationtype" aria-hidden="true">#</a> 8. useNavigationType()</h3><ol><li>作用：返回当前的导航类型（用户是如何来到当前页面的）。</li><li>返回值：<code>POP</code>、<code>PUSH</code>、<code>REPLACE</code>。</li><li>备注：<code>POP</code>是指在浏览器中直接打开了这个路由组件（刷新页面）。</li></ol><h3 id="_9-useoutlet" tabindex="-1"><a class="header-anchor" href="#_9-useoutlet" aria-hidden="true">#</a> 9. useOutlet()</h3><ol><li><p>作用：用来呈现当前组件中渲染的嵌套路由。</p></li><li><p>示例代码：</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">useOutlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment">// 如果嵌套路由没有挂载,则result为null</span>
<span class="token comment">// 如果嵌套路由已经挂载,则展示嵌套的路由对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_10-useresolvedpath" tabindex="-1"><a class="header-anchor" href="#_10-useresolvedpath" aria-hidden="true">#</a> 10.useResolvedPath()</h3><ol><li>作用：给定一个 URL值，解析其中的：path、search、hash值。</li></ol>`,21),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","路由相关hooks.html.vue"]]);export{r as default};
