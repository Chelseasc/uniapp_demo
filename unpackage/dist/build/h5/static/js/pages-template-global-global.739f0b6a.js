(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-global-global"],{"32a2":function(t,e,a){"use strict";a.r(e);var n=a("7555"),i=a("cc03");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("eba7");var u,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"3063a6ae",null,!1,n["a"],u);e["default"]=o.exports},7555:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"pa"},[a("v-uni-view",{staticClass:"uni-divider"},[a("v-uni-view",{staticClass:"uni-divider__content"},[t._v("globalData")]),a("v-uni-view",{staticClass:"uni-divider__line"})],1),a("v-uni-text",{staticClass:"text"},[t._v("globalData中text的值: "+t._s(t.gd.test))]),a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setGD()}}},[t._v("修改上述值为123")]),a("v-uni-view",{staticClass:"uni-divider"},[a("v-uni-view",{staticClass:"uni-divider__content"},[t._v("vuex")]),a("v-uni-view",{staticClass:"uni-divider__line"})],1),a("v-uni-text",{staticClass:"text"},[t._v("vuex中hasLogin的值: "+t._s(t.testvuex))]),a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!0)}}},[t._v("修改上述值为true")]),a("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!1)}}},[t._v("修改上述值为false")])],1)},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},"9f9d":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("cebc")),s=a("2f62"),u={data:function(){return{gd:{}}},computed:(0,i.default)({},(0,s.mapState)(["testvuex"])),methods:(0,i.default)({},(0,s.mapMutations)(["setTestTrue"]),(0,s.mapMutations)(["setTestFalse"]),{setGD:function(){getApp().globalData.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}}),onShow:function(){this.gd=getApp().globalData}};e.default=u},baf3:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".button[data-v-3063a6ae]{margin:%?30?%;color:#007aff}.text[data-v-3063a6ae]{margin-left:%?30?%}",""])},c7e0:function(t,e,a){var n=a("baf3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("48c13ae4",n,!0,{sourceMap:!1,shadowMode:!1})},cc03:function(t,e,a){"use strict";a.r(e);var n=a("9f9d"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},eba7:function(t,e,a){"use strict";var n=a("c7e0"),i=a.n(n);i.a}}]);