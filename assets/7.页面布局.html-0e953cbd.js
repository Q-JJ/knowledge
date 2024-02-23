import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as e,f as t}from"./app-131d0148.js";const n={},s=t('<h1 id="页面布局" tabindex="-1"><a class="header-anchor" href="#页面布局" aria-hidden="true">#</a> 页面布局</h1><h2 id="元素显示模式的转换" tabindex="-1"><a class="header-anchor" href="#元素显示模式的转换" aria-hidden="true">#</a> 元素显示模式的转换</h2><p><strong>行内元素和块级元素的区别：</strong>（重要）</p><p>行内元素：</p><ul><li>与其他行内元素并排；</li><li>不能设置宽、高。默认的宽度，就是文字的宽度。</li></ul><p>块级元素：</p><ul><li>霸占一行，不能与其他任何元素并列；</li><li>能接受宽、高。如果不设置宽度，那么宽度将默认变为父亲的100%。</li></ul><p><strong>转换方式</strong></p><ul><li>转换为块元素：display:block;</li><li>转换为行内元素：display:inline;</li><li>转换为行内块：display: inline-block;</li></ul><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2><p>1、<strong>table 表格布局</strong>：早期使用的布局，如今用得很少。</p><p>2、<strong>float 浮动 + margin</strong></p><p>3、<strong>inline-block 布局</strong>：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）。</p><p>4、<strong>flex 布局</strong>：为布局而生，非常灵活，是最为推荐的布局写法。</p><p>5、响应式布局。</p><p>6、Rem 布局</p><p>Rem是相对于html的font-size 大小计算的，如font-size：10px;那么1rem就是10px</p><p><strong>优点</strong>：可以快速适用移动端布局，字体，图片高度</p><p><strong>缺点</strong>：</p><ul><li>目前 ie 不支持，对 pc 页面来讲使用次数不多；</li><li>数据量大：所有的图片，盒子都需要我们去给一个准确的值；才能保证不同机型的适配；</li><li>在响应式布局中，必须通过 js 来动态控制根元素 font-size 的大小。也就是说 css 样式和 js 代码有一定的耦合性。且必须将改变 font-size 的代码放在 css 样式之前。</li></ul>',20),r=[s];function o(a,p){return l(),e("div",null,r)}const h=i(n,[["render",o],["__file","7.页面布局.html.vue"]]);export{h as default};
