import{d as T}from"./chunk-D5IZBDM7.js";import"./chunk-COQCJ57Y.js";import"./chunk-55TQTWJC.js";import"./chunk-TXZCIRAD.js";import"./chunk-E4XZ7LSV.js";import{b as I}from"./chunk-N3J6V5RZ.js";import{a}from"./chunk-3LVNQTYE.js";import{Gd as F,O as c,P as s,Ua as M,dc as E,fa as f}from"./chunk-X7QSBRRR.js";import"./chunk-3CILL3O3.js";import{$f as g,Ge as C,Lc as l,Qd as h,Ud as S,da as r,gd as u,gk as v,ja as d,ka as i,kd as m,nb as p,qk as O}from"./chunk-AFRBUGB6.js";var A=(()=>{let t=class t{constructor(){this.constructorInfoAreaId=this.constructor.name}ngOnInit(){}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d({type:t,selectors:[["app-sms"]],decls:1,vars:0,template:function(e,w){e&1&&p(0,"router-outlet")},dependencies:[u],encapsulation:2});let o=t;return o})();var R=[{path:"",component:A,data:{title:"ROUTE.SMS"},children:[{path:"main",loadChildren:()=>import("./chunk-N6HKNAB6.js").then(o=>o.SmsMainModule),data:{title:"ROUTE.SMS.MAIN"}},{path:"action",loadChildren:()=>import("./chunk-ZF5PIAFS.js").then(o=>o.SmsActionModule),data:{title:"ROUTE.SMS.ACTION"}},{path:"log",loadChildren:()=>import("./chunk-QRHFLNRL.js").then(o=>o.SmsLogModule),data:{title:"ROUTE.SMS.LOG"}},{path:"config",loadChildren:()=>import("./chunk-VDKH7EHF.js").then(o=>o.SmsConfigModule),data:{title:"ROUTE.SMS"}}]}],N=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[m.forChild(R),m]});let o=t;return o})();var X=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({providers:[S,h,C,a,a,v,g,O],imports:[l,N,c,s.withConfig({warnOnNgModelWithFormControl:"never"}),F,I,M,f,E,T]});let o=t;return o})();export{X as SmsModule};