(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-websocket-global-websocket-global"],{"0c26":function(n,t,e){"use strict";var o,c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:"websocket通讯示例"}}),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-view",{staticClass:"websocket-msg"},[n._v(n._s(n.showMsg))]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.connect.apply(void 0,arguments)}}},[n._v("连接websocket服务")]),e("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:n.connected,expression:"connected"}],attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.send.apply(void 0,arguments)}}},[n._v("发送一条消息")]),e("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.close.apply(void 0,arguments)}}},[n._v("断开websocket服务")]),e("v-uni-view",{staticClass:"websocket-tips"},[n._v("发送消息后会收到一条服务器返回的消息（与发送的消息内容一致）")])],1)],1)],1)},i=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return i}),e.d(t,"a",function(){return o})},3415:function(n,t,e){"use strict";e.r(t);var o=e("0c26"),c=e("91dd");for(var i in c)"default"!==i&&function(n){e.d(t,n,function(){return c[n]})}(i);e("4c6e");var s,a=e("f0c5"),u=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,"0c119bf7",null,!1,o["a"],s);t["default"]=u.exports},"497d":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,".uni-padding-wrap[data-v-0c119bf7]{width:%?690?%;padding:0 %?30?%}.uni-btn-v[data-v-0c119bf7]{padding:%?10?% 0}.uni-btn-v uni-button[data-v-0c119bf7]{margin:%?20?% 0}.websocket-room[data-v-0c119bf7]{height:40px;line-height:40px;text-align:center;border-bottom:solid 1px #ddd;margin-bottom:20px}.websocket-msg[data-v-0c119bf7]{padding:40px 0;text-align:center;font-size:14px;line-height:40px;color:#666}.websocket-tips[data-v-0c119bf7]{padding:40px 0;text-align:center;font-size:14px;line-height:24px;color:#666}",""])},"4c6e":function(n,t,e){"use strict";var o=e("6409"),c=e.n(o);c.a},6409:function(n,t,e){var o=e("497d");"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var c=e("4f06").default;c("1637b9e8",o,!0,{sourceMap:!1,shadowMode:!1})},"91dd":function(n,t,e){"use strict";e.r(t);var o=e("d220"),c=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=c.a},d220:function(n,t,e){"use strict";var o=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(e("e814"));e("6b54");var i=uni.getSystemInfoSync().platform,s={data:function(){return{connected:!1,connecting:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){uni.closeSocket(),uni.hideLoading()},methods:{connect:function(){var n=this;if(this.connected||this.connecting)return uni.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,uni.showLoading({title:"连接中..."}),uni.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},success:function(n){},fail:function(n){}}),uni.onSocketOpen(function(t){n.connecting=!1,n.connected=!0,uni.hideLoading(),uni.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",t)}),uni.onSocketError(function(t){n.connecting=!1,n.connected=!1,uni.hideLoading(),uni.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",t)}),uni.onSocketMessage(function(t){n.msg=t.data,console.log("onMessage",t)}),uni.onSocketClose(function(t){n.connected=!1,n.startRecive=!1,n.msg=!1,console.log("onClose",t)})},send:function(){uni.sendSocketMessage({data:"from "+i+" : "+(0,c.default)(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){uni.closeSocket()}}};t.default=s}}]);