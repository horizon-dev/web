(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=(a(21),a(22),a(7)),m=(a(8),a(12),a(2)),s=a(4),l=a(10);a(26);var u="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/",h=u+"mars-map.jpg",w=u+"mars-bump.jpg";new m.a("white"),new m.a("blue"),new m.a("brown"),new m.a("red");function p(){var e=new Uint8Array(3e4),t=new m.b(e,100,100,m.e);t.needsUpdate=!0;var a=Object(n.useRef)(),o=Object(n.useRef)(),c=0,u=0;Object(s.e)(function(){var e=c+=.0015;a.current.rotation.set(0,e,0);var t=new Date;t.getSeconds()!==u&&(u=t.getSeconds())});var p=new m.g,f=Object(n.useMemo)(function(){return[p.load(h),p.load(w)]},[h,w]),g=Object(i.a)(f,2),d=g[0],b=g[1];return r.a.createElement("group",{ref:a},r.a.createElement(l.a.mesh,{position:[0,0,0]},r.a.createElement("sphereGeometry",{attach:"geometry",args:[2,32,32]}),r.a.createElement("meshPhongMaterial",{attach:"material",map:d,bumpMap:b,bumpScale:8})),r.a.createElement(l.a.mesh,{position:[0,0,0]},r.a.createElement("sphereGeometry",{attach:"geometry",args:[2,32,32]}),r.a.createElement(l.a.meshPhongMaterial,{attach:"material",ref:o,map:t,opacity:.2,transparent:!0})))}function f(){var e=Object(n.useRef)(),t=0;Object(s.e)(function(){var a=5*Math.sin(m.c.degToRad(t+=.005));e.current.rotation.set(0,a,0)});var a=Object(n.useMemo)(function(){var e=new m.f(.4,10,10),t=new m.d({color:new m.a("lightblue")}),a=new Array(2e3).fill().map(function(e){return[800*Math.random()-400,800*Math.random()-400,800*Math.random()-400]});return[e,t,u,a]},[]),o=Object(i.a)(a,4),c=o[0],l=o[1],u=o[2],h=o[3];return r.a.createElement("group",{ref:e},h.map(function(e,t){var a=Object(i.a)(e,3),n=a[0],o=a[1],m=a[2];return r.a.createElement("mesh",{key:t,geometry:c,material:l,position:[n,o,m]})}))}var g=function(){return r.a.createElement(s.a,{className:"Universe"},r.a.createElement("ambientLight",{color:"white"}),r.a.createElement("pointLight",{color:"white",intensity:.05,position:[10,10,10]}),r.a.createElement(p,null),r.a.createElement(f,null))};a(28);var d=function(){return r.a.createElement("div",{className:"Logo"},"horizon")};a(29);a(30);var b=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,4),a=t[0],o=(t[1],t[2]),c=(t[3],Object(n.useRef)());return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(g,{ref:c,showRegions:a,showDrones:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.3d8e4276.chunk.js.map