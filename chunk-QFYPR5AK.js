import{Aa as L,Dd as C,Ee as j,Fe as M,Ge as le,K as se,M as A,Ma as X,O as $,U as z,X as J,a as c,aq as h,b as g,ca as f,da as re,ea as _,fa as a,g as H,gc as he,ka as oe,l as G,ma as ae,r as d,rd as v,t as p,u as B,v as D,va as P,x as q,y as W,z as ie}from"./chunk-TD6TCKX3.js";var w=class{},ce=(()=>{class i extends w{getTranslation(e){return d({})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(i)))(n||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})(),k=class{},ue=(()=>{class i{handle(e){return e.key}static \u0275fac=function(t){return new(t||i)};static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})();function R(i,r){if(i===r)return!0;if(i===null||r===null)return!1;if(i!==i&&r!==r)return!0;let e=typeof i,t=typeof r,n,s,o;if(e==t&&e=="object")if(Array.isArray(i)){if(!Array.isArray(r))return!1;if((n=i.length)==r.length){for(s=0;s<n;s++)if(!R(i[s],r[s]))return!1;return!0}}else{if(Array.isArray(r))return!1;o=Object.create(null);for(s in i){if(!R(i[s],r[s]))return!1;o[s]=!0}for(s in r)if(!(s in o)&&typeof r[s]<"u")return!1;return!0}return!1}function m(i){return typeof i<"u"&&i!==null}function Z(i){return i&&typeof i=="object"&&!Array.isArray(i)}function de(i,r){let e=Object.assign({},i);return Z(i)&&Z(r)&&Object.keys(r).forEach(t=>{Z(r[t])?t in i?e[t]=de(i[t],r[t]):Object.assign(e,{[t]:r[t]}):Object.assign(e,{[t]:r[t]})}),e}var b=class{},fe=(()=>{class i extends b{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){let n;return typeof e=="string"?n=this.interpolateString(e,t):typeof e=="function"?n=this.interpolateFunction(e,t):n=e,n}getValue(e,t){let n=typeof t=="string"?t.split("."):[t];t="";do t+=n.shift(),m(e)&&m(e[t])&&(typeof e[t]=="object"||!n.length)?(e=e[t],t=""):n.length?t+=".":e=void 0;while(n.length);return e}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(n,s)=>{let o=this.getValue(t,s);return m(o)?o:n}):e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(i)))(n||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})(),E=class{},ge=(()=>{class i extends E{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(n){return(e||(e=P(i)))(n||i)}})();static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})(),F=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new L;onLangChange=new L;onDefaultLangChange=new L},Y=new _("USE_STORE"),Q=new _("USE_DEFAULT_LANG"),ee=new _("DEFAULT_LANGUAGE"),te=new _("USE_EXTEND"),x=(()=>{class i{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new L;_onLangChange=new L;_onDefaultLangChange=new L;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,n,s,o,u=!0,S=!1,T=!1,I){this.store=e,this.currentLoader=t,this.compiler=n,this.parser=s,this.missingTranslationHandler=o,this.useDefaultLang=u,this.isolate=S,this.extend=T,I&&this.setDefaultLang(I)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(A(1)).subscribe(n=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(e===this.currentLang)return d(this.translations[e]);let t=this.retrieveTranslations(e);return typeof t<"u"?(this.currentLang||(this.currentLang=e),t.pipe(A(1)).subscribe(n=>{this.changeLang(e)}),t):(this.changeLang(e),d(this.translations[e]))}retrieveTranslations(e){let t;return(typeof this.translations[e]>"u"||this.extend)&&(this._translationRequests[e]=this._translationRequests[e]||this.getTranslation(e),t=this._translationRequests[e]),t}getTranslation(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(z(1),A(1));return this.loadingTranslations=t.pipe(D(n=>this.compiler.compileTranslations(n,e)),z(1),A(1)),this.loadingTranslations.subscribe({next:n=>{this.translations[e]=this.extend&&this.translations[e]?c(c({},n),this.translations[e]):n,this.updateLangs(),this.pending=!1},error:n=>{this.pending=!1}}),t}setTranslation(e,t,n=!1){t=this.compiler.compileTranslations(t,e),(n||this.extend)&&this.translations[e]?this.translations[e]=de(this.translations[e],t):this.translations[e]=t,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{this.langs.indexOf(t)===-1&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(e,t,n){let s;if(t instanceof Array){let o={},u=!1;for(let S of t)o[S]=this.getParsedResult(e,S,n),p(o[S])&&(u=!0);if(u){let S=t.map(T=>p(o[T])?o[T]:d(o[T]));return ie(S).pipe(D(T=>{let I={};return T.forEach((Ce,we)=>{I[t[we]]=Ce}),I}))}return o}if(e&&(s=this.parser.interpolate(this.parser.getValue(e,t),n)),typeof s>"u"&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(s=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],t),n)),typeof s>"u"){let o={key:t,translateService:this};typeof n<"u"&&(o.interpolateParams=n),s=this.missingTranslationHandler.handle(o)}return typeof s<"u"?s:t}get(e,t){if(!m(e)||!e.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe(se(n=>(n=this.getParsedResult(n,e,t),p(n)?n:d(n))));{let n=this.getParsedResult(this.translations[this.currentLang],e,t);return p(n)?n:d(n)}}getStreamOnTranslationChange(e,t){if(!m(e)||!e.length)throw new Error('Parameter "key" required');return q(W(()=>this.get(e,t)),this.onTranslationChange.pipe(J(n=>{let s=this.getParsedResult(n.translations,e,t);return typeof s.subscribe=="function"?s:d(s)})))}stream(e,t){if(!m(e)||!e.length)throw new Error('Parameter "key" required');return q(W(()=>this.get(e,t)),this.onLangChange.pipe(J(n=>{let s=this.getParsedResult(n.translations,e,t);return p(s)?s:d(s)})))}instant(e,t){if(!m(e)||!e.length)throw new Error('Parameter "key" required');let n=this.getParsedResult(this.translations[this.currentLang],e,t);if(p(n)){if(e instanceof Array){let s={};return e.forEach((o,u)=>{s[e[u]]=e[u]}),s}return e}else return n}set(e,t,n=this.currentLang){this.translations[n][e]=this.compiler.compile(t,n),this.updateLangs(),this.onTranslationChange.emit({lang:n,translations:this.translations[n]})}changeLang(e){this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e)}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.getTranslation(e)}resetLang(e){this._translationRequests[e]=void 0,this.translations[e]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;if(e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,!(typeof e>"u"))return e.indexOf("-")!==-1&&(e=e.split("-")[0]),e.indexOf("_")!==-1&&(e=e.split("_")[0]),e}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let e=window.navigator.languages?window.navigator.languages[0]:null;return e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,e}static \u0275fac=function(t){return new(t||i)(a(F),a(w),a(E),a(b),a(k),a(Q),a(Y),a(te),a(ee))};static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})();var qe=(()=>{class i{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,n){let s=o=>{this.value=o!==void 0?o:e,this.lastKey=e,this._ref.markForCheck()};if(n){let o=this.translate.getParsedResult(n,e,t);p(o.subscribe)?o.subscribe(s):s(o)}this.translate.get(e,t).subscribe(s)}transform(e,...t){if(!e||!e.length)return e;if(R(e,this.lastKey)&&R(t,this.lastParams))return this.value;let n;if(m(t[0])&&t.length)if(typeof t[0]=="string"&&t[0].length){let s=t[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{n=JSON.parse(s)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else typeof t[0]=="object"&&!Array.isArray(t[0])&&(n=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,n),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(s=>{this.lastKey&&s.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,n,s.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(s=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n,s.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,n))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||i)(X(x,16),X(he,16))};static \u0275pipe=ae({name:"translate",type:i,pure:!1});static \u0275prov=f({token:i,factory:i.\u0275fac})}return i})(),We=(()=>{class i{static forRoot(e={}){return{ngModule:i,providers:[e.loader||{provide:w,useClass:ce},e.compiler||{provide:E,useClass:ge},e.parser||{provide:b,useClass:fe},e.missingTranslationHandler||{provide:k,useClass:ue},F,{provide:Y,useValue:e.isolate},{provide:Q,useValue:e.useDefaultLang},{provide:te,useValue:e.extend},{provide:ee,useValue:e.defaultLanguage},x]}}static forChild(e={}){return{ngModule:i,providers:[e.loader||{provide:w,useClass:ce},e.compiler||{provide:E,useClass:ge},e.parser||{provide:b,useClass:fe},e.missingTranslationHandler||{provide:k,useClass:ue},{provide:Y,useValue:e.isolate},{provide:Q,useValue:e.useDefaultLang},{provide:te,useValue:e.extend},{provide:ee,useValue:e.defaultLanguage},x]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=oe({type:i});static \u0275inj=re({})}return i})();var N=class{constructor(){this.internetConnection=!0,this.serverConnection=!0}};var y=class{constructor(){this.dataMenu="",this.themeMode="system",this.themeDirection="rtl",this.themeLanguage="fa",this.themeHighlight="blue",this.innerWidth=0,this.innerHeight=0,this.mainPagePreloaderShow=!0,this.actionScrollTopPage=!1,this.actionScrollTopList=!1}};var O={tokenInfoStore:new M,deviceTokenInfoStore:new j,processInfoStore:new Map,coreSiteResultStore:new C,coreModuleResultStore:new C,coreCpMainResultStore:new C,enumRecordStatusResultStore:new C,currencyResultStore:new C,connectionStatusStore:new N,themeStore:new y};function pe(i=O,r){switch(r.type){case V:return g(c({},i),{tokenInfoStore:r.payload});case K:return g(c({},i),{deviceTokenInfoStore:r.payload});case Ee:return g(c({},i),{processInfoStore:r.payload});case Ie:return g(c({},i),{coreSiteResultStore:r.payload});case De:return g(c({},i),{coreModuleResultStore:r.payload});case Ae:return g(c({},i),{coreCpMainResultStore:r.payload});case _e:return g(c({},i),{currencyResultStore:r.payload});case je:return g(c({},i),{enumRecordStatusResultStore:r.payload});case Me:return g(c({},i),{connectionStatusStore:r.payload});case l:return g(c({},i),{themeStore:r.payload});default:return O}}var V="SET_TOKEN_INFO",K="SET_TOKEN_DEVICE",Ee="SET_Process_Info",Ie="SET_Core_Site",De="SET_Core_Module",Ae="SET_CpMain_Menu",_e="SET_Core_Currency",je="SET_Info_Enum",Me="SET_Connection_STATE",l="SET_Theme_STATE";var U=(()=>{let r=class r{constructor(){this.stateSubject=new G(O),this.state=O,this.stateSubject=new G(this.state),window.getInfo=()=>this.state}getStateSnapshot(){return this.stateSubject.getValue()}setState(t){Object.assign(this.state,pe(this.state,t)),this.stateSubject.next(this.state)}getState(t){if(typeof t!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return this.stateSubject.asObservable().pipe(D(t)).pipe($())}getStateDirect(){return this.stateSubject.pipe($())}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var Se="theme_mode",Te="theme_highlight",Le="theme_direction",ve="theme_language",ye=(()=>{let r=class r{constructor(t){this.cmsStoreService=t,this.themeStore=new y,this.getSystemMode=()=>window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light";let n=this.cmsStoreService.getStateSnapshot();n.themeStore&&(this.themeStore=n.themeStore)}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}onInitAppComponentStateOnChange(){this.cmsApiStoreSubscribe=this.cmsStoreService.getState(t=>t.themeStore).subscribe(t=>{h.consoleLog&&console.log("onInitAppComponentStateOnChange:ThemeService"),t?this.themeStore=t:this.themeStore=new y}),this.updateThemeModeType(this.getThemeModeTypeFromLocalStorage(),!0),this.updateThemeHighLight(this.getThemeHighLightFromLocalStorage(),!0),this.updateThemeDirection(this.getThemeDirectionFromLocalStorage(),!0),this.updateThemeLanguage(this.getThemeLanguageFromLocalStorage(),!0)}afterViewInitAppComponent(){setTimeout(()=>{this.htmlSelectorAddEvent()},200)}onNavigationStartAppComponent(){setTimeout(()=>{this.themeStore.dataMenu=""},200)}onNavigationEndAppComponent(){setTimeout(()=>{this.htmlSelectorAddEvent()},200)}htmlSelectorAddEvent(){document.querySelectorAll(".menu").forEach(n=>{let s=n;s.style.display="block"});let t=document.querySelectorAll(".accordion-btn");t?.length&&t.forEach(n=>n.addEventListener("click",s=>{n.querySelector("i:last-child").classList.toggle("fa-rotate-180")}))}getThemeModeTypeFromLocalStorage(){if(!localStorage)return"light";let t=localStorage.getItem(Se);return!t||t==="light"?"light":t==="dark"?"dark":"system"}getThemeHighLightFromLocalStorage(){if(!localStorage)return"";let t=localStorage.getItem(Te);return t||""}getThemeLanguageFromLocalStorage(){if(!localStorage)return"en";let t=localStorage.getItem(ve);return t||"en"}getThemeDirectionFromLocalStorage(){if(!localStorage)return"ltr";let t=localStorage.getItem(Le);return t&&t=="ltr","ltr"}updateThemeModeType(t,n=!1){t||(t="system");let s=t==="system"?this.getSystemMode():t;!n&&this.themeStore.themeMode==s||(localStorage&&localStorage.setItem(Se,s),this.themeStore.themeMode=s,this.cmsStoreService.setState({type:l,payload:this.themeStore}),setTimeout(()=>{this.themeStore.themeMode=="dark"?document.documentElement.querySelectorAll(".theme-light").forEach(o=>{o.classList.remove("theme-light"),o.classList.add("theme-dark")}):document.documentElement.querySelectorAll(".theme-dark").forEach(o=>{o.classList.remove("theme-dark"),o.classList.add("theme-light")})},10))}updateThemeHighLight(t,n=!1){(!t||t.length==0)&&(t="blue"),!(!n&&this.themeStore.themeHighlight==t)&&(localStorage&&localStorage.setItem(Te,t),this.themeStore.themeHighlight=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),setTimeout(()=>{if(this.themeStore.themeHighlight.length>0){var s=document.querySelectorAll(".page-highlight");s.length&&s.forEach(function(u){u.remove()});var o=document.createElement("link");o.rel="stylesheet",o.className="page-highlight",o.type="text/css",o.href="assets/styles/highlights/highlight_"+this.themeStore.themeHighlight+".css",document.getElementsByTagName("head")[0].appendChild(o)}},10))}updateThemeDirection(t,n=!1){t||(t="ltr"),!(!n&&this.themeStore.themeDirection==t)&&(localStorage&&localStorage.setItem(Le,t),this.themeStore.themeDirection=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),setTimeout(()=>{this.themeStore.themeDirection=="ltr"?document.documentElement.querySelectorAll(".theme-rtl").forEach(s=>{s.classList.remove("theme-rtl"),s.classList.add("theme-ltr")}):document.documentElement.querySelectorAll(".theme-ltr").forEach(s=>{s.classList.remove("theme-ltr"),s.classList.add("theme-rtl")})},10))}updateThemeLanguage(t,n=!1){t&&(!n&&this.themeStore.themeLanguage==t||(localStorage&&localStorage.setItem(ve,t),this.themeStore.themeLanguage=t,this.cmsStoreService.setState({type:l,payload:this.themeStore})))}updateMainPagePreloaderShow(t){this.themeStore.mainPagePreloaderShow=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("mainPagePreloaderShow :",this.themeStore.mainPagePreloaderShow)}updateInnerSize(){this.themeStore.innerWidth=window.innerWidth,this.themeStore.innerHeight=window.innerHeight,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows Width :",window.innerWidth,"windows Height :",window.innerHeight)}onActionScrollTopPage(t,n=0){if(t==!1){this.themeStore.actionScrollTopPage=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopPage);return}n>0?setTimeout(()=>{this.themeStore.actionScrollTopPage=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopPage)},1e3):(this.themeStore.actionScrollTopPage=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopPage))}onActionScrollTopList(t,n=0){if(t==!1){this.themeStore.actionScrollTopList=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopList);return}n>0?setTimeout(()=>{this.themeStore.actionScrollTopList=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopList)},1e3):(this.themeStore.actionScrollTopList=t,this.cmsStoreService.setState({type:l,payload:this.themeStore}),h.consoleLog&&console.log("windows actionGoTop :",this.themeStore.actionScrollTopList))}cleanDataMenu(){this.themeStore?.dataMenu?.length>0&&(this.themeStore.dataMenu="",this.cmsStoreService.setState({type:l,payload:this.themeStore}))}};r.\u0275fac=function(n){return new(n||r)(a(U))},r.\u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var xe="language",ft=(()=>{let r=class r{constructor(t,n,s,o){this.cmsStoreService=t,this.coreAuthService=n,this.translate=s,this.themeService=o,this.consoleLog=!0,this.tokenInfo=new M,this.deviceTokenInfo=new j,this.isAdminSite=!1,this.isSupportSite=!1,this.consoleLog=h.ProgressConsoleLog,this.coreAuthService.tokenInfoSubject.subscribe(u=>{this.cmsStoreService.setState({type:V,payload:u}),h.consoleLog&&console.log("SET_TOKEN_INFO")}),this.coreAuthService.tokenDeviceSubject.subscribe(u=>{this.cmsStoreService.setState({type:K,payload:u}),h.consoleLog&&console.log("SET_TOKEN_DEVICE")})}get isMobile(){return window.innerWidth<h.cmsViewConfig.mobileWindowInnerWidth}onInitAppComponentStateOnChange(){return this.cmsStoreService.getState(t=>(h.consoleLog&&console.log("onInitAppComponentStateOnChange:tokenhelper"),this.tokenInfo=t.tokenInfoStore,this.setDirectionThemeBylanguage(this.tokenInfo.language),this.CheckIsAdmin(),t))}getStateOnChange(){return this.cmsStoreService.getState(t=>(h.consoleLog&&console.log("getStateOnChange"),t))}getTokenInfoStateOnChange(){return this.coreAuthService.tokenInfoSubject}getTokenDeviceStateOnChange(){return this.coreAuthService.tokenDeviceSubject}getTokenInfoState(){return H(this,null,function*(){let t=this.coreAuthService.getUserToken();if(!t||t.length===0)return new M;let n=this.cmsStoreService.getStateSnapshot();return n?.tokenInfoStore?.userId>0?(this.tokenInfo=n.tokenInfoStore,n.tokenInfoStore):yield B(this.coreAuthService.ServiceCurrentToken()).then(s=>(this.cmsStoreService.setState({type:V,payload:s.item}),this.tokenInfo=s.item,s.item))})}getTokenDeviceState(){return H(this,null,function*(){let t=this.coreAuthService.getDeviceToken();if(!t||t.length===0)return new j;let n=this.cmsStoreService.getStateSnapshot();return n?.deviceTokenInfoStore?(this.deviceTokenInfo=n.deviceTokenInfoStore,n.deviceTokenInfoStore):yield B(this.coreAuthService.ServiceCurrentDeviceToken()).then(s=>(this.cmsStoreService.setState({type:K,payload:s.item}),this.deviceTokenInfo=s.item,s.item))})}setDirectionThemeBylanguage(t){(!t||t.length===0)&&(t=localStorage.getItem(xe)||this.translate.getDefaultLang()||"fa"),t==="ar"||t==="fa"?this.themeService.updateThemeDirection("ltr"):this.themeService.updateThemeDirection("rtl"),document.getElementsByTagName("html")[0].setAttribute("lang",t)}CurrentTokenInfoRenew(){this.coreAuthService.CurrentTokenInfoRenew()}CheckIsAdmin(){return this.tokenInfo.userAccessUserType===v.AdminCpSite||this.tokenInfo.userAccessUserType===v.AdminMainCms||this.tokenInfo.userAccessUserType===v.SupportCpSite||this.tokenInfo.userAccessUserType===v.SupportMainCms?(this.isAdminSite=!0,!0):(this.isAdminSite=!1,!1)}CheckIsSupport(){return this.tokenInfo.userAccessUserType===v.SupportCpSite||this.tokenInfo.userAccessUserType===v.SupportMainCms?(this.isSupportSite=!0,!0):(this.isSupportSite=!1,!1)}};r.\u0275fac=function(n){return new(n||r)(a(U),a(le),a(x),a(ye))},r.\u0275prov=f({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{w as a,x as b,qe as c,We as d,N as e,y as f,Ee as g,Ie as h,De as i,Ae as j,_e as k,je as l,Me as m,U as n,ye as o,ft as p};