import{_ as e,c as l,o as i,a}from"./app.6c26ea93.js";const b=JSON.parse('{"title":"HTTPS \u52A0\u5BC6\u5C42","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BF9\u79F0\u52A0\u5BC6","slug":"\u5BF9\u79F0\u52A0\u5BC6","link":"#\u5BF9\u79F0\u52A0\u5BC6","children":[{"level":3,"title":"\u8BA1\u7B97\u5BC6\u94A5","slug":"\u8BA1\u7B97\u5BC6\u94A5","link":"#\u8BA1\u7B97\u5BC6\u94A5","children":[]},{"level":3,"title":"\u7F3A\u9677","slug":"\u7F3A\u9677","link":"#\u7F3A\u9677","children":[]}]},{"level":2,"title":"\u975E\u5BF9\u79F0\u52A0\u5BC6","slug":"\u975E\u5BF9\u79F0\u52A0\u5BC6","link":"#\u975E\u5BF9\u79F0\u52A0\u5BC6","children":[{"level":3,"title":"\u52A0\u5BC6\u6570\u636E","slug":"\u52A0\u5BC6\u6570\u636E","link":"#\u52A0\u5BC6\u6570\u636E","children":[]},{"level":3,"title":"\u7F3A\u9677","slug":"\u7F3A\u9677-1","link":"#\u7F3A\u9677-1","children":[]}]},{"level":2,"title":"\u5BF9\u79F0\u52A0\u5BC6 + \u975E\u5BF9\u79F0\u52A0\u5BC6","slug":"\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6","link":"#\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6","children":[{"level":3,"title":"\u52A0\u5BC6\u6570\u636E","slug":"\u52A0\u5BC6\u6570\u636E-1","link":"#\u52A0\u5BC6\u6570\u636E-1","children":[]},{"level":3,"title":"\u5B89\u5168\u6027","slug":"\u5B89\u5168\u6027","link":"#\u5B89\u5168\u6027","children":[]}]},{"level":2,"title":"CA \u8BC1\u4E66","slug":"ca-\u8BC1\u4E66","link":"#ca-\u8BC1\u4E66","children":[{"level":3,"title":"\u52A0\u5BC6\u65B9\u5F0F","slug":"\u52A0\u5BC6\u65B9\u5F0F","link":"#\u52A0\u5BC6\u65B9\u5F0F","children":[]},{"level":3,"title":"\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66","slug":"\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66","link":"#\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66","children":[]},{"level":3,"title":"CA \u6570\u5B57\u7B7E\u540D","slug":"ca-\u6570\u5B57\u7B7E\u540D","link":"#ca-\u6570\u5B57\u7B7E\u540D","children":[]},{"level":3,"title":"\u9A8C\u8BC1\u6570\u5B57\u8BC1\u4E66","slug":"\u9A8C\u8BC1\u6570\u5B57\u8BC1\u4E66","link":"#\u9A8C\u8BC1\u6570\u5B57\u8BC1\u4E66","children":[]},{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]}]},{"level":2,"title":"\u6570\u5B57\u8BC1\u4E66\u62D3\u5C55","slug":"\u6570\u5B57\u8BC1\u4E66\u62D3\u5C55","link":"#\u6570\u5B57\u8BC1\u4E66\u62D3\u5C55","children":[]}],"relativePath":"network/tls_ssl.md"}'),r={name:"network/tls_ssl.md"},t=a('<h1 id="https-\u52A0\u5BC6\u5C42" tabindex="-1">HTTPS \u52A0\u5BC6\u5C42 <a class="header-anchor" href="#https-\u52A0\u5BC6\u5C42" aria-hidden="true">#</a></h1><p><a href="https://time.geekbang.org/column/article/156181" target="_blank" rel="noreferrer">\u53C2\u8003\u94FE\u63A5</a></p><p>HTTP - TLS/SSL - TCP - IP - \u6570\u636E\u94FE\u8DEF\u5C42</p><p><code>HTTP \u6570\u636E\u4F20\u8F93\u52A0\u5BC6\u8FC7\u7A0B</code></p><blockquote><p>\u52A0\u5BC6\u5957\u4EF6\u5217\u8868</p></blockquote><p>\u6D4F\u89C8\u5668\u652F\u6301\u7684\u52A0\u5BC6\u65B9\u5F0F\u6709\u591A\u5C11\u79CD</p><h2 id="\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1">\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h2><ol><li>\u6D4F\u89C8\u5668\u53D1\u9001\u5BF9\u79F0\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\u548C client-random \u968F\u673A\u6570</li><li>\u670D\u52A1\u5668\u6536\u5230\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\uFF0C\u9009\u62E9\u52A0\u5BC6\u65B9\u5F0F\u548C service-random \u968F\u673A\u6570\uFF0C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668</li><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u8FD4\u56DE\u786E\u8BA4\u4FE1\u606F</li></ol><h3 id="\u8BA1\u7B97\u5BC6\u94A5" tabindex="-1">\u8BA1\u7B97\u5BC6\u94A5 <a class="header-anchor" href="#\u8BA1\u7B97\u5BC6\u94A5" aria-hidden="true">#</a></h3><blockquote><p>\u5BC6\u94A5\u90FD\u80FD\u7528\u6765\u89E3\u5BC6</p></blockquote><ol><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u90FD\u6709 client-random \u548C service-random</li><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4F7F\u7528\u76F8\u540C\u7684\u65B9\u6CD5\u5BF9 client-random \u548C service-random \u6DF7\u5408\u8D77\u6765\u751F\u6210\u5BC6\u94A5 master-secret</li><li>\u4F7F\u7528 master-secret \u52A0\u5BC6\u4F20\u8F93\u6570\u636E</li></ol><h3 id="\u7F3A\u9677" tabindex="-1">\u7F3A\u9677 <a class="header-anchor" href="#\u7F3A\u9677" aria-hidden="true">#</a></h3><blockquote><p>client-random \u548C service-random \u90FD\u662F\u660E\u6587\u7684\uFF0C\u62FF\u5230\u968F\u673A\u6570\u548C\u52A0\u5BC6\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u5229\u7528\u968F\u673A\u6570\u7684\u751F\u6210\u5BC6\u94A5\u7684\u7B97\u6CD5\u90FD\u662F\u516C\u5F00\u7684\uFF0C\u4E5F\u53EF\u4EE5\u751F\u6210\u5BC6\u94A5\u6765\u89E3\u6790\u6570\u636E</p></blockquote><h2 id="\u975E\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1">\u975E\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u975E\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h2><blockquote><p>\u975E\u5BF9\u79F0\uFF0C\u516C\u94A5\u53EA\u6709\u79C1\u94A5\u80FD\u89E3\u5BC6\uFF0C\u79C1\u94A5\u53EA\u6709\u516C\u94A5\u80FD\u89E3\u5BC6</p></blockquote><ol><li>\u6D4F\u89C8\u5668\u53D1\u9001\u975E\u5BF9\u79F0\u52A0\u5BC6\u5957\u4EF6\u5217\u8868</li><li>\u670D\u52A1\u6536\u5230\u975E\u5BF9\u79F0\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\uFF0C\u8FD4\u56DE\u52A0\u5BC6\u65B9\u5F0F\u548C\u516C\u94A5</li><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u8FD4\u56DE\u786E\u8BA4\u4FE1\u606F</li></ol><h3 id="\u52A0\u5BC6\u6570\u636E" tabindex="-1">\u52A0\u5BC6\u6570\u636E <a class="header-anchor" href="#\u52A0\u5BC6\u6570\u636E" aria-hidden="true">#</a></h3><ol><li>\u6D4F\u89C8\u5668\u4F7F\u7528\u516C\u94A5\u52A0\u5BC6\u6570\u636E</li><li>\u79C1\u94A5\u53EA\u6709\u670D\u52A1\u5668\u5B58\u5728\uFF0C\u5229\u7528\u79C1\u94A5\u89E3\u5BC6\u6570\u636E</li></ol><h3 id="\u7F3A\u9677-1" tabindex="-1">\u7F3A\u9677 <a class="header-anchor" href="#\u7F3A\u9677-1" aria-hidden="true">#</a></h3><ol><li>\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u6548\u7387\u592A\u6162\uFF0C\u5F71\u54CD\u6570\u636E\u4F20\u8F93\u901F\u7387</li><li>\u65E0\u6CD5\u4FDD\u8BC1\u670D\u52A1\u5668\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u7684\u6570\u636E\u5B89\u5168\uFF08\u516C\u94A5\u662F\u53EF\u4EE5\u88AB\u62E6\u622A\u83B7\u53D6\u7684\uFF09</li></ol><h2 id="\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6" tabindex="-1">\u5BF9\u79F0\u52A0\u5BC6 + \u975E\u5BF9\u79F0\u52A0\u5BC6 <a class="header-anchor" href="#\u5BF9\u79F0\u52A0\u5BC6-\u975E\u5BF9\u79F0\u52A0\u5BC6" aria-hidden="true">#</a></h2><blockquote><p>HTTPS \u91C7\u7528\u6DF7\u5408\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u7684\u52A0\u5BC6</p></blockquote><ol><li>\u6D4F\u89C8\u5668\u53D1\u9001\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\u3001\u975E\u5BF9\u79F0\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\u4EE5\u53CA client-random \u968F\u673A\u6570</li><li>\u670D\u52A1\u5668\u6536\u5230\u6D88\u606F\uFF0C\u9009\u62E9\u52A0\u5BC6\u65B9\u5F0F\u4EE5\u53CA\u751F\u6210\u516C\u94A5\u548C service-random \u968F\u673A\u6570</li><li>\u6D4F\u89C8\u5668\u4FDD\u5B58\u516C\u94A5\uFF0C\u5E76\u751F\u6210\u968F\u673A\u6570 pre-master</li><li>\u4F7F\u7528\u516C\u94A5\u52A0\u5BC6 pre-master \u53D1\u9001\u7ED9\u670D\u52A1\u5668\u786E\u8BA4 master-secret</li><li>\u670D\u52A1\u5668\u6D4F\u89C8\u5668\u786E\u8BA4\u8FD4\u56DE\u4FE1\u606F</li></ol><h3 id="\u52A0\u5BC6\u6570\u636E-1" tabindex="-1">\u52A0\u5BC6\u6570\u636E <a class="header-anchor" href="#\u52A0\u5BC6\u6570\u636E-1" aria-hidden="true">#</a></h3><ol><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u90FD\u62E5\u6709 client-random\u3001service-random \u4EE5\u53CA pre-master \u4E09\u7EC4\u968F\u673A\u6570</li><li>\u4F7F\u7528\u4E09\u7EC4\u968F\u673A\u6570\u751F\u6210\u5BF9\u79F0\u5BC6\u94A5\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u5BF9\u79F0\u52A0\u5BC6\u65B9\u5F0F\u4F20\u8F93\u6570\u636E</li></ol><h3 id="\u5B89\u5168\u6027" tabindex="-1">\u5B89\u5168\u6027 <a class="header-anchor" href="#\u5B89\u5168\u6027" aria-hidden="true">#</a></h3><blockquote><p>\u83B7\u53D6\u5230 pre-master \u968F\u673A\u6570\uFF0C\u4F46\u662F\u662F\u7ECF\u8FC7\u516C\u94A5\u52A0\u5BC6\u8FC7\u7684\uFF0C\u53EA\u6709\u79C1\u94A5\u624D\u80FD\u89E3\u5BC6</p></blockquote><h2 id="ca-\u8BC1\u4E66" tabindex="-1">CA \u8BC1\u4E66 <a class="header-anchor" href="#ca-\u8BC1\u4E66" aria-hidden="true">#</a></h2><blockquote><p>\u6709\u4E86\u6DF7\u5408\u52A0\u5BC6\u65B9\u5F0F\u7684\u4F20\u8F93\u6570\u636E\u4ECD\u7136\u4E0D\u662F\u5B89\u5168\u7684\uFF08DNS \u52AB\u6301\u66FF\u6362 IP \u5730\u5740\uFF09</p></blockquote><h3 id="\u52A0\u5BC6\u65B9\u5F0F" tabindex="-1">\u52A0\u5BC6\u65B9\u5F0F <a class="header-anchor" href="#\u52A0\u5BC6\u65B9\u5F0F" aria-hidden="true">#</a></h3><ol><li>\u6D4F\u89C8\u5668\u53D1\u9001\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\u3001\u975E\u5BF9\u79F0\u52A0\u5BC6\u5957\u4EF6\u5217\u8868\u4EE5\u53CA client-random \u968F\u673A\u6570</li><li>\u670D\u52A1\u5668\u6536\u5230\u6D88\u606F\uFF0C\u9009\u62E9\u52A0\u5BC6\u65B9\u5F0F\u4EE5\u53CA\u8FD4\u56DE<code>\u6570\u5B57\u8BC1\u4E66</code>\u548C service-random \u968F\u673A\u6570</li><li>\u6D4F\u89C8\u5668\u83B7\u53D6\u6570\u5B57\u8BC1\u4E66\u4E2D\u7684\u516C\u94A5\uFF0C\u5E76\u751F\u6210\u968F\u673A\u6570 pre-master</li><li>\u4F7F\u7528\u516C\u94A5\u52A0\u5BC6 pre-master \u53D1\u9001\u7ED9\u670D\u52A1\u5668\u786E\u8BA4 master-secret</li><li>\u670D\u52A1\u5668\u6D4F\u89C8\u5668\u786E\u8BA4\u8FD4\u56DE\u4FE1\u606F</li></ol><h3 id="\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66" tabindex="-1">\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66 <a class="header-anchor" href="#\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66" aria-hidden="true">#</a></h3><ol><li>\u51C6\u5907\u4E00\u5957\u516C\u94A5\u548C\u79C1\u94A5\uFF0C\u79C1\u94A5\u7559\u7740\u81EA\u5DF1\u4F7F\u7528</li><li>\u5411 CA \u673A\u6784\u63D0\u4EA4\u516C\u94A5\u4EE5\u53CA\u76F8\u5173\u4FE1\u606F\uFF08\u6536\u8D39\uFF09</li><li>CA \u673A\u6784\u9A8C\u8BC1\u4FE1\u606F\u662F\u5426\u5408\u7406\u5408\u6CD5</li><li>\u4FE1\u606F\u5BA1\u6838\u901A\u8FC7\uFF0C\u7B7E\u53D1\u6570\u5B57\u8BC1\u4E66\uFF08\u516C\u94A5\u3001\u7EC4\u7EC7\u4FE1\u606F\u3001CA \u7684\u4FE1\u606F\u3001\u6709\u6548\u65F6\u95F4\u3001\u8BC1\u4E66\u5E8F\u5217\u53F7\u7B49\u660E\u6587\u4FE1\u606F\uFF09\u4EE5\u53CA\u4E00\u4E2A CA \u751F\u6210\u7684\u7B7E\u540D</li></ol><h3 id="ca-\u6570\u5B57\u7B7E\u540D" tabindex="-1">CA \u6570\u5B57\u7B7E\u540D <a class="header-anchor" href="#ca-\u6570\u5B57\u7B7E\u540D" aria-hidden="true">#</a></h3><ol><li>CA \u4F7F\u7528 Hash \u51FD\u6570\u7B97\u6CD5\u8BA1\u7B97\u660E\u6587\u4FE1\u606F\uFF0C\u5E76\u5F97\u51FA\u4FE1\u606F\u6458\u8981</li><li>CA \u4F7F\u7528\u5176\u81EA\u6709\u7684\u79C1\u94A5\u5BF9\u4FE1\u606F\u6458\u8981\u8FDB\u884C\u52A0\u5BC6\uFF0C\u52A0\u5BC6\u540E\u7684\u5BC6\u6587\u5C31\u662F\u6570\u5B57\u7B7E\u540D</li></ol><h3 id="\u9A8C\u8BC1\u6570\u5B57\u8BC1\u4E66" tabindex="-1">\u9A8C\u8BC1\u6570\u5B57\u8BC1\u4E66 <a class="header-anchor" href="#\u9A8C\u8BC1\u6570\u5B57\u8BC1\u4E66" aria-hidden="true">#</a></h3><ol><li>\u6D4F\u89C8\u5668\u4F7F\u7528\u76F8\u540C\u7684 Hash \u7B97\u6CD5\u51FD\u6570\u8BA1\u7B97\u660E\u6587\u4FE1\u606F\uFF0C\u5F97\u5230\u4FE1\u606F\u6458\u8981 A</li><li>\u518D\u4F7F\u7528\u516C\u94A5\u5BF9\u6570\u5B57\u7B7E\u540D\u89E3\u5BC6\uFF0C\u5F97\u5230\u4FE1\u606F\u6458\u8981 B</li><li>\u4FE1\u606F\u6458\u8981 A === \u4FE1\u606F\u6458\u8981 B</li></ol><blockquote><p>CA \u662F\u673A\u6784\uFF0C\u4F1A\u6CBF\u7740 CA \u673A\u6784\u94FE\u67E5\u627E\uFF0C\u76F4\u5230\u6839\u8BC1\u4E66\u673A\u6784\u4E3A\u6B62\uFF08\u5426\u5219\u89C6\u4E3A\u4E0D\u5408\u6CD5\uFF09</p></blockquote><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><ol><li>\u7533\u8BF7\u6570\u5B57\u8BC1\u4E66\u662F\u4E0D\u9700\u8981\u63D0\u4F9B\u79C1\u94A5\u7684\uFF0C\u79C1\u94A5\u6C38\u8FDC\u53EA\u80FD\u5B58\u5728\u4E8E\u670D\u52A1\u5668\u4E0A</li><li>\u6570\u5B57\u8BC1\u4E66\u6700\u6838\u5FC3\u7684\u5185\u5BB9\u5C31\u662F\u4F7F\u7528\u5176\u81EA\u6709\u7684\u79C1\u94A5\u751F\u6210\u7684\u6570\u5B57\u7B7E\u540D</li><li>\u5185\u7F6E CA \u5BF9\u5E94\u7684\u8BC1\u4E66\u79F0\u4E3A\u6839\u8BC1\u4E66\uFF0C\u6700\u6743\u5A01\u7684\u673A\u6784\uFF08\u81EA\u7B7E\u540D\u8BC1\u4E66\uFF09</li></ol><h2 id="\u6570\u5B57\u8BC1\u4E66\u62D3\u5C55" tabindex="-1">\u6570\u5B57\u8BC1\u4E66\u62D3\u5C55 <a class="header-anchor" href="#\u6570\u5B57\u8BC1\u4E66\u62D3\u5C55" aria-hidden="true">#</a></h2><p>\u6570\u5B57\u8BC1\u4E66</p><blockquote><p>\u4E2A\u4EBA\u7533\u8BF7\u7684\u8BC1\u4E66\u5C5E\u4E8E DV \u7C7B\u578B\uFF1B\u666E\u901A\u516C\u53F8\u7533\u8BF7\u7684\u8BC1\u4E66\u5C5E\u4E8E OV \u7C7B\u578B\uFF1B\u91D1\u878D\u673A\u6784\u3001\u94F6\u884C\u3001\u7535\u5546\u5E73\u53F0\u7533\u8BF7\u7684\u8BC1\u4E66\u5C5E\u4E8E EV \u7C7B\u578B\uFF08DV \u81EA\u52A8\u9A8C\u8BC1\uFF0COV \u548C EV \u9700\u8981\u4EBA\u5DE5\u9A8C\u8BC1\uFF09</p></blockquote><blockquote><p>CA \u673A\u6784\u7684\u6743\u5A01\u6027\uFF0C\u6570\u5B57\u8BC1\u4E66\u94FE\uFF0C\u4E2D\u95F4 CA(Intermediates CAs)\u548C\u6839 CA(Root CAs)</p></blockquote><blockquote><p>\u64CD\u4F5C\u7CFB\u7EDF\u5185\u7F6E\u6839\u8BC1\u4E66\uFF0CWebTrust\uFF08\u7F51\u7EDC\u4FE1\u4EFB\uFF09 \u8BA4\u8BC1\u662F\u7535\u5B50\u8BA4\u8BC1\u670D\u52A1\u884C\u4E1A\u4E2D\u552F\u4E00\u7684\u56FD\u9645\u6027\u8BA4\u8BC1\u6807\u51C6\uFF08\u8BA4\u8BC1\u7684\u6839 CA \u76EE\u524D\u6709 Comodo\uFF0Cgeotrust\uFF0Crapidssl\uFF0Csymantec\uFF0Cthawte\uFF0Cdigicert\uFF09\uFF0C\u53EA\u6709\u5728\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u80FD\u8FFD\u6EAF\u5230\u6570\u5B57\u8BC1\u4E66\u94FE\u624D\u80FD\u9A8C\u8BC1\u8BC1\u4E66\u5408\u6CD5</p></blockquote>',45),o=[t];function d(h,n,c,s,u,p){return i(),l("div",null,o)}const m=e(r,[["render",d]]);export{b as __pageData,m as default};
