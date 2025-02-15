import{Aa as L,Dd as C,Ie as J,Je as $,K as ie,Ke as he,M,Ma as W,O as G,U as B,X as q,a as u,b as f,ca as g,cq as l,da as re,ea as I,fa as h,g as V,gc as ae,ka as se,l as K,ma as oe,r as d,rd as y,t as m,u as U,v as A,va as F,x as z,y as H,z as ne}from"./chunk-T43A2R4F.js";var w=class{},le=(()=>{class i extends w{getTranslation(t){return d({})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=F(i)))(n||i)}})();static \u0275prov=g({token:i,factory:i.\u0275fac})}return i})(),P=class{},ce=(()=>{class i{handle(t){return t.key}static \u0275fac=function(e){return new(e||i)};static \u0275prov=g({token:i,factory:i.\u0275fac})}return i})();function x(i,s){if(i===s)return!0;if(i===null||s===null)return!1;if(i!==i&&s!==s)return!0;let t=typeof i,e=typeof s,n,r,o;if(t==e&&t=="object")if(Array.isArray(i)){if(!Array.isArray(s))return!1;if((n=i.length)==s.length){for(r=0;r<n;r++)if(!x(i[r],s[r]))return!1;return!0}}else{if(Array.isArray(s))return!1;o=Object.create(null);for(r in i){if(!x(i[r],s[r]))return!1;o[r]=!0}for(r in s)if(!(r in o)&&typeof s[r]<"u")return!1;return!0}return!1}function p(i){return typeof i<"u"&&i!==null}function X(i){return i&&typeof i=="object"&&!Array.isArray(i)}function fe(i,s){let t=Object.assign({},i);return X(i)&&X(s)&&Object.keys(s).forEach(e=>{X(s[e])?e in i?t[e]=fe(i[e],s[e]):Object.assign(t,{[e]:s[e]}):Object.assign(t,{[e]:s[e]})}),t}var b=class{},ue=(()=>{class i extends b{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,e){let n;return typeof t=="string"?n=this.interpolateString(t,e):typeof t=="function"?n=this.interpolateFunction(t,e):n=t,n}getValue(t,e){let n=typeof e=="string"?e.split("."):[e];e="";do e+=n.shift(),p(t)&&p(t[e])&&(typeof t[e]=="object"||!n.length)?(t=t[e],e=""):n.length?e+=".":t=void 0;while(n.length);return t}interpolateFunction(t,e){return t(e)}interpolateString(t,e){return e?t.replace(this.templateMatcher,(n,r)=>{let o=this.getValue(e,r);return p(o)?o:n}):t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=F(i)))(n||i)}})();static \u0275prov=g({token:i,factory:i.\u0275fac})}return i})(),E=class{},ge=(()=>{class i extends E{compile(t,e){return t}compileTranslations(t,e){return t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=F(i)))(n||i)}})();static \u0275prov=g({token:i,factory:i.\u0275fac})}return i})(),O=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new L;onLangChange=new L;onDefaultLangChange=new L},Z=new I("USE_STORE"),Y=new I("USE_DEFAULT_LANG"),Q=new I("DEFAULT_LANGUAGE"),ee=new I("USE_EXTEND"),_=(()=>{class i{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new L;_onLangChange=new L;_onDefaultLangChange=new L;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(t){this.isolate?this._currentLang=t:this.store.currentLang=t}get langs(){return this.isolate?this._langs:this.store.langs}set langs(t){this.isolate?this._langs=t:this.store.langs=t}get translations(){return this.isolate?this._translations:this.store.translations}set translations(t){this.isolate?this._translations=t:this.store.translations=t}constructor(t,e,n,r,o,c=!0,S=!1,T=!1,D){this.store=t,this.currentLoader=e,this.compiler=n,this.parser=r,this.missingTranslationHandler=o,this.useDefaultLang=c,this.isolate=S,this.extend=T,D&&this.setDefaultLang(D)}setDefaultLang(t){if(t===this.defaultLang)return;let e=this.retrieveTranslations(t);typeof e<"u"?(this.defaultLang==null&&(this.defaultLang=t),e.pipe(M(1)).subscribe(n=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(t===this.currentLang)return d(this.translations[t]);let e=this.retrieveTranslations(t);return typeof e<"u"?(this.currentLang||(this.currentLang=t),e.pipe(M(1)).subscribe(n=>{this.changeLang(t)}),e):(this.changeLang(t),d(this.translations[t]))}retrieveTranslations(t){let e;return(typeof this.translations[t]>"u"||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),e=this._translationRequests[t]),e}getTranslation(t){this.pending=!0;let e=this.currentLoader.getTranslation(t).pipe(B(1),M(1));return this.loadingTranslations=e.pipe(A(n=>this.compiler.compileTranslations(n,t)),B(1),M(1)),this.loadingTranslations.subscribe({next:n=>{this.translations[t]=this.extend&&this.translations[t]?u(u({},n),this.translations[t]):n,this.updateLangs(),this.pending=!1},error:n=>{this.pending=!1}}),e}setTranslation(t,e,n=!1){e=this.compiler.compileTranslations(e,t),(n||this.extend)&&this.translations[t]?this.translations[t]=fe(this.translations[t],e):this.translations[t]=e,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){t.forEach(e=>{this.langs.indexOf(e)===-1&&this.langs.push(e)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(t,e,n){let r;if(e instanceof Array){let o={},c=!1;for(let S of e)o[S]=this.getParsedResult(t,S,n),m(o[S])&&(c=!0);if(c){let S=e.map(T=>m(o[T])?o[T]:d(o[T]));return ne(S).pipe(A(T=>{let D={};return T.forEach((Ce,we)=>{D[e[we]]=Ce}),D}))}return o}if(t&&(r=this.parser.interpolate(this.parser.getValue(t,e),n)),typeof r>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],e),n)),typeof r>"u"){let o={key:e,translateService:this};typeof n<"u"&&(o.interpolateParams=n),r=this.missingTranslationHandler.handle(o)}return typeof r<"u"?r:e}get(t,e){if(!p(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(ie(n=>(n=this.getParsedResult(n,t,e),m(n)?n:d(n))));{let n=this.getParsedResult(this.translations[this.currentLang],t,e);return m(n)?n:d(n)}}getStreamOnTranslationChange(t,e){if(!p(t)||!t.length)throw new Error('Parameter "key" required');return z(H(()=>this.get(t,e)),this.onTranslationChange.pipe(q(n=>{let r=this.getParsedResult(n.translations,t,e);return typeof r.subscribe=="function"?r:d(r)})))}stream(t,e){if(!p(t)||!t.length)throw new Error('Parameter "key" required');return z(H(()=>this.get(t,e)),this.onLangChange.pipe(q(n=>{let r=this.getParsedResult(n.translations,t,e);return m(r)?r:d(r)})))}instant(t,e){if(!p(t)||!t.length)throw new Error('Parameter "key" required');let n=this.getParsedResult(this.translations[this.currentLang],t,e);if(m(n)){if(t instanceof Array){let r={};return t.forEach((o,c)=>{r[t[c]]=t[c]}),r}return t}else return n}set(t,e,n=this.currentLang){this.translations[n][t]=this.compiler.compile(e,n),this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}changeLang(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),this.defaultLang==null&&this.changeDefaultLang(t)}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.getTranslation(t)}resetLang(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;if(t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof t>"u"))return t.indexOf("-")!==-1&&(t=t.split("-")[0]),t.indexOf("_")!==-1&&(t=t.split("_")[0]),t}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,t}static \u0275fac=function(e){return new(e||i)(h(O),h(w),h(E),h(b),h(P),h(Y),h(Z),h(ee),h(Q))};static \u0275prov=g({token:i,factory:i.\u0275fac})}return i})();var qe=(()=>{class i{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,e){this.translate=t,this._ref=e}updateValue(t,e,n){let r=o=>{this.value=o!==void 0?o:t,this.lastKey=t,this._ref.markForCheck()};if(n){let o=this.translate.getParsedResult(n,t,e);m(o.subscribe)?o.subscribe(r):r(o)}this.translate.get(t,e).subscribe(r)}transform(t,...e){if(!t||!t.length)return t;if(x(t,this.lastKey)&&x(e,this.lastParams))return this.value;let n;if(p(e[0])&&e.length)if(typeof e[0]=="string"&&e[0].length){let r=e[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{n=JSON.parse(r)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`)}}else typeof e[0]=="object"&&!Array.isArray(e[0])&&(n=e[0]);return this.lastKey=t,this.lastParams=e,this.updateValue(t,n),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,n,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,n,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,n))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(e){return new(e||i)(W(_,16),W(ae,16))};static \u0275pipe=oe({name:"translate",type:i,pure:!1});static \u0275prov=g({token:i,factory:i.\u0275fac})}return i})(),We=(()=>{class i{static forRoot(t={}){return{ngModule:i,providers:[t.loader||{provide:w,useClass:le},t.compiler||{provide:E,useClass:ge},t.parser||{provide:b,useClass:ue},t.missingTranslationHandler||{provide:P,useClass:ce},O,{provide:Z,useValue:t.isolate},{provide:Y,useValue:t.useDefaultLang},{provide:ee,useValue:t.extend},{provide:Q,useValue:t.defaultLanguage},_]}}static forChild(t={}){return{ngModule:i,providers:[t.loader||{provide:w,useClass:le},t.compiler||{provide:E,useClass:ge},t.parser||{provide:b,useClass:ue},t.missingTranslationHandler||{provide:P,useClass:ce},{provide:Z,useValue:t.isolate},{provide:Y,useValue:t.useDefaultLang},{provide:ee,useValue:t.extend},{provide:Q,useValue:t.defaultLanguage},_]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=se({type:i});static \u0275inj=re({})}return i})();var R=class{constructor(){this.internetConnection=!0,this.serverConnection=!0}};var v=class{constructor(){this.dataMenu="",this.themeMode="system",this.themeDirection="rtl",this.themeFontSize=0,this.themeLanguage="fa",this.themeHighlight="blue",this.themeMenuPin=[],this.innerWidth=0,this.innerHeight=0,this.mainPagePreloaderShow=!0,this.actionScrollTopPage=!1,this.actionScrollTopList=!1}};var j={processInfoStore:new Map,processOrderStore:[],coreSiteResultStore:new C,coreModuleResultStore:new C,coreCpMainResultStore:new C,enumRecordStatusResultStore:new C,currencyResultStore:new C,connectionStatusStore:new R,themeStore:new v};function de(i=j,s){switch(s.type){case Ee:return f(u({},i),{processInfoStore:s.payload});case De:return f(u({},i),{processOrderStore:s.payload});case Ae:return f(u({},i),{coreSiteResultStore:s.payload});case Me:return f(u({},i),{coreModuleResultStore:s.payload});case Ie:return f(u({},i),{coreCpMainResultStore:s.payload});case Pe:return f(u({},i),{currencyResultStore:s.payload});case _e:return f(u({},i),{enumRecordStatusResultStore:s.payload});case je:return f(u({},i),{connectionStatusStore:s.payload});case a:return f(u({},i),{themeStore:s.payload});default:return j}}var Ee="SET_Process_Info",De="SET_Process_Order",Ae="SET_Core_Site",Me="SET_Core_Module",Ie="SET_CpMain_Menu",Pe="SET_Core_Currency",_e="SET_Info_Enum",je="SET_Connection_STATE",a="SET_Theme_STATE";var k=(()=>{let s=class s{constructor(){this.stateSubject=new K(j),this.state=j,this.stateSubject=new K(this.state),window.getInfo=()=>this.state}getStateSnapshot(){return this.stateSubject.getValue()}setState(e){Object.assign(this.state,de(this.state,e)),this.stateSubject.next(this.state)}getState(e){if(typeof e!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return this.stateSubject.asObservable().pipe(A(e)).pipe(G())}getStateDirect(){return this.stateSubject.pipe(G())}};s.\u0275fac=function(n){return new(n||s)},s.\u0275prov=g({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var pe="theme_mode",Se="theme_highlight",Te="theme_direction",Le="theme_font_size",ye="theme_language",N="theme_MenuPin",ve=(()=>{let s=class s{constructor(e){this.cmsStoreService=e,this.themeStore=new v,this.getSystemMode=()=>window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light",this.fontSize=16,this.ThemeMenuPin=[];let n=this.cmsStoreService.getStateSnapshot();n.themeStore&&(this.themeStore=n.themeStore)}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}onInitAppComponentStateOnChange(){this.cmsApiStoreSubscribe=this.cmsStoreService.getState(e=>e.themeStore).subscribe(e=>{l.consoleLog&&console.log("onInitAppComponentStateOnChange:ThemeService"),e?this.themeStore=e:this.themeStore=new v}),this.updateThemeModeType(this.getThemeModeTypeFromLocalStorage(),!0),this.updateThemeHighLight(this.getThemeHighLightFromLocalStorage(),!0),this.updateThemeDirection(this.getThemeDirectionFromLocalStorage(),!0),this.updateThemeLanguage(this.getThemeLanguageFromLocalStorage(),!0),this.updateThemeFontSize("memory"),this.updateThemeMenuPin(this.getThemeMenuPinFromLocalStorage())}afterViewInitAppComponent(){setTimeout(()=>{this.htmlSelectorAddEvent()},200)}onNavigationStartAppComponent(){setTimeout(()=>{this.themeStore.dataMenu=""},200)}onNavigationEndAppComponent(){setTimeout(()=>{this.htmlSelectorAddEvent()},200)}htmlSelectorAddEvent(){document.querySelectorAll(".menu").forEach(n=>{let r=n;r.style.display="block"});let e=document.querySelectorAll(".accordion-btn");e?.length&&e.forEach(n=>n.addEventListener("click",r=>{n.querySelector("i:last-child").classList.toggle("fa-rotate-180")}))}getThemeModeTypeFromLocalStorage(){if(!localStorage)return"light";let e=localStorage.getItem(pe);return!e||e==="light"?"light":e==="dark"?"dark":"system"}getThemeHighLightFromLocalStorage(){if(!localStorage)return"";let e=localStorage.getItem(Se);return e||""}getThemeLanguageFromLocalStorage(){if(!localStorage)return"en";let e=localStorage.getItem(ye);return e||"en"}getThemeFontSizeFromLocalStorage(){if(!localStorage)return 0;let e=localStorage.getItem(Le);return e?+e:0}getThemeMenuPinFromLocalStorage(){if(!localStorage)return[];let e=localStorage.getItem(N);if(!e)return[];var n=[];return n=JSON.parse(e),Array.isArray(n)?n:[]}getThemeDirectionFromLocalStorage(){if(!localStorage)return"ltr";let e=localStorage.getItem(Te);return e&&e=="ltr","ltr"}updateThemeModeType(e,n=!1){e||(e="system");let r=e==="system"?this.getSystemMode():e;!n&&this.themeStore.themeMode==r||(localStorage&&localStorage.setItem(pe,r),this.themeStore.themeMode=r,this.cmsStoreService.setState({type:a,payload:this.themeStore}),setTimeout(()=>{this.themeStore.themeMode=="dark"?document.documentElement.querySelectorAll(".theme-light").forEach(o=>{o.classList.remove("theme-light"),o.classList.add("theme-dark")}):document.documentElement.querySelectorAll(".theme-dark").forEach(o=>{o.classList.remove("theme-dark"),o.classList.add("theme-light")})},10))}updateThemeHighLight(e,n=!1){(!e||e.length==0)&&(e="blue"),!(!n&&this.themeStore.themeHighlight==e)&&(localStorage&&localStorage.setItem(Se,e),this.themeStore.themeHighlight=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),setTimeout(()=>{if(this.themeStore.themeHighlight.length>0){var r=document.querySelectorAll(".page-highlight");r.length&&r.forEach(function(c){c.remove()});var o=document.createElement("link");o.rel="stylesheet",o.className="page-highlight",o.type="text/css",o.href="assets/styles/highlights/highlight_"+this.themeStore.themeHighlight+".css",document.getElementsByTagName("head")[0].appendChild(o)}},10))}updateThemeDirection(e,n=!1){e||(e="ltr"),!(!n&&this.themeStore.themeDirection==e)&&(localStorage&&localStorage.setItem(Te,e),this.themeStore.themeDirection=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),setTimeout(()=>{this.themeStore.themeDirection=="ltr"?document.documentElement.querySelectorAll(".theme-rtl").forEach(r=>{r.classList.remove("theme-rtl"),r.classList.add("theme-ltr")}):document.documentElement.querySelectorAll(".theme-ltr").forEach(r=>{r.classList.remove("theme-ltr"),r.classList.add("theme-rtl")})},10))}updateThemeLanguage(e,n=!1){e&&(!n&&this.themeStore.themeLanguage==e||(localStorage&&localStorage.setItem(ye,e),this.themeStore.themeLanguage=e,this.cmsStoreService.setState({type:a,payload:this.themeStore})))}getFontSize(){return`${this.fontSize}px`}updateThemeFontSize(e){var n=0;e=="increase"?n=1:e=="decrease"?n=-1:e=="default"?n=-1*this.themeStore.themeFontSize:(e="memory")&&(n=this.getThemeFontSizeFromLocalStorage()),this.themeStore.themeFontSize=this.themeStore.themeFontSize+n,this.cmsStoreService.setState({type:a,payload:this.themeStore}),localStorage&&localStorage.setItem(Le,this.themeStore.themeFontSize+""),setTimeout(()=>{this.fontSize+=n,document.documentElement.style.setProperty("--font-size",this.getFontSize())},10)}updateThemeMenuPin(e){e&&(this.themeStore.themeMenuPin=e,this.ThemeMenuPin=[],this.themeStore.themeMenuPin.forEach(n=>{this.ThemeMenuPin[n]=!0}),this.cmsStoreService.setState({type:a,payload:this.themeStore}))}updateThemeMenuPinToggel(e){if(e){var n=this.themeStore.themeMenuPin.indexOf(e);n>=0?(this.themeStore.themeMenuPin.splice(n,1),this.ThemeMenuPin[e]=!1):(this.themeStore.themeMenuPin.push(e),this.ThemeMenuPin[e]=!0),localStorage&&localStorage.setItem(N,JSON.stringify(this.themeStore.themeMenuPin)),this.cmsStoreService.setState({type:a,payload:this.themeStore})}}updateThemeMenuPinAdd(e){e&&(this.themeStore.themeMenuPin.push(e),this.ThemeMenuPin[e]=!0,localStorage&&localStorage.setItem(N,JSON.stringify(this.themeStore.themeMenuPin)),this.cmsStoreService.setState({type:a,payload:this.themeStore}))}updateThemeMenuPinRemove(e){if(e){var n=this.themeStore.themeMenuPin.indexOf(e);n>=0&&this.themeStore.themeMenuPin.splice(n,1),this.ThemeMenuPin[e]=!1,localStorage&&localStorage.setItem(N,JSON.stringify(this.themeStore.themeMenuPin)),this.cmsStoreService.setState({type:a,payload:this.themeStore})}}updateMainPagePreloaderShow(e){this.themeStore.mainPagePreloaderShow=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("mainPagePreloaderShow :",this.themeStore.mainPagePreloaderShow)}updateInnerSize(){this.themeStore.innerWidth=window.innerWidth,this.themeStore.innerHeight=window.innerHeight,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows Width :",window.innerWidth,"windows Height :",window.innerHeight)}onActionScrollTopPage(e,n=0){if(e==!1){this.themeStore.actionScrollTopPage=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopPage);return}n>0?setTimeout(()=>{this.themeStore.actionScrollTopPage=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopPage)},1e3):(this.themeStore.actionScrollTopPage=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopPage))}onActionScrollTopList(e,n=0){if(e==!1){this.themeStore.actionScrollTopList=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopList);return}n>0?setTimeout(()=>{this.themeStore.actionScrollTopList=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopList)},1e3):(this.themeStore.actionScrollTopList=e,this.cmsStoreService.setState({type:a,payload:this.themeStore}),l.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopList))}cleanDataMenu(){this.themeStore?.dataMenu?.length>0&&(this.themeStore.dataMenu="",this.cmsStoreService.setState({type:a,payload:this.themeStore}))}};s.\u0275fac=function(n){return new(n||s)(h(k))},s.\u0275prov=g({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();var xe="language",gt=(()=>{let s=class s{constructor(e,n,r,o){this.cmsStoreService=e,this.coreAuthService=n,this.translate=r,this.themeService=o,this.consoleLog=!0,this.tokenInfo=new $,this.deviceTokenInfo=new J,this.isAdminSite=!1,this.isSupportSite=!1,this.consoleLog=l.ProgressConsoleLog,this.coreAuthService.tokenInfoSubject.subscribe(c=>{l.consoleLog&&console.log("SET_TOKEN_INFO"),this.tokenInfo=c}),this.coreAuthService.tokenDeviceSubject.subscribe(c=>{l.consoleLog&&console.log("SET_TOKEN_DEVICE"),this.deviceTokenInfo=c})}get isMobile(){return window.innerWidth<l.cmsViewConfig.mobileWindowInnerWidth}onInitAppComponentStateOnChange(){return this.cmsStoreService.getState(e=>(l.consoleLog&&console.log("onInitAppComponentStateOnChange:tokenhelper"),this.setDirectionThemeBylanguage(this.tokenInfo.language),this.CheckIsAdmin(),e))}getStateOnChange(){return this.cmsStoreService.getState(e=>(l.consoleLog&&console.log("getStateOnChange"),e))}getTokenInfoStateOnChange(){return this.coreAuthService.tokenInfoSubject}getTokenDeviceStateOnChange(){return this.coreAuthService.tokenDeviceSubject}getTokenInfoState(){return V(this,null,function*(){let e=this.coreAuthService.getUserToken();return!e||e.length===0?new $:yield U(this.coreAuthService.ServiceCurrentToken()).then(n=>(this.tokenInfo=n.item,n.item))})}getTokenDeviceState(){return V(this,null,function*(){let e=this.coreAuthService.getDeviceToken();return!e||e.length===0?new J:yield U(this.coreAuthService.ServiceCurrentDeviceToken()).then(n=>(this.deviceTokenInfo=n.item,n.item))})}setDirectionThemeBylanguage(e){(!e||e.length===0)&&(e=localStorage.getItem(xe)||this.translate.getDefaultLang()||"fa"),e==="ar"||e==="fa"?this.themeService.updateThemeDirection("ltr"):this.themeService.updateThemeDirection("rtl"),document.getElementsByTagName("html")[0].setAttribute("lang",e)}CurrentTokenInfoRenew(){this.coreAuthService.CurrentTokenInfoRenew()}CheckIsAdmin(){return this.tokenInfo.userAccessUserType===y.AdminCpSite||this.tokenInfo.userAccessUserType===y.AdminMainCms||this.tokenInfo.userAccessUserType===y.SupportCpSite||this.tokenInfo.userAccessUserType===y.SupportMainCms?(this.isAdminSite=!0,!0):(this.isAdminSite=!1,!1)}CheckIsSupport(){return this.tokenInfo.userAccessUserType===y.SupportCpSite||this.tokenInfo.userAccessUserType===y.SupportMainCms?(this.isSupportSite=!0,!0):(this.isSupportSite=!1,!1)}};s.\u0275fac=function(n){return new(n||s)(h(k),h(he),h(_),h(ve))},s.\u0275prov=g({token:s,factory:s.\u0275fac,providedIn:"root"});let i=s;return i})();export{w as a,_ as b,qe as c,We as d,R as e,v as f,Ee as g,De as h,Ae as i,Me as j,Ie as k,Pe as l,_e as m,je as n,k as o,ve as p,gt as q};
