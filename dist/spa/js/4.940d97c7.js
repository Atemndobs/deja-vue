(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0a72":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"undefined"!=typeof e.weather.main&&e.weather.main.temp>16?"warm":"",attrs:{id:"app"}},[a("main",[a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.query},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchWeather()},input:function(t){t.target.composing||(e.query=t.target.value)}}})]),"undefined"!=typeof e.weather.main?a("div",{staticClass:"weather-wrap"},[a("div",{staticClass:"location-box"},[a("div",{staticClass:"location"},[e._v(e._s(e.weather.name)+", "+e._s(e.weather.sys.country))]),a("div",{staticClass:"date"},[e._v(e._s(e.dateBuilder()))])]),a("div",{staticClass:"weather-box"},[a("div",{staticClass:"temp"},[e._v(e._s(Math.round(e.weather.main.temp))+"°c")]),a("div",{staticClass:"weather"},[e._v(e._s(e.weather.weather[0].main))])])]):e._e()])])},n=[],o=(a("99af"),a("ded3")),s=a.n(o),c=(a("96cf"),a("c973")),i=a.n(c),u=a("bc3a"),l=a.n(u),d=a("2f62"),f={name:"PageForecast",data:function(){return{api_key:"d75bc4e671fb7b4d190dd8a7c789183c",url_base:"https://api.openweathermap.org/data/2.5/",query:"Dusseldorf",searchCity:"",weather:{},polling:null}},methods:{fetchWeather:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=""===e.query?"Dusseldorf":e.query,r="https://atemkeng.com/api/weather/fetch/"+a,n=JSON.stringify(e.$store.state.forecasts.dusseldorf.peak),console.log(n),t.next=6,l.a.get(r).then((function(t){e.setResults(t.data);var r=t.data.main.temp;if(r>=n){var o="The temperature in ".concat(a," now is ").concat(r," °C");e.showNotif(o,"positive")}})).catch((function(t){var r="Please enter a valid City not ".concat(a);e.showNotif(r,"red"),console.log("Wrong City :  ".concat(a)),console.log("Error:  ".concat(t))}));case 6:e.query="";case 7:case"end":return t.stop()}}),t)})))()},getPeakForecast:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=""===e.query?"Dusseldorf":e.query,r="https://atemkeng.com/api/weather/peak",t.next=4,l.a.get(r).then((function(t){var a=t.data.data.peak_temperature;e.$store.commit("forecasts/setDusseldorf",{peak:a})})).catch((function(t){var r="Please enter a valid City not ".concat(a);e.showNotif(r,"red"),console.log("Wrong City :  ".concat(a)),console.log("Error:  ".concat(t))}));case 4:e.query="";case 5:case"end":return t.stop()}}),t)})))()},setResults:function(e){this.weather=e},dateBuilder:function(){var e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=a[e.getDay()],n=e.getDate(),o=t[e.getMonth()],s=e.getFullYear();return"".concat(r," ").concat(n," ").concat(o," ").concat(s)},pollData:function(){var e=this;this.polling=setInterval((function(){e.fetchWeather()}),9e5)},showNotif:function(e,t){this.$q.notify({message:e,color:t,progress:!0,position:"top",count:1,avatar:"https://firebasestorage.googleapis.com/v0/b/deja-vue-e67a1.appspot.com/o/avat_atem.png?alt=media&token=5827b153-5462-4301-81be-ade0777202d4",actions:[{label:"Dismis",color:"white",handler:function(){}}]})}},computed:s()(s()(s()({},Object(d["c"])({peak:"forecasts/dusseldorf"})),Object(d["b"])(["forecasts/getPeak"])),{},{forecast:function(){return this.$store.state.forecasts}}),mounted:function(){this.fetchWeather()},created:function(){},beforeDestroy:function(){clearInterval(this.polling)}},h=f,p=(a("f169"),a("2877")),m=Object(p["a"])(h,r,n,!1,null,"14005083",null);t["default"]=m.exports},"0c80":function(e,t,a){},f169:function(e,t,a){"use strict";a("0c80")}}]);