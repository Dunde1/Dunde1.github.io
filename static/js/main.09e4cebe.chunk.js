(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{11:function(t){t.exports=JSON.parse('[{"name":"css3d","thumbnail":"css3d.png","tag":["#css","#3d"],"options":{"textColor":"aliceblue","textSize":"x-large"}},{"name":"tmp2","thumbnail":"","tag":["#tmp2"],"options":{"textColor":"navy","textSize":"x-large"}},{"name":"tmp3","thumbnail":"","tag":["#tmp3"],"options":{"textColor":"navy","textSize":"x-large"}},{"name":"tmp4","thumbnail":"","tag":["#tmp4"],"options":{"textColor":"navy","textSize":"x-large"}}]')},21:function(t,e,n){},23:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(12),o=n.n(a),i=(n(21),n(8)),r=n(4),l=n(9),j=(n(23),n(11)),u=n(2),b=Object(l.b)({key:"pageInfo",default:j}),x=function(){var t=Object(l.c)(b);return Object(u.jsx)("section",{className:"Main-contents",children:t.map((function(t){return Object(u.jsxs)(i.b,{className:"content box-outter",to:"/posts/".concat(t.name),style:{backgroundImage:'url("Main/'.concat(t.thumbnail,'")')},children:[Object(u.jsx)("span",{className:"post-name",style:{color:t.options.textColor,fontSize:t.options.textSize},children:t.name}),Object(u.jsx)("span",{className:"post-tag",style:{borderColor:t.options.textColor,color:t.options.textColor},children:t.tag.map((function(t){return"".concat(t)})).join(", ")})]},t.name)}))})},m=n(16),p=function(t){Object(m.a)(t);var e,n=Object(l.d)(b);return Object(u.jsx)("input",{className:"search-input",type:"text",onInput:function(t){clearTimeout(e),e=setTimeout((function(){!function(t){var e=t.replace(",","").split(" ").filter((function(t){return""!==t}));if(0!==e.length){var c=j.filter((function(t){if(-1!==e.findIndex((function(e){return!!t.name.includes(e)||0!==t.tag.filter((function(t){return t.includes(e)})).length})))return!0}));n(c)}else n(j)}(t.target.value)}),500)}})},d=function(){return Object(u.jsxs)("div",{className:"Main-search box-outter",children:[Object(u.jsx)("button",{className:"search-button",onClick:function(){alert("not yet")},children:Object(u.jsx)("img",{src:"/icons/search.svg",width:"20px",height:"20px",alt:"search button"})}),Object(u.jsx)(p,{})]})},h=(n(25),function(){return Object(u.jsxs)("div",{className:"Main",children:[Object(u.jsxs)("section",{className:"Main-header",children:[Object(u.jsx)("img",{className:"Main-image box-outter",src:"/main.png",alt:"main hero"}),Object(u.jsx)(d,{})]}),Object(u.jsx)(x,{})]})}),O=(n(26),n(27),function(){return Object(u.jsxs)("section",{className:"css3d",children:[Object(u.jsx)(i.b,{className:"go-main",to:"/",children:Object(u.jsx)("img",{src:"/icons/back-arrow.svg",alt:"go main"})}),Object(u.jsxs)("div",{className:"cube",children:[Object(u.jsx)("div",{className:"top",children:Object(u.jsx)("a",{className:"go-youtube-btn",href:"https://www.youtube.com/watch?v=nOdDtnHWaDo",target:"_blank",children:"Go to youtube source!"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{style:{"--i":0}}),Object(u.jsx)("span",{style:{"--i":1}}),Object(u.jsx)("span",{style:{"--i":2}}),Object(u.jsx)("span",{style:{"--i":3}})]})]})]})}),g=function(){return Object(u.jsx)(r.c,{children:Object(u.jsx)(r.a,{path:"".concat("/posts","/css3d"),element:Object(u.jsx)(O,{})})})};var f=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(r.c,{children:Object(u.jsx)(r.a,{path:"/",element:Object(u.jsx)(h,{})})}),Object(u.jsx)(g,{})]})})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),a(t),o(t)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.09e4cebe.chunk.js.map