(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a91b0090"],{"057f":function(t,n,e){var r=e("c6b6"),o=e("fc6a"),i=e("241c").f,c=e("4dae"),f="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(n){return c(f)}};t.exports.f=function(t){return f&&"Window"==r(t)?u(t):i(o(t))}},"0b42":function(t,n,e){var r=e("e8b5"),o=e("68ee"),i=e("861d"),c=e("b622"),f=c("species"),u=Array;t.exports=function(t){var n;return r(t)&&(n=t.constructor,o(n)&&(n===u||r(n.prototype))?n=void 0:i(n)&&(n=n[f],null===n&&(n=void 0))),void 0===n?u:n}},"159b":function(t,n,e){var r=e("da84"),o=e("fdbc"),i=e("785a"),c=e("17c2"),f=e("9112"),u=function(t){if(t&&t.forEach!==c)try{f(t,"forEach",c)}catch(n){t.forEach=c}};for(var a in o)o[a]&&u(r[a]&&r[a].prototype);u(i)},"17c2":function(t,n,e){"use strict";var r=e("b727").forEach,o=e("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),i=e("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"22fa":function(t,n,e){"use strict";e("68ef"),e("cb51"),e("3743"),e("e3b3"),e("bc1b")},"3d87":function(t,n,e){var r=e("4930");t.exports=r&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,n,e){var r=e("da84");t.exports=r},"4dae":function(t,n,e){var r=e("23cb"),o=e("07fa"),i=e("8418"),c=Array,f=Math.max;t.exports=function(t,n,e){for(var u=o(t),a=r(n,u),s=r(void 0===e?u:e,u),b=c(f(s-a,0)),d=0;a<s;a++,d++)i(b,d,t[a]);return b.length=d,b}},"4de4":function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").filter,i=e("1dde"),c=i("filter");r({target:"Array",proto:!0,forced:!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("159b"),e("dbb4");function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}},"57b9":function(t,n,e){var r=e("c65b"),o=e("d066"),i=e("b622"),c=e("cb2d");t.exports=function(){var t=o("Symbol"),n=t&&t.prototype,e=n&&n.valueOf,f=i("toPrimitive");n&&!n[f]&&c(n,f,(function(t){return r(e,this)}),{arity:1})}},"5a47":function(t,n,e){var r=e("23e7"),o=e("4930"),i=e("d039"),c=e("7418"),f=e("7b0b"),u=!o||i((function(){c.f(1)}));r({target:"Object",stat:!0,forced:u},{getOwnPropertySymbols:function(t){var n=c.f;return n?n(f(t)):[]}})},"63df":function(t,n,e){"use strict";e.r(n);var r=e("2e1b"),o=(e("22fa"),e("7a23")),i=Object(o["createTextVNode"])(" 开始抢铅 ");function c(t,n,e,c,f,u){var a=r["a"];return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(a,{round:"",block:"",onClick:u.startNow,type:"primary","native-type":"submit"},{default:Object(o["withCtx"])((function(){return[i]})),_:1},8,["onClick"])])}var f=e("5530"),u=(e("e9c4"),{data:function(){return{model:{}}},mounted:function(){},unmounted:function(){console.log("保存页面上的数据"),localStorage.VUE_DOUYIN=JSON.stringify(this.model)},methods:{startNow:function(){var t=this;auto.invoke("runRobotNow",[{robot:e("89c7")}],(function(){auto.invoke("runRobot",[Object(f["a"])({robot:e("ed2f")},t.model)],(function(){}))}))}}}),a=e("d959"),s=e.n(a);const b=s()(u,[["render",c]]);n["default"]=b},"65f0":function(t,n,e){var r=e("0b42");t.exports=function(t,n){return new(r(t))(0===n?0:n)}},"746f":function(t,n,e){var r=e("428f"),o=e("1a2d"),i=e("e538"),c=e("9bf2").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},8418:function(t,n,e){"use strict";var r=e("a04b"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},a4d3:function(t,n,e){e("d9f5"),e("b4f8"),e("c513"),e("e9c4"),e("5a47")},b4f8:function(t,n,e){var r=e("23e7"),o=e("d066"),i=e("1a2d"),c=e("577e"),f=e("5692"),u=e("3d87"),a=f("string-to-symbol-registry"),s=f("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var n=c(t);if(i(a,n))return a[n];var e=o("Symbol")(n);return a[n]=e,s[e]=n,e}})},b64b:function(t,n,e){var r=e("23e7"),o=e("7b0b"),i=e("df75"),c=e("d039"),f=c((function(){i(1)}));r({target:"Object",stat:!0,forced:f},{keys:function(t){return i(o(t))}})},b727:function(t,n,e){var r=e("0366"),o=e("e330"),i=e("44ad"),c=e("7b0b"),f=e("07fa"),u=e("65f0"),a=o([].push),s=function(t){var n=1==t,e=2==t,o=3==t,s=4==t,b=6==t,d=7==t,l=5==t||b;return function(p,y,g,v){for(var h,m,P=c(p),O=i(P),w=r(y,g),j=f(O),S=0,x=v||u,k=n?x(p,j):e||d?x(p,0):void 0;j>S;S++)if((l||S in O)&&(h=O[S],m=w(h,S,P),t))if(n)k[S]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:a(k,h)}else switch(t){case 4:return!1;case 7:a(k,h)}return b?-1:o||s?s:k}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},c513:function(t,n,e){var r=e("23e7"),o=e("1a2d"),i=e("d9b5"),c=e("0d51"),f=e("5692"),u=e("3d87"),a=f("symbol-to-string-registry");r({target:"Symbol",stat:!0,forced:!u},{keyFor:function(t){if(!i(t))throw TypeError(c(t)+" is not a symbol");if(o(a,t))return a[t]}})},d9f5:function(t,n,e){"use strict";var r=e("23e7"),o=e("da84"),i=e("c65b"),c=e("e330"),f=e("c430"),u=e("83ab"),a=e("4930"),s=e("d039"),b=e("1a2d"),d=e("3a9b"),l=e("825a"),p=e("fc6a"),y=e("a04b"),g=e("577e"),v=e("5c6c"),h=e("7c73"),m=e("df75"),P=e("241c"),O=e("057f"),w=e("7418"),j=e("06cf"),S=e("9bf2"),x=e("37e8"),k=e("d1e7"),E=e("cb2d"),R=e("5692"),B=e("f772"),T=e("d012"),A=e("90e3"),F=e("b622"),I=e("e538"),N=e("746f"),D=e("57b9"),C=e("d44e"),Q=e("69f3"),Y=e("b727").forEach,z=B("hidden"),J="Symbol",V="prototype",q=Q.set,U=Q.getterFor(J),_=Object[V],L=o.Symbol,M=L&&L[V],W=o.TypeError,G=o.QObject,H=j.f,K=S.f,X=O.f,Z=k.f,$=c([].push),tt=R("symbols"),nt=R("op-symbols"),et=R("wks"),rt=!G||!G[V]||!G[V].findChild,ot=u&&s((function(){return 7!=h(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=H(_,n);r&&delete _[n],K(t,n,e),r&&t!==_&&K(_,n,r)}:K,it=function(t,n){var e=tt[t]=h(M);return q(e,{type:J,tag:t,description:n}),u||(e.description=n),e},ct=function(t,n,e){t===_&&ct(nt,n,e),l(t);var r=y(n);return l(e),b(tt,r)?(e.enumerable?(b(t,z)&&t[z][r]&&(t[z][r]=!1),e=h(e,{enumerable:v(0,!1)})):(b(t,z)||K(t,z,v(1,{})),t[z][r]=!0),ot(t,r,e)):K(t,r,e)},ft=function(t,n){l(t);var e=p(n),r=m(e).concat(dt(e));return Y(r,(function(n){u&&!i(at,e,n)||ct(t,n,e[n])})),t},ut=function(t,n){return void 0===n?h(t):ft(h(t),n)},at=function(t){var n=y(t),e=i(Z,this,n);return!(this===_&&b(tt,n)&&!b(nt,n))&&(!(e||!b(this,n)||!b(tt,n)||b(this,z)&&this[z][n])||e)},st=function(t,n){var e=p(t),r=y(n);if(e!==_||!b(tt,r)||b(nt,r)){var o=H(e,r);return!o||!b(tt,r)||b(e,z)&&e[z][r]||(o.enumerable=!0),o}},bt=function(t){var n=X(p(t)),e=[];return Y(n,(function(t){b(tt,t)||b(T,t)||$(e,t)})),e},dt=function(t){var n=t===_,e=X(n?nt:p(t)),r=[];return Y(e,(function(t){!b(tt,t)||n&&!b(_,t)||$(r,tt[t])})),r};a||(L=function(){if(d(M,this))throw W("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,n=A(t),e=function(t){this===_&&i(e,nt,t),b(this,z)&&b(this[z],n)&&(this[z][n]=!1),ot(this,n,v(1,t))};return u&&rt&&ot(_,n,{configurable:!0,set:e}),it(n,t)},M=L[V],E(M,"toString",(function(){return U(this).tag})),E(L,"withoutSetter",(function(t){return it(A(t),t)})),k.f=at,S.f=ct,x.f=ft,j.f=st,P.f=O.f=bt,w.f=dt,I.f=function(t){return it(F(t),t)},u&&(K(M,"description",{configurable:!0,get:function(){return U(this).description}}),f||E(_,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,constructor:!0,wrap:!0,forced:!a,sham:!a},{Symbol:L}),Y(m(et),(function(t){N(t)})),r({target:J,stat:!0,forced:!a},{useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:ut,defineProperty:ct,defineProperties:ft,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:bt}),D(),C(L,J),T[z]=!0},dbb4:function(t,n,e){var r=e("23e7"),o=e("83ab"),i=e("56ef"),c=e("fc6a"),f=e("06cf"),u=e("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var n,e,r=c(t),o=f.f,a=i(r),s={},b=0;while(a.length>b)e=o(r,n=a[b++]),void 0!==e&&u(s,n,e);return s}})},e439:function(t,n,e){var r=e("23e7"),o=e("d039"),i=e("fc6a"),c=e("06cf").f,f=e("83ab"),u=o((function(){c(1)})),a=!f||u;r({target:"Object",stat:!0,forced:a,sham:!f},{getOwnPropertyDescriptor:function(t,n){return c(i(t),n)}})},e538:function(t,n,e){var r=e("b622");n.f=r},ed2f:function(t,n){t.exports="auto()\n\nconst {findTextAndClick,clickRect,pressRect,clickImagePoint,findImageTemplatePoint,clickImageTemplate,findTextRect,hasText} = require('/sdcard/mh/templateImages/util.js')\n\ntoastLog('开始抢铅了!!!')\nsleep(2000)\nlet buyFirstPoint = {},\nbuySecondPoint = {},\nzhongQiuYueBingPoint = {},\nyueBingPoint = {}\nwhile(true){\n  let res = findTextAndClick('铅');\n  sleep(120)\n  if(res){\n    if(buyFirstPoint.bounds){\n      // console.log(buyFirstPoint,'buyFirstPoint')\n      pressRect(buyFirstPoint)\n    }else{\n      let pointArr = findTextRect('购买');\n      buyFirstPoint = pointArr[1]\n      pressRect(buyFirstPoint)\n    }\n    sleep(300);\n    if(buySecondPoint.bounds){\n      // console.log(buySecondPoint,'buySecondPoint')\n      pressRect(buySecondPoint)\n    }else{\n      let arr = findTextRect('购买');\n      buySecondPoint = arr[1]\n      pressRect(buySecondPoint)\n    }\n    sleep(120)\n  }else{\n    if(zhongQiuYueBingPoint.bounds){\n      pressRect(zhongQiuYueBingPoint)\n    }else{\n      let pointArr2 = findTextRect('采矿')\n      log(pointArr2,'pointArr2')\n      zhongQiuYueBingPoint = pointArr2[0]\n      pressRect(zhongQiuYueBingPoint)\n    }\n    sleep(100)\n    if(yueBingPoint.bounds){\n      clickImagePoint(yueBingPoint);\n    }else{\n      yueBingPoint = findImageTemplatePoint('qiang.jpg')\n      clickImagePoint(yueBingPoint)\n    }\n    sleep(100);\n  }\n}\n"}}]);