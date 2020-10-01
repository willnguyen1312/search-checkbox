(this["webpackJsonpsearch-checkbox"]=this["webpackJsonpsearch-checkbox"]||[]).push([[0],{24:function(e,t,n){e.exports=n(56)},29:function(e,t,n){},30:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(5),u=n.n(l),o=(n(29),n(30),n(2)),i=n(3),s=n(4),m=n(10),v=n.n(m),d=n(22),f=n(11),p=n.n(f),h="NEWS_FETCHING",E="NEWS_FETCH_SUCCESS",b="NEWS_FETCH_FAIL",y={data:[],loading:null,error:null,keyword:""},k=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(s.a)(Object(s.a)({},n),{},{loading:!0});case E:var r=null===(e=a.payload)||void 0===e||null===(t=e.hits)||void 0===t?void 0:t.filter((function(e){return e.title||e.story_text}));return{loading:!1,data:r,error:null,keyword:a.keyword};case b:return{loading:!1,error:a.payload,data:[]};default:return n}},g=n(23),j=Object(i.c)(k,Object(i.a)(g.a)),O=n(6),w=Object(r.memo)((function(){var e=Object(o.c)((function(e){return e})),t=e.data,n=e.loading,a=e.error;return null===n?null:c.a.createElement("div",{className:"news-container"},null===t||void 0===t?void 0:t.map((function(e){var t=e._highlightResult,n=e.objectID,a=e.url,r=t||{},l=r.title,u=r.story_text,o=r.url;return c.a.createElement("div",{key:n,className:"news-item"},l&&c.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},o&&c.a.createElement("div",{className:"news-item-url",dangerouslySetInnerHTML:{__html:o.value}}),c.a.createElement("div",{className:"news-item-title",dangerouslySetInnerHTML:{__html:l.value}})),u&&c.a.createElement("div",{className:"news-item-content",dangerouslySetInnerHTML:{__html:u.value}}))})),n||a||t.length>0?null:c.a.createElement("div",{className:"news-empty flex-center"},"Not Found"),!a||n?null:c.a.createElement("div",{className:"news-error flex-center"},a))})),N=(n(55),Object(r.memo)((function(){return Object(o.c)((function(e){return e.loading}))?c.a.createElement("div",{className:"loader"}):null}))),C=Object(r.memo)((function(){var e=Object(o.b)(),t=Object(r.useState)(""),n=Object(O.a)(t,2),l=n[0],u=n[1];!function(e,t,n){var a=Object(r.useCallback)(e,n),c=Object(r.useRef)();Object(r.useEffect)((function(){return clearTimeout(c.current),c.current=setTimeout(a,t),function(){return clearTimeout(c.current)}}),[a,t])}((function(){return e((t=l,function(){var e=Object(d.a)(v.a.mark((function e(n){var r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:h}),e.prev=1,a&&a.cancel("Cancel fetchNews request"),a=p.a.CancelToken.source(),e.next=6,p()({url:"https://hn.algolia.com/api/v1/search?query=".concat(encodeURIComponent(t)),cancelToken:a.token});case 6:r=e.sent,c=r.data,n({type:E,payload:c}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),"Cancel fetchNews request"!==(null===e.t0||void 0===e.t0?void 0:e.t0.message)&&n({type:b,payload:"Sorry, something went wrong, please try again!"});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()));var t}),100,[l]);var i=Object(r.useCallback)((function(e){u(e.target.value)}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search-header flex-row align-center"},c.a.createElement("div",{className:"search-input-container flex-row"},c.a.createElement("input",{onChange:i,placeholder:"Search\u2026",className:"search-input"}),c.a.createElement(N,null))),c.a.createElement(w,null))})),_=1,x=0,S=-1,T=Object(r.memo)((function(e){var t=e.status,n=e.onClick,a=e.item,l=Object(r.useRef)();return Object(r.useEffect)((function(){l.current.indeterminate=t===S}),[t]),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",checked:t===_,ref:l,onChange:function(){return n(a)}}),c.a.createElement("span",null,a.name))})),I=n(58),F={name:"level 1",items:[{name:" level 2",items:[{name:"level 3"},{name:"level 3",items:[{name:"level 4",items:[{name:"level 5",items:[{name:"level 6"},{name:"level 6"}]},{name:"level 5"}]}]},{name:"level 3",items:[{name:"level 4"},{name:"level 4"}]}]},{name:"level 2",items:[{name:"level 3"}]}]},H=Object(r.memo)((function(){var e=Object(r.useState)({}),t=Object(O.a)(e,2),n=t[0],a=t[1],l=Object(r.useMemo)((function(){return function e(t){t.key=Object(I.a)(),t.items&&t.items.forEach((function(n){n.parent=t,e(n)}))}(F),F}),[]),u=Object(r.useCallback)((function(e){a((function(t){var n=e.key,a=e.parent,r=t[n]===_?x:_;!function e(n,a){var r=n.key,c=n.items;t[r]=a,c&&c.forEach((function(t){e(t,a)}))}(e,r);return function e(n){if(n){var a,r=n.items,c=n.parent,l=n.key,u=r.reduce((function(e,n){return e+(t[n.key]===_)}),0),o=r.reduce((function(e,n){return e+(t[n.key]===S)}),0);a=u===r.length?_:o>0||u>0?S:x,t[l]=a,e(c)}}(a),Object(s.a)({},t)}))}),[]);return function e(t){var a=t.items,r=t.key;return c.a.createElement("div",{key:r},c.a.createElement(T,{item:t,status:n[r],onClick:u}),c.a.createElement("div",{style:{marginLeft:20}},null===a||void 0===a?void 0:a.map((function(t){return e(t)}))))}(l)})),L=function(){return c.a.createElement(o.a,{store:j},c.a.createElement("div",{className:"flex-row"},c.a.createElement("div",{className:"app-content"},c.a.createElement(C,null)),c.a.createElement("div",{className:"divider-horizontal"}),c.a.createElement("div",{className:"app-content"},c.a.createElement(H,null))))};u.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f46e8a09.chunk.js.map