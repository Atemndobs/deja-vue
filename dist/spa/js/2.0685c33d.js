(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"02f7":function(t,e,s){var n={"./eva-icons.js":"ae42","./fontawesome-v5-pro.js":"9f2c","./fontawesome-v5.js":"b0a2","./ionicons-v4.js":"01e2","./line-awesome.js":"5129","./material-icons-outlined.js":"f894","./material-icons-round.js":"ce94","./material-icons-sharp.js":"4459","./material-icons.js":"8c07","./mdi-v3.js":"f00f","./mdi-v4.js":"cbeb","./mdi-v5.js":"595a","./svg-material-icons.js":"78b6","./svg-mdi-v5.js":"557a","./themify.js":"fc09"};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id="02f7"},1:function(t,e){},"158d":function(t,e,s){"use strict";s("5853")},2:function(t,e){},"203b":function(t,e,s){var n={"./ar.js":"5b8b","./bg.js":"c9d2","./ca.js":"8151","./cs.js":"d6d8","./da.js":"8fc3","./de.js":"2d68","./el.js":"0945","./en-gb.js":"932d","./en-us.js":"3b69","./eo.js":"6321","./es.js":"5815","./fa-ir.js":"e9c4","./fi.js":"122a","./fr.js":"0857","./gn.js":"21d7","./he.js":"ea35","./hr.js":"6e23","./hu.js":"5f15","./id.js":"a7b6","./it.js":"6186","./ja.js":"148e","./km.js":"16a5","./ko-kr.js":"81e9","./lu.js":"8508","./lv.js":"0b80","./ml.js":"6d60","./ms.js":"77e7","./nb-no.js":"0edf","./nl.js":"3f3c","./pl.js":"d080","./pt-br.js":"4f99","./pt.js":"589a","./ro.js":"9e37","./ru.js":"27cd","./sk.js":"c8b6","./sl.js":"fb8d","./sr.js":"3d7c","./sv.js":"f9e5","./ta.js":"194c","./th.js":"3d56","./tr.js":"90c8","./uk.js":"ff58","./vi.js":"593a","./zh-hans.js":"bbca","./zh-hant.js":"74ef"};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id="203b"},"2e1e":function(t,e,s){"use strict";s("7ef0")},3:function(t,e){},4:function(t,e){},5853:function(t,e,s){},"63d0":function(t,e,s){t.exports=s.p+"img/avat_atem.79940818.png"},"7ef0":function(t,e,s){},c084:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"q-gutter-x-lg"},[n("Soundcloud",{staticClass:"q-pa-lg"}),!t.loadingSongs&&t.songs.length?n("div",{staticClass:"q-gutter-x-lg q-pa-lg"},[n("div",[n("q-media-player",{ref:"myAudio",staticStyle:{"max-width":"600px"},attrs:{type:"audio","background-color":"black",muted:t.muted,autoplay:!1,"show-big-play-button":!0,sources:this.audio.sources,radius:"0rem",dense:"",padding:"m"},on:{ended:t.onEnded},scopedSlots:t._u([t.overlay?{key:"overlay",fn:function(){return[n("div",[n("img",{staticStyle:{width:"30vw","max-width":"50px",opacity:"0.25"},attrs:{src:s("63d0")}})])]},proxy:!0}:null],null,!0)}),t.play?n("div",[n("q-spinner-audio",{attrs:{size:"md"}})],1):t._e(),n("q-space")],1),t.play?n("q-btn",{attrs:{label:"Pause","icon-right":"eva-play-circle-outline",color:"blue"},on:{click:t.control}}):n("q-btn",{attrs:{label:"Play","icon-right":"eva-pause-circle",color:"teal"},on:{click:t.control}}),n("q-btn",{attrs:{label:"next","icon-right":"eva-skip-forward-outline",color:"purple"},on:{click:function(e){return t.nextSong()}}}),n("q-btn",{attrs:{label:"Analyse","icon-right":t.ionPulse,color:"purple"},on:{click:t.upload}})],1):t.loadingSongs&&!t.songs.length?n("div",{staticClass:"q-gutter-x-lg q-pa-lg q-mt-lg-lg",staticStyle:{"max-width":"350px"}},[n("h5",{staticClass:"text-center text-grey"},[t._v("\n      No Songs Uploaded Yet...\n    ")])]):t._e(),n("div",{staticClass:"q-gutter-x-lg q-pa-lg"},[n("div",[n("q-uploader",{staticStyle:{"max-width":"350px"},attrs:{url:"https://api.next-song.app/v1/songs",label:"Max total upload size (2GB)","max-files":"100",multiple:"",batch:"","max-total-size":"2147483648",bordered:"",factory:t.factoryFn},on:{rejected:t.onRejected,click:function(e){return e.preventDefault(),t.upload(e)}}})],1)])],1)},o=[],a=(s("d81d"),s("d3b7"),s("e6cf"),s("b9b7")),i=s("06ae"),l=s("5218"),r=s("d272"),c=s("2b0e"),u=s("f7f0"),d=(s("0695"),s("bc3a")),p=s.n(d),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md row items-start q-gutter-md",staticStyle:{"max-width":"300px"}},[s("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[s("div",{staticClass:"text-overline text-orange-9 q-pa-lg",on:{click:function(e){t.showSearch=!0}}},[t._v(t._s(t.modalTitle)+"\n        "),t.showSearch?s("q-input",{attrs:{label:"search song","stack-label":"",dense:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(t.track,"")}},model:{value:t.track,callback:function(e){t.track=e},expression:"track"}}):t._e(),t._l(t.foundSongs,(function(e,n){return s("div",{staticClass:"q-pa-md q-gutter-md"},[s("q-btn",{attrs:{color:"teal",size:"sm",label:e},on:{click:function(s){return t.alternative(e)}}})],1)}))],2),s("q-img",{staticStyle:{width:"100vw","max-width":"350px",opacity:"100"},attrs:{src:t.song.thumbnail}}),s("iframe",{staticStyle:{width:"350px",height:"100px"},attrs:{width:"100%",height:"166",scrolling:"no",frameborder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&{}"}}),s("div",{staticClass:"q-gutter-x-lg q-pa-lg"},[s("div",[s("q-media-player",{ref:"myAudio",staticStyle:{"max-width":"600px"},attrs:{type:"audio","background-color":"black",muted:t.muted,autoplay:!1,"show-big-play-button":!0,sources:this.audio.sources,id:"track",radius:"0rem",dense:"",padding:"m"},on:{ended:t.onEnded}}),t.play?s("div",[s("q-spinner-audio",{attrs:{size:"md"}})],1):t._e(),s("q-space")],1),t.play?s("q-btn",{attrs:{label:"Pause","icon-right":"eva-play-circle-outline",color:"blue"},on:{click:t.control}}):s("q-btn",{attrs:{label:"Play","icon-right":"eva-pause-circle",color:"teal"},on:{click:t.control}})],1),s("q-card-section",[s("div",{staticClass:"text-overline text-teal"},[t._v(t._s(this.song))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Genre : "+t._s(this.song.genre))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Play Count : "+t._s(this.song.playCount))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Likes : "+t._s(this.song.likes))]),s("div",{staticClass:"text-caption text-grey"})]),s("q-card-actions",[s("q-btn",{attrs:{flat:"",color:"primary",label:"Details"}}),s("q-space"),s("q-btn",{attrs:{color:"grey",round:"",flat:"",dense:"",icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(e){t.expanded=!t.expanded}}})],1),s("q-slide-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}]},[s("q-separator"),s("q-card-section",{staticClass:"text-subitle2"},[s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Description : "+t._s(this.song.description))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Title : "+t._s(this.song.title))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Genre : "+t._s(this.song.genre))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Play Count : "+t._s(this.song.playCount))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Likes : "+t._s(this.song.likes))]),s("div",{staticClass:"text-overline text-black  q-mt-sm q-mb-xs"},[t._v("Comments Count : "+t._s(this.song.commentsCount))])])],1)])],1)],1)},h=[],f=(s("b0c0"),s("96cf"),s("c973")),m=s.n(f);c["default"].use(u["a"]);var v={name:"Soundcloud",data:function(){return{alt:!1,modalTitle:"SOUNDCLOUD SONGS",foundSongs:[],clientId:"TaTmd2ARXgnp20a7BQJwuZ8xGFbrYgz5",showSearch:!1,staticLink:"https://soundcloud.com/mahaliamusic/sober-acoustic",track:null,artist:null,accept:!1,expanded:!1,text:"Add text here",song:{},songs:[],sources:[],loadingSongs:!1,onEnded:!0,overlay:!0,muted:!0,play:!1,audio:{sources:[{src:"https://api.next-song.app/storage/music/zQHKlEb3tYlkzG4B9TKWAWjIj4ixKBw3gE4Mo0te.mp3",type:"audio/mp3"}]}}},methods:{onSubmit:function(t,e){var s=this,n={track:t,artist:e},o="http://localhost:8087/api/v1/soundcloud";p.a.post(o,n).then((function(t){s.track=null,s.showSearch=!1,t.data.result.length>1&&(s.foundSongs=t.data.result,s.alt=!0,s.modalTitle="Did you mean");var e=t.data.result[0];s.getSong(e)})).catch((function(t){console.log(t)}))},alternative:function(t){this.getSong(t),this.foundSongs=[],this.modalTitle="SOUNDCLOUD SONGS"},onReset:function(){this.name=null,this.age=null,this.$refs.name.resetValidation(),this.$refs.title.resetValidation()},getSong:function(t){var e=this,n=s("1a91"),o=new n.Client;s("3e8f");o.getSongInfo(t).then((function(t){e.song=t,e.showSearch=!1})).catch(console.error)},control:function(){this.play?(this.$refs.myAudio.pause(),this.play=!1):(this.$refs.myAudio.play(),this.play=!0)},onRejected:function(t){this.$q.notify({type:"negative",message:"".concat(t.length," file(s) did not pass validation constraints")})},factoryFn:function(t){var e=this;return new Promise((function(t){e.getAudio(),"",setTimeout((function(){t({url:"https://api.next-song.app/v1/songs"})}),100)}))},fetchSoundCloudKey:function(){return m()(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=s("19b6"),e.fetchKey().then((function(t){console.log(t)})),t.next=4,e.fetchKey();case 4:n=t.sent,e.testKey(n).then((function(t){t?(console.log(t),console.log("The key works!")):console.log("The key didn't work.")}));case 6:case"end":return t.stop()}}),t)})))()},playSoundcloud:function(t){return m()(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=s("f552"),o=new n,e.next=4,o.resolve(t,(function(t){console.log(t),o.play()}));case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.matMenu=i["f"],this.mdiAbTesting=l["a"],this.fasFont=r["a"],this.ionPulse=a["a"],this.getSong()}},b=v,x=(s("2e1e"),s("2877")),y=Object(x["a"])(b,g,h,!1,null,null,null),j=y.exports;c["default"].use(u["a"]);var k={name:"PageAudio",components:{Soundcloud:j},data:function(){return{songs:[],sources:[],loadingSongs:!1,onEnded:!0,overlay:!0,muted:!0,play:!1,next:!1,audio:{sources:[{src:"",type:"audio/mp3"}]}}},created:function(){this.matMenu=i["f"],this.mdiAbTesting=l["a"],this.fasFont=r["a"],this.ionPulse=a["a"]},methods:{getAudio:function(){var t=this;this.loadingSongs=!0;var e="https://api.next-song.app/v1/songs";p.a.get(e).then((function(e){var s=e.data.data;t.songs=s,s.map((function(e){var s={},n=e.path,o="audio/mp3";s={src:n,type:o},t.sources.push(s),t.loadingSongs=!1})),console.log(t.sources)})).catch((function(t){console.log(t)}))},control:function(){this.play?(this.$refs.myAudio.pause(),this.play=!1):(this.$refs.myAudio.play(),this.play=!0)},nextSong:function(){console.log("CLICKED NEXT SONG"),this.next?this.next=!1:this.next=!0},onRejected:function(t){this.$q.notify({type:"negative",message:"".concat(t.length," file(s) did not pass validation constraints")})},factoryFn:function(t){var e=this;return new Promise((function(t){e.getAudio(),"",t({url:"https://api.next-song.app/v1/songs"})}))},upload:function(){var t=this;this.loadingSongs=!0;var e="https://api.next-song.app/songs";p.a.post(e).then((function(e){console.log(" AUDIO ::"),console.log(e.data),t.options=e.data.message;var s=""})).catch((function(t){console.log(t)}))}},mounted:function(){}},q=k,w=(s("158d"),Object(x["a"])(q,n,o,!1,null,null,null));e["default"]=w.exports}}]);