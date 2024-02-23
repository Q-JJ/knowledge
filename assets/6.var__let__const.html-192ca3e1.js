import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,f as n}from"./app-131d0148.js";const a={},r=n('<h1 id="var-let-const" tabindex="-1"><a class="header-anchor" href="#var-let-const" aria-hidden="true">#</a> var &amp;&amp; let &amp;&amp; const</h1><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><ol><li><p>var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。存在变量提升</p></li><li><p>let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。不存在变量提升</p></li><li><p>const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，且不能修改。</p></li><li><p>var可以<code>先使用，后声明</code>，因为存在变量提升；let必须先声明后使用。</p></li><li><p>var是允许在相同作用域内重复声明同一个变量的，而let与const不允许这一现象。</p></li><li><p>在全局上下文中，基于let声明的全局变量和全局对象GO（window）没有任何关系 ;var声明的变量会和GO有映射关系；</p></li><li><p><code>会产生暂时性死区</code></p></li></ol><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">var</th><th style="text-align:center;">Let</th><th style="text-align:center;">const</th></tr></thead><tbody><tr><td style="text-align:center;">作用域</td><td style="text-align:center;">函数作用域</td><td style="text-align:center;">块作用域</td><td style="text-align:center;">块作用域</td></tr><tr><td style="text-align:center;">声明提升</td><td style="text-align:center;">能</td><td style="text-align:center;">不能</td><td style="text-align:center;">不能</td></tr><tr><td style="text-align:center;">重复声明</td><td style="text-align:center;">能</td><td style="text-align:center;">不能</td><td style="text-align:center;">不能</td></tr><tr><td style="text-align:center;">全局声明时为window对象的属性</td><td style="text-align:center;">是</td><td style="text-align:center;">不是</td><td style="text-align:center;">不是</td></tr></tbody></table>',4),d=[r];function c(i,s){return e(),l("div",null,d)}const _=t(a,[["render",c],["__file","6.var__let__const.html.vue"]]);export{_ as default};
