(this["webpackJsonpsearch-checkbox"]=this["webpackJsonpsearch-checkbox"]||[]).push([[0],{24:function(e,t,n){e.exports=n(56)},29:function(e,t,n){},30:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),o=(n(29),n(30),n(2)),i=n(3),u=n(4),s=n(10),m=n.n(s),v=n(21),d=n(22),f=n.n(d),p="NEWS_FETCHING",E="NEWS_FETCH_SUCCESS",b="NEWS_FETCH_FAIL",h={data:[],loading:null,error:null,keyword:""},y=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p:return Object(u.a)(Object(u.a)({},n),{},{loading:!0});case E:var r=null===(e=a.payload)||void 0===e||null===(t=e.hits)||void 0===t?void 0:t.filter((function(e){return e.title||e.story_text}));return{loading:!1,data:r,error:null,keyword:a.keyword};case b:return{loading:!1,error:a.payload,data:[]};default:return n}},g=n(23),k=Object(i.c)(y,Object(i.a)(g.a)),j=n(6),O=Object(a.memo)((function(e){var t=e.keyword,n=Object(o.c)((function(e){return e})),a=n.data,c=n.loading,l=n.error,i=function(e){return t?{__html:null===e||void 0===e?void 0:e.replace(RegExp(t,"gi"),(function(t){var n;return null!==(n="<em>".concat(t,"</em>"))&&void 0!==n?n:e}))}:{__html:e}};return null===c?null:r.a.createElement("div",{className:"news-container"},!c||a.length>0?null:r.a.createElement("div",{className:"news-loading"},"Loading..."),null===a||void 0===a?void 0:a.map((function(e){var t=e.title,n=e.objectID,a=e.story_text;return r.a.createElement("div",{key:n,className:"news-item"},r.a.createElement("div",{className:"news-item-title",dangerouslySetInnerHTML:i(t)}),r.a.createElement("div",{className:"news-item-content",dangerouslySetInnerHTML:i(a)}))})),c||l||a.length>0?null:r.a.createElement("div",{className:"news-empty"},"Not Found"),!l||c?null:r.a.createElement("div",{className:"news-error"},l))})),w=(n(55),Object(a.memo)((function(){var e=Object(o.b)(),t=Object(a.useState)(""),n=Object(j.a)(t,2),c=n[0],l=n[1];!function(e,t,n){var r=Object(a.useCallback)(e,n),c=Object(a.useRef)();Object(a.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout(r,t),function(){return clearTimeout(c.current)}}),[r,t])}((function(){return e((t=c,function(){var e=Object(v.a)(m.a.mark((function e(n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:p}),e.prev=1,e.next=4,f()({url:"https://hn.algolia.com/api/v1/search?m=0&query=".concat(encodeURIComponent(t))});case 4:a=e.sent,r=a.data,console.log("response",r),n({type:E,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n({type:b,payload:"Sorry, something went wrong, please try again!"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()));var t}),200,[c]);var i=Object(a.useCallback)((function(e){l(e.target.value)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-input-container flex-row align-center"},r.a.createElement("input",{onChange:i,placeholder:"Search\u2026",className:"search-input"})),r.a.createElement(O,{keyword:c}))}))),N=1,C=0,x=-1,S=Object(a.memo)((function(e){var t=e.status,n=e.onClick,c=e.item,l=Object(a.useRef)();return Object(a.useEffect)((function(){l.current.indeterminate=t===x}),[t]),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:t===N,ref:l,onChange:function(){return n(c)}}),r.a.createElement("span",null,c.name))})),_=n(58),T={name:"level 1",items:[{name:" level 2",items:[{name:"level 3"},{name:"level 3",items:[{name:"level 4",items:[{name:"level 5",items:[{name:"level 6"},{name:"level 6"}]},{name:"level 5"}]}]},{name:"level 3",items:[{name:"level 4"},{name:"level 4"}]}]},{name:"level 2",items:[{name:"level 3"}]}]},I=Object(a.memo)((function(){var e=Object(a.useState)({}),t=Object(j.a)(e,2),n=t[0],c=t[1],l=Object(a.useMemo)((function(){return function e(t){t.key=Object(_.a)(),t.items&&t.items.forEach((function(n){n.parent=t,e(n)}))}(T),T}),[]),o=Object(a.useCallback)((function(e){c((function(t){var n=e.key,a=e.parent,r=t[n]===N?C:N;!function e(n,a){var r=n.key,c=n.items;t[r]=a,c&&c.forEach((function(t){e(t,a)}))}(e,r);return function e(n){if(n){var a,r=n.items,c=n.parent,l=n.key,o=r.reduce((function(e,n){return e+(t[n.key]===N)}),0),i=r.reduce((function(e,n){return e+(t[n.key]===x)}),0);a=o===r.length?N:i>0||o>0?x:C,t[l]=a,e(c)}}(a),Object(u.a)({},t)}))}),[]);return function e(t){var a=t.items,c=t.key;return r.a.createElement("div",{key:c},r.a.createElement(S,{item:t,status:n[c],onClick:o}),r.a.createElement("div",{style:{marginLeft:20}},null===a||void 0===a?void 0:a.map((function(t){return e(t)}))))}(l)})),F=function(){return r.a.createElement(o.a,{store:k},r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"app-content"},r.a.createElement(w,null)),r.a.createElement("div",{className:"divider-horizontal"}),r.a.createElement("div",{className:"app-content"},r.a.createElement(I,null))))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.890f4d52.chunk.js.map