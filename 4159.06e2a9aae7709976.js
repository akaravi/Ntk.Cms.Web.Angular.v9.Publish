"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4159],{9084:(L,M,n)=>{n.d(M,{Y:()=>S});var a=n(7241),e=n(7969),u=n(4537),p=n(4511);let S=(()=>{class P{service;constructor(h){this.service=h}transform(h){return!h||h<=0?new a.y:this.service.ServiceGetOneById(h,1e6).pipe((0,e.U)(r=>{var s="";return r.isSuccess&&(r.item.title&&r.item.title.length>0&&(s=r.item.title),r.item.id&&r.item.id>0&&(s.length>0&&(s+=" | "),s+=r.item.id),r.item.domain&&r.item.domain.length>0&&r.item.subDomain&&r.item.subDomain.length>0?(s.length>0&&(s+=" | "),s=s+r.item.subDomain+"."+r.item.domain):r.item.domain&&r.item.domain.length>0&&(s.length>0&&(s+=" | "),s+=r.item.domain)),0===s.length&&(s=h.toString()),s},r=>h.toString()))}static \u0275fac=function(r){return new(r||P)(u.Y36(p._0e,16))};static \u0275pipe=u.Yjl({name:"cmssiteinfo",type:P,pure:!0})}return P})()},6609:(L,M,n)=>{n.d(M,{D:()=>B});var a=n(8239),e=n(4537),u=n(92),p=n(4511),S=n(7445),P=n(1927),C=n(3151),h=n(2147),r=n(1528),s=n(7969),g=n(656),D=n(6707),o=n(8692),c=n(1637),f=n(1379),m=n(8659),E=n(3331),A=n(9665),I=n(5738),R=n(1418);function T(d,O){if(1&d&&(e.TgZ(0,"label",8),e._uU(1),e.qZA()),2&d){const t=e.oxw();e.MGl("for","app-cms-site-selector-",t.id,""),e.xp6(1),e.Oqu(t.optionLabel)}}function y(d,O){if(1&d&&(e._UZ(0,"img",11),e.ALo(1,"cmsthumbnail")),2&d){const t=e.oxw().$implicit;e.s9C("src",e.lcZ(1,1,t.linkImageIdSrc),e.LSH)}}function U(d,O){if(1&d&&(e.TgZ(0,"mat-option",9),e.YNc(1,y,2,3,"img",10),e.TgZ(2,"span"),e._uU(3),e.qZA()()),2&d){const t=O.$implicit,i=e.oxw();e.Q6J("value",t)("disabled",i.optionDisabled),e.xp6(1),e.Q6J("ngIf",t.linkImageIdSrc),e.xp6(2),e.Oqu(i.displayOption(t))}}function W(d,O){if(1&d){const t=e.EpF();e.TgZ(0,"mat-icon",12),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.onActionSelectClear())}),e._uU(1,"close"),e.qZA()}}const K=["*"];let B=(()=>{class d{coreEnumService;translate;cdr;categoryService;static nextId=0;id=++d.nextId;constructor(t,i,l,v){this.coreEnumService=t,this.translate=i,this.cdr=l,this.categoryService=v,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new p.y$4;dataModelSelect=new p.Dp$;formControl=new u.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionChange=new e.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(t){this.onActionSelectForce(t)}loading=new g.O;get optionLoading(){return this.loading}set optionLoading(t){this.loading=t}ngOnInit(){this.loadOptions(),(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,P.O)(""),(0,C.b)(1500),(0,h.x)(),(0,r.w)(t=>this.DataGetAll("string"==typeof t||"number"==typeof t?t:"")))}displayFn(t){return t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0?t.virtual_Parent.titleML+" > "+t.titleML:t?t.titleML:void 0}displayOption(t){return t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0&&t.virtual_Parent.virtual_Parent&&t.virtual_Parent.virtual_Parent.title.length>0?t.virtual_Parent.virtual_Parent.titleML+" > "+t.virtual_Parent.titleML+" > "+t.titleML:t&&t.virtual_Parent&&t.virtual_Parent.title.length>0?t.virtual_Parent.titleML+" > "+t.titleML:t?t.titleML:void 0}DataGetAll(t){var i=this;return(0,a.Z)(function*(){const l=new p.Hay;if(l.rowPerPage=20,l.accessLoad=!0,t&&t.length>0){let _=new p.AO3;_=new p.AO3,_.propertyName="Symbol",_.value=t,_.searchType=p.J6G.Contains,_.clauseType=p.ppe.Or,l.filters.push(_),_=new p.AO3,_.propertyName="Title",_.value=t,_.searchType=p.J6G.Contains,_.clauseType=p.ppe.Or,l.filters.push(_),t&&"number"==typeof+t&&+t>0&&(_=new p.AO3,_.propertyName="Id",_.value=t,_.searchType=p.J6G.Equal,_.clauseType=p.ppe.Or,l.filters.push(_))}const v=i.constructor.name+"main";return i.loading.Start(v),yield(0,S.z)(i.categoryService.ServiceGetAll(l)).then(_=>(i.dataModelResult=_,i.optionSelectFirstItem&&(!i.dataModelSelect||!i.dataModelSelect.id||i.dataModelSelect.id<=0)&&i.dataModelResult.listItems.length>0&&(i.optionSelectFirstItem=!1,setTimeout(()=>{i.formControl.setValue(i.dataModelResult.listItems[0])},1e3),i.onActionSelect(i.dataModelResult.listItems[0])),i.loading.Stop(v),_.listItems))})()}onActionSelect(t){this.optionDisabled||(this.dataModelSelect=t,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(t){return this.filteredOptions.pipe((0,s.U)(i=>(i.find(l=>l.id===t.id)||i.push(t),i)))}onActionSelectForce(t){if("number"==typeof t&&t>0){if(this.dataModelSelect&&this.dataModelSelect.id===t)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(i=>i.id===t)){const i=this.dataModelResult.listItems.find(l=>l.id===t);return this.dataModelSelect=i,void this.formControl.setValue(i)}this.categoryService.ServiceGetOneIncludeParent(t).subscribe(i=>{i.isSuccess&&(this.filteredOptions=this.push(i.item),this.dataModelSelect=i.item,this.formControl.setValue(i.item),this.optionChange.emit(i.item))})}else{if(typeof t==typeof p.Dp$)return this.filteredOptions=this.push(t),this.dataModelSelect=t,void this.formControl.setValue(t);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new p.Dp$,this.loadOptions()}static \u0275fac=function(i){return new(i||d)(e.Y36(p.FLW),e.Y36(D.sK),e.Y36(e.sBO),e.Y36(p.XRW))};static \u0275cmp=e.Xpm({type:d,selectors:[["app-cms-location-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:K,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],[3,"options"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(i,l){if(1&i&&(e.F$t(),e.TgZ(0,"div",0),e._UZ(1,"app-progress-spinner",1),e.YNc(2,T,2,2,"label",2),e._UZ(3,"input",3),e.TgZ(4,"mat-autocomplete",4,5),e.NdJ("optionSelected",function(_){return l.onActionSelect(_.option.value)}),e.YNc(6,U,4,4,"mat-option",6),e.ALo(7,"async"),e.qZA(),e.YNc(8,W,2,0,"mat-icon",7),e.Hsn(9),e.qZA()),2&i){const v=e.MAs(5);e.xp6(1),e.Q6J("options",l.loading),e.xp6(1),e.Q6J("ngIf",(null==l.optionLabel?null:l.optionLabel.length)>0),e.xp6(1),e.s9C("placeholder",l.optionPlaceholder),e.MGl("id","app-cms-site-selector-",l.id,""),e.Q6J("formControl",l.formControl)("matAutocomplete",v),e.uIk("disabled",!!l.optionDisabled||null),e.xp6(1),e.Q6J("displayWith",l.displayFn),e.xp6(2),e.Q6J("ngForOf",e.lcZ(7,10,l.filteredOptions)),e.xp6(2),e.Q6J("ngIf",null==l.dataModelSelect?null:l.dataModelSelect.id)}},dependencies:[o.sg,o.O5,u.Fj,u.JJ,u.oH,c.XC,f.ey,c.ZL,m.R9,E.Hw,A.Nt,I.O,o.Ov,R.v],encapsulation:2})}return d})()},4370:(L,M,n)=>{n.d(M,{a:()=>s});var a=n(4537),e=n(92),u=n(4511),p=n(656),S=n(2607),P=n(6707),C=n(8692),h=n(1561);function r(g,D){if(1&g){const o=a.EpF();a.TgZ(0,"li")(1,"mat-checkbox",1),a.NdJ("change",function(){const m=a.CHM(o).$implicit,E=a.oxw();return a.KtG(E.onActionSelect(m))}),a._uU(2),a.qZA()()}if(2&g){const o=D.$implicit,c=a.oxw();a.xp6(1),a.Q6J("checked",c.fieldsStatus.get(o.id))("disabled",c.optionDisabled),a.xp6(1),a.hij(" ",o.title," ")}}let s=(()=>{class g{coreEnumService;categoryService;cdr;cmsToastrService;translate;static nextId=0;id=++g.nextId;constructor(o,c,f,m,E){this.coreEnumService=o,this.categoryService=c,this.cdr=f,this.cmsToastrService=m,this.translate=E,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new u.y$4;dataModelSelect=[];dataIdsSelect=[];loading=new p.O;get optionLoading(){return this.loading}set optionLoading(o){this.loading=o}formControl=new e.NI;fieldsStatus=new Map;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder=new a.vpe;optionChange=new a.vpe;optionSelectAdded=new a.vpe;optionSelectRemoved=new a.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(o){this.onActionSelectForce(o)}ngOnInit(){this.DataGetAll()}DataGetAll(){const o=new u.Hay;o.rowPerPage=50,o.accessLoad=!0;const c=this.constructor.name+"main";this.loading.Start(c),this.categoryService.ServiceGetAll(o).subscribe(f=>{f.isSuccess&&(this.dataModelResult=f,this.dataModelResult.listItems.forEach(m=>this.fieldsStatus.set(m.id,!1)),this.dataIdsSelect.forEach(m=>this.fieldsStatus.set(m,!0)),this.dataModelResult.listItems.forEach(m=>{this.fieldsStatus.get(m.id)&&this.dataModelSelect.push(m)})),this.loading.Stop(c)},f=>{this.cmsToastrService.typeError(f),this.loading.Stop(c)})}onActionSelect(o){this.fieldsStatus.get(o.id)?(this.fieldsStatus.set(o.id,!1),this.optionSelectRemoved.emit(o),this.dataModelSelect.splice(this.dataModelSelect.indexOf(o),1)):(this.fieldsStatus.set(o.id,!0),this.optionSelectAdded.emit(o),this.dataModelSelect.push(o)),this.optionChange.emit(this.dataModelSelect)}onActionSelectForce(o){typeof o==typeof Array(Number)?o.forEach(c=>{this.dataIdsSelect.push(c)}):typeof o==typeof Array(u.MCb)&&o.forEach(c=>{this.dataIdsSelect.push(c.id)}),this.dataIdsSelect.forEach(c=>this.fieldsStatus.set(c,!0))}onActionReload(){this.DataGetAll()}static \u0275fac=function(c){return new(c||g)(a.Y36(u.FLW),a.Y36(u.PwI),a.Y36(a.sBO),a.Y36(S.e),a.Y36(P.sK))};static \u0275cmp=a.Xpm({type:g,selectors:[["app-cms-sitecategory-selectionlist"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange",optionSelectAdded:"optionSelectAdded",optionSelectRemoved:"optionSelectRemoved"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"checked","disabled","change"]],template:function(c,f){1&c&&(a.TgZ(0,"ul"),a.YNc(1,r,3,3,"li",0),a.qZA()),2&c&&(a.xp6(1),a.Q6J("ngForOf",f.dataModelResult.listItems))},dependencies:[C.sg,h.oG],encapsulation:2})}return g})()}}]);