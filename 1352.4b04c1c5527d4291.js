"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[1352],{9084:(x,D,n)=>{n.d(D,{Y:()=>A});var t=n(7241),i=n(7969),v=n(4537),m=n(4511);let A=(()=>{class E{service;constructor(g){this.service=g}transform(g){return!g||g<=0?new t.y:this.service.ServiceGetOneById(g,1e6).pipe((0,i.U)(d=>{var l="";return d.isSuccess&&(d.item.title&&d.item.title.length>0&&(l=d.item.title),d.item.id&&d.item.id>0&&(l.length>0&&(l+=" | "),l+=d.item.id),d.item.domain&&d.item.domain.length>0&&d.item.subDomain&&d.item.subDomain.length>0?(l.length>0&&(l+=" | "),l=l+d.item.subDomain+"."+d.item.domain):d.item.domain&&d.item.domain.length>0&&(l.length>0&&(l+=" | "),l+=d.item.domain)),0===l.length&&(l=g.toString()),l},d=>g.toString()))}static \u0275fac=function(d){return new(d||E)(v.Y36(m._0e,16))};static \u0275pipe=v.Yjl({name:"cmssiteinfo",type:E,pure:!0})}return E})()},9835:(x,D,n)=>{n.d(D,{v:()=>C});var t=n(4537),i=n(8692),v=n(6707);let m=(()=>{class o{transform(a,p){if(!a)return[];let O=Object.keys(a);return O=O.filter(y=>y&&y.length>0&&y.toLowerCase().indexOf("antiinjection")<0),p&&p.size>0&&(O=O.filter(y=>y&&y.length>0&&p.has(y))),O}static \u0275fac=function(p){return new(p||o)};static \u0275pipe=t.Yjl({name:"listkeys",type:o,pure:!0})}return o})();function A(o,f){1&o&&(t.TgZ(0,"div",6)(1,"div",7),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",7),t._uU(5),t.ALo(6,"translate"),t.qZA(),t._UZ(7,"div",8),t.qZA()),2&o&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"TITLE.parameter")),t.xp6(3),t.Oqu(t.lcZ(6,4,"TITLE.Values")))}function E(o,f){if(1&o&&(t.TgZ(0,"div",9)(1,"div",7),t._uU(2),t.qZA(),t.TgZ(3,"div",7),t._uU(4),t.qZA(),t._UZ(5,"div",10),t.qZA()),2&o){const a=f.$implicit,p=t.oxw(2);t.xp6(2),t.Oqu(p.optionFields&&p.optionFields.size>0?p.optionFields.get(a):a),t.xp6(2),t.Oqu(p.dataModel[a])}}function T(o,f){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,A,8,6,"div",4),t.YNc(2,E,6,2,"div",5),t.ALo(3,"listkeys"),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.optionViewHead),t.xp6(1),t.Q6J("ngForOf",t.xi3(3,2,a.dataModel,a.optionFields))}}function g(o,f){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const a=f.$implicit,p=t.oxw(3);t.xp6(1),t.Oqu(p.optionFields&&p.optionFields.size>0?p.optionFields.get(a):a)}}function d(o,f){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,g,2,1,"div",11),t.ALo(2,"listkeys"),t._UZ(3,"div",8),t.qZA()),2&o){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,a.dataModel[0],a.optionFields))}}function l(o,f){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const a=f.$implicit,p=t.oxw().$implicit;t.xp6(1),t.Oqu(p[a])}}function L(o,f){if(1&o&&(t.TgZ(0,"div",9),t.YNc(1,l,2,1,"div",11),t.ALo(2,"listkeys"),t._UZ(3,"div",10),t.qZA()),2&o){const a=f.$implicit,p=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,a,p.optionFields))}}function c(o,f){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,d,4,4,"div",4),t.YNc(2,L,4,4,"div",5),t.qZA()),2&o){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.optionViewHead),t.xp6(1),t.Q6J("ngForOf",a.dataModel)}}function P(o,f){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const a=f.$implicit,p=t.oxw(3);t.xp6(1),t.Oqu(p.optionFields&&p.optionFields.size>0?p.optionFields.get(a):a)}}function r(o,f){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,P,2,1,"div",11),t.ALo(2,"listkeys"),t._UZ(3,"div",8),t.qZA()),2&o){const a=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,a.dataModel[0],a.optionFields))}}function _(o,f){if(1&o&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&o){const a=f.$implicit,p=t.oxw(2);t.xp6(1),t.Oqu(p.dataModel[a])}}function S(o,f){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,r,4,4,"div",4),t.TgZ(2,"div",9),t.YNc(3,_,2,1,"div",11),t.ALo(4,"listkeys"),t._UZ(5,"div",10),t.qZA()()),2&o){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.optionViewHead),t.xp6(2),t.Q6J("ngForOf",t.xi3(4,2,a.dataModel,a.optionFields))}}let C=(()=>{class o{static nextId=0;id=++o.nextId;constructor(){}optionMethod=1;dataModel;optionFields;optionViewHead=!0;ngOnInit(){}static \u0275fac=function(p){return new(p||o)};static \u0275cmp=t.Xpm({type:o,selectors:[["app-cms-json-list"]],inputs:{optionMethod:"optionMethod",dataModel:"dataModel",optionFields:"optionFields",optionViewHead:"optionViewHead"},decls:5,vars:3,consts:[[1,"card","card-style"],[1,"content","mb-0"],["class","table",4,"ngIf"],[1,"table"],["class","th",4,"ngIf"],["class","tr",4,"ngFor","ngForOf"],[1,"th"],[1,"td"],[1,"clear"],[1,"tr"],[2,"clear","both"],["class","td",4,"ngFor","ngForOf"]],template:function(p,O){1&p&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,T,4,5,"div",2),t.YNc(3,c,3,2,"div",2),t.YNc(4,S,6,5,"div",2),t.qZA()()),2&p&&(t.xp6(2),t.Q6J("ngIf",1===O.optionMethod&&O.dataModel),t.xp6(1),t.Q6J("ngIf",2===O.optionMethod&&O.dataModel),t.xp6(1),t.Q6J("ngIf",3===O.optionMethod&&O.dataModel))},dependencies:[i.sg,i.O5,v.X$,m],styles:[".table[_ngcontent-%COMP%]{display:table;border:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]{display:table-row;background-color:#40a1f5;color:#fff;font-weight:700}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f9f9f9}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row;border-bottom:1px solid #000}.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:15px;border-bottom:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border:0}.clear[_ngcontent-%COMP%]{clear:both}"]})}return o})()},6609:(x,D,n)=>{n.d(D,{D:()=>U});var t=n(8239),i=n(4537),v=n(92),m=n(4511),A=n(7445),E=n(1927),T=n(3151),g=n(2147),d=n(1528),l=n(7969),L=n(656),c=n(6707),P=n(4032),r=n(8692),_=n(1637),S=n(1379),C=n(8659),o=n(3331),f=n(9665),a=n(5738),p=n(1418);function O(M,R){if(1&M&&(i.TgZ(0,"label",8),i._uU(1),i.qZA()),2&M){const e=i.oxw();i.MGl("for","app-cms-site-selector-",e.id,""),i.xp6(1),i.Oqu(e.optionLabel)}}function y(M,R){if(1&M&&(i._UZ(0,"img",11),i.ALo(1,"cmsthumbnail")),2&M){const e=i.oxw().$implicit;i.s9C("src",i.lcZ(1,1,e.linkImageIdSrc),i.LSH)}}function b(M,R){if(1&M&&(i.TgZ(0,"mat-option",9),i.YNc(1,y,2,3,"img",10),i.TgZ(2,"span"),i._uU(3),i.qZA()()),2&M){const e=R.$implicit,s=i.oxw();i.Q6J("value",e)("disabled",s.optionDisabled),i.xp6(1),i.Q6J("ngIf",e.linkImageIdSrc),i.xp6(2),i.Oqu(s.displayOption(e))}}function Z(M,R){if(1&M){const e=i.EpF();i.TgZ(0,"mat-icon",12),i.NdJ("click",function(){i.CHM(e);const u=i.oxw();return i.KtG(u.onActionSelectClear())}),i._uU(1,"close"),i.qZA()}}const F=["*"];let U=(()=>{class M{coreEnumService;translate;publicHelper;cdr;categoryService;static nextId=0;id=++M.nextId;constructor(e,s,u,I,h){this.coreEnumService=e,this.translate=s,this.publicHelper=u,this.cdr=I,this.categoryService=h,this.publicHelper.processService.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(W=>{this.loading.message=W})}dataModelResult=new m.y$4;dataModelSelect=new m.Dp$;formControl=new v.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionChange=new i.vpe;optionReload=()=>this.onActionButtonReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new L.O;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions(),(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,E.O)(""),(0,T.b)(1500),(0,g.x)(),(0,d.w)(e=>this.DataGetAll("string"==typeof e||"number"==typeof e?e:"")))}displayFn(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}displayOption(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}DataGetAll(e){var s=this;return(0,t.Z)(function*(){const u=new m.Hay;if(u.rowPerPage=20,u.accessLoad=!0,e&&e.length>0){let h=new m.AO3;h=new m.AO3,h.propertyName="Symbol",h.value=e,h.searchType=m.J6G.Contains,h.clauseType=m.ppe.Or,u.filters.push(h),h=new m.AO3,h.propertyName="Title",h.value=e,h.searchType=m.J6G.Contains,h.clauseType=m.ppe.Or,u.filters.push(h),e&&"number"==typeof+e&&+e>0&&(h=new m.AO3,h.propertyName="Id",h.value=e,h.searchType=m.J6G.Equal,h.clauseType=m.ppe.Or,u.filters.push(h))}const I=s.constructor.name+"main";return s.publicHelper.processService.processStart(I),yield(0,A.z)(s.categoryService.ServiceGetAll(u)).then(h=>(s.dataModelResult=h,s.optionSelectFirstItem&&(!s.dataModelSelect||!s.dataModelSelect.id||s.dataModelSelect.id<=0)&&s.dataModelResult.listItems.length>0&&(s.optionSelectFirstItem=!1,setTimeout(()=>{s.formControl.setValue(s.dataModelResult.listItems[0])},1e3),s.onActionSelect(s.dataModelResult.listItems[0])),s.publicHelper.processService.processStop(I),h.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,l.U)(s=>(s.find(u=>u.id===e.id)||s.push(e),s)))}onActionSelectForce(e){if("number"==typeof e&&e>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(s=>s.id===e)){const s=this.dataModelResult.listItems.find(u=>u.id===e);return this.dataModelSelect=s,void this.formControl.setValue(s)}this.categoryService.ServiceGetOneIncludeParent(e).subscribe({next:s=>{s.isSuccess&&(this.filteredOptions=this.push(s.item),this.dataModelSelect=s.item,this.formControl.setValue(s.item),this.optionChange.emit(s.item))}})}else{if(typeof e==typeof m.Dp$)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionButtonReload(){this.dataModelSelect=new m.Dp$,this.loadOptions()}static \u0275fac=function(s){return new(s||M)(i.Y36(m.FLW),i.Y36(c.sK),i.Y36(P.i),i.Y36(i.sBO),i.Y36(m.XRW))};static \u0275cmp=i.Xpm({type:M,selectors:[["app-cms-location-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:F,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4","progressOverlayContainer"],[3,"optionsInfoAreaId"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(s,u){if(1&s&&(i.F$t(),i.TgZ(0,"div",0),i._UZ(1,"app-progress-spinner",1),i.YNc(2,O,2,2,"label",2),i._UZ(3,"input",3),i.TgZ(4,"mat-autocomplete",4,5),i.NdJ("optionSelected",function(h){return u.onActionSelect(h.option.value)}),i.YNc(6,b,4,4,"mat-option",6),i.ALo(7,"async"),i.qZA(),i.YNc(8,Z,2,0,"mat-icon",7),i.Hsn(9),i.qZA()),2&s){const I=i.MAs(5);i.xp6(1),i.Q6J("optionsInfoAreaId",u.constructor.name),i.xp6(1),i.Q6J("ngIf",(null==u.optionLabel?null:u.optionLabel.length)>0),i.xp6(1),i.s9C("placeholder",u.optionPlaceholder),i.MGl("id","app-cms-site-selector-",u.id,""),i.Q6J("formControl",u.formControl)("matAutocomplete",I),i.uIk("disabled",!!u.optionDisabled||null),i.xp6(1),i.Q6J("displayWith",u.displayFn),i.xp6(2),i.Q6J("ngForOf",i.lcZ(7,10,u.filteredOptions)),i.xp6(2),i.Q6J("ngIf",null==u.dataModelSelect?null:u.dataModelSelect.id)}},dependencies:[r.sg,r.O5,v.Fj,v.JJ,v.oH,_.XC,S.ey,_.ZL,C.R9,o.Hw,f.Nt,a.O,r.Ov,p.v],encapsulation:2})}return M})()},7529:(x,D,n)=>{n.d(D,{I:()=>d});var t=n(4537),i=n(8832),v=n(8692),m=n(8697);const A=["progressSpinnerRef"];function E(l,L){if(1&l&&(t.TgZ(0,"ul",5)(1,"li")(2,"span",6),t._UZ(3,"i",7),t.qZA(),t._uU(4),t.qZA()()),2&l){const c=L.$implicit;t.xp6(3),t.Q6J("ngClass",c.value.inRun?"fas fa-spinner fa-pulse":"fas fa-check-square"),t.xp6(1),t.hij("",c.value.title," ")}}function T(l,L){if(1&l&&(t._UZ(0,"mat-progress-spinner",3)(1,"br"),t.TgZ(2,"div"),t._uU(3),t._UZ(4,"br"),t.YNc(5,E,5,2,"ul",4),t.ALo(6,"keyvalue"),t.qZA()),2&l){const c=t.oxw();t.Q6J("color",c.optionsData.color)("diameter",c.optionsData.diameter)("mode",c.optionsData.mode)("strokeWidth",c.optionsData.strokeWidth)("value",c.optionsData.value),t.xp6(3),t.hij("",c.optionsData.message," "),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,7,c.optionsData.processInfoAll))}}function g(l,L){if(1&l&&(t.TgZ(0,"div",8),t._UZ(1,"mat-progress-spinner",3)(2,"br"),t.TgZ(3,"div"),t._uU(4),t.qZA()()),2&l){const c=t.oxw();t.xp6(1),t.Q6J("color",c.optionsData.color)("diameter",c.optionsData.diameter)("mode",c.optionsData.mode)("strokeWidth",c.optionsData.strokeWidth)("value",c.optionsData.value),t.xp6(3),t.Oqu(c.optionsData.message)}}let d=(()=>{class l{vcRef;overlayService;static nextId=0;id=++l.nextId;set options(c){this.optionsData=c}get options(){return this.optionsData}optionsData;progressSpinnerRef;progressSpinnerOverlayConfig;overlayRef;constructor(c,P){this.vcRef=c,this.overlayService=P}ngOnInit(){!this.optionsData||!this.optionsData.Globally||(this.progressSpinnerOverlayConfig={hasBackdrop:this.optionsData.backdropEnabled},this.optionsData.positionGloballyCenter&&(this.progressSpinnerOverlayConfig.positionStrategy=this.overlayService.positionGloballyCenter()),this.overlayRef=this.overlayService.createOverlay(this.progressSpinnerOverlayConfig))}ngDoCheck(){!this.optionsData||!this.optionsData.Globally||(this.optionsData.display&&!this.overlayRef.hasAttached()?(this.overlayService.attachTemplatePortal(this.overlayRef,this.progressSpinnerRef,this.vcRef),this.optionsData&&this.optionsData.cdr&&this.optionsData.cdr.detectChanges()):!this.optionsData.display&&this.overlayRef.hasAttached()&&this.overlayRef.detach())}static \u0275fac=function(P){return new(P||l)(t.Y36(t.s_b),t.Y36(i.F))};static \u0275cmp=t.Xpm({type:l,selectors:[["cms-progress-spinner"]],viewQuery:function(P,r){if(1&P&&t.Gf(A,7),2&P){let _;t.iGM(_=t.CRH())&&(r.progressSpinnerRef=_.first)}},inputs:{options:"options"},decls:3,vars:1,consts:[["class","message"],["progressSpinnerRef",""],["class","message",4,"ngIf"],[3,"color","diameter","mode","strokeWidth","value"],["class","fa-ul",4,"ngFor","ngForOf"],[1,"fa-ul"],[1,"fa-li"],[3,"ngClass"],[1,"message"]],template:function(P,r){1&P&&(t.YNc(0,T,7,9,"ng-template",0,1,t.W1O),t.YNc(2,g,5,6,"div",2)),2&P&&(t.xp6(2),t.Q6J("ngIf",!r.optionsData.Globally&&r.optionsData.display))},dependencies:[v.mk,v.sg,v.O5,m.Ou,v.Nd],styles:[".message[_ngcontent-%COMP%]{position:absolute;text-align:center;top:49%;left:44%}"]})}return l})()},4370:(x,D,n)=>{n.d(D,{a:()=>L});var t=n(4537),i=n(92),v=n(4511),m=n(656),A=n(4032),E=n(2607),T=n(6707),g=n(8692),d=n(1561);function l(c,P){if(1&c){const r=t.EpF();t.TgZ(0,"li")(1,"mat-checkbox",1),t.NdJ("change",function(){const C=t.CHM(r).$implicit,o=t.oxw();return t.KtG(o.onActionSelect(C))}),t._uU(2),t.qZA()()}if(2&c){const r=P.$implicit,_=t.oxw();t.xp6(1),t.Q6J("checked",_.fieldsStatus.get(r.id))("disabled",_.optionDisabled),t.xp6(1),t.hij(" ",r.title," ")}}let L=(()=>{class c{coreEnumService;categoryService;cdr;publicHelper;cmsToastrService;translate;static nextId=0;id=++c.nextId;constructor(r,_,S,C,o,f){this.coreEnumService=r,this.categoryService=_,this.cdr=S,this.publicHelper=C,this.cmsToastrService=o,this.translate=f,this.publicHelper.processService.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(a=>{this.loading.message=a})}dataModelResult=new v.y$4;dataModelSelect=[];dataIdsSelect=[];loading=new m.O;get optionLoading(){return this.loading}set optionLoading(r){this.loading=r}formControl=new i.NI;fieldsStatus=new Map;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder=new t.vpe;optionChange=new t.vpe;optionSelectAdded=new t.vpe;optionSelectRemoved=new t.vpe;optionReload=()=>this.onActionButtonReload();set optionSelectForce(r){this.onActionSelectForce(r)}ngOnInit(){this.DataGetAll()}DataGetAll(){const r=new v.Hay;r.rowPerPage=50,r.accessLoad=!0;const _=this.constructor.name+"main";this.publicHelper.processService.processStart(_),this.categoryService.ServiceGetAll(r).subscribe({next:S=>{S.isSuccess&&(this.dataModelResult=S,this.dataModelResult.listItems.forEach(C=>this.fieldsStatus.set(C.id,!1)),this.dataIdsSelect.forEach(C=>this.fieldsStatus.set(C,!0)),this.dataModelResult.listItems.forEach(C=>{this.fieldsStatus.get(C.id)&&this.dataModelSelect.push(C)})),this.publicHelper.processService.processStop(_)},error:S=>{this.cmsToastrService.typeError(S),this.publicHelper.processService.processStop(_)}})}onActionSelect(r){this.fieldsStatus.get(r.id)?(this.fieldsStatus.set(r.id,!1),this.optionSelectRemoved.emit(r),this.dataModelSelect.splice(this.dataModelSelect.indexOf(r),1)):(this.fieldsStatus.set(r.id,!0),this.optionSelectAdded.emit(r),this.dataModelSelect.push(r)),this.optionChange.emit(this.dataModelSelect)}onActionSelectForce(r){typeof r==typeof Array(Number)?r.forEach(_=>{this.dataIdsSelect.push(_)}):typeof r==typeof Array(v.MCb)&&r.forEach(_=>{this.dataIdsSelect.push(_.id)}),this.dataIdsSelect.forEach(_=>this.fieldsStatus.set(_,!0))}onActionButtonReload(){this.DataGetAll()}static \u0275fac=function(_){return new(_||c)(t.Y36(v.FLW),t.Y36(v.PwI),t.Y36(t.sBO),t.Y36(A.i),t.Y36(E.e),t.Y36(T.sK))};static \u0275cmp=t.Xpm({type:c,selectors:[["app-cms-sitecategory-selectionlist"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange",optionSelectAdded:"optionSelectAdded",optionSelectRemoved:"optionSelectRemoved"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"checked","disabled","change"]],template:function(_,S){1&_&&(t.TgZ(0,"ul"),t.YNc(1,l,3,3,"li",0),t.qZA()),2&_&&(t.xp6(1),t.Q6J("ngForOf",S.dataModelResult.listItems))},dependencies:[g.sg,d.oG],encapsulation:2})}return c})()}}]);