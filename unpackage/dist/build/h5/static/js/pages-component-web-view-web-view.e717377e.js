(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-web-view"],{"4d67":function(n,t,e){"use strict";var u=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(e("f499")),r={data:function(){return{url:"https://uniapp.dcloud.io/static/web-view.html"}},onLoad:function(n){n&&n.url&&(this.url=n.url)},methods:{getMessage:function(n){uni.showModal({content:(0,a.default)(n.detail),showCancel:!1})}}};t.default=r},"72a9":function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{attrs:{src:n.url},on:{message:function(t){arguments[0]=t=n.$handleEvent(t),n.getMessage.apply(void 0,arguments)}}})],1)},r=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})},"72b2":function(n,t,e){"use strict";e.r(t);var u=e("4d67"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},d238:function(n,t,e){"use strict";e.r(t);var u=e("72a9"),a=e("72b2");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);var i,o=e("f0c5"),c=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"1729ef37",null,!1,u["a"],i);t["default"]=c.exports}}]);