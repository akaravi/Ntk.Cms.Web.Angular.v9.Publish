import{a as o}from"./chunk-6BECVAKB.js";import"./chunk-ZIVNU2XW.js";import{Lc as p,Ud as m,da as a,gd as C,ja as d,ka as r,kd as l,nb as c}from"./chunk-KXTWLLZH.js";var s=(()=>{let e=class e{constructor(){this.constructorInfoAreaId=this.constructor.name}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["app-core"]],decls:1,vars:0,template:function(i,O){i&1&&c(0,"router-outlet")},dependencies:[C],encapsulation:2});let t=e;return t})();var E=[{path:"",component:s,data:{title:"ROUTE.CORE"},children:[{path:"config",canActivate:[o],loadChildren:()=>import("./chunk-LLRXD3GB.js").then(t=>t.CoreConfigModule),data:{title:"ROUTE.CORE"}},{path:"action",canActivate:[o],loadChildren:()=>import("./chunk-NS6UONZA.js").then(t=>t.CoreMainActionModule),data:{title:"ROUTE.CORE.ACTION"}},{path:"user",loadChildren:()=>import("./chunk-W73CDKVY.js").then(t=>t.CoreUserModule),data:{title:"ROUTE.CORE.USER"}},{path:"usergroup",canActivate:[o],loadChildren:()=>import("./chunk-QMTGY2GC.js").then(t=>t.CoreUserGroupCmsModule),data:{title:"ROUTE.CORE.USERGROUP"}},{path:"user-support-access",canActivate:[o],loadChildren:()=>import("./chunk-Z534AC5V.js").then(t=>t.CoreUserSupportAccessCmsModule),data:{title:"ROUTE.CORE.USERSUPPORT"}},{path:"currency",canActivate:[o],loadChildren:()=>import("./chunk-3W5TUCSH.js").then(t=>t.CoreCurrencyCmsModule)},{path:"site",loadChildren:()=>import("./chunk-QRYMIKFE.js").then(t=>t.CoreSiteModule),data:{title:"ROUTE.CORE.SITE"}},{path:"sitecategory",canActivate:[o],loadChildren:()=>import("./chunk-6PIH6ILO.js").then(t=>t.CoreSiteCategoryCmsModule),data:{title:"ROUTE.CORE.SITECATEGORY"}},{path:"sitecategorymodule",canActivate:[o],loadChildren:()=>import("./chunk-SX2GPH6W.js").then(t=>t.CoreSiteCategoryCmsModuleModule),data:{title:"ROUTE.CORE.SITECATEGORYMODULE"}},{path:"sitedomainalias",canActivate:[o],loadChildren:()=>import("./chunk-6V7GURWQ.js").then(t=>t.CoreSiteDomainAliasModule),data:{title:"ROUTE.CORE.SITEDOMAINALIAS"}},{path:"cpmainmenu",canActivate:[o],loadChildren:()=>import("./chunk-PFS3DHJT.js").then(t=>t.CoreCpMainMenu),data:{title:"ROUTE.CORE.CPMAINMENU"}},{path:"module",canActivate:[o],loadChildren:()=>import("./chunk-YMEWAPZU.js").then(t=>t.CoreModuleModule),data:{title:"ROUTE.CORE.MODULE"}},{path:"module-entity",canActivate:[o],loadChildren:()=>import("./chunk-JAV5JIQT.js").then(t=>t.CoreModuleEntityModule),data:{title:"ROUTE.CORE.MODULEENTITY"}},{path:"module-entity-report-file",canActivate:[o],loadChildren:()=>import("./chunk-IF6YCRGO.js").then(t=>t.CoreModuleEntityReportFileModule),data:{title:"ROUTE.CORE.ENTITYREPORTFILE"}},{path:"modulesale",canActivate:[o],loadChildren:()=>import("./chunk-VQ77XMUS.js").then(t=>t.CoreModuleSaleModule),data:{title:"ROUTE.CORE.MODULESALE"}},{path:"userclaim",canActivate:[o],loadChildren:()=>import("./chunk-XEPEO5QT.js").then(t=>t.CoreUserClaimModule),data:{title:"ROUTE.CORE.USERCLAIM"}},{path:"location",canActivate:[o],loadChildren:()=>import("./chunk-OLUA57OU.js").then(t=>t.CoreLocationCmsModule),data:{title:"ROUTE.CORE.LOCATION"}},{path:"device",canActivate:[o],loadChildren:()=>import("./chunk-GT3C3FNA.js").then(t=>t.CoreDeviceModule),data:{title:"ROUTE.CORE.DEVICE"}},{path:"guide",loadChildren:()=>import("./chunk-QJRIFCEC.js").then(t=>t.CoreGuideCmsModule),data:{title:"ROUTE.CORE.GUIDE"}}]}],u=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=r({type:e}),e.\u0275inj=a({imports:[l.forChild(E),l]});let t=e;return t})();var D=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=r({type:e}),e.\u0275inj=a({providers:[m],imports:[u,p]});let t=e;return t})();export{D as CoreModule};