(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{523:function(t,e,o){},526:function(t,e,o){"use strict";o(523)},527:function(t,e,o){"use strict";o(14),o(9),o(7),o(6),o(12);var n=o(3),r=o(53);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o(328);o(525);var d={props:["content"],data:function(){return{ready:!1}},computed:c(c({},Object(r.b)(["env"])),{},{filledContent:function(){return m(this.content)}}),mounted:function(){var t=this,e={h2:["display-1","my-4"],h3:["title","mb-4","mt-5"],h4:["subheading","mb-3","mt-4"],p:["body1"],table:["v-datatable","v-table","theme--light","elevation-1"],pre:["pt-3","mb-4","px-2"]};Object.keys(e).forEach((function(o){t.$el.querySelectorAll(o).forEach((function(t){e[o].forEach((function(e){return t.classList.add(e)}))}))})),this.$el.querySelectorAll("img").forEach((function(img){img.parentElement.classList.add("text-center")})),this.ready=!0}},_=(o(526),o(45)),h=o(69),f=o.n(h),E=o(524),T=o(529),v=o(528),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"doc-page px-6",attrs:{fluid:""}},[o("v-row",[o("v-col",[o("h2",{staticClass:"display1 my-4"},[t._v("\n        "+t._s(t.filledContent.meta&&t.filledContent.meta.title||this.$route.params.id)+"\n      ")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],attrs:{cols:"12"},domProps:{innerHTML:t._s(t.filledContent.html)}})])],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VCol:E.a,VContainer:T.a,VRow:v.a})},531:function(t,e,o){var map={"./config-en.md":350,"./config-fr.md":351,"./i18n-en.md":352,"./i18n-fr.md":353,"./install-en.md":354,"./install-fr.md":355};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=531},536:function(t,e,o){t.exports={mode:"server_worker",port:8080,listenWhenReady:!1,publicUrl:"http://localhost:8080",wsPublicUrl:"ws://localhost:8080",dataDir:"/data",sessionDomain:null,directoryUrl:"http://localhost:8080",privateDirectoryUrl:"",openapiViewerUrl:"https://koumoul.com/openapi-viewer/",captureUrl:"http://capture:8080",privateCaptureUrl:null,notifyUrl:null,privateNotifyUrl:null,notifyWSUrl:null,subscriptionUrl:null,pluginsDir:"./plugins",mongoUrl:"mongodb://localhost:27017/data-fair-production",map:{style:"./api/v1/remote-services/tileserver-koumoul/proxy/styles/klokantech-basic/style.json",beforeLayer:"poi_label"},elasticsearch:{host:"localhost:9200",defaultAnalyzer:"french",maxBulkLines:2e3,maxBulkChars:2e5,requestTimeout:24e4},indicesPrefix:"dataset-production",info:{termsOfService:"https://koumoul.com/term-of-service",contact:{name:"Koumoul",url:"https://koumoul.com",email:"support@koumoul.com"}},brand:{logo:null,title:"DataFair",description:"Find, Access, Interoperate, Reuse data on the Web",embed:null},theme:{dark:!1,colors:{primary:"#1E88E5",secondary:"#42A5F5",accent:"#FF9800",error:"FF5252",info:"#2196F3",success:"#4CAF50",warning:"#E91E63",admin:"#E53935"},darkColors:{primary:"#2196F3",success:"#00E676"},cssUrl:null,cssText:"\n.theme--light .navigation-left .v-navigation-drawer__content {\n  background: linear-gradient(90deg, rgba(25,118,210,1) 0%, rgba(30,136,229,1) 100%);\n}\n.theme--dark .navigation-left .v-navigation-drawer__content {\n  background: linear-gradient(90deg, #363636 0%, #272727 100%);\n}\n.v-btn.primary {\n  background: linear-gradient(270deg, rgba(25,118,210,1) 0%, rgba(30,136,229,1) 100%);\n}\n"},darkModeSwitch:!0,defaultLimits:{totalStorage:-1,datasetStorage:-1,attachmentStorage:1e8,attachmentIndexed:5e6,remoteServiceRate:{duration:5,nb:100,kb:4e3},apiRate:{anonymous:{duration:5,nb:100,bandwidth:{dynamic:5e5,static:2e6}},user:{duration:1,nb:100,bandwidth:{dynamic:1e6,static:4e6}}},hideBrand:0},worker:{interval:200,releaseInterval:2e3,concurrency:4,spawnTask:!0},adminRole:"admin",contribRole:"contrib",userRole:"user",defaultRemoteKey:{in:"header",name:"x-apiKey",value:null},remoteTimeout:5e3,secretKeys:{identities:null,limits:null,notifications:null},globalWebhooks:{consumption:[]},locks:{ttl:60},cache:{publicMaxAge:20,timestampedPublicMaxAge:604800,size:1e3},analytics:{},browserLogLevel:"error",thumbor:{url:"http://localhost:8000",key:"thumborkey"},nuxtDev:!1,licenses:[{title:"Licence Ouverte / Open Licence",href:"https://www.etalab.gouv.fr/licence-ouverte-open-licence"},{title:"Open Database License (ODbL)",href:"https://spdx.org/licenses/ODbL-1.0.html#licenseText"}],applicationsDirectories:["https://koumoul.com/apps/","https://staging-koumoul.com/apps/","https://koumoul-dev.github.io/","https://cdn.jsdelivr.net/npm/@koumoul/"],applications:[{url:"https://koumoul.com/apps/infos-parcelles/2.5/"},{url:"https://koumoul.com/apps/infos-loc/0.9/"},{url:"https://cdn.jsdelivr.net/npm/@koumoul/data-fair-charts@0.8/dist/"},{url:"https://koumoul.com/apps/word-cloud/0.3/"},{url:"https://koumoul.com/apps/sankey/0.5/"},{url:"https://koumoul.com/apps/sunburst/0.2/"},{url:"https://koumoul.com/apps/data-fair-networks/0.1/"},{url:"https://koumoul.com/apps/list-details/0.2/"},{url:"https://koumoul.com/apps/carto-stats/0.4/"},{url:"https://koumoul.com/apps/data-fair-series/0.2/"},{url:"https://koumoul.com/apps/data-fair-admin-divs/0.2/"},{url:"https://koumoul.com/apps/bar-chart-race/0.1/"},{url:"https://koumoul.com/apps/data-fair-geo-shapes/0.1/"},{url:"https://koumoul.com/apps/scdl-deliberations/0.1/"},{url:"https://koumoul.com/apps/scdl-equipements/0.1/"},{url:"https://koumoul.com/apps/data-fair-events/1.0/"}],baseAppsCategories:["carte","graphique","textuelle","SCDL"],remoteServices:[{title:"Données Entreprises",url:"https://koumoul.com/s/sirene/api-docs.json"},{title:"Géocoder",url:"https://koumoul.com/s/geocoder/api/v1/api-docs.json"},{title:"Cadastre",url:"https://koumoul.com/s/cadastre/api-docs.json"},{title:"Divisions administratives",url:"https://koumoul.com/s/insee-mapping/api/v1/api-docs.json"},{title:"Service de données cartographiques",url:"https://koumoul.com/s/tileserver/api/v1/api-docs.json"}],catalogs:[{title:"Data.gouv.fr",href:"https://www.data.gouv.fr",logo:"https://static.data.gouv.fr/_themes/gouvfr/img/logo-header.svg"}],proxyNuxt:!1,tippecanoe:{skip:!1,minFeatures:2e3,docker:!1,args:["-zg","--extend-zooms-if-still-dropping","--drop-densest-as-needed","--detect-shared-borders","-r1"]},datasetUrlTemplate:null,applicationUrlTemplate:null,doc:{datasetEdit:null,datasetExtend:null,datasetAttachments:null,settings:null,catalogs:null},extraNavigationItems:[],extraAdminNavigationItems:[]}},537:function(t,e){t.exports={}},538:function(t,e){t.exports={port:"PORT",mode:"MODE",publicUrl:"PUBLIC_URL",wsPublicUrl:"WS_PUBLIC_URL",sessionDomain:"SESSION_DOMAIN",directoryUrl:"DIRECTORY_URL",privateDirectoryUrl:"PRIVATE_DIRECTORY_URL",openapiViewerUrl:"OPENAPI_VIEWER_URL",captureUrl:"CAPTURE_URL",privateCaptureUrl:"PRIVATE_CAPTURE_URL",notifyUrl:"NOTIFY_URL",privateNotifyUrl:"PRIVATE_NOTIFY_URL",notifyWSUrl:"NOTIFY_WS_URL",subscriptionUrl:"SUBSCRIPTION_URL",mongoUrl:"MONGO_URL",analytics:{__name:"ANALYTICS",__format:"json"},elasticsearch:{host:"ES_HOST",defaultAnalyzer:"ES_DEFAULT_ANALYZER",maxBulkLines:{__name:"ES_MAX_BULK_LINES",__format:"json"},maxBulkChars:{__name:"ES_MAX_BULK_CHARS",__format:"json"}},defaultRemoteKey:{value:"DEFAULT_REMOTE_KEY"},secretKeys:{identities:"SECRET_IDENTITIES",limits:"SECRET_LIMITS",notifications:"SECRET_NOTIFICATIONS"},globalWebhooks:{consumption:{__name:"WEBHOOKS_CONSUMPTION",__format:"json"}},brand:{logo:"BRAND_LOGO",title:"BRAND_TITLE",description:"BRAND_DESCRIPTION",url:"BRAND_URL",embed:"BRAND_EMBED"},theme:{dark:{__name:"THEME_DARK",__format:"json"},colors:{primary:"THEME_PRIMARY",secondary:"THEME_SECONDARY",accent:"THEME_ACCENT",error:"THEME_ERROR",info:"THEME_INFO",success:"THEME_SUCCESS",warning:"THEME_WARNING"},darkColors:{primary:"THEME_DARK_PRIMARY",secondary:"THEME_DARK_SECONDARY",accent:"THEME_DARK_ACCENT",error:"THEME_DARK_ERROR",info:"THEME_DARK_INFO",success:"THEME_DARK_SUCCESS",warning:"THEME_DARK_WARNING"},cssUrl:"THEME_CSS_URL",cssText:"THEME_CSS_TEXT"},darkModeSwitch:{__name:"DARK_MODE_SWITCH",__format:"json"},defaultLimits:{totalStorage:{__name:"DEFAULT_LIMITS_TOTAL_STORAGE",__format:"json"},datasetStorage:{__name:"DEFAULT_LIMITS_DATASET_STORAGE",__format:"json"}},worker:{interval:{__name:"WORKER_INTERVAL",__format:"json"},concurrency:{__name:"WORKER_CONCURRENCY",__format:"json"},spawnTask:{__name:"WORKER_SPAWN_TASK",__format:"json"}},browserLogLevel:"BROWSER_LOG_LEVEL",listenWhenReady:{__name:"LISTEN_WHEN_READY",__format:"json"},thumbor:{url:"THUMBOR_URL",key:"THUMBOR_KEY"},info:{termsOfService:"INFO_TOS",contact:{__name:"INFO_CONTACT",__format:"json"}},tippecanoe:{skip:{__name:"TIPPECANOE_SKIP",__format:"json"}},datasetUrlTemplate:"DATASET_URL_TEMPLATE",applicationUrlTemplate:"APPLICATION_URL_TEMPLATE",doc:{datasetEdit:"DOC_DATASET_EDIT",datasetExtend:"DOC_DATASET_EXTEND",datasetAttachments:"DOC_DATASET_ATTACHMENTS",settings:"DOC_SETTINGS",catalogs:"DOC_CATALOGS"},extraNavigationItems:{__name:"EXTRA_NAV_ITEMS",__format:"json"},extraAdminNavigationItems:{__name:"EXTRA_ADMIN_NAV_ITEMS",__format:"json"}}},558:function(t,e,o){"use strict";o.r(e);o(20),o(38);var n=o(16),r=(o(35),o(7),o(6),o(12),o(527)),l=o(535),c=o(531),m=Object.assign({},o(536),o(537));var d=function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object.keys(e).forEach((function(l){var c=r+l,d=c.split(".").reduce((function(a,t){return a[t]}),m);"object"===Object(n.a)(d)&&(d=JSON.stringify(d)),"string"==typeof e[l]?o.push({key:c,name:e[l],def:d}):"object"===Object(n.a)(e[l])&&e[l].__name?o.push({key:c,name:e[l].__name,def:d}):t(e[l],o,r+l+".")})),o}(o(538));var _={components:{DocPage:r.a},computed:{content:function(){if(this.$route){var content=c("./".concat(this.$route.params.id,"-").concat(this.$i18n.locale,".md"))||c("./".concat(this.$route.params.id,"-fr.md"));return content.default.replace("{{I18N_VARS}}",this.i18nVars).replace("{{CONFIG_VARS}}",this.configVars)}},configVars:function(){var t=this,table="<table><thead><tr><th>".concat(this.$t("pages.install.config.varKey"),"</th><th>").concat(this.$t("pages.install.config.varName"),"</th><th>").concat(this.$t("pages.install.config.varDesc"),"</th><th>").concat(this.$t("pages.install.config.varDefault"),"</th></tr></thead><tbody>\n");return d.forEach((function(e){var o=t.$te("pages.install.config.varDescriptions."+e.key)?t.$t("pages.install.config.varDescriptions."+e.key):"";table+="<tr><td>".concat(e.key,"</td><td>").concat(e.name,"</td><td>").concat(o,"</td><td>").concat(e.def,"</td></tr>\n")})),table+="</tbody></table>"},i18nVars:function(){var t=this,e=l(this.$i18n.messages[this.$i18n.locale],{delimiter:"_"}),table="<table><thead><tr><th>".concat(this.$t("pages.install.i18n.i18nKey"),"</th><th>").concat(this.$t("pages.install.i18n.i18nVar"),"</th><th>").concat(this.$t("pages.install.i18n.i18nVal"),"</th></tr></thead><tbody>\n");return table+=Object.keys(e).filter((function(t){return 0!==t.indexOf("doc_")})).map((function(o){return"<tr><td>".concat(o.replace(/_/g,"."),"</td><td>I18N_").concat(t.$i18n.locale,"_").concat(o,"</td><td><pre>").concat(("string"==typeof e[o]?e[o]:"MISSING").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),"</pre></td></tr>")})).join("\n"),table+="</tbody></table>"}}},h=o(45),component=Object(h.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("doc-page",{attrs:{content:this.content}})}),[],!1,null,null,null);e.default=component.exports}}]);