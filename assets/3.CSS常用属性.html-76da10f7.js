import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-131d0148.js";const i={},o=e(`<h1 id="css常用属性" tabindex="-1"><a class="header-anchor" href="#css常用属性" aria-hidden="true">#</a> CSS常用属性</h1><h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span><span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> 		<span class="token comment">/*字体大小*/</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>      <span class="token comment">/*行高*/</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> 幼圆<span class="token punctuation">,</span>黑体<span class="token punctuation">;</span> 	<span class="token comment">/*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic <span class="token punctuation">;</span>		<span class="token comment">/*italic表示斜体，normal表示不倾斜*/</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>	<span class="token comment">/*粗体*/</span>
	<span class="token property">font-variant</span><span class="token punctuation">:</span> small-caps<span class="token punctuation">;</span>  <span class="token comment">/*小写变大写*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字体属性可以把以上文字样式综合来写, 这样可以更节约代码:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> body {   font: font-style  font-weight  font-size/line-height  font-family;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="css文本属性" tabindex="-1"><a class="header-anchor" href="#css文本属性" aria-hidden="true">#</a> css文本属性</h2><figure><img src="http://img.smyhvae.com/2015-10-03-css-18.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="overflow属性" tabindex="-1"><a class="header-anchor" href="#overflow属性" aria-hidden="true">#</a> overflow属性</h2><p><code>overflow</code>属性的属性值可以是：</p><ul><li><code>visible</code>：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来。</li><li><code>hidden</code>：不显示超过对象尺寸的内容。</li><li><code>auto</code>：如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条。</li><li><code>scroll</code>：Windows 平台下，无论内容是否超出，总是显示滚动条。Mac 平台下，和 <code>auto</code> 属性相同。</li></ul><h2 id="边框-border" tabindex="-1"><a class="header-anchor" href="#边框-border" aria-hidden="true">#</a> 边框（border）</h2><p>2、语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token property">border</span> <span class="token punctuation">:</span> border-width || border-style || border-color<span class="token punctuation">;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>边框样式 border-style 可以设置如下值：</p><ul><li>none：没有边框即忽略所有边框的宽度（默认值）</li><li>solid：边框为单实线(最为常用的)</li><li>dashed：边框为虚线</li><li>dotted：边框为点线</li></ul><p>border-radius 属性用于设置元素的外边框圆角。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token property">border-radius</span><span class="token punctuation">:</span>10px or 10% 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="利用-border-属性画一个三角形" tabindex="-1"><a class="header-anchor" href="#利用-border-属性画一个三角形" aria-hidden="true">#</a> 利用 border 属性画一个三角形</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 30px solid red<span class="token punctuation">;</span>
	<span class="token comment">/* 通过改变 border-left 和 border-right 中的像素值，来改变三角形的形状 */</span>
	<span class="token property">border-left</span><span class="token punctuation">:</span> 20px solid transparent<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> 20px solid transparent<span class="token punctuation">;</span>
    
   <span class="token comment">/* border-radus: 20px; 画扇形*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h2 id="css背景" tabindex="-1"><a class="header-anchor" href="#css背景" aria-hidden="true">#</a> css背景</h2><ul><li><p><code>background-color:#ff99ff;</code> 设置元素的背景颜色。</p></li><li><p><code>background-image:url(images/2.gif);</code> 将图像设置为背景。</p></li><li><p><code>background-repeat: no-repeat;</code> 设置背景图片是否重复及如何重复，默认平铺满。（重要）</p><ul><li><code>no-repeat</code>不要平铺；</li><li><code>repeat-x</code>横向平铺；</li><li><code>repeat-y</code>纵向平铺。</li></ul></li><li><p><code>background-position:center top;</code> 设置背景图片在当前容器中的位置。</p></li><li><p><code>background-attachment:scroll;</code> 设置背景图片是否跟着滚动条一起移动。 属性值可以是：<code>scroll</code>（与fixed属性相反，默认属性）、<code>fixed</code>（背景就会被固定住，不会被滚动条滚走）。</p></li><li><p>另外还有一个综合属性叫做<code>background</code>，它的作用是：将上面的多个属性写在一个声明中。（background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置; ）</p></li><li><p>background-origin(css3)：控制背景从什么地方开始显示</p></li><li><p>background-clip 背景裁切(css3)：设置元素的背景（背景图片或颜色）是否延伸到边框下面</p><ul><li><code>border-box</code> 超出 border-box 的部分，将裁剪掉</li><li><code>padding-box</code> 超出 padding-box 的部分，将裁剪掉</li><li><code>content-box</code> 超出 content-box 的部分，将裁剪掉</li></ul></li><li><p>background-size 调整尺寸(css3)</p></li><li><p>多重背景(css3)</p></li></ul>`,22),t=[o];function c(l,p){return s(),a("div",null,t)}const u=n(i,[["render",c],["__file","3.CSS常用属性.html.vue"]]);export{u as default};
