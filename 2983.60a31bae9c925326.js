"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[2983],{9084:(F,L,n)=>{n.d(L,{Y:()=>A});var t=n(7241),i=n(7969),g=n(4537),m=n(4511);let A=(()=>{class S{service;constructor(v){this.service=v}transform(v){return!v||v<=0?new t.y:this.service.ServiceGetOneById(v,1e6).pipe((0,i.U)(_=>{var d="";return _.isSuccess&&(_.item.title&&_.item.title.length>0&&(d=_.item.title),_.item.id&&_.item.id>0&&(d.length>0&&(d+=" | "),d+=_.item.id),_.item.domain&&_.item.domain.length>0&&_.item.subDomain&&_.item.subDomain.length>0?(d.length>0&&(d+=" | "),d=d+_.item.subDomain+"."+_.item.domain):_.item.domain&&_.item.domain.length>0&&(d.length>0&&(d+=" | "),d+=_.item.domain)),0===d.length&&(d=v.toString()),d},_=>v.toString()))}static \u0275fac=function(_){return new(_||S)(g.Y36(m._0e,16))};static \u0275pipe=g.Yjl({name:"cmssiteinfo",type:S,pure:!0})}return S})()},9835:(F,L,n)=>{n.d(L,{v:()=>T});var t=n(4537),i=n(8692),g=n(6707);let m=(()=>{class o{transform(l,r){if(!l)return[];let P=Object.keys(l);return P=P.filter(E=>E&&E.length>0&&E.toLowerCase().indexOf("antiinjection")<0),r&&r.size>0&&(P=P.filter(E=>E&&E.length>0&&r.has(E))),P}static \u0275fac=function(r){return new(r||o)};static \u0275pipe=t.Yjl({name:"listkeys",type:o,pure:!0})}return o})();function A(o,h){1&o&&(t.TgZ(0,"div",6)(1,"div",7),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",7),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"div",8),t.qZA()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"TITLE.parameter")),t.xp6(3),t.Oqu(t.lcZ(6,4,"TITLE.Values")))}function S(o,h){if(1&o&&(t.TgZ(0,"div",9)(1,"div",7),t._uU(2),t.qZA(),t.TgZ(3,"div",7),t._uU(4),t.qZA(),t._UZ(5,"div",10),t.qZA()),2&o){const l=h.$implicit,r=t.oxw(2);t.xp6(2),t.Oqu(r.optionFields&&r.optionFields.size>0?r.optionFields.get(l):l),t.xp6(2),t.Oqu(r.dataModel[l])}}function D(o,h){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,A,8,6,"div",4),t.YNc(2,S,6,2,"div",5),t.ALo(3,"listkeys"),t.qZA()),2&o){const l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.optionViewHead),t.xp6(1),t.Q6J("ngForOf",t.xi3(3,2,l.dataModel,l.optionFields))}}function v(o,h){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const l=h.$implicit,r=t.oxw(3);t.xp6(1),t.Oqu(r.optionFields&&r.optionFields.size>0?r.optionFields.get(l):l)}}function _(o,h){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,v,2,1,"div",11),t.ALo(2,"listkeys"),t._UZ(3,"div",8),t.qZA()),2&o){const l=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,l.dataModel[0],l.optionFields))}}function d(o,h){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const l=h.$implicit,r=t.oxw().$implicit;t.xp6(1),t.Oqu(r[l])}}function O(o,h){if(1&o&&(t.TgZ(0,"div",9),t.YNc(1,d,2,1,"div",11),t.ALo(2,"listkeys"),t._UZ(3,"div",10),t.qZA()),2&o){const l=h.$implicit,r=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,l,r.optionFields))}}function x(o,h){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,_,4,4,"div",4),t.YNc(2,O,4,4,"div",5),t.qZA()),2&o){const l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.optionViewHead),t.xp6(1),t.Q6J("ngForOf",l.dataModel)}}function s(o,h){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const l=h.$implicit,r=t.oxw(3);t.xp6(1),t.Oqu(r.optionFields&&r.optionFields.size>0?r.optionFields.get(l):l)}}function p(o,h){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,s,2,1,"div",11),t.ALo(2,"listkeys"),t._UZ(3,"div",8),t.qZA()),2&o){const l=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,l.dataModel[0],l.optionFields))}}function C(o,h){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const l=h.$implicit,r=t.oxw(2);t.xp6(1),t.Oqu(r.dataModel[l])}}function M(o,h){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,p,4,4,"div",4),t.TgZ(2,"div",9),t.YNc(3,C,2,1,"div",11),t.ALo(4,"listkeys"),t._UZ(5,"div",10),t.qZA()()),2&o){const l=t.oxw();t.xp6(1),t.Q6J("ngIf",l.optionViewHead),t.xp6(2),t.Q6J("ngForOf",t.xi3(4,2,l.dataModel,l.optionFields))}}let T=(()=>{class o{static nextId=0;id=++o.nextId;constructor(){}optionMethod=1;dataModel;optionFields;optionViewHead=!0;ngOnInit(){}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=t.Xpm({type:o,selectors:[["app-cms-json-list"]],inputs:{optionMethod:"optionMethod",dataModel:"dataModel",optionFields:"optionFields",optionViewHead:"optionViewHead"},decls:5,vars:3,consts:[[1,"card","card-style"],[1,"content","mb-0"],["class","table",4,"ngIf"],[1,"table"],["class","th",4,"ngIf"],["class","tr",4,"ngFor","ngForOf"],[1,"th"],[1,"td"],[1,"clear"],[1,"tr"],[2,"clear","both"],["class","td",4,"ngFor","ngForOf"]],template:function(r,P){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,D,4,5,"div",2),t.YNc(3,x,3,2,"div",2),t.YNc(4,M,6,5,"div",2),t.qZA()()),2&r&&(t.xp6(2),t.Q6J("ngIf",1===P.optionMethod&&P.dataModel),t.xp6(1),t.Q6J("ngIf",2===P.optionMethod&&P.dataModel),t.xp6(1),t.Q6J("ngIf",3===P.optionMethod&&P.dataModel))},dependencies:[i.sg,i.O5,g.X$,m],styles:[".table[_ngcontent-%COMP%]{display:table;border:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]{display:table-row;background-color:#40a1f5;color:#fff;font-weight:700}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f9f9f9}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row;border-bottom:1px solid #000}.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:15px;border-bottom:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border:0}.clear[_ngcontent-%COMP%]{clear:both}"]})}return o})()},6609:(F,L,n)=>{n.d(L,{D:()=>b});var t=n(8239),i=n(4537),g=n(92),m=n(4511),A=n(7445),S=n(1927),D=n(3151),v=n(2147),_=n(1528),d=n(7969),O=n(656),x=n(6707),s=n(8692),p=n(1637),C=n(1379),M=n(8659),T=n(3331),o=n(9665),h=n(5738),l=n(1418);function r(f,y){if(1&f&&(i.TgZ(0,"label",8),i._uU(1),i.qZA()),2&f){const e=i.oxw();i.MGl("for","app-cms-site-selector-",e.id,""),i.xp6(1),i.Oqu(e.optionLabel)}}function P(f,y){if(1&f&&(i._UZ(0,"img",11),i.ALo(1,"cmsthumbnail")),2&f){const e=i.oxw().$implicit;i.s9C("src",i.lcZ(1,1,e.linkImageIdSrc),i.LSH)}}function E(f,y){if(1&f&&(i.TgZ(0,"mat-option",9),i.YNc(1,P,2,3,"img",10),i.TgZ(2,"span"),i._uU(3),i.qZA()()),2&f){const e=y.$implicit,a=i.oxw();i.Q6J("value",e)("disabled",a.optionDisabled),i.xp6(1),i.Q6J("ngIf",e.linkImageIdSrc),i.xp6(2),i.Oqu(a.displayOption(e))}}function R(f,y){if(1&f){const e=i.EpF();i.TgZ(0,"mat-icon",12),i.NdJ("click",function(){i.CHM(e);const c=i.oxw();return i.KtG(c.onActionSelectClear())}),i._uU(1,"close"),i.qZA()}}const Z=["*"];let b=(()=>{class f{coreEnumService;translate;cdr;categoryService;static nextId=0;id=++f.nextId;constructor(e,a,c,I){this.coreEnumService=e,this.translate=a,this.cdr=c,this.categoryService=I,this.loading.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(u=>{this.loading.message=u})}dataModelResult=new m.y$4;dataModelSelect=new m.Dp$;formControl=new g.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionChange=new i.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new O.O;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions(),(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,S.O)(""),(0,D.b)(1500),(0,v.x)(),(0,_.w)(e=>this.DataGetAll("string"==typeof e||"number"==typeof e?e:"")))}displayFn(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}displayOption(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}DataGetAll(e){var a=this;return(0,t.Z)(function*(){const c=new m.Hay;if(c.rowPerPage=20,c.accessLoad=!0,e&&e.length>0){let u=new m.AO3;u=new m.AO3,u.propertyName="Symbol",u.value=e,u.searchType=m.J6G.Contains,u.clauseType=m.ppe.Or,c.filters.push(u),u=new m.AO3,u.propertyName="Title",u.value=e,u.searchType=m.J6G.Contains,u.clauseType=m.ppe.Or,c.filters.push(u),e&&"number"==typeof+e&&+e>0&&(u=new m.AO3,u.propertyName="Id",u.value=e,u.searchType=m.J6G.Equal,u.clauseType=m.ppe.Or,c.filters.push(u))}const I=a.constructor.name+"main";return a.loading.Start(I),yield(0,A.z)(a.categoryService.ServiceGetAll(c)).then(u=>(a.dataModelResult=u,a.optionSelectFirstItem&&(!a.dataModelSelect||!a.dataModelSelect.id||a.dataModelSelect.id<=0)&&a.dataModelResult.listItems.length>0&&(a.optionSelectFirstItem=!1,setTimeout(()=>{a.formControl.setValue(a.dataModelResult.listItems[0])},1e3),a.onActionSelect(a.dataModelResult.listItems[0])),a.loading.Stop(I),u.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,d.U)(a=>(a.find(c=>c.id===e.id)||a.push(e),a)))}onActionSelectForce(e){if("number"==typeof e&&e>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(a=>a.id===e)){const a=this.dataModelResult.listItems.find(c=>c.id===e);return this.dataModelSelect=a,void this.formControl.setValue(a)}this.categoryService.ServiceGetOneIncludeParent(e).subscribe(a=>{a.isSuccess&&(this.filteredOptions=this.push(a.item),this.dataModelSelect=a.item,this.formControl.setValue(a.item),this.optionChange.emit(a.item))})}else{if(typeof e==typeof m.Dp$)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new m.Dp$,this.loadOptions()}static \u0275fac=function(a){return new(a||f)(i.Y36(m.FLW),i.Y36(x.sK),i.Y36(i.sBO),i.Y36(m.XRW))};static \u0275cmp=i.Xpm({type:f,selectors:[["app-cms-location-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:Z,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],[3,"options"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(a,c){if(1&a&&(i.F$t(),i.TgZ(0,"div",0),i._UZ(1,"app-progress-spinner",1),i.YNc(2,r,2,2,"label",2),i._UZ(3,"input",3),i.TgZ(4,"mat-autocomplete",4,5),i.NdJ("optionSelected",function(u){return c.onActionSelect(u.option.value)}),i.YNc(6,E,4,4,"mat-option",6),i.ALo(7,"async"),i.qZA(),i.YNc(8,R,2,0,"mat-icon",7),i.Hsn(9),i.qZA()),2&a){const I=i.MAs(5);i.xp6(1),i.Q6J("options",c.loading),i.xp6(1),i.Q6J("ngIf",(null==c.optionLabel?null:c.optionLabel.length)>0),i.xp6(1),i.s9C("placeholder",c.optionPlaceholder),i.MGl("id","app-cms-site-selector-",c.id,""),i.Q6J("formControl",c.formControl)("matAutocomplete",I),i.uIk("disabled",!!c.optionDisabled||null),i.xp6(1),i.Q6J("displayWith",c.displayFn),i.xp6(2),i.Q6J("ngForOf",i.lcZ(7,10,c.filteredOptions)),i.xp6(2),i.Q6J("ngIf",null==c.dataModelSelect?null:c.dataModelSelect.id)}},dependencies:[s.sg,s.O5,g.Fj,g.JJ,g.oH,p.XC,C.ey,p.ZL,M.R9,T.Hw,o.Nt,h.O,s.Ov,l.v],encapsulation:2})}return f})()},4370:(F,L,n)=>{n.d(L,{a:()=>d});var t=n(4537),i=n(92),g=n(4511),m=n(656),A=n(2607),S=n(6707),D=n(8692),v=n(1561);function _(O,x){if(1&O){const s=t.EpF();t.TgZ(0,"li")(1,"mat-checkbox",1),t.NdJ("change",function(){const M=t.CHM(s).$implicit,T=t.oxw();return t.KtG(T.onActionSelect(M))}),t._uU(2),t.qZA()()}if(2&O){const s=x.$implicit,p=t.oxw();t.xp6(1),t.Q6J("checked",p.fieldsStatus.get(s.id))("disabled",p.optionDisabled),t.xp6(1),t.hij(" ",s.title," ")}}let d=(()=>{class O{coreEnumService;categoryService;cdr;cmsToastrService;translate;static nextId=0;id=++O.nextId;constructor(s,p,C,M,T){this.coreEnumService=s,this.categoryService=p,this.cdr=C,this.cmsToastrService=M,this.translate=T,this.loading.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(o=>{this.loading.message=o})}dataModelResult=new g.y$4;dataModelSelect=[];dataIdsSelect=[];loading=new m.O;get optionLoading(){return this.loading}set optionLoading(s){this.loading=s}formControl=new i.NI;fieldsStatus=new Map;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder=new t.vpe;optionChange=new t.vpe;optionSelectAdded=new t.vpe;optionSelectRemoved=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(s){this.onActionSelectForce(s)}ngOnInit(){this.DataGetAll()}DataGetAll(){const s=new g.Hay;s.rowPerPage=50,s.accessLoad=!0;const p=this.constructor.name+"main";this.loading.Start(p),this.categoryService.ServiceGetAll(s).subscribe(C=>{C.isSuccess&&(this.dataModelResult=C,this.dataModelResult.listItems.forEach(M=>this.fieldsStatus.set(M.id,!1)),this.dataIdsSelect.forEach(M=>this.fieldsStatus.set(M,!0)),this.dataModelResult.listItems.forEach(M=>{this.fieldsStatus.get(M.id)&&this.dataModelSelect.push(M)})),this.loading.Stop(p)},C=>{this.cmsToastrService.typeError(C),this.loading.Stop(p)})}onActionSelect(s){this.fieldsStatus.get(s.id)?(this.fieldsStatus.set(s.id,!1),this.optionSelectRemoved.emit(s),this.dataModelSelect.splice(this.dataModelSelect.indexOf(s),1)):(this.fieldsStatus.set(s.id,!0),this.optionSelectAdded.emit(s),this.dataModelSelect.push(s)),this.optionChange.emit(this.dataModelSelect)}onActionSelectForce(s){typeof s==typeof Array(Number)?s.forEach(p=>{this.dataIdsSelect.push(p)}):typeof s==typeof Array(g.MCb)&&s.forEach(p=>{this.dataIdsSelect.push(p.id)}),this.dataIdsSelect.forEach(p=>this.fieldsStatus.set(p,!0))}onActionReload(){this.DataGetAll()}static \u0275fac=function(p){return new(p||O)(t.Y36(g.FLW),t.Y36(g.PwI),t.Y36(t.sBO),t.Y36(A.e),t.Y36(S.sK))};static \u0275cmp=t.Xpm({type:O,selectors:[["app-cms-sitecategory-selectionlist"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange",optionSelectAdded:"optionSelectAdded",optionSelectRemoved:"optionSelectRemoved"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"checked","disabled","change"]],template:function(p,C){1&p&&(t.TgZ(0,"ul"),t.YNc(1,_,3,3,"li",0),t.qZA()),2&p&&(t.xp6(1),t.Q6J("ngForOf",C.dataModelResult.listItems))},dependencies:[D.sg,v.oG],encapsulation:2})}return O})()}}]);