(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-new-page-new-nvue-page-1"],{"206f":function(t,e,n){"use strict";var a=n("aa1e"),i=n.n(a);i.a},"269a":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("cebc")),o=n("2f62"),c={data:function(){return{}},computed:(0,i.default)({},(0,o.mapState)(["colorIndex","colorList"]),(0,o.mapGetters)(["currentColor"])),methods:(0,i.default)({},(0,o.mapMutations)(["setColorIndex"]),{navToNvue:function(){uni.navigateTo({url:"new-nvue-page-2"})},navToVue:function(){uni.navigateTo({url:"new-vue-page-2"})}})};e.default=c},"48e9":function(t,e,n){"use strict";n.r(e);var a=n("9bad"),i=n("8eeb");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("206f");var c,r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"aac1446c",null,!1,a["a"],c);e["default"]=u.exports},"609c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".new-page__text[data-v-aac1446c]{font-size:14px;color:#666}.root[data-v-aac1446c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.page-body[data-v-aac1446c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:50px}.new-page__text-box[data-v-aac1446c]{padding:20px}.new-page__color[data-v-aac1446c]{width:200px;height:100px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-page__color-text[data-v-aac1446c]{font-size:14px;color:#fff;line-height:30px;text-align:center}.new-page__button-item[data-v-aac1446c]{margin-top:15px;width:300px}",""])},"8eeb":function(t,e,n){"use strict";n.r(e);var a=n("269a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"9bad":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"root"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"new-page__color",style:{backgroundColor:t.currentColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setColorIndex(t.colorIndex>1?0:t.colorIndex+1)}}},[n("v-uni-text",{staticClass:"new-page__color-text"},[t._v("点击改变颜色")])],1),n("v-uni-view",{staticClass:"new-page__text-box"},[n("v-uni-text",{staticClass:"new-page__text"},[t._v("点击上方色块使用vuex在页面之间进行通讯")])],1),n("v-uni-view",{staticClass:"new-page__button"},[n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToNvue.apply(void 0,arguments)}}},[t._v("跳转NVUE页面")]),n("v-uni-button",{staticClass:"new-page__button-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToVue.apply(void 0,arguments)}}},[t._v("跳转VUE页面")])],1)],1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},aa1e:function(t,e,n){var a=n("609c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b6c8d0b8",a,!0,{sourceMap:!1,shadowMode:!1})}}]);