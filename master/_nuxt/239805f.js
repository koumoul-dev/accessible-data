(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{521:function(t,e,n){},522:function(t,e,n){},523:function(t,e,n){},524:function(t,e,n){"use strict";n(522)},525:function(t,e,n){"use strict";n(14),n(8),n(7),n(6),n(12),n(38);var r=n(3),o=n(51);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=n(327);n(523);var d={props:["content"],data:function(){return{ready:!1}},computed:l(l({},Object(o.b)(["env"])),{},{filledContent:function(){var content=f(this.content);return content.html=content.html.replace("<table>",'<div class="v-data-table v-data-table--dense theme--light"><div class="v-data-table__wrapper"><table>').replace("</table>","</table></div></div>"),content}}),mounted:function(){var t=this,e={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],pre:["pt-3","mb-4","px-2"]};Object.keys(e).forEach((function(n){t.$el.querySelectorAll(n).forEach((function(t){e[n].forEach((function(e){return t.classList.add(e)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},m=(n(524),n(45)),v=n(67),y=n.n(v),O=n(526),j=n(529),h=n(528),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"doc-page px-6",attrs:{fluid:""}},[n("v-row",[n("v-col",[n("h2",{staticClass:"display1 my-4"},[t._v("\n        "+t._s(t.filledContent.meta&&t.filledContent.meta.title||this.$route.params.id)+"\n      ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:t._s(t.filledContent.html)}})])],1)],1)}),[],!1,null,null,null);e.a=component.exports;y()(component,{VCol:O.a,VContainer:j.a,VRow:h.a})},526:function(t,e,n){"use strict";n(14),n(8),n(66),n(33),n(34);var r=n(3),o=(n(44),n(326),n(38),n(7),n(6),n(12),n(30),n(521),n(1)),c=n(80),l=n(4);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=m.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),O=m.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(O)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},528:function(t,e,n){"use strict";n(14),n(8);var r=n(3),o=(n(44),n(326),n(38),n(7),n(6),n(12),n(33),n(34),n(521),n(1)),c=n(80),l=n(4);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],v=["start","end","center"];function y(t,e){return m.reduce((function(n,r){return n[t+Object(l.r)(r)]=e(),n}),{})}var O=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},j=y("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:h}})),P=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:P}})),C={align:Object.keys(j),justify:Object.keys(w),alignContent:Object.keys(S)},E={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=E[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var D=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},j),{},{justify:{type:String,default:null,validator:h}},w),{},{alignContent:{type:String,default:null,validator:P}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var d=D.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&d.push(o)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),D.set(l,d)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},529:function(t,e,n){"use strict";n(66),n(7),n(6),n(12),n(328),n(521);var r=n(1);var o,c=n(80);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},550:function(t,e,n){var map={"./application-en.md":384,"./application-fr.md":385,"./catalog-en.md":386,"./catalog-fr.md":387,"./concepts-en.md":388,"./concepts-fr.md":389,"./dataset-en.md":390,"./dataset-fr.md":391,"./enrichment-en.md":392,"./enrichment-fr.md":393,"./format-en.md":394,"./format-fr.md":395,"./introduction-en.md":396,"./introduction-fr.md":397,"./permission-en.md":398,"./permission-fr.md":399,"./service-en.md":400,"./service-fr.md":401,"./use-en.md":402,"./use-fr.md":403};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=550},565:function(t,e,n){"use strict";n.r(e);var r=n(525),o=n(550),c={components:{DocPage:r.a},computed:{content:function(){if(this.$route){var content=o("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"))||o("./".concat(this.$route.params.id,"-fr.md"));return content.default}}},head:function(){return{meta:[{hid:"robots",name:"robots",content:"index"}]}}},l=n(45),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("doc-page",{attrs:{content:this.content}})}),[],!1,null,null,null);e.default=component.exports}}]);