(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{267:function(e,a,t){"use strict";t.r(a);t(489);var r=t(0),n=t.n(r),l=t(474),c=t(482),o=t(472);a.default=function(e){var a=e.metadata,t=e.items,r=a.allTagsPath,s=a.name,i=a.count;return n.a.createElement(l.a,{title:'Posts tagged "'+s+'"',description:'Blog | Tagged "'+s+'"'},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,i," ",function(e,a){return e>1?a+"s":a}(i,"post"),' tagged with "',s,'"'),n.a.createElement(o.a,{href:r},"View All Tags"),n.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},n.a.createElement(a,null))})))))))}},475:function(e,a,t){"use strict";t(48),t(23),t(17),t(18),t(66);var r=t(0),n=t.n(r),l=t(468),c=t.n(l),o=t(471);t(120);a.a=function(e){var a=Object(r.useState)(!1),l=a[0],s=a[1],i=Object(r.useRef)(null),m=Object(o.a)().siteConfig,u=(void 0===m?{}:m).themeConfig.algolia;var d=function(e){void 0===e&&(e=!0),l||Promise.all([t.e(340).then(t.t.bind(null,476,7)),t.e(237).then(t.t.bind(null,477,7))]).then((function(a){var t=a[0].default;s(!0),window.docsearch=t,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,a,t){var r=document.createElement("a");r.href=t.url;var n="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;window.open(n,"_self")}}),e&&i.current.focus()}(e)}))},h=Object(r.useCallback)((function(){d(),l&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(r.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),g=Object(r.useCallback)((function(e){var a="mouseover"!==e.type;d(a)}));return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:p,ref:i}))}},482:function(e,a,t){"use strict";t(68);var r=t(0),n=t.n(r),l=t(468),c=t.n(l),o=t(467),s=t(472),i=t(488),m=t(121),u=t.n(m),d=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,m,h=e.children,p=e.frontMatter,g=e.metadata,E=e.truncated,b=e.isBlogPostPage,f=void 0!==b&&b,v=g.date,_=g.permalink,N=g.tags,w=p.author,k=p.title,x=p.author_url||p.authorURL,S=p.author_title||p.authorTitle,y=p.author_image_url||p.authorImageURL;return n.a.createElement("article",{className:f?void 0:"margin-bottom--xl"},(a=f?"h1":"h2",t=v.substring(0,10).split("-"),r=t[0],l=d[parseInt(t[1],10)-1],m=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},f?k:n.a.createElement(s.a,{to:_},k)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:v,className:u.a.blogPostDate},l," ",m,", ",r)),n.a.createElement("div",{className:"avatar margin-bottom--md"},y&&n.a.createElement("a",{className:"avatar__photo-link",href:x,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:y,alt:w})),n.a.createElement("div",{className:"avatar__intro"},w&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:x,target:"_blank",rel:"noreferrer noopener"},w)),n.a.createElement("small",{className:"avatar__subtitle"},S)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:i.a},h)),(N.length>0||E)&&n.a.createElement("footer",{className:"row margin-vert--lg"},N.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(s.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(s.a,{to:g.permalink,"aria-label":"Read more about "+k},n.a.createElement("strong",null,"Read More")))))}},489:function(e,a,t){var r=t(24).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||t(11)&&r(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);