(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reverseThinking/reverseThinking"],{"10f6":function(t,e,i){"use strict";(function(t){i("ed4d");a(i("66fd"));var e=a(i("f53f"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("f266")["createPage"])},7970:function(t,e,i){"use strict";(function(t){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{start_flag:!1,answer_flag:!1,background_color:"rgb(170, 170, 255)",canvasWidth:350,canvasHeight:350,time:4,timeSpace:12.5,timer:null,currentSchedule:500,shapeList:["Square","Circle","Rectangle","RegularPolygon"],colorList:["white","red","blue","green","purple","yellow"],chineseShapeList:["正方形","圆形","长方形","边形"],chineseColorList:["白色","红色","蓝色","绿色","紫色","黄色"],chineseNum:["五","六","七","八","九"],currentShape:null,showShape:null,showShapeFontColor:"white",pen:t.createCanvasContext("Canvas-startPlay"),result:null,freeResurrection:null,qualified:0}},onLoad:function(){var e=t.getStorageSync("freeResurrection");this.freeResurrection=e.three_num},onReady:function(t){this.iconInit()},methods:{iconInit:function(){var e=t.createCanvasContext("Canvas-init");e.beginPath(),e.setStrokeStyle("#ffaa7f"),e.setLineWidth(2),e.arc(75,75,60,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(95,75),e.setStrokeStyle("#ffaaff"),e.arc(75,75,20,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.setStrokeStyle("#ffffff"),e.moveTo(75,15),e.lineTo(20,97),e.lineTo(130,97),e.lineTo(75,15),e.stroke(),e.closePath(),e.draw()},startPlay:function(){if(!1===this.start_flag){this.start_flag=!0,this.answer_flag=!0,this.time=4;var e=t.createCanvasContext("Canvas-startPlay");this.upDifficulty(),this.Timer(),e.clearRect(0,0,this.canvasWidth,this.canvasHeight);var i=this.produceShape(),a=i[0],n=i[1],r=i[2],s=(i[3],null);switch(n){case"边形":s=this.chineseNum[this.drawRegularPolygon(e,r)-5],this.currentShape=a+"的"+s+n;break;case"正方形":this.drawSquare(e,r);break;case"圆形":this.drawCircle(e,r);break;case"长方形":this.drawRectangle(e,r)}"边形"!=n&&(this.currentShape=a+"的"+n),Math.random()<.55?"边形"===n?Math.random()<.3?this.showShape=this.chineseColorList[Math.floor(Math.random()*this.chineseColorList.length)]+"的"+s+n:(s=this.chineseNum[Math.floor(Math.random()*this.chineseNum.length)],this.showShape=a+"的"+s+n):(i=this.produceShape(),"边形"===i[1]?(s=this.chineseNum[Math.floor(Math.random()*this.chineseNum.length)],this.showShape=i[0]+"的"+s+i[1]):this.showShape=i[0]+"的"+i[1]):this.showShape=this.currentShape,this.qualified>=10&&(this.showShapeFontColor=this.colorList[Math.floor(Math.random()*this.colorList.length)])}},Timer:function(){var t=this;this.timer=setInterval((function(){var e=1e3*t.time-100;t.time=(e/1e3).toFixed(1),t.currentSchedule=t.currentSchedule-t.timeSpace,t.currentSchedule<=0&&(clearInterval(t.timer),t.answer_flag=!1,t.result=!1,t.background_color="rgb(243, 223, 187)")}),100)},upDifficulty:function(){this.qualified>=4&&this.qualified<8?(this.time=3.5,this.timeSpace=14.2):this.qualified>=8&&this.qualified<12?(this.time=3,this.timeSpace=16.5):this.qualified>=12&&this.qualified<16?(this.time=2.5,this.timeSpace=20):this.qualified>=16&&this.qualified<20?(this.time=2,this.timeSpace=25):this.qualified>=20&&(this.time=1.5,this.timeSpace=33.4)},produceShape:function(){var t=Math.floor(Math.random()*this.chineseShapeList.length),e=this.chineseShapeList[t],i=Math.floor(Math.random()*this.chineseColorList.length),a=this.chineseColorList[i],n=this.shapeList[t],r=this.colorList[i];return[a,e,r,n]},judgeIsCorrect:function(t){this.answer_flag=!1,this.background_color="rgb(243, 229, 230)",clearInterval(this.timer),this.currentShape===this.showShape===t?(this.result=!0,this.qualified++):this.result=!1},continuePlay:function(){this.start_flag=!1,this.currentSchedule=500,this.background_color="rgb(170, 170, 255)",this.currentShape=null,this.showShape=null,this.result=null,this.startPlay()},resurrectionPlay:function(){if(this.freeResurrection>0){this.freeResurrection--;var e=t.getStorageSync("freeResurrection");e.three_num=this.freeResurrection,t.setStorageSync("freeResurrection",e),this.continuePlay()}else t.showToast({title:"播放广告",icon:"none",mask:!0,duration:2e3})},resetPlay:function(){this.time=4,this.timeSpace=12.5,this.timer=null,this.start_flag=!1,this.currentSchedule=500,this.background_color="rgb(170, 170, 255)",this.currentShape=null,this.showShape=null,this.showShapeFontColor="white",this.result=null,this.qualified=0},drawCircle:function(t,e){t.setStrokeStyle("black"),t.setLineWidth(2),t.arc(85,90,70,0,2*Math.PI),t.setFillStyle(e),t.fill(),t.stroke(),t.draw()},drawRectangle:function(t,e){t.rect(10,45,155,85),t.setFillStyle(e),t.fill(),t.stroke(),t.draw()},drawSquare:function(t,e){t.rect(20,20,135,135),t.setFillStyle(e),t.fill(),t.stroke(),t.draw()},drawTriangle:function(t,e){t.moveTo(90,30),t.lineTo(10,90),t.lineTo(165,90),t.lineTo(90,30),t.setFillStyle(e),t.fill(),t.stroke(),t.draw()},drawRegularPolygon:function(t,e){var i=Math.ceil(Math.random()*this.chineseShapeList.length)+4;return this.createPolygonPath(this.canvasWidth/4,this.canvasHeight/4,this.canvasWidth/6,i,0,t),t.setFillStyle(e),t.fill(),t.stroke(),t.draw(),i},createPolygonPath:function(t,e,i,a,n,r){var s=this.getPolygonPoints(t,e,i,a,n);r.beginPath(),r.moveTo(s[0].x,s[0].y);for(var h=0;h<a;++h)r.lineTo(s[h].x,s[h].y);r.closePath()},getPolygonPoints:function(t,e,a,n,r){for(var s=function t(e,a){i(this,t),this.x=e,this.y=a},h=[],o=r||0,l=0;l<n;++l)h.push(new s(t+a*Math.sin(o),e+a*Math.cos(o))),o+=2*Math.PI/n;return h}}};e.default=a}).call(this,i("f266")["default"])},"7d5d":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement;t._self._c},r=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}))},"83df":function(t,e,i){"use strict";var a=i("91b1"),n=i.n(a);n.a},"8a99":function(t,e,i){"use strict";i.r(e);var a=i("7970"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"91b1":function(t,e,i){},f53f:function(t,e,i){"use strict";i.r(e);var a=i("7d5d"),n=i("8a99");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("83df");var s,h=i("f0c5"),o=Object(h["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);e["default"]=o.exports}},[["10f6","common/runtime","common/vendor"]]]);