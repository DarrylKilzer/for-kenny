(function(e){function t(t){for(var r,n,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)n=i[u],a[n]&&m.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,n=1;n<o.length;n++){var i=o[n];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({room:"room"}[e]||e)+"."+{room:"03756140"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={room:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise(function(t,o){for(var r="css/"+({room:"room"}[e]||e)+"."+{room:"c79cc659"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.request=r,delete n[e],d.parentNode.removeChild(d),o(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){n[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,o){r=a[e]=[t,o]});t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),l=function(t){u.onerror=u.onload=null,clearTimeout(m);var o=a[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");s.type=r,s.request=n,o[1](s)}a[e]=void 0}};var m=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var d=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("64a9"),n=o.n(r);n.a},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),o("router-view")],1)},a=[],s=(o("034f"),o("2877")),i={},c=Object(s["a"])(i,n,a,!1,null,null,null),l=c.exports,u=o("8c4f"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home container-fluid"},[o("rooms")],1)},d=[],p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"rooms"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6"},[o("h1",{staticClass:"col-12"},[e._v("Create a Room")]),o("div",{staticClass:"input-group mb-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Room Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:e.createRoom}},[e._v("\n            Create\n            Room\n          ")])])])]),o("div",{staticClass:"col-6"},[o("div",{staticClass:"row px-3"},[o("h1",{staticClass:"col-12"},[e._v("Rooms")]),e._l(e.rooms,function(t){return o("div",{key:t.id,staticClass:"col-12 border border-secondary rounded"},[o("h3",{on:{click:function(o){return e.$router.push({name:"chatroom",params:{roomId:t.id}})}}},[e._v(e._s(t.name))])])})],2)])])])},h=[],f={name:"rooms",data(){return{name:""}},mounted(){this.$store.dispatch("getRooms")},computed:{rooms(){return this.$store.state.rooms}},methods:{createRoom(){this.$store.dispatch("createRoom",{name:this.name})}},components:{}},v=f,g=Object(s["a"])(v,p,h,!1,null,"d0a33d1a",null),b=g.exports,y={name:"home",components:{Rooms:b}},w=y,C=Object(s["a"])(w,m,d,!1,null,null,null),_=C.exports;r["a"].use(u["a"]);var R=new u["a"]({routes:[{path:"/",name:"home",component:_},{path:"/rooms/:roomId",name:"chatroom",component:function(){return o.e("room").then(o.bind(null,"bf48"))}}]}),x=o("2f62"),j={apiKey:"AIzaSyBKW3sLNmi_bAi4xpn7N9f2g6EI-Q1lo0I",authDomain:"boisecodecampchat.firebaseapp.com",databaseURL:"https://boisecodecampchat.firebaseio.com",projectId:"boisecodecampchat",storageBucket:"boisecodecampchat.appspot.com",messagingSenderId:"1066655715693"},S=o("59ca"),E=o.n(S);o("e71f");const k=E.a.initializeApp(j),O=k.firestore();var P=O,I=o("bc3a"),T=o.n(I);r["a"].use(x["a"]);let L=T.a.create({baseURL:"https://uinames.com/api/?amount=1&ext&region=United States"});var N=new x["a"].Store({state:{user:{},chatRoom:{},rooms:[],listener:function(){}},mutations:{setUser(e,t){e.user=t},setChatroom(e,t){e.chatRoom=t},setRooms(e,t){e.rooms=t},setListener(e,t){e.listener(),e.listener=t}},actions:{getRooms({commit:e,dispatch:t}){e("setListener",P.collection("rooms").onSnapshot(t=>{let o=[];t.forEach(e=>{let t=e.data();t.id=e.id,o.push(t)}),e("setRooms",o)}))},createRoom({commit:e,dispatch:t},o){P.collection("rooms").add(o).then(e=>{console.log("successfully created room",e),R.push({name:"chatroom",params:{roomId:e.id}})}).catch(e=>{console.error(e)})},connectToRoom({commit:e,dispatch:t},o){e("setListener",P.collection("rooms").doc(o.id).onSnapshot(t=>{let r=t.data();r.id=t.id,P.collection("rooms").doc(o.id).collection("messages").orderBy("time","desc").limit(10).onSnapshot(t=>{r.messages=[],t.forEach(e=>{let t=e.data();r.messages.push(t)}),r.messages.sort((e,t)=>{return e.time-t.time>0?1:-1}),e("setChatroom",r)})}))},sendMessage({commit:e,dispatch:t},o){P.collection("rooms").doc(o.roomId).collection("messages").add(o.message).then(e=>{console.log(e)})},login({commit:e}){L.get("").then(t=>{e("setUser",t.data),console.log(t.data.region)}).catch(e=>{console.error(e)})}}});r["a"].config.productionTip=!1,new r["a"]({router:R,store:N,mounted(){N.dispatch("login")},render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,o){}});
//# sourceMappingURL=app.68eadd24.js.map