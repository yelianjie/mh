(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a0ea324"],{"22fa":function(n,t,e){"use strict";e("68ef"),e("cb51"),e("3743"),e("e3b3"),e("bc1b")},"8af0":function(n,t){n.exports="// 挖图脚本\nauto();\n\nconst {findTextAndClick,loopFunction,isHasImageTemplate,isFighting,randomClick,clickImageTemplate,hasText,findTextRect} = require('/sdcard/mh/templateImages/util.js')\ntoastLog('挖图脚本执行中...')\n\nwhile(true){\n  if(isFighting()){\n    log('战斗中...')\n    sleep(5000)\n  }\n  sleep(500)\n  var res = loopFunction(function(){\n    sleep(1000)\n    return findTextAndClick('使用',{region:'rightBottomHalf'})\n  },55)\n  if(!res){\n    // 由于加图片得更新包，后续再更新用图片找使用功能\n    // var res3 = loopFunction(function(){\n    //   return clickImageTemplate('shiYong.jpg',{region:'rightBottomHalf'})\n    // },12)\n    // if(!res3){\n    // }\n    break\n  }\n}\ntoastLog('挖图脚本执行结束')\n"},"9bdd":function(n,t,e){},a870:function(n,t,e){"use strict";e("9bdd")},bf5d:function(n,t,e){n.exports=e.p+"img/waTu.58b286d0.jpg"},d1ba:function(n,t,e){"use strict";e.r(t);var o=e("2e1b"),c=(e("22fa"),e("7a23")),i=e("bf5d"),r=e.n(i),a=function(n){return Object(c["pushScopeId"])("data-v-22ca1f7a"),n=n(),Object(c["popScopeId"])(),n},u={class:"container"},l=a((function(){return Object(c["createElementVNode"])("h3",null,"使用前置：",-1)})),f=a((function(){return Object(c["createElementVNode"])("p",null,"1、进入本页面，点击【开始执行】(确定要运行的脚本)",-1)})),d=a((function(){return Object(c["createElementVNode"])("p",null,"2、启动梦幻西游手游app",-1)})),s=a((function(){return Object(c["createElementVNode"])("p",null,"3、进入游戏点击普通宝图，等到弹出【使用】",-1)})),p=a((function(){return Object(c["createElementVNode"])("img",{src:r.a},null,-1)})),b=a((function(){return Object(c["createElementVNode"])("p",null,"4、点击悬浮窗口【开始】按钮即可",-1)})),m=Object(c["createTextVNode"])(" 开始执行 ");function g(n,t,e,i,r,a){var g=o["a"];return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",u,[l,f,d,s,p,b,Object(c["createVNode"])(g,{round:"",block:"",onClick:a.startNow,type:"primary","native-type":"submit"},{default:Object(c["withCtx"])((function(){return[m]})),_:1},8,["onClick"])])}var k={data:function(){return{model:{}}},mounted:function(){},unmounted:function(){},methods:{startNow:function(){auto.invoke("runRobotNow",[{robot:e("89c7")}],(function(){auto.invoke("runRobot",[{robot:e("8af0")}],(function(){}))}))},stop:function(){auto.invoke("robotStop",[],(function(){}))}}},j=(e("a870"),e("d959")),h=e.n(j);const O=h()(k,[["render",g],["__scopeId","data-v-22ca1f7a"]]);t["default"]=O}}]);