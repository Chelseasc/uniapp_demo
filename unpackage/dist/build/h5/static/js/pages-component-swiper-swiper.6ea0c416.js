(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"0d5b":function(i,t,a){"use strict";var n,e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:"swiper,可滑动视图"}}),a("v-uni-view",{staticClass:"uni-margin-wrap"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[i._v("A")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[i._v("B")])],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[i._v("C")])],1)],1)],1),a("v-uni-view",{staticClass:"swiper-list"},[a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("指示点")]),a("v-uni-switch",{attrs:{checked:i.indicatorDots},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeIndicatorDots.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("自动播放")]),a("v-uni-switch",{attrs:{checked:i.autoplay},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.changeAutoplay.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[i._v("幻灯片切换时长(ms)")]),a("v-uni-text",{staticClass:"info"},[i._v(i._s(i.duration))])],1),a("v-uni-slider",{attrs:{value:i.duration,min:"500",max:"2000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.durationChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-text",[i._v("自动播放间隔时长(ms)")]),a("v-uni-text",{staticClass:"info"},[i._v(i._s(i.interval))])],1),a("v-uni-slider",{attrs:{value:i.interval,min:"2000",max:"10000"},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.intervalChange.apply(void 0,arguments)}}})],1)],1)},s=[];a.d(t,"b",function(){return e}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return n})},"3d76":function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(i){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(i){this.autoplay=!this.autoplay},intervalChange:function(i){this.interval=i.detail.value},durationChange:function(i){this.duration=i.detail.value}}};t.default=n},"3f74":function(i,t,a){"use strict";a.r(t);var n=a("0d5b"),e=a("aa70");for(var s in e)"default"!==s&&function(i){a.d(t,i,function(){return e[i]})}(s);a("5173");var u,o=a("f0c5"),r=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"4a0b7cdb",null,!1,n["a"],u);t["default"]=r.exports},5173:function(i,t,a){"use strict";var n=a("d907"),e=a.n(n);e.a},"8bf0":function(i,t,a){t=i.exports=a("2350")(!1),t.push([i.i,".uni-margin-wrap[data-v-4a0b7cdb]{width:%?690?%;margin:0 %?30?%}.swiper[data-v-4a0b7cdb]{height:%?300?%}.swiper-item[data-v-4a0b7cdb]{display:block;height:%?300?%;line-height:%?300?%;text-align:center}.swiper-list[data-v-4a0b7cdb]{margin-top:%?40?%;margin-bottom:0}.uni-common-mt[data-v-4a0b7cdb]{margin-top:%?60?%;position:relative}.info[data-v-4a0b7cdb]{position:absolute;right:%?20?%}.uni-padding-wrap[data-v-4a0b7cdb]{width:%?550?%;padding:0 %?100?%}",""])},aa70:function(i,t,a){"use strict";a.r(t);var n=a("3d76"),e=a.n(n);for(var s in n)"default"!==s&&function(i){a.d(t,i,function(){return n[i]})}(s);t["default"]=e.a},d907:function(i,t,a){var n=a("8bf0");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var e=a("4f06").default;e("b0ce7a7c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);