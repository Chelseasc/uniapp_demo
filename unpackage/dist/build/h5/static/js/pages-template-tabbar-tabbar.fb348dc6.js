(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-tabbar-tabbar"],{"15c9":function(t,e,n){"use strict";var i=n("8042"),a=n.n(i);a.a},3891:function(t,e,n){"use strict";n.r(e);var i=n("c89a"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"3d09":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tabs"},[n("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1,"scroll-into-view":t.scrollInto}},t._l(t.tabBars,function(e,i){return n("v-uni-view",{key:e.id,staticClass:"uni-tab-item",attrs:{id:e.id,"data-current":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-tab-item-title",class:t.tabIndex==i?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)}),1),n("v-uni-view",{staticClass:"line-h"}),n("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1"},attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.newsList,function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[n("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(i)}}},[t._l(e.data,function(e,a){return n("v-uni-view",{key:e.id},[n("media-item",{attrs:{options:e},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close(i,a)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}})],1)}),e.isLoading||e.data.length>4?n("v-uni-view",{staticClass:"loading-more"},[n("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(e.loadingText))])],1):t._e()],2)],1)}),1)],1)},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},5567:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.options.title?n("v-uni-view",{staticClass:"media-item view",attrs:{"hover-class":"media-item-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"view",style:{flexDirection:1===t.options.article_type||2===t.options.article_type?2===t.options.article_type?"row":"row-reverse":"column"}},[n("v-uni-text",{staticClass:"media-title",class:{"media-title2":1===t.options.article_type||2===t.options.article_type}},[t._v(t._s(t.options.title))]),t.options.image_list||t.options.image_url?n("v-uni-view",{staticClass:"image-section flex-row",class:{"image-section-right":2===t.options.article_type,"image-section-left":1===t.options.article_type},style:{flexDirection:"row"}},[t.options.image_url?n("v-uni-image",{staticClass:"image-list1",class:{"image-list2":1===t.options.article_type||2===t.options.article_type},attrs:{src:t.options.image_url}}):t._e(),t._l(t.options.image_list,function(e,i){return t.options.image_list?n("v-uni-image",{key:i,staticClass:"image-list3",attrs:{src:e.url}}):t._e()})],2):t._e()],1),n("v-uni-view",{staticClass:"media-foot flex-row",staticStyle:{"flex-direction":"row"}},[n("v-uni-view",{staticClass:"media-info flex-row",staticStyle:{"flex-direction":"row"}},[n("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.source))]),n("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.comment_count)+"条评论")]),n("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.datetime))])],1),n("v-uni-view",{staticClass:"max-close-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"close-l close-h"}),n("v-uni-view",{staticClass:"close-l close-v"})],1)],1),n("v-uni-view",{staticClass:"media-item-line",staticStyle:{position:"absolute"}})],1):t._e()},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},6177:function(t,e,n){var i=n("e7f9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("77c171cc",i,!0,{sourceMap:!1,shadowMode:!1})},"7bec":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nuni-page-body[data-v-57a57b9b]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.tabs[data-v-57a57b9b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fff;\n}.scroll-h[data-v-57a57b9b]{width:%?750?%;height:%?80?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwhite-space:nowrap\n\n        /* flex-wrap: nowrap; */\n        /* border-color: #cccccc;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-width: 1px; */}.line-h[data-v-57a57b9b]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-57a57b9b]{\ndisplay:inline-block;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:%?34?%;padding-right:%?34?%}.uni-tab-item-title[data-v-57a57b9b]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-57a57b9b]{color:#007aff}.swiper-box[data-v-57a57b9b]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.swiper-item[data-v-57a57b9b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.scroll-v[data-v-57a57b9b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nwidth:%?750?%}.update-tips[data-v-57a57b9b]{position:absolute;left:0;top:41px;right:0;padding-top:5px;padding-bottom:5px;background-color:#fddd9b;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.update-tips-text[data-v-57a57b9b]{font-size:14px;color:#fff}.refresh[data-v-57a57b9b]{width:%?750?%;height:64px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-view[data-v-57a57b9b]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-icon[data-v-57a57b9b]{width:30px;height:30px;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-57a57b9b]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading-icon[data-v-57a57b9b]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-57a57b9b]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-57a57b9b]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-57a57b9b]{font-size:%?28?%;color:#999}",""])},8042:function(t,e,n){var i=n("7bec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b2b4f6e4",i,!0,{sourceMap:!1,shadowMode:!1})},"8cb5":function(t,e,n){"use strict";var i=n("6177"),a=n.n(i);a.a},"9bf3":function(t,e,n){"use strict";n.r(e);var i=n("e449"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},a317:function(t,e,n){"use strict";n.r(e);var i=n("5567"),a=n("9bf3");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("8cb5");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3387d8b3",null,!1,i["a"],r);e["default"]=c.exports},c89a:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("6b54");var a=i(n("5176"));n("ac6a");var o=i(n("a317")),r=100,s=3,c={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},l={components:{mediaItem:o.default},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){var t=this;setTimeout(function(){t.tabBars.forEach(function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})}),t.getList(0)},350)},methods:{getList:function(t){for(var e=this.newsList[t],n=[],i=1;i<=10;i++){var o=(0,a.default)({},c["data"+Math.floor(5*Math.random())]);o.id=this.newGuid(),n.push(o)}e.data=e.data.concat(n)},goDetail:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"./detail/detail?title="+t.title}),setTimeout(function(){e.navigateFlag=!1},200))},close:function(t,e){var n=this;uni.showModal({content:"是否删除本条信息？",success:function(i){i.confirm&&n.newsList[t].data.splice(e,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.getList(e.tabIndex)},500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>r){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>s){var n=this.cacheTab[0];this.clearTabData(n),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,n=this.newsList[this.tabIndex];n.refreshFlag&&(n.refreshing=!0,n.refreshText="正在刷新...",setTimeout(function(){e.refreshData(),e.pulling=!0,n.refreshing=!1,n.refreshFlag=!1,n.refreshText="已刷新",setTimeout(function(){e.pulling=!1},500)},2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=l},e449:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{options:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")}}};e.default=i},e7f9:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".view[data-v-3387d8b3]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-row[data-v-3387d8b3]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-col[data-v-3387d8b3]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list-cell[data-v-3387d8b3]{width:%?750?%;padding:0 %?30?%}.uni-list-cell-hover[data-v-3387d8b3]{background-color:#eee}.media-item[data-v-3387d8b3]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\t\t/* border-bottom-width: 1rpx;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: #ebebeb; */padding:%?20?% %?30?% %?21?% %?30?%}.media-item-hover[data-v-3387d8b3]{background-color:#eee}.media-item-line[data-v-3387d8b3]{position:absolute;left:%?30?%;right:%?30?%;bottom:0;height:%?1?%;background-color:#ebebeb}.media-image-right[data-v-3387d8b3]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.media-image-left[data-v-3387d8b3]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse}.media-title[data-v-3387d8b3]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.media-title[data-v-3387d8b3]{lines:3;text-overflow:ellipsis;font-size:%?30?%;color:#555}.media-title2[data-v-3387d8b3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-top:%?6?%;line-height:%?40?%}.image-section[data-v-3387d8b3]{margin-top:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.image-section-right[data-v-3387d8b3]{margin-top:%?0?%;margin-left:%?10?%;width:%?225?%;height:%?146?%}.image-section-left[data-v-3387d8b3]{margin-top:%?0?%;margin-right:%?10?%;width:%?225?%;height:%?146?%}.image-list1[data-v-3387d8b3]{width:%?690?%;height:%?481?%}.image-list2[data-v-3387d8b3]{width:%?225?%;height:%?146?%}.image-list3[data-v-3387d8b3]{width:%?225?%;height:%?146?%}.media-info[data-v-3387d8b3]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.info-text[data-v-3387d8b3]{margin-right:%?20?%;color:#999;font-size:%?24?%}.media-foot[data-v-3387d8b3]{margin-top:%?25?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.max-close-view[data-v-3387d8b3]{position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?40?%;height:%?30?%;line-height:%?30?%;border-width:%?1?%;border-style:solid;border-color:#aaa;border-radius:4px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.close-l[data-v-3387d8b3]{position:absolute;width:%?18?%;height:%?1?%;background-color:#aaa}.close-h[data-v-3387d8b3]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-v[data-v-3387d8b3]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""])},f67c:function(t,e,n){"use strict";n.r(e);var i=n("3d09"),a=n("3891");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("15c9");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"57a57b9b",null,!1,i["a"],r);e["default"]=c.exports}}]);