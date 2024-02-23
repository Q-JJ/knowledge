import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as o,f as d}from"./app-131d0148.js";const r="/knowledge/assets/image-23281112.png",l={},t=d('<h1 id="vue-的两个特性" tabindex="-1"><a class="header-anchor" href="#vue-的两个特性" aria-hidden="true">#</a> Vue 的两个特性</h1><h2 id="数据驱动视图" tabindex="-1"><a class="header-anchor" href="#数据驱动视图" aria-hidden="true">#</a> 数据驱动视图</h2><ol><li><p>数据的变化<strong>会驱动视图</strong>自动更新</p></li><li><p>好处：程序员只管把数据维护好，那么页面结构会被 vue 自动渲染出来！</p></li></ol><h2 id="双向数据绑定" tabindex="-1"><a class="header-anchor" href="#双向数据绑定" aria-hidden="true">#</a> 双向数据绑定</h2><p><span style="background-color:#dfeefd;padding:10px;border-radius:10px;">在网页中，form 表单负责<strong>采集数据</strong>，Ajax 负责<strong>提交数据</strong>。</span></p><ol><li><p>js 数据的变化，会被自动渲染到页面上</p></li><li><p>页面上表单采集的数据发生变化的时候，会被 vue 自动获取到，并更新到 js 数据中</p></li></ol><div class="hint-container info"><p class="hint-container-title">注意</p><ol><li><p>数据驱动视图和双向数据绑定的底层原理是 MVVM（Mode 数据源、View 视图、ViewModel ）</p></li><li><p>Model 表示当前页面渲染时所依赖的数据源。</p></li><li><p>View 表示当前页面所渲染的 DOM 结构。</p></li><li><p>ViewModel 表示 vue 的实例，它是 MVVM 的核心。</p></li></ol></div><h2 id="mvvm-重要" tabindex="-1"><a class="header-anchor" href="#mvvm-重要" aria-hidden="true">#</a> MVVM（重要）</h2><p><img src="'+r+'" alt="MVVM" loading="lazy"><br> 视图模型双向绑定。<code>Model</code>层代表数据模型，<code>View</code>代表UI组件，<code>ViewModel</code>是<code>View</code>和<code>Model</code>层的桥梁，数据会绑定到<code>viewModel</code>层并自动将数据渲染到页面中，视图变化的时候会通知<code>viewModel</code>层更新数据。以前是操作DOM结构更新视图，现在是<strong>数据驱动视图</strong>。</p><p><strong>优点：</strong></p><ol><li>低耦合。视图（View）可以独立于Model变化和修改，一个Model可以绑定到不同的View上，当View变化的时候Model可以不变化，当Model变化的时候View也可以不变；</li><li>可重用性。你可以把一些视图逻辑放在一个Model里面，让很多View重用这段视图逻辑；</li><li>独立开发。开发人员可以专注于业务逻辑和数据的开发(ViewModel)，设计人员可以专注于页面设计；</li><li>可测试。</li></ol><h3 id="底层实现原理" tabindex="-1"><a class="header-anchor" href="#底层实现原理" aria-hidden="true">#</a> 底层实现原理</h3><p>vue.js是采用<strong>数据劫持</strong>结合<strong>发布者-订阅者模式</strong>的方式，通过<code>Object.defineProperty()</code>来劫持各个属性的setter和getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</p><div class="hint-container info"><p class="hint-container-title">Object.defineProperty()的缺点</p><p>只能监听到数据的修改，监听不到数据的新增和删除，从而不能触发组件更新渲染。</p><p>vue2中会对数组的新增删除方法push、pop、shift、unshift、splice、sort、reserve通过重写的形式，在拦截里面进行手动收集触发依赖更新。</p></div>',14),a=[t];function n(s,c){return i(),o("div",null,a)}const M=e(l,[["render",n],["__file","Vue.html.vue"]]);export{M as default};