(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b55fc9f"],{"22fa":function(n,e,t){"use strict";t("68ef"),t("cb51"),t("3743"),t("e3b3"),t("bc1b")},"7abe":function(n,e,t){"use strict";t.r(e);var i=t("2e1b"),a=(t("22fa"),t("7a23")),o={class:"home"},s={class:"list"},r=["onClick"],g={key:0},l=Object(a["createTextVNode"])("测试按钮");function c(n,e,t,c,p,u){var m=i["a"];return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createElementVNode"])("div",s,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(p.list,(function(n){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])("item "+n.class),onClick:function(e){return u.goPage(n)}},Object(a["toDisplayString"])(n.title),11,r)})),256))]),p.isDev?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[Object(a["createVNode"])(m,{class:"item",type:"primary",block:"",onClick:u.handleTest},{default:Object(a["withCtx"])((function(){return[l]})),_:1},8,["onClick"])])):Object(a["createCommentVNode"])("",!0)])}t("e9c4");var p=t("c0d6"),u=t("2849"),m={methods:{},mounted:function(){var n=["bxxz.jpg","changAnCheng.png","commonBtn.jpg","fighting.jpg","fighting2.jpg","fuBengFight.jpg","guaji.jpg","huodong.png","isFight.jpg","jingRu.jpg","lingQuRenWu.jpg","mengPaiChuangGuan.jpg","qiang.jpg","renwu.jpg","sample.jpg","sample2.jpg","sample3.jpg","sample4.jpg","sample5.jpg","shiYong.jpg","tiaoguo.jpg","xhao.jpg","xhao2.jpg","xhao3.jpg","xuanZheFuBen.jpg","xuanZheFuBen2.jpg","xx.png","xz.png","ytg.jpg","yueBing.jpg","zgrw.png","zhongQiuYueBing.jpg","zhongkui.jpg","zhongkui_kui.jpg","zhongkui_zhong.jpg"];auto.invoke("runRobotNow",[{robot:t("7feb"),params:{imgs:n}}],(function(){log("ajFun1 回调:")}))}},h={data:function(){return{version:"0.7.2",isShowDialog:!1,store:p["a"],list:[{route:"fiveBen",class:"bg-mauve",title:"自动3、5本",icon:"van-icon-chat-o"},{route:"zhuagui",class:"bg-cyan",title:"自动捉鬼",icon:"van-icon-chat-o"},{route:"mengPai",class:"bg-black",title:"门派",icon:"van-icon-chat-o"},{route:"yueBing",class:"bg-orange",title:"抢月饼",icon:"van-icon-chat-o"},{route:"zhaoHuangLing",class:"bg-purple",title:"周三召唤灵",icon:"van-icon-chat-o"},{route:"paTa",class:"bg-purple",title:"周五爬塔",icon:"van-icon-chat-o"},{route:"qiang",class:"bg-cyan",title:"抢铅",icon:"van-icon-chat-o"},{route:"waTu",class:"bg-pink",title:"挖普通图",icon:"van-icon-chat-o"},{route:"xingGuang",class:"bg-blue",title:"星官、地煞倒计时",icon:"van-icon-chat-o"}],isDev:!0}},components:{Dialog:u["a"]},mixins:[m],mounted:function(){var n=this,e=JSON.parse(localStorage.getItem("versionInfo")||"{}");e.version!==this.version&&(this.isShowDialog=!0,u["a"].alert({title:"".concat(this.version,"功能"),message:"1. 修复门派点击无法自动执行问题 \n注意：历史首次进入需要下载文件，请耐心等待1分钟。",theme:"round-button"}).then((function(){localStorage.setItem("versionInfo",JSON.stringify({version:n.version}))}))),this.isDev=!1},methods:{goPage:function(n){this.$router.push({name:n.route})},handleTest:function(){console.log("点击测试脚本"),auto.invoke("runRobotNow",[{robot:t("a51c")}],(function(){}))},handleYueBing:function(){console.log("抢月饼"),auto.invoke("runRobotNow",[{robot:t("89c7")}],(function(){auto.invoke("runRobot",[{robot:t("7ff2")}],(function(){}))}))}}},d=(t("803b"),t("d959")),f=t.n(d);const v=f()(h,[["render",c]]);e["default"]=v},"7feb":function(n,e){n.exports="auto();\n\n\nvar params = global.WEB_PARAMS.params\nvar imgs = params.imgs;\n\nvar prop = 'imagesInfo'\nvar storage = storages.create(prop);\n\nvar storageObj = JSON.parse(storage.get('imagesList') || '{}');\nvar imgsData = storageObj.imgs || [];\n\nvar savePath = '/sdcard/mh/templateImages/'\n\nfiles.ensureDir(savePath)\n\n\n// 如果是第一次进来 并且 图片数量不一致 需要重新同步一下数据\n\nvar prefixUrl = 'https://www.xiaye0.com/mh/templateImages/images/'\n\nfor(var i = 0;i<imgs.length;i++){\n  var img = imgs[i];\n  if(files.exists(savePath + img)){\n    log('图片已存在')\n    continue\n  }\n  log('开始下载图片',img)\n  var url = prefixUrl + img;\n  var loadImg = images.load(url);\n  if(loadImg){\n    images.save(loadImg,savePath + img)\n    imgsData.push(img)\n  }\n}\nvar data = {\n  imgs: imgsData\n}\nstorage.put('imagesList', JSON.stringify(data));\n\n\n\n// 重置工具类\nvar url = \"https://www.xiaye0.com/mh/templateImages/util.js\";\nvar res = http.get(url);\nif (res.statusCode != 200) {\n    toast(\"请求失败\");\n}else{\n  files.writeBytes(savePath + 'util.js', res.body.bytes());\n}\n"},"7ff2":function(n,e){n.exports="auto()\n\nconst {findTextAndClick,clickRect,pressRect,clickImagePoint,findImageTemplatePoint,clickImageTemplate,findTextRect,hasText} = require('/sdcard/mh/templateImages/util.js')\n\nlet buyFirstPoint = {},\nbuySecondPoint = {},\nzhongQiuYueBingPoint = {},\nyueBingPoint = {}\nwhile(true){\n  let res = findTextAndClick('梦幻');\n  sleep(120)\n  if(res){\n    if(buyFirstPoint.bounds){\n      // console.log(buyFirstPoint,'buyFirstPoint')\n      pressRect(buyFirstPoint)\n    }else{\n      let pointArr = findTextRect('购买');\n      buyFirstPoint = pointArr[1]\n      pressRect(buyFirstPoint)\n    }\n    sleep(90);\n    if(buySecondPoint.bounds){\n      // console.log(buySecondPoint,'buySecondPoint')\n      pressRect(buySecondPoint)\n    }else{\n      let arr = findTextRect('购买');\n      buySecondPoint = arr[1]\n      pressRect(buySecondPoint)\n    }\n    sleep(120)\n  }else{\n    if(zhongQiuYueBingPoint.x){\n      clickImagePoint(zhongQiuYueBingPoint)\n    }else{\n      zhongQiuYueBingPoint = findImageTemplatePoint('zhongQiuYueBing.jpg',{\n        region:'rightTopHalf'\n      })\n      clickImagePoint(zhongQiuYueBingPoint)\n    }\n    sleep(100)\n    if(yueBingPoint.x){\n      clickImagePoint(yueBingPoint)\n    }else{\n      yueBingPoint = findImageTemplatePoint('yueBing.jpg',{\n        region:'rightTopHalf'\n      })\n      clickImagePoint(yueBingPoint)\n    }\n  }\n}\n"},"803b":function(n,e,t){"use strict";t("d626")},a51c:function(n,e){n.exports="auto();\nconst {findTextAndClick,gmlkitOcr,findImageTemplatePoint,randomClick,clickImageTemplate,findTextRect,hasText} = require('/sdcard/mh/templateImages/util.js')\n\n\n\nif(hasText('少侠已经') || hasText('已经捉完') || hasText('1轮鬼')){\n  log(111)\n}\n// var h = device.height;\n// var w = device.width;\n// setScreenMetrics(w,h);\n// log('h:',h,w)\n// var ratioX = device.width/1080\n// var ratioY = device.height/2400\n// log(ratioX,ratioY)\n\n// log(111)\n// let originImg = images.read(\"./images/sample5.jpg\")\n// // let img = images.grayscale(originImg)\n\n// // let findArr = gmlkitOcr(img,{region:''})\n// // log(JSON.stringify(findArr))\n// var temp = images.read(`./images/xuanZheFuBen.jpg`);\n// // const point = images.matchTemplate(originImg,temp,{\n// //     max:3\n// // })\n\n// var originImg = images.read(`./images/sample5.jpg`);\n// // var imgWidth = temp.getWidth(),imgHeight = temp.getHeight();\n// var hRatio = 2460 / 2400;\n// var wRatio = 1080 / 1080;\n// var smallTemp = images.scale(temp,wRatio,hRatio)\n\n// let p = findImage(originImg,smallTemp);\n// // var p = findImage(originImg,temp)\n// log(p)\n\n// const pointArr = [];\n// let map = new Map();\n\n// point.points.forEach(item => {\n//     if(!map.has(item.x + ',' + item.y)){\n//         map.set(item.x + ',' + item.y, true);\n//     }\n// });\n\n// let uniqueArray = Array.from(map.keys()).map(key => {\n//     return {x: parseFloat(key.split(',')[0]), y: parseFloat(key.split(',')[1])}\n// });\n// log(uniqueArray)\n\n\n// function warp(callback){\n//     for(let i = 0;i<10;i++){\n//         callback()\n//         log(i)\n//         if(i === 5){\n//             global.robotStop()\n//             break;\n//         }\n//     }\n// }\n\n// warp(function(){\n//     sleep(2000)\n//     log(666)\n// })\n\n// 新增：自定义模型路径(必须是绝对路径), files.path() 将相对路径转为绝对路径\n// let myModelPath = files.path(\"./models\");\n// 识别图片中的文字，返回完整识别信息（兼容百度OCR格式）。\n// let result = paddle.ocr(img, myModelPath)\n// log(\"完整识别信息: \" + JSON.stringify(result))\n// // 识别图片中的文字，只返回文本识别信息（字符串列表）。当前版本可能存在文字顺序错乱的问题 建议先使用detect后自行排序\n// const stringList = paddle.ocrText(img, myModelPath)\n// log(\"文本识别信息: \" + JSON.stringify(stringList))\n// let resultGml = gmlkit.ocr(img,'zh')\n// log(JSON.stringify(resultGml),'gmlkit')\n// let arr = JSON.parse(JSON.stringify(resultGml));\n// let findArray = []\n// arr.children.forEach(item =>{\n//   if(item.text.indexOf('百') >= 0){\n//     findArray.push(item)\n//   }\n// })\n// log(findArray)\n// // 回收图片\n// img.recycle()\n//长距离测试\n// function swipeUp () {\n//     var a = device.width;\n//     var b = device.height;\n//     swipe(a * 0.5, b * 0.8, a * 0.5, b * 0.2, 500);\n// }\n\n\n// var isClockIn = false\n// function clickClockIn(){\n//     if(hasText('上班打卡')){\n//         findTextAndClick('上班打卡')\n//         sleep(800)\n//         if(hasText('打卡成功')){\n//             toastLog('打卡成功')\n//         }else{\n//             toastLog('打卡失败')\n//         }\n//     }else{\n//         isClockIn = true\n//         log('已打卡啦！')\n//     }\n// }\n\n// // device.keepScreenDim(365 * 24 * 3600 * 1000)\n// function clockIn(){\n//     if(!device.isScreenOn()){\n//         device.wakeUp();\n//         sleep(1000)\n//         var a = device.width;\n//         var b = device.height;\n//         swipe(a * 0.5, b * 0.5, a * 0.5, b * 0.2, 500);\n\n//         var password = \"00000\"  //这里输入你手机的密码\n//         for(var i = 0; i < password.length; i++){\n//             var p = text(password[i].toString()).findOne().bounds();\n//             click(p.centerX(), p.centerY());\n//             sleep(100);\n//         }\n//     }\n//     sleep(1000)\n//     launchApp('飞书')\n//     if(hasText('考勤规则')){\n//         clickClockIn()\n//         // global.robotStop()\n//     }\n//     sleep(1000)\n//     var time = 0\n//     while(!hasText('工作台') && time < 5){\n//         back()\n//         log('未找到工作台')\n//         sleep(2000)\n//         time++\n//     }\n//     click('工作台')\n//     sleep(1000)\n//     if(hasText('假勤')){\n//         click('假勤')\n//     }else{\n//         swipeUp()\n//         sleep(1000)\n//         click('假勤')\n//     }\n//     sleep(3000)\n//     clickClockIn()\n// }\n\n// var interval = setInterval(function(){\n//     var date = new Date()\n//     if(date.getHours() == 14 && date.getMinutes() == 17){\n//         clockIn()\n//     }\n//     if(isClockIn){\n//         log('已打卡，清除自执行')\n//         clearInterval(interval) \n//     }\n// },10 * 1000)\n\n"},d626:function(n,e,t){}}]);