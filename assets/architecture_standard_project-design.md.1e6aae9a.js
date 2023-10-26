import{_ as l,o as i,c as a,Q as e}from"./chunks/framework.7c0fadea.js";const _=JSON.parse('{"title":"项目设计","description":"","frontmatter":{},"headers":[],"relativePath":"architecture/standard/project-design.md","filePath":"architecture/standard/project-design.md","lastUpdated":1670330848000}'),t={name:"architecture/standard/project-design.md"},o=e('<h1 id="项目设计" tabindex="-1">项目设计 <a class="header-anchor" href="#项目设计" aria-label="Permalink to &quot;项目设计&quot;">​</a></h1><p>如何设计一个项目，如何面对项目中的一些痛点？</p><h2 id="技术方案设计与选型" tabindex="-1">技术方案设计与选型 <a class="header-anchor" href="#技术方案设计与选型" aria-label="Permalink to &quot;技术方案设计与选型&quot;">​</a></h2><p>从 0 搭建一个项目</p><ol><li>前端框架与脚手架</li><li>状态管理工具</li><li>路由管理工具</li><li>代码构建与编译工具</li></ol><h3 id="技术选型的影响因素" tabindex="-1">技术选型的影响因素 <a class="header-anchor" href="#技术选型的影响因素" aria-label="Permalink to &quot;技术选型的影响因素&quot;">​</a></h3><ol><li>项目规模、功能交互、面向用户</li><li>多人协作、团队规模</li><li>团队技术栈、新技术的接受程度</li><li>参考现有的技术方案、调整</li></ol><ul><li>前端框架和工具选型</li></ul><ol><li>使用开源/现有框架</li><li>造轮子</li></ol><ul><li>选择适合团队的技术栈</li></ul><ol><li>团队现有的技术栈</li><li>团队成员对现有框架/工具的熟悉程度</li><li>团队成员是否有倾向的框架/工具</li></ol><h3 id="多人协作与团队规范" tabindex="-1">多人协作与团队规范 <a class="header-anchor" href="#多人协作与团队规范" aria-label="Permalink to &quot;多人协作与团队规范&quot;">​</a></h3><ul><li>编码规范</li></ul><p>Eslint、Prettier、Git Commit Hooks</p><ul><li>代码流程规范</li></ul><p>创建分支过程、提交代码过程、分支提交过程、合入主干过程、代码发布过程（CI/CD）</p><h2 id="前端工程化" tabindex="-1">前端工程化 <a class="header-anchor" href="#前端工程化" aria-label="Permalink to &quot;前端工程化&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">前端工程化</p><p>从工程学角度来看，前端工程化致力于提升工程的开发效率、协作效率、项目质量、贯穿项目设计、开发、测试、上线、维护的整个过程。</p></div><p>通过项目设计和架构优化，提升系统质量；通过自动化的方式，将项目研发与发布流程进行优化，提升开发效率</p><h2 id="大型项目痛点" tabindex="-1">大型项目痛点 <a class="header-anchor" href="#大型项目痛点" aria-label="Permalink to &quot;大型项目痛点&quot;">​</a></h2><p>前端团队人数 10+、模块数量 30+、代码量 30w+</p><h3 id="模块耦合严重" tabindex="-1">模块耦合严重 <a class="header-anchor" href="#模块耦合严重" aria-label="Permalink to &quot;模块耦合严重&quot;">​</a></h3><ol><li>项目规模调整后，对现有架构设计进行分析，不合适进行及时的设计调整与优化</li><li>使用模块解耦的技术方案，将各个模块统一交由框架处理</li><li>梳理各个模块的职责，明确每个模块负责的工作和提供的功能，确定各个模块间的边界和调用方式</li></ol><p><code>避免耦合</code></p><ul><li>依赖倒置</li><li>事件通信（Event/Emitter)</li></ul><h3 id="项目复杂熟悉成本过高" tabindex="-1">项目复杂熟悉成本过高 <a class="header-anchor" href="#项目复杂熟悉成本过高" aria-label="Permalink to &quot;项目复杂熟悉成本过高&quot;">​</a></h3><ol><li>每个开发者都认领（或分配）一个或多个模块，并要求掌握熟悉模块的细节，并维护文档</li><li>需求开发、bug 修复、技术优化，找对应的模块负责人进行风险评估以及代码 review</li><li>模块的负责人负责自身模块的技术优化方案，性能优化、自动化测试、代码规范调整</li><li>对于核心复杂模块，可由多个负责人共同维护，协商技术细节</li></ol><h3 id="项目代码量过大" tabindex="-1">项目代码量过大 <a class="header-anchor" href="#项目代码量过大" aria-label="Permalink to &quot;项目代码量过大&quot;">​</a></h3><ul><li>拆：拆模块、拆公共库、拆组件库</li><li>分：分流程、分步骤</li></ul><ol><li>代码按需引入，移除不必要的代码（Tree-shaking）</li><li>异步加载模块</li><li>加载流程优化，分析首屏</li><li>差异化服务，不同场景只加载所需要的模块内容（读写分离）</li><li>代码复用，封装</li></ol><p><code>项目管理</code></p><ul><li>multirepo 多包管理，体积代码量小，构建可选（缺点：问题定位困难，模块变动其他模块配置都需更新）</li><li>monorepo 单包管理，配合 lerna，方便调试以及修复（缺点：体积大，代码可维护性、可测试性要求高，版本控制以及 Git 工作流要求高）</li></ul><h3 id="问题定位效率低" tabindex="-1">问题定位效率低 <a class="header-anchor" href="#问题定位效率低" aria-label="Permalink to &quot;问题定位效率低&quot;">​</a></h3><ol><li>模块负责人对自身模块执行的关键点进行标记，在开发+调试模式下，其他开发可通过开启断点方式来直接定位问题</li><li>查看调用栈自行分析</li></ol><h2 id="项目前期准备与复盘" tabindex="-1">项目前期准备与复盘 <a class="header-anchor" href="#项目前期准备与复盘" aria-label="Permalink to &quot;项目前期准备与复盘&quot;">​</a></h2><p>前期准备</p><ul><li>预期功能</li><li>预计工作量和分工排期</li><li>每个阶段（开发、联调、产品体验、提测、发布）的时间点</li><li>延期风险（交互、设计、接口协议）</li></ul><p>复盘</p><ul><li>时间维度</li><li>质量维度</li></ul>',39),r=[o];function h(d,n,c,s,u,p){return i(),a("div",null,r)}const b=l(t,[["render",h]]);export{_ as __pageData,b as default};
