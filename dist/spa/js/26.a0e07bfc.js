(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{2639:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"constrain-more q-pa-md"},[e("div",{staticClass:"camera-frame q-pa-md"},[[e("div",{staticClass:"q-pa-md"},[e("q-video",{attrs:{ratio:16/9,title:"Video Streaming Box",src:""}})],1)]],2),e("q-btn",{attrs:{label:"Stream"},on:{click:t.startStream}})],1)},o=[],s=e("bc3a"),c=e.n(s),i=(e("5638"),{name:"PageStream",methods:{startStream:function(){var t="http://localhost:8012/api/v1/",a={signal_data:"signal from the vue application"};c.a.post(t+"video/call",a).then((function(t){console.log(" RESPONSE FROM VIDEO API ::"),console.log("VIDEO API :: END")})).catch((function(t){console.log(t)}))}},mounted:function(){}}),l=i,r=e("2877"),m=Object(r["a"])(l,n,o,!1,null,"39a70769",null);a["default"]=m.exports}}]);