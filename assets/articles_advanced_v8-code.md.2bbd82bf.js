import{_ as e,c as l,o as i,a}from"./app.6c26ea93.js";const r="/docs-page/assets/images/compiler.jpg",t="/docs-page/assets/images/v8-code.jpg",_=JSON.parse('{"title":"V8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668","slug":"\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668","link":"#\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668","children":[]},{"level":2,"title":"V8 \u6267\u884C\u4EE3\u7801","slug":"v8-\u6267\u884C\u4EE3\u7801","link":"#v8-\u6267\u884C\u4EE3\u7801","children":[{"level":3,"title":"\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6267\u884C\u4E0A\u4E0B\u6587","slug":"\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6267\u884C\u4E0A\u4E0B\u6587","link":"#\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6267\u884C\u4E0A\u4E0B\u6587","children":[]},{"level":3,"title":"\u751F\u6210\u5B57\u8282\u7801","slug":"\u751F\u6210\u5B57\u8282\u7801","link":"#\u751F\u6210\u5B57\u8282\u7801","children":[]},{"level":3,"title":"\u6267\u884C\u4EE3\u7801","slug":"\u6267\u884C\u4EE3\u7801","link":"#\u6267\u884C\u4EE3\u7801","children":[]}]},{"level":2,"title":"\u5783\u573E\u56DE\u6536","slug":"\u5783\u573E\u56DE\u6536","link":"#\u5783\u573E\u56DE\u6536","children":[{"level":3,"title":"\u6808\u7A7A\u95F4","slug":"\u6808\u7A7A\u95F4","link":"#\u6808\u7A7A\u95F4","children":[]},{"level":3,"title":"\u5806\u7A7A\u95F4","slug":"\u5806\u7A7A\u95F4","link":"#\u5806\u7A7A\u95F4","children":[]},{"level":3,"title":"\u5806\u7A7A\u95F4\u7684\u5783\u573E\u56DE\u6536","slug":"\u5806\u7A7A\u95F4\u7684\u5783\u573E\u56DE\u6536","link":"#\u5806\u7A7A\u95F4\u7684\u5783\u573E\u56DE\u6536","children":[]},{"level":3,"title":"\u65B0\u751F\u4EE3","slug":"\u65B0\u751F\u4EE3","link":"#\u65B0\u751F\u4EE3","children":[]},{"level":3,"title":"\u8001\u751F\u4EE3","slug":"\u8001\u751F\u4EE3","link":"#\u8001\u751F\u4EE3","children":[]},{"level":3,"title":"\u5783\u573E\u56DE\u6536\u6D41\u7A0B","slug":"\u5783\u573E\u56DE\u6536\u6D41\u7A0B","link":"#\u5783\u573E\u56DE\u6536\u6D41\u7A0B","children":[]},{"level":3,"title":"\u526F\u5783\u573E\u56DE\u6536\u5668","slug":"\u526F\u5783\u573E\u56DE\u6536\u5668","link":"#\u526F\u5783\u573E\u56DE\u6536\u5668","children":[]},{"level":3,"title":"\u4E3B\u5783\u573E\u56DE\u6536\u5668","slug":"\u4E3B\u5783\u573E\u56DE\u6536\u5668","link":"#\u4E3B\u5783\u573E\u56DE\u6536\u5668","children":[]},{"level":3,"title":"\u5168\u505C\u987F","slug":"\u5168\u505C\u987F","link":"#\u5168\u505C\u987F","children":[]},{"level":3,"title":"\u589E\u91CF\u6807\u8BB0","slug":"\u589E\u91CF\u6807\u8BB0","link":"#\u589E\u91CF\u6807\u8BB0","children":[]}]}],"relativePath":"articles/advanced/v8-code.md"}'),d={name:"articles/advanced/v8-code.md"},h=a('<h1 id="v8" tabindex="-1">V8 <a class="header-anchor" href="#v8" aria-hidden="true">#</a></h1><h2 id="\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668" tabindex="-1">\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668 <a class="header-anchor" href="#\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668" aria-hidden="true">#</a></h2><img src="'+r+'" alt="\u89E3\u91CA\u5668\u548C\u6267\u884C\u5668"><ul><li><p>\u5728\u7F16\u8BD1\u578B\u8BED\u8A00\u7684\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u7F16\u8BD1\u5668\u9996\u5148\u4F1A\u4F9D\u6B21\u5BF9\u6E90\u4EE3\u7801\u8FDB\u884C\u8BCD\u6CD5\u5206\u6790\u3001\u8BED\u6CD5\u5206\u6790\uFF0C\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\uFF0C\u7136\u540E\u662F\u4F18\u5316\u4EE3\u7801\uFF0C\u6700\u540E\u518D\u751F\u6210\u5904\u7406\u5668\u80FD\u591F\u7406\u89E3\u7684\u673A\u5668\u7801\u3002\u5982\u679C\u7F16\u8BD1\u6210\u529F\uFF0C\u5C06\u4F1A\u751F\u6210\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u6587\u4EF6\u3002\u4F46\u5982\u679C\u7F16\u8BD1\u8FC7\u7A0B\u53D1\u751F\u4E86\u8BED\u6CD5\u6216\u8005\u5176\u4ED6\u7684\u9519\u8BEF\uFF0C\u90A3\u4E48\u7F16\u8BD1\u5668\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u6700\u540E\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E5F\u4E0D\u4F1A\u751F\u6210\u6210\u529F</p></li><li><p>\u5728\u89E3\u91CA\u578B\u8BED\u8A00\u7684\u89E3\u91CA\u8FC7\u7A0B\u4E2D\uFF0C\u540C\u6837\u89E3\u91CA\u5668\u4E5F\u4F1A\u5BF9\u6E90\u4EE3\u7801\u8FDB\u884C\u8BCD\u6CD5\u5206\u6790\u3001\u8BED\u6CD5\u5206\u6790\uFF0C\u5E76\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\uFF0C\u4E0D\u8FC7\u5B83\u4F1A\u518D\u57FA\u4E8E\u62BD\u8C61\u8BED\u6CD5\u6811\u751F\u6210\u5B57\u8282\u7801\uFF0C\u6700\u540E\u518D\u6839\u636E\u5B57\u8282\u7801\u6765\u6267\u884C\u7A0B\u5E8F\u3001\u8F93\u51FA\u7ED3\u679C</p></li></ul><h2 id="v8-\u6267\u884C\u4EE3\u7801" tabindex="-1">V8 \u6267\u884C\u4EE3\u7801 <a class="header-anchor" href="#v8-\u6267\u884C\u4EE3\u7801" aria-hidden="true">#</a></h2><img src="'+t+'" alt="v8 \u6267\u884C\u4EE3\u7801"><h3 id="\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1">\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6267\u884C\u4E0A\u4E0B\u6587 <a class="header-anchor" href="#\u751F\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\u548C\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a></h3><ul><li>\u5206\u8BCD\uFF08tokenize\uFF09\uFF0C\u8BCD\u6CD5\u5206\u6790</li></ul><p>\u5C06\u6E90\u7801\u62C6\u6210\u4E00\u4E2A\u4E2A token\uFF08\u8BED\u6CD5\u4E0A\u4E0D\u80FD\u518D\u5206\u7684\u3001\u6700\u5C0F\u7684\u5355\u4E2A\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\uFF09</p><ul><li>\u89E3\u6790\uFF08parse\uFF09\uFF0C\u8BED\u6CD5\u5206\u6790</li></ul><p>\u5C06\u4E0A\u4E00\u6B65\u751F\u6210\u7684 token \u6570\u636E\uFF0C\u6839\u636E\u8BED\u6CD5\u89C4\u5219\u8F6C\u6210\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08\u5B58\u5728\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4F1A\u7EC8\u6B62\u629B\u51FA\u9519\u8BEF\uFF09</p><h3 id="\u751F\u6210\u5B57\u8282\u7801" tabindex="-1">\u751F\u6210\u5B57\u8282\u7801 <a class="header-anchor" href="#\u751F\u6210\u5B57\u8282\u7801" aria-hidden="true">#</a></h3><p>\u5B57\u8282\u7801\u662F\u4ECB\u4E8E AST \u548C\u673A\u5668\u7801\u4E4B\u95F4\u7684\u4E00\u79CD\u4EE3\u7801\u3002\u4F46\u662F\u4E0E\u7279\u5B9A\u7C7B\u578B\u7684\u673A\u5668\u7801\u65E0\u5173\uFF0C\u5B57\u8282\u7801\u9700\u8981\u901A\u8FC7\u89E3\u91CA\u5668\u5C06\u5176\u8F6C\u6362\u4E3A\u673A\u5668\u7801\u540E\u624D\u80FD\u6267\u884C\uFF08\u4F53\u79EF\u5C0F\uFF09</p><h3 id="\u6267\u884C\u4EE3\u7801" tabindex="-1">\u6267\u884C\u4EE3\u7801 <a class="header-anchor" href="#\u6267\u884C\u4EE3\u7801" aria-hidden="true">#</a></h3><p>\u89E3\u91CA\u5668 Ignition</p><ul><li>\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u5B57\u8282\u7801\uFF0C\u89E3\u91CA\u5668\u9010\u6761\u89E3\u91CA\u6267\u884C</li><li>\u89E3\u91CA\u5668\u89E3\u6790\u751F\u6210\u5B57\u8282\u7801\uFF0C\u8FD8\u6709\u4E00\u4E2A\u4F5C\u7528\u5C31\u662F\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801</li><li>\u6267\u884C\u5B57\u8282\u7801\u8FC7\u7A0B\u4E2D\uFF0C\u6709\u70ED\u70B9\u4EE3\u7801\uFF08\u91CD\u590D\u6267\u884C\u591A\u6B21\uFF09\uFF0C\u540E\u53F0\u7F16\u8BD1\u5668\uFF08TurboFan\uFF09\u628A\u8FD9\u6BB5\u4EE3\u7801\u7F16\u8BD1\u6210\u673A\u5668\u7801\uFF0C\u63D0\u9AD8\u6267\u884C\u6548\u7387</li></ul><p><code>JIT \u5373\u65F6\u7F16\u8BD1</code></p><p>\u89E3\u91CA\u5668 Ignition \u5728\u89E3\u91CA\u6267\u884C\u5B57\u8282\u7801\u7684\u540C\u65F6\uFF0C\u6536\u96C6\u4EE3\u7801\u4FE1\u606F\uFF0C\u53D1\u73B0\u662F\u70ED\u70B9\u4EE3\u7801\u4E4B\u540E\uFF0CTurboFan \u7F16\u8BD1\u5668\u628A\u70ED\u70B9\u7684\u5B57\u8282\u7801\u7F16\u8BD1\u6210\u673A\u5668\u7801\uFF0C\u5E76\u4FDD\u5B58\u8D77\u6765\u4EE5\u4F9B\u4E0B\u6B21\u4F7F\u7528</p><h2 id="\u5783\u573E\u56DE\u6536" tabindex="-1">\u5783\u573E\u56DE\u6536 <a class="header-anchor" href="#\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a></h2><p><a href="https://time.geekbang.org/column/article/131233" target="_blank" rel="noreferrer">V8 \u7684\u5783\u573E\u56DE\u6536</a></p><h3 id="\u6808\u7A7A\u95F4" tabindex="-1">\u6808\u7A7A\u95F4 <a class="header-anchor" href="#\u6808\u7A7A\u95F4" aria-hidden="true">#</a></h3><p>\u539F\u59CB\u6570\u636E\u7C7B\u578B\u5B58\u653E\u4E0E\u6808\u7A7A\u95F4\u4E2D</p><p><code>\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587 -&gt; \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF08\u91C7\u7528\u8C03\u7528\u6808\u7684\u5F62\u5F0F\u8BB0\u5F55\u6570\u636E\uFF09</code></p><h3 id="\u5806\u7A7A\u95F4" tabindex="-1">\u5806\u7A7A\u95F4 <a class="header-anchor" href="#\u5806\u7A7A\u95F4" aria-hidden="true">#</a></h3><p>\u5F15\u7528\u7C7B\u578B\u4F7F\u7528\u5806\u7A7A\u95F4\u5B58\u50A8\uFF08\u6808\u4E2D\u5B58\u50A8\u7684\u662F\u5F15\u7528\u5730\u5740\uFF09</p><h3 id="\u5806\u7A7A\u95F4\u7684\u5783\u573E\u56DE\u6536" tabindex="-1">\u5806\u7A7A\u95F4\u7684\u5783\u573E\u56DE\u6536 <a class="header-anchor" href="#\u5806\u7A7A\u95F4\u7684\u5783\u573E\u56DE\u6536" aria-hidden="true">#</a></h3><blockquote><p>\u4EE3\u9645\u5047\u8BF4</p></blockquote><ol><li>\u5BF9\u8C61\u4E00\u822C\u4E0D\u4F1A\u5B58\u50A8\u592A\u4E45\uFF0C\u4E00\u7ECF\u5206\u914D\u5185\u5B58\uFF0C\u5F88\u5FEB\u5C31\u4F1A\u53D8\u5F97\u4E0D\u53EF\u8BBF\u95EE</li><li>\u4E0D\u6B7B\u7684\u5BF9\u8C61\u6D3B\u7684\u66F4\u4E45</li></ol><h3 id="\u65B0\u751F\u4EE3" tabindex="-1">\u65B0\u751F\u4EE3 <a class="header-anchor" href="#\u65B0\u751F\u4EE3" aria-hidden="true">#</a></h3><p>\u5BF9\u8C61\u5B58\u653E\u7684\u65F6\u95F4\u8F83\u77ED\uFF081-8M \u7684\u5B58\u50A8\u7A7A\u95F4\uFF09</p><h3 id="\u8001\u751F\u4EE3" tabindex="-1">\u8001\u751F\u4EE3 <a class="header-anchor" href="#\u8001\u751F\u4EE3" aria-hidden="true">#</a></h3><p>\u5BF9\u8C61\u5B58\u653E\u7684\u65F6\u95F4\u8F83\u957F</p><h3 id="\u5783\u573E\u56DE\u6536\u6D41\u7A0B" tabindex="-1">\u5783\u573E\u56DE\u6536\u6D41\u7A0B <a class="header-anchor" href="#\u5783\u573E\u56DE\u6536\u6D41\u7A0B" aria-hidden="true">#</a></h3><p>\u6240\u6709\u5783\u573E\u56DE\u6536\u673A\u5236\uFF0C\u90FD\u6709\u4E00\u5957\u5B8C\u6574\u7684\u7EDF\u4E00\u6D41\u7A0B</p><ul><li>\u6807\u8BB0\u7A7A\u95F4\u4E2D\u7684\u6D3B\u52A8\u5BF9\u8C61\u548C\u975E\u6D3B\u52A8\u5BF9\u8C61 <ul><li>\u6D3B\u52A8\u5BF9\u8C61 = \u6B63\u5728\u4F7F\u7528\u4E2D\u7684\u5BF9\u8C61</li><li>\u975E\u6D3B\u52A8\u5BF9\u8C61 = \u9700\u8981\u5783\u573E\u56DE\u6536\u7684\u5BF9\u8C61</li></ul></li><li>\u56DE\u6536\u975E\u6D3B\u52A8\u5BF9\u8C61\u5360\u7528\u7684\u7A7A\u95F4 <ul><li>\u6240\u6709\u6807\u8BB0\u5B8C\u6210\u4E4B\u540E\uFF0C\u7EDF\u4E00\u6E05\u7406\u5185\u5B58\u4E2D\u6240\u6709\u88AB\u6807\u8BB0\u4E3A\u53EF\u56DE\u6536\u7684\u5BF9\u8C61</li></ul></li><li>\u5185\u5B58\u6574\u7406 <ul><li>\u6574\u7406\u5185\u5B58\u788E\u7247\uFF08\u4E0D\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF09</li></ul></li></ul><h3 id="\u526F\u5783\u573E\u56DE\u6536\u5668" tabindex="-1">\u526F\u5783\u573E\u56DE\u6536\u5668 <a class="header-anchor" href="#\u526F\u5783\u573E\u56DE\u6536\u5668" aria-hidden="true">#</a></h3><p>\u4E3B\u8981\u8D1F\u8D23\u65B0\u751F\u4EE3\u533A\u95F4\u7684\u5783\u573E\u56DE\u6536</p><blockquote><p>Scanvenge \u7B97\u6CD5 -&gt; \u65B0\u751F\u533A\u533A\u95F4\u5212\u5206\u4E3A\u4E24\u4E2A\u533A\u57DF\uFF1A\u5BF9\u8C61\u533A\u57DF\u3001\u7A7A\u95F2\u533A\u57DF</p></blockquote><ul><li><p>\u65B0\u52A0\u5165\u7684\u5BF9\u8C61\u4F1A\u52A0\u5165\u5BF9\u8C61\u533A\u57DF\uFF0C\u5BF9\u8C61\u533A\u57DF\u5B58\u6EE1\u4E4B\u540E\uFF0C\u4F1A\u6267\u884C\u4E00\u6B21\u5783\u573E\u56DE\u6536\u64CD\u4F5C</p></li><li><p>\u5BF9\u5BF9\u8C61\u533A\u57DF\u4E2D\u7684\u5783\u573E\u8FDB\u884C\u6807\u8BB0</p></li><li><p>\u6807\u8BB0\u5B8C\u6BD5\uFF0C\u526F\u5783\u573E\u56DE\u6536\u5668\u4F1A\u5BF9\u6CA1\u6709\u8FDB\u884C\u6807\u8BB0\u7684\u5BF9\u8C61\u8FDB\u884C\u590D\u5236\uFF0C<code>\u590D\u5236</code>\u5230\u7A7A\u95F2\u533A\u57DF\uFF0C\u540C\u65F6\u8FD8\u4F1A\u6392\u5217\u8D77\u6765\uFF08\u5185\u5B58\u6574\u7406\uFF09</p></li><li><p>\u5BF9\u8C61\u533A\u57DF\u548C\u7A7A\u95F2\u533A\u57DF\u89D2\u8272\u53CD\u8F6C\uFF08\u5BF9\u8C61\u533A\u57DF=\u7A7A\u95F2\u533A\u57DF \u7A7A\u95F2\u533A\u57DF=\u5BF9\u8C61\u533A\u57DF\uFF09\u4E24\u5757\u533A\u57DF\u91CD\u590D\u5229\u7528</p></li></ul><blockquote><p>\u5BF9\u8C61\u664B\u5347\u7B56\u7565</p></blockquote><p>\u4E3A\u4E86\u6267\u884C\u6548\u7387\uFF0C\u65B0\u751F\u4EE3\u7684\u7A7A\u95F4\u4E00\u822C\u4E0D\u4F1A\u8BBE\u7F6E\u5F97\u592A\u5927\uFF0C\u56E0\u6B64<code>\u7ECF\u8FC7\u4E24\u6B21\u5783\u573E\u56DE\u6536\u7684\u6D3B\u52A8\u5BF9\u8C61\u4F9D\u7136\u5B58\u5728</code>\uFF0C\u4F1A\u88AB\u653E\u5165\u5230\u8001\u751F\u4EE3\u533A\u95F4\u4E2D</p><h3 id="\u4E3B\u5783\u573E\u56DE\u6536\u5668" tabindex="-1">\u4E3B\u5783\u573E\u56DE\u6536\u5668 <a class="header-anchor" href="#\u4E3B\u5783\u573E\u56DE\u6536\u5668" aria-hidden="true">#</a></h3><p>\u4E3B\u8981\u8D1F\u8D23\u8001\u751F\u4EE3\u533A\u95F4\u7684\u5783\u573E\u56DE\u6536</p><ul><li>\u7A7A\u95F4\u5927</li><li>\u5BF9\u8C61\u5B58\u6D3B\u65F6\u95F4\u957F</li></ul><blockquote><p>\u6807\u8BB0 - \u6E05\u9664\uFF08Mark - Sweep\uFF09</p></blockquote><ul><li>\u4ECE\u4E00\u7EC4\u6839\u5143\u7D20\u5F00\u59CB</li><li>\u9012\u5F52\u904D\u5386\u6839\u5143\u7D20\uFF08\u80FD\u8BBF\u95EE\u5230\u7684\u5143\u7D20\u4E3A\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u4E0D\u80FD\u8BBF\u95EE\u5230\u7684\u5143\u7D20\u4E3A\u5783\u573E\u6570\u636E\uFF09</li></ul><blockquote><p>\u6807\u8BB0 - \u6574\u7406\uFF08Mark - Compact\uFF09</p></blockquote><p>\u6807\u8BB0\u6E05\u9664\u7B97\u6CD5\u4F1A\u4EA7\u751F\u5927\u91CF\u7684\u4E0D\u8FDE\u7EED\u5185\u5B58\u788E\u7247\uFF0C\u5BFC\u81F4\u5927\u5BF9\u8C61\u65E0\u6CD5\u5206\u914D\u4E00\u5757\u8FDE\u7EED\u7A7A\u95F4\u7684\u5185\u5B58</p><ul><li>\u6240\u6709\u7684\u6D3B\u52A8\u5BF9\u8C61\u90FD\u5411\u4E00\u7AEF\u79FB\u52A8\uFF0C\u7136\u540E\u76F4\u63A5\u6E05\u7406\u6389\u7AEF\u8FB9\u754C\u4EE5\u5916\u7684\u5185\u5B58</li></ul><h3 id="\u5168\u505C\u987F" tabindex="-1">\u5168\u505C\u987F <a class="header-anchor" href="#\u5168\u505C\u987F" aria-hidden="true">#</a></h3><p>Stop-The-World</p><p><code>JavaScript \u662F\u8FD0\u884C\u5728\u4E3B\u7EBF\u7A0B\u4E4B\u4E0A\uFF0C\u4E00\u65E6\u6267\u884C\u5783\u573E\u56DE\u6536\u7B97\u6CD5\uFF0C\u811A\u672C\u6267\u884C\u9700\u8981\u505C\u987F\uFF0C\u5F85\u5783\u573E\u56DE\u6536\u5B8C\u6BD5\u4E4B\u540E\u6062\u590D\u811A\u672C\u7684\u6267\u884C</code></p><h3 id="\u589E\u91CF\u6807\u8BB0" tabindex="-1">\u589E\u91CF\u6807\u8BB0 <a class="header-anchor" href="#\u589E\u91CF\u6807\u8BB0" aria-hidden="true">#</a></h3><p>Incremental Marking</p><p>\u5168\u505C\u987F\u7B97\u6CD5\uFF0C\u4E00\u65E6\u5783\u573E\u56DE\u6536\u7B97\u6CD5\u6267\u884C\u65F6\u95F4\u8FC7\u957F\uFF0C\u9875\u9762\u4F1A\u51FA\u73B0\u5361\u987F\u73B0\u8C61\uFF0C\u5BFC\u81F4\u7528\u6237\u4F53\u9A8C\u4E0B\u964D</p><ul><li>\u4E00\u4E2A\u5B8C\u6574\u7684\u5783\u573E\u56DE\u6536\u4EFB\u52A1\u62C6\u5206\u6210\u5F88\u5C0F\u7684\u4EFB\u52A1</li><li>\u5C0F\u4EFB\u52A1\u6267\u884C\u65F6\u95F4\u5F88\u77ED\uFF0C\u7A7F\u63D2\u5728 JavaScript \u4EFB\u52A1\u4E2D</li></ul>',56),n=[h];function c(o,s,p,u,k,g){return i(),l("div",null,n)}const b=e(d,[["render",c]]);export{_ as __pageData,b as default};
