(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"0bd9":function(t,a,i){"use strict";i.r(a);var s=i("a76d"),e=i("3d19"),n=i("1ed0");for(var c in n)["default","default"].indexOf(c)<0&&function(t){i.d(a,t,function(){return n[t]})}(c);i("d68f");var r=i("f0c5");e["a"].__module="animate";var h=Object(r["a"])(n["default"],s["b"],s["c"],!1,null,"7ee31550",null,!1,s["a"],e["a"]);a["default"]=h.exports},"1ed0":function(t,a,i){"use strict";i.r(a);var s=i("b56e"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);a["default"]=e.a},"3d19":function(t,a,i){"use strict";function s({x:t,y:a,vx:i,vy:s,canvasWidth:e,canvasHeight:n,ctx:c}){this.canvasWidth=e,this.canvasHeight=n,this.ctx=c,this.x=t,this.y=a,this.vx=i,this.vy=s,this.radius=5}function e(t,a){return Math.pow(Math.pow(t,2)+Math.pow(a,2),.5)}s.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle="#007AFF",this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},s.prototype.move=function(){this.x+=this.vx,this.y+=this.vy,this.x<this.radius?this.vx=Math.abs(this.vx):(this.x>this.canvasWidth-this.radius&&(this.vx=-Math.abs(this.vx)),this.y<this.radius?this.vy=Math.abs(this.vy):this.y>this.canvasWidth-this.radius&&(this.vy=-Math.abs(this.vy)))};var n={methods:{start(t,a,i,n){let c=n.getDataset().width,r=n.getDataset().height,h=document.querySelectorAll(".canvas>canvas")[0],u=h.getContext("2d"),o=3,d=[],v=3,f=20;for(let x=0;x<v;x++){let t=e(c/2,r/2)/v*x;for(let a=0;a<f;a++){let i=2*a*Math.PI/f,e=Math.sin(i),n=Math.cos(i),h=t*n+c/2,v=t*e+r/2,l=o*n,x=o*e;d.push(new s({x:h,y:v,vx:l,vy:x,canvasWidth:c,canvasHeight:r,ctx:u,radius:5}))}}function l(t){u.clearRect(0,0,h.width,h.height),t.forEach(function(t){t.move(),t.draw()}),requestAnimationFrame(function(){l(t)})}l(d)}}};a["a"]=n},a37b:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".page-body-wrapper[data-v-7ee31550]{text-align:center}.canvas[data-v-7ee31550]{width:%?610?%;height:%?610?%;margin:auto;background-color:#fff}",""])},a76d:function(t,a,i){"use strict";var s,e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"page-body"},[i("v-uni-view",{staticClass:"page-body-wrapper"},[i("v-uni-canvas",{wxsProps:{"change:start":"startStatus"},staticClass:"canvas",attrs:{"canvas-id":"canvas",start:t.startStatus,"change:start":t.animate.start,"data-width":t.canvasWidth,"data-height":t.canvasWidth}})],1)],1)],1)},n=[];i.d(a,"b",function(){return e}),i.d(a,"c",function(){return n}),i.d(a,"a",function(){return s})},b56e:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{title:"canvas",canvasWidth:0,startStatus:!1,ballList:[]}},onReady:function(){var t=this;this.$nextTick(function(){uni.createSelectorQuery().select(".canvas").boundingClientRect(function(a){t.canvasWidth=a.width,t.startStatus=!0}).exec()})}};a.default=s},d68f:function(t,a,i){"use strict";var s=i("ea74"),e=i.n(s);e.a},ea74:function(t,a,i){var s=i("a37b");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("3dc854d0",s,!0,{sourceMap:!1,shadowMode:!1})}}]);