(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"33f1":function(t,o,i){"use strict";i.r(o);var n=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[i("q-card",{staticClass:"my-card"},[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("\n        GPS position:"),i("strong",[t._v(t._s(t.position))])]),i("div",{staticClass:"text-subtitle2"},[t._v("\n        latitude: "),i("strong",[t._v(t._s(t.latitude))])]),i("div",{staticClass:"text-subtitle2"},[t._v("\n        longitude: "),i("strong",[t._v(" "+t._s(t.longitude))])])])],1)],1)},e=[],s=i("81c3"),l=s["a"].Geolocation,u={data:function(){return{position:"determining...",latitude:"loading...",longitude:"loading..."}},methods:{getCurrentPosition:function(){var t=this;l.getCurrentPosition().then((function(o){t.position="Your current position",t.latitude=o.coords.latitude,t.longitude=o.coords.longitude,console.log("Current",o),console.log(t.latitude),console.log(t.longitude)}))}},mounted:function(){var t=this;this.getCurrentPosition(),this.geoId=l.watchPosition({},(function(o,i){console.log("New GPS position"),t.position="Your current position",t.latitude=o.coords.latitude,t.longitude=o.coords.longitude}))},beforeDestroy:function(){l.clearWatch(this.geoId)}},r=u,a=i("2877"),d=Object(a["a"])(r,n,e,!1,null,null,null);o["default"]=d.exports}}]);