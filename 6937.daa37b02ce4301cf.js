"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[6937],{4209:(A,M,r)=>{r.d(M,{Z:()=>t});var a=r(9406),p=r(3527),g=r(3279),I=r(8189);let t=(()=>{class C{service;constructor(S){this.service=S}transform(S){return!S||S<=0?new a.c:this.service.ServiceGetOneById(S,1e6).pipe((0,p.T)(d=>{var l="";return d.isSuccess&&(d.item.title&&d.item.title.length>0&&(l=d.item.title),d.item.id&&d.item.id>0&&(l.length>0&&(l+=" | "),l+=d.item.id),d.item.domain&&d.item.domain.length>0&&d.item.subDomain&&d.item.subDomain.length>0?(l.length>0&&(l+=" | "),l=l+d.item.subDomain+"."+d.item.domain):d.item.domain&&d.item.domain.length>0&&(l.length>0&&(l+=" | "),l+=d.item.domain)),0===l.length&&(l=S.toString()),l},d=>S.toString()))}static \u0275fac=function(d){return new(d||C)(g.rXU(I.kNx,16))};static \u0275pipe=g.EJ8({name:"cmssiteinfo",type:C,pure:!0})}return C})()},2310:(A,M,r)=>{r.d(M,{O:()=>pt});var a=r(6482),p=r(8189),g=r(4434),I=r(5312),t=r(3279),C=r(9722),R=r(6409),S=r(9675),d=r(2882),l=r(8339),_=r(5154),c=r(6610),m=r(7222),b=r(5468),v=r(4587),k=r(2161),V=r(254),x=r(4168),N=r(8544),F=r(3308),D=r(5804),E=r(965),L=r(8887),G=r(3793),O=r(2831),P=r(3527),T=r(2497),j=r(8278),w=r(6182),B=r(7912);const $=["*"];function X(s,f){if(1&s&&(t.j41(0,"label",8),t.EFF(1),t.k0s()),2&s){const e=t.XpG();t.Mz_("for","app-cms-site-selector-",e.id,""),t.R7$(),t.JRh(e.optionLabel)}}function U(s,f){if(1&s&&(t.j41(0,"mat-option",9)(1,"span"),t.EFF(2),t.k0s()()),2&s){const e=f.$implicit,o=t.XpG();t.Y8G("value",e)("disabled",o.optionDisabled),t.R7$(2),t.JRh(o.displayOption(e))}}function Y(s,f){if(1&s){const e=t.RV6();t.j41(0,"mat-icon",10),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.onActionSelectClear())}),t.EFF(1,"close"),t.k0s()}}let Q=(()=>{class s{coreEnumService;cmsToastrService;cdr;publicHelper;translate;categoryService;static nextId=0;id=++s.nextId;constructor(e,o,n,i,u,h){this.coreEnumService=e,this.cmsToastrService=o,this.cdr=n,this.publicHelper=i,this.translate=u,this.categoryService=h,this.publicHelper.processService.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(y=>{this.loading.message=y})}dataModelResult=new p.N$V;dataModelSelect=new p.xDr;formControl=new m.MJ;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionChange=new t.bkB;optionReload=()=>this.onActionButtonReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new g.o;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,E.Z)(""),(0,L.B)(1500),(0,G.F)(),(0,O.n)(e=>"string"==typeof e||"number"==typeof e?this.DataGetAll(e||""):[]))}displayFn(e){return e?e.title:void 0}displayOption(e){return e?e.title:void 0}DataGetAll(e){var o=this;return(0,F.A)(function*(){const n=new p.O2i;n.rowPerPage=20,n.accessLoad=!0;let i=new p.ycK;return i.propertyName="Title",i.value=e,i.searchType=p._GO.Contains,i.clauseType=p.jL_.Or,n.filters.push(i),e&&"number"==typeof+e&&+e>0&&(i=new p.ycK,i.propertyName="Id",i.value=e,i.searchType=p._GO.Equal,i.clauseType=p.jL_.Or,n.filters.push(i)),o.publicHelper.processService.processStart("DataGetAll"),yield(0,D._)(o.categoryService.ServiceGetAll(n)).then(u=>(o.dataModelResult=u,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id.length<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.publicHelper.processService.processStop("DataGetAll"),u.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,P.T)(o=>(o.find(n=>n.id===e.id)||o.push(e),o)))}onActionSelectForce(e){if("string"==typeof e&&e.length>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===e)){const o=this.dataModelResult.listItems.find(n=>n.id===e);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(e).subscribe({next:o=>{o.isSuccess?(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item)):this.cmsToastrService.typeErrorMessage(o.errorMessage)}})}else{if(typeof e==typeof p.xDr)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionButtonReload(){this.dataModelSelect=new p.xDr,this.loadOptions()}static \u0275fac=function(o){return new(o||s)(t.rXU(p.i9D),t.rXU(C.k),t.rXU(t.gRc),t.rXU(_.A),t.rXU(d.c$),t.rXU(p.pMv))};static \u0275cmp=t.VBU({type:s,selectors:[["app-cms-sms-apipath-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:$,decls:10,vars:13,consts:[["matauto","matAutocomplete"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4","progressOverlayContainer"],[3,"optionsInfoAreaId"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"optionSelected","displayWith"],["class","color-highlight",3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[1,"color-highlight",3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(o,n){if(1&o){const i=t.RV6();t.NAR(),t.j41(0,"div",1),t.nrm(1,"app-progress-spinner",2),t.DNE(2,X,2,3,"label",3),t.nrm(3,"input",4),t.j41(4,"mat-autocomplete",5,0),t.bIt("optionSelected",function(h){return t.eBV(i),t.Njj(n.onActionSelect(h.option.value))}),t.DNE(6,U,3,3,"mat-option",6),t.nI1(7,"async"),t.k0s(),t.DNE(8,Y,2,0,"mat-icon",7),t.SdG(9),t.k0s()}if(2&o){const i=t.sdS(5);t.R7$(),t.Y8G("optionsInfoAreaId",n.constructor.name),t.R7$(),t.Y8G("ngIf",(null==n.optionLabel?null:n.optionLabel.length)>0),t.R7$(),t.FS9("placeholder",n.optionPlaceholder),t.Mz_("id","app-cms-site-selector-",n.id,""),t.Y8G("formControl",n.formControl)("matAutocomplete",i),t.BMQ("disabled",!!n.optionDisabled||null),t.R7$(),t.Y8G("displayWith",n.displayFn),t.R7$(2),t.Y8G("ngForOf",t.bMT(7,11,n.filteredOptions)),t.R7$(2),t.Y8G("ngIf",null==n.dataModelSelect?null:n.dataModelSelect.id)}},dependencies:[c.Sq,c.bT,m.me,m.BC,m.l_,T.$3,j.wT,T.pN,b.yw,w.An,v.fg,B._,c.Jj],encapsulation:2})}return s})();const H=["*"];function W(s,f){if(1&s&&(t.j41(0,"label",8),t.EFF(1),t.k0s()),2&s){const e=t.XpG();t.Mz_("for","app-cms-site-selector-",e.id,""),t.R7$(),t.JRh(e.optionLabel)}}function K(s,f){if(1&s&&(t.j41(0,"mat-option",9)(1,"span"),t.EFF(2),t.k0s()()),2&s){const e=f.$implicit,o=t.XpG();t.Y8G("value",e)("disabled",o.optionDisabled),t.R7$(2),t.JRh(o.displayOption(e))}}function J(s,f){if(1&s){const e=t.RV6();t.j41(0,"mat-icon",10),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.onActionSelectClear())}),t.EFF(1,"close"),t.k0s()}}let z=(()=>{class s{coreEnumService;cmsToastrService;translate;cdr;publicHelper;categoryService;static nextId=0;id=++s.nextId;constructor(e,o,n,i,u,h){this.coreEnumService=e,this.cmsToastrService=o,this.translate=n,this.cdr=i,this.publicHelper=u,this.categoryService=h,this.publicHelper.processService.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(y=>{this.loading.message=y})}dataModelResult=new p.N$V;dataModelSelect=new p.Hx;formControl=new m.MJ;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionSelectFirstItemOnChangeApi=!1;optionLabel="";optionPlaceholder="";optionChange=new t.bkB;optionReload=()=>this.onActionButtonReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new g.o;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}set optionLinkApiPathId(e){e!=this.privateLinkApiPathId&&(""!=this.privateLinkApiPathId&&this.onActionSelectClear(),this.privateLinkApiPathId=e,this.privateLinkApiPathId!=this.privateLinkApiPathIdLast&&(this.optionSelectFirstItem=this.optionSelectFirstItemOnChangeApi),this.privateLinkApiPathIdLast=e,this.loadOptions())}privateLinkApiPathId="";privateLinkApiPathIdLast="";ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,E.Z)(""),(0,L.B)(1500),(0,G.F)(),(0,O.n)(e=>"string"==typeof e||"number"==typeof e?this.DataGetAll(e||""):[]))}displayFn(e){return e?e.numberChar:void 0}displayOption(e){return e?e.numberChar:void 0}DataGetAll(e){var o=this;return(0,F.A)(function*(){const n=new p.O2i;n.rowPerPage=20,n.accessLoad=!0;let i=new p.ycK;return i.propertyName="NumberChar",i.value=e,i.searchType=p._GO.Contains,i.clauseType=p.jL_.Or,n.filters.push(i),o.privateLinkApiPathId&&o.privateLinkApiPathId.length>0&&(i=new p.ycK,i.propertyName="ApiPathAndApiNumbers",i.propertyAnyName="LinkApiPathId",i.value=o.privateLinkApiPathId,i.searchType=p._GO.Equal,n.filters.push(i)),o.publicHelper.processService.processStart("DataGetAll"),yield(0,D._)(o.categoryService.ServiceGetAll(n)).then(u=>(o.dataModelResult=u,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id.length<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0]),o.onActionSelect(o.dataModelResult.listItems[0])},1e3)),o.publicHelper.processService.processStop("DataGetAll"),u.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=new p.Hx,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,P.T)(o=>(o.find(n=>n.id===e.id)||o.push(e),o)))}onActionSelectForce(e){if("string"==typeof e&&e.length>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===e)){const o=this.dataModelResult.listItems.find(n=>n.id===e);return this.dataModelSelect=o,void this.formControl.setValue(o)}if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.numberChar===e)){const o=this.dataModelResult.listItems.find(n=>n.numberChar===e);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(e).subscribe({next:o=>{o.isSuccess?(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item)):(!this.dataModelResult.listItems||0===this.dataModelResult.listItems.length)&&this.cmsToastrService.typeErrorMessage(o.errorMessage)}})}else{if(typeof e==typeof p.Hx)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionButtonReload(){this.dataModelSelect=new p.Hx,this.loadOptions()}static \u0275fac=function(o){return new(o||s)(t.rXU(p.i9D),t.rXU(C.k),t.rXU(d.c$),t.rXU(t.gRc),t.rXU(_.A),t.rXU(p.veb))};static \u0275cmp=t.VBU({type:s,selectors:[["app-cms-sms-api-number-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionSelectFirstItemOnChangeApi:"optionSelectFirstItemOnChangeApi",optionLabel:"optionLabel",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading",optionLinkApiPathId:"optionLinkApiPathId"},outputs:{optionChange:"optionChange"},ngContentSelectors:H,decls:10,vars:13,consts:[["matauto","matAutocomplete"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4","progressOverlayContainer"],[3,"optionsInfoAreaId"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"optionSelected","displayWith"],["class","color-highlight",3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[1,"color-highlight",3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(o,n){if(1&o){const i=t.RV6();t.NAR(),t.j41(0,"div",1),t.nrm(1,"app-progress-spinner",2),t.DNE(2,W,2,3,"label",3),t.nrm(3,"input",4),t.j41(4,"mat-autocomplete",5,0),t.bIt("optionSelected",function(h){return t.eBV(i),t.Njj(n.onActionSelect(h.option.value))}),t.DNE(6,K,3,3,"mat-option",6),t.nI1(7,"async"),t.k0s(),t.DNE(8,J,2,0,"mat-icon",7),t.SdG(9),t.k0s()}if(2&o){const i=t.sdS(5);t.R7$(),t.Y8G("optionsInfoAreaId",n.constructor.name),t.R7$(),t.Y8G("ngIf",(null==n.optionLabel?null:n.optionLabel.length)>0),t.R7$(),t.FS9("placeholder",n.optionPlaceholder),t.Mz_("id","app-cms-site-selector-",n.id,""),t.Y8G("formControl",n.formControl)("matAutocomplete",i),t.BMQ("disabled",!!n.optionDisabled||null),t.R7$(),t.Y8G("displayWith",n.displayFn),t.R7$(2),t.Y8G("ngForOf",t.bMT(7,11,n.filteredOptions)),t.R7$(2),t.Y8G("ngIf",null==n.dataModelSelect?null:n.dataModelSelect.id)}},dependencies:[c.Sq,c.bT,m.me,m.BC,m.l_,T.$3,j.wT,T.pN,b.yw,w.An,v.fg,B._,c.Jj],encapsulation:2})}return s})();const Z=["Message"],q=["vform"],tt=s=>({direction:s});function et(s,f){if(1&s){const e=t.RV6();t.j41(0,"button",45),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.onActionSendUrlToQDoc())}),t.nrm(1,"i",46),t.EFF(2),t.nI1(3,"translate"),t.k0s()}2&s&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"ACTION.VIEW")," "))}function ot(s,f){if(1&s&&(t.j41(0,"div")(1,"a",47),t.nrm(2,"img",48),t.nI1(3,"translate"),t.k0s()()),2&s){const e=t.XpG(2);t.R7$(),t.FS9("href",e.optionurlViewContent,t.B4B),t.R7$(),t.FS9("alt",t.bMT(3,3,"TITLE.Scan_the_barcode")),t.Y8G("src",e.optionurlViewContentQRCodeBase64,t.B4B)}}function nt(s,f){if(1&s){const e=t.RV6();t.j41(0,"div")(1,"div",13)(2,"div",26)(3,"p"),t.EFF(4),t.k0s()()(),t.j41(5,"div",13)(6,"div",17)(7,"div",20)(8,"label",27),t.EFF(9),t.nI1(10,"translate"),t.k0s(),t.j41(11,"input",28,2),t.mxI("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.DH7(i.QDocModel.username,n)||(i.QDocModel.username=n),t.Njj(n)}),t.k0s()(),t.DNE(13,et,4,3,"button",29),t.nrm(14,"br")(15,"br"),t.j41(16,"button",30),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.onActionOpenLink())}),t.EFF(17),t.nI1(18,"translate"),t.k0s()(),t.j41(19,"div",31),t.DNE(20,ot,4,5,"div",12),t.j41(21,"div",32)(22,"a",33),t.nrm(23,"i",34),t.k0s(),t.j41(24,"a",35),t.nrm(25,"i",36),t.k0s(),t.j41(26,"a",37),t.nrm(27,"i",38),t.k0s(),t.j41(28,"a",39),t.nrm(29,"i",40),t.k0s(),t.j41(30,"a",41),t.nrm(31,"i",42),t.k0s(),t.j41(32,"span",43),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.onActionCopied())}),t.nrm(33,"i",44),t.k0s()()()()()}if(2&s){const e=t.XpG();t.R7$(4),t.SpI(" ",e.optionLabel,""),t.R7$(5),t.JRh(t.bMT(10,21,"ACTION.ID_Code")),t.R7$(2),t.R50("ngModel",e.QDocModel.username),t.R7$(2),t.Y8G("ngIf",e.optionurlViewContent&&e.optionurlViewContent.length>0&&e.QDocModel.username),t.R7$(4),t.SpI("",t.bMT(18,23,"ACTION.VIEW_PAGE")," "),t.R7$(3),t.Y8G("ngIf",(null==e.optionurlViewContentQRCodeBase64?null:e.optionurlViewContentQRCodeBase64.length)>0&&(null==e.optionurlViewContent?null:e.optionurlViewContent.length)>0),t.R7$(2),t.FCK("href","whatsapp://send?text=",e.optionLabel,"- ",e.optionurlViewContent,"",t.B4B),t.R7$(2),t.FCK("href","https://telegram.me/share/url?url=",e.optionurlViewContent,"&text=",e.optionLabel,"",t.B4B),t.R7$(2),t.FCK("href","https://www.linkedin.com/shareArticle?url=",e.optionurlViewContent,"&title=",e.optionLabel,"",t.B4B),t.R7$(2),t.Mz_("href","http://www.facebook.com/share.php?u=",e.optionurlViewContent,"",t.B4B),t.R7$(2),t.FCK("href","http://twitter.com/share?text=",e.optionLabel,"&url=",e.optionurlViewContent,"",t.B4B),t.R7$(2),t.Y8G("cdkCopyToClipboard",e.optionurlViewContent)}}function it(s,f){if(1&s){const e=t.RV6();t.j41(0,"app-cms-sms-api-number-selector",49),t.nI1(1,"translate"),t.mxI("optionLoadingChange",function(n){t.eBV(e);const i=t.XpG();return t.DH7(i.loading,n)||(i.loading=n),t.Njj(n)}),t.bIt("optionChange",function(n){t.eBV(e);const i=t.XpG();return t.Njj(i.onActionSelectApiNumber(n))}),t.k0s()}if(2&s){const e=t.XpG();t.R50("optionLoading",e.loading),t.Y8G("optionLinkApiPathId",null==e.dataModel?null:e.dataModel.linkApiPathId)("optionPlaceholder",t.bMT(1,5,"TITLE.sender_number"))("optionSelectFirstItem",!0)("optionSelectFirstItemOnChangeApi",!0)}}function st(s,f){1&s&&(t.j41(0,"mat-error"),t.EFF(1),t.nI1(2,"translate"),t.j41(3,"strong"),t.EFF(4),t.nI1(5,"translate"),t.k0s()()),2&s&&(t.R7$(),t.SpI(" ",t.bMT(2,2,"TITLE.Message_Text")," "),t.R7$(3),t.JRh(t.bMT(5,4,"MESSAGE.required")))}function at(s,f){if(1&s){const e=t.RV6();t.j41(0,"div",20)(1,"label",50),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"textarea",51,3),t.mxI("ngModelChange",function(n){t.eBV(e);const i=t.XpG();return t.DH7(i.dataModel.toNumbers,n)||(i.dataModel.toNumbers=n),t.Njj(n)}),t.EFF(6,"                                                "),t.k0s(),t.j41(7,"em"),t.EFF(8),t.nI1(9,"translate"),t.k0s()()}if(2&s){const e=t.XpG();t.R7$(2),t.JRh(t.bMT(3,3,"TITLE.Receiver_number")),t.R7$(2),t.R50("ngModel",e.dataModel.toNumbers),t.R7$(4),t.JRh(t.bMT(9,5,"TITLE.You_can_separate_the_number_of_the_recipient_of_the_message_with_an_inter"))}}function rt(s,f){if(1&s&&(t.j41(0,"button",54),t.nrm(1,"i",46),t.EFF(2),t.nI1(3,"translate"),t.k0s()),2&s){t.XpG(2);const e=t.sdS(10);t.Y8G("disabled",!e.valid),t.R7$(2),t.SpI(" ",t.bMT(3,2,"ACTION.Send_Message")," ")}}function lt(s,f){if(1&s&&(t.j41(0,"div",52),t.DNE(1,rt,4,4,"button",53),t.k0s()),2&s){const e=t.XpG();t.R7$(),t.Y8G("ngIf",!e.loading.display)}}let pt=(()=>{class s{cmsToastrService;data;dialogRef;smsMainApiPathService;http;router;translate;tokenHelper;publicHelper;static nextId=0;id=++s.nextId;constructor(e,o,n,i,u,h,y,ct,dt){this.cmsToastrService=e,this.data=o,this.dialogRef=n,this.smsMainApiPathService=i,this.http=u,this.router=h,this.translate=y,this.tokenHelper=ct,this.publicHelper=dt,o&&(this.optionLabel=o.title,this.optionurlViewContentQRCodeBase64=o.urlViewContentQRCodeBase64,this.optionurlViewContent=o.urlViewContent)}dataModel=new p.j3T;loading=new g.o;formInfo=new p.IL9;loadingAction=new g.o;tokenInfo=new p.l$k;message;formGroup;optionLabel="";optionurlViewContentQRCodeBase64="";optionurlViewContent="";QDocModel={};cmsApiStoreSubscribe;ngOnInit(){this.dataModel.message=`${this.optionLabel}\n    ${this.optionurlViewContent}`,this.tokenHelper.getCurrentToken().then(e=>{this.tokenInfo=e}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe({next:e=>{this.tokenInfo=e}})}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}onActionSelectApiNumber(e){e&&e.id?.length>0?this.dataModel.linkFromNumber=e.id:e&&e.numberChar?.length>0&&(this.dataModel.linkFromNumber=e.numberChar)}onActionMessageLTR(){this.message.nativeElement.style.direction="ltr",this.message.nativeElement.style.textAlign="left"}onActionMessageRTL(){this.message.nativeElement.style.direction="rtl",this.message.nativeElement.style.textAlign="right"}sendByShow=!1;dataModelParentSelected;onActionSelectPrivateSiteConfig(e){this.dataModelParentSelected=e,e&&e.id.length>0&&(this.dataModel.linkApiPathId=e.id,this.sendByShow=!1,e.apiAbilitySendByDirect&&(this.dataModel.sendByQeue=!1),e.apiAbilitySendByQueue&&(this.dataModel.sendByQeue=!0),e.apiAbilitySendByQueue&&e.apiAbilitySendByDirect&&(this.sendByShow=!0))}onActionSendUrlToQDoc(){this.QDocModel.message=this.optionurlViewContent,!this.QDocModel.username&&this.QDocModel.username.length<=0?this.cmsToastrService.typeWarningSelected("\u06a9\u062f \u0634\u0646\u0627\u0633\u0647 \u0631\u0627 \u0627\u0632 \u0648\u0628\u0633\u0627\u06cc\u062a https://Qdoc.ir \u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0645\u0627\u06cc\u06cc\u062f"):this.http.post(I.c.cmsServerConfig.configQDocServerPath,this.QDocModel,{headers:{}}).subscribe({next:e=>{this.cmsToastrService.typeSuccessMessage(this.translate.instant("MESSAGE.The_order_was_sent_to_the_website"))},error:e=>{this.cmsToastrService.typeErrorMessage("\u0628\u0631\u0631\u0648\u0632 \u062e\u0637\u0627 \u062f\u0631 \u0627\u0631\u0633\u0627\u0644 \u062f\u0633\u062a\u0648\u0631",e)}})}onFormSubmit(){if(!this.formGroup.valid)return;(!this.dataModel.linkApiPathId||this.dataModel.linkApiPathId.length<=0)&&this.cmsToastrService.typeErrorFormInvalid(),this.formInfo.formSubmitAllow=!1;const e=this.constructor.name+"main";this.loadingAction.Start(e),this.formInfo.formAlert="",this.formInfo.formError="",this.smsMainApiPathService.ServiceSendMessage(this.dataModel).subscribe({next:o=>{this.formInfo.formSubmitAllow=!0,o.isSuccess?(this.formInfo.formAlert=this.translate.instant("MESSAGE.Submit_request_was_successfully_registered"),this.cmsToastrService.typeSuccessMessage(this.translate.instant("MESSAGE.Send_request_was_successfully_registered"))):(this.translate.get("ERRORMESSAGE.MESSAGE.typeError").subscribe(n=>{this.formInfo.formAlert=n}),this.formInfo.formError=o.errorMessage,this.cmsToastrService.typeErrorMessage(o.errorMessage)),this.loadingAction.Stop(e)},error:o=>{this.formInfo.formSubmitAllow=!0,this.cmsToastrService.typeError(o),this.loadingAction.Stop(e)},complete:()=>{}})}onActionCopied(){this.cmsToastrService.typeSuccessCopedToClipboard()}onActionOpenLink(){this.router.serializeUrl(this.router.createUrlTree([this.optionurlViewContent])),window.open(this.optionurlViewContent,"_blank")}static \u0275fac=function(o){return new(o||s)(t.rXU(C.k),t.rXU(a.Vh),t.rXU(a.CP),t.rXU(p.pMv),t.rXU(R.Qq),t.rXU(S.Ix),t.rXU(d.c$),t.rXU(l._),t.rXU(_.A))};static \u0275cmp=t.VBU({type:s,selectors:[["app-cms-link-to"]],viewQuery:function(o,n){if(1&o&&(t.GBs(Z,5),t.GBs(q,5)),2&o){let i;t.mGM(i=t.lsd())&&(n.message=i.first),t.mGM(i=t.lsd())&&(n.formGroup=i.first)}},inputs:{optionLabel:"optionLabel",optionurlViewContentQRCodeBase64:"optionurlViewContentQRCodeBase64",optionurlViewContent:"optionurlViewContent"},decls:41,vars:31,consts:[["vform","ngForm"],["Message",""],["QDocCode",""],["ToNumbers",""],[3,"Key"],[3,"options"],[1,"card","card-style"],[1,"content","mb-0"],[1,"mb-0","color-highlight","font-600","font-12"],[3,"ngSubmit","ngStyle"],[3,"label"],[1,"row",2,"padding","5px"],[4,"ngIf"],[1,"row"],[1,"col-md-6","col-sm-6","col-xs-9",2,"padding-top","40px"],[3,"optionChange","optionLoadingChange","optionLoading","optionSelectForce","optionPlaceholder","optionSelectFirstItem"],[3,"optionLoading","optionSelectForce","optionLinkApiPathId","optionPlaceholder","optionSelectFirstItem","optionSelectFirstItemOnChangeApi","optionLoadingChange","optionChange",4,"ngIf"],[1,"col-md-6","col-sm-6","col-xs-9"],[1,"message-box"],[1,"row",2,"height","300px"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],["for","dataModel.message",1,"color-highlight"],["matInput","","name","dataModel.message","type","text","placeholder","...","minlength","1","maxlength","500","rows","9","id","dataModel.message",1,"form-control","validate-name",3,"ngModelChange","ngModel"],[1,"row",2,"height","83px"],["class","input-style has-borders no-icon input-style-always-active validate-field mb-4",4,"ngIf"],["class","row","style","height:140px;bottom: 4vh;justify-content: center;",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-18"],["for","QDocModel.username",1,"color-highlight"],["matInput","","type","text","name","QDocModel.username","id","QDocModel.username","placeholder","12345",1,"form-control","validate-name",3,"ngModelChange","ngModel"],["type","button","class","btn font-13 font-600 btn-s m-1 rounded-s shadow-xl border-0 gradient-highlight",3,"click",4,"ngIf"],["type","button","type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"click"],[1,"col-md-6","col-sm-6","col-xs-9",2,"text-align","center"],[1,"mt-4"],["target","_blank",1,"style","whatsapp",3,"href"],[1,"flaticon-whatsapp","text-dark"],["target","_blank",1,"style","telegram",3,"href"],[1,"flaticon2-telegram-logo","text-dark"],["target","_blank",1,"style","linkedin",3,"href"],[1,"flaticon-linkedin-logo","text-dark"],["target","_blank",1,"style","facebook",3,"href"],[1,"flaticon-facebook-letter-logo","text-dark"],["target","_blank",1,"style","twitter",3,"href"],[1,"flaticon-twitter-logo","text-dark"],[1,"navi-icon","style","cursor",3,"click","cdkCopyToClipboard"],[1,"flaticon2-copy","text-dark"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"click"],[1,"fa","fa-check-square-o"],["target","_blank",3,"href"],["height","200px","width","200px",3,"src","alt"],[3,"optionLoadingChange","optionChange","optionLoading","optionSelectForce","optionLinkApiPathId","optionPlaceholder","optionSelectFirstItem","optionSelectFirstItemOnChangeApi"],["for","dataModel.toNumbers",1,"color-highlight"],["matInput","","name","dataModel.toNumbers","type","text","placeholder","0912","minlength","1","maxlength","500","rows","2","id","dataModel.toNumbers",1,"form-control","validate-name",3,"ngModelChange","ngModel"],[1,"row",2,"height","140px","bottom","4vh","justify-content","center"],["type","submit","class","btn font-13 font-600 btn-s m-1 rounded-s shadow-xl border-0 gradient-highlight",3,"disabled",4,"ngIf"],["type","submit",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"disabled"]],template:function(o,n){if(1&o){const i=t.RV6();t.nrm(0,"app-cms-guide-notice",4)(1,"cms-progress-spinner",5),t.j41(2,"div",6)(3,"div",7)(4,"p",8),t.EFF(5),t.k0s(),t.j41(6,"p"),t.EFF(7),t.nI1(8,"translate"),t.k0s(),t.j41(9,"form",9,0),t.bIt("ngSubmit",function(){return t.eBV(i),t.Njj(n.onFormSubmit())}),t.j41(11,"mat-tab-group")(12,"mat-tab",10),t.nI1(13,"translate"),t.j41(14,"div",11),t.DNE(15,nt,34,25,"div",12),t.k0s()(),t.j41(16,"mat-tab",10),t.nI1(17,"translate"),t.j41(18,"div",13)(19,"div",14)(20,"app-cms-sms-apipath-selector",15),t.nI1(21,"translate"),t.bIt("optionChange",function(h){return t.eBV(i),t.Njj(n.onActionSelectPrivateSiteConfig(h))}),t.mxI("optionLoadingChange",function(h){return t.eBV(i),t.DH7(n.loading,h)||(n.loading=h),t.Njj(h)}),t.k0s(),t.DNE(22,it,2,7,"app-cms-sms-api-number-selector",16),t.k0s(),t.j41(23,"div",17)(24,"div",18)(25,"div",19)(26,"div",20)(27,"label",21),t.EFF(28),t.nI1(29,"translate"),t.k0s(),t.j41(30,"textarea",22,1),t.mxI("ngModelChange",function(h){return t.eBV(i),t.DH7(n.dataModel.message,h)||(n.dataModel.message=h),t.Njj(h)}),t.EFF(32,"                                                "),t.k0s(),t.j41(33,"em"),t.EFF(34),t.k0s(),t.DNE(35,st,6,6,"mat-error",12),t.k0s()(),t.nrm(36,"br"),t.j41(37,"div",23),t.DNE(38,at,10,7,"div",24),t.k0s(),t.nrm(39,"br"),t.DNE(40,lt,2,1,"div",25),t.k0s()()()()()()()()}if(2&o){const i=t.sdS(31);t.Y8G("Key","linkto.content"),t.R7$(),t.Y8G("options",n.loadingAction),t.R7$(4),t.SpI(" ",n.formInfo.formTitle," "),t.R7$(2),t.SpI(" ",t.bMT(8,19,"TITLE.Be_Careful_When_Entering_Information")," "),t.R7$(2),t.Y8G("ngStyle",t.eq3(29,tt,n.tokenInfo.direction)),t.R7$(3),t.FS9("label",t.bMT(13,21,"TITLE.LINKTO")),t.R7$(3),t.Y8G("ngIf",n.optionurlViewContent&&n.optionurlViewContent.length>0),t.R7$(),t.FS9("label",t.bMT(17,23,"TITLE.Send_Message")),t.R7$(4),t.R50("optionLoading",n.loading),t.Y8G("optionSelectForce",null==n.dataModel?null:n.dataModel.linkApiPathId)("optionPlaceholder",t.bMT(21,25,"TITLE.Direction"))("optionSelectFirstItem",!0),t.R7$(2),t.Y8G("ngIf",(null==n.dataModel.linkApiPathId?null:n.dataModel.linkApiPathId.length)>0),t.R7$(6),t.JRh(t.bMT(29,27,"TITLE.Message_Text")),t.R7$(2),t.R50("ngModel",n.dataModel.message),t.R7$(4),t.SpI("",i.value.length," / 500"),t.R7$(),t.Y8G("ngIf",null==i.errors?null:i.errors.required),t.R7$(3),t.Y8G("ngIf",!(n.dataModel.toContactCategories&&0!==(null==n.dataModel.toContactCategories?null:n.dataModel.toContactCategories.length)||n.dataModel.toContactContents&&0!==(null==n.dataModel.toContactContents?null:n.dataModel.toContactContents.length))),t.R7$(2),t.Y8G("ngIf",n.formInfo.formSubmitAllow&&!(null!=n.loading&&n.loading.display))}},dependencies:[c.bT,c.B3,m.qT,m.me,m.BC,m.cb,m.xh,m.tU,m.vS,m.cV,b.TL,v.fg,k.mq,k.T8,V.dF,x.X,N.f,Q,z,d.D9],styles:[".style[_ngcontent-%COMP%]{padding:6px;margin:2px;font-size:20px;text-align:center;text-decoration:none;border:black solid 2px;border-radius:50%}.style-copy[_ngcontent-%COMP%]{color:#000;border-radius:20%}.whatsapp[_ngcontent-%COMP%]:hover{background-color:#adff2f}.facebook[_ngcontent-%COMP%]:hover{background:#3b5998}.twitter[_ngcontent-%COMP%]:hover{background:#55acee}.linkedin[_ngcontent-%COMP%]:hover{background:#007bb5}.telegram[_ngcontent-%COMP%]:hover{background:#125688}.cursor[_ngcontent-%COMP%]{cursor:pointer}.message-box[_ngcontent-%COMP%]{background-image:url(/assets/media/bg/iphone.png);height:600px;width:300px;background-position:center;background-repeat:no-repeat;background-size:cover;padding-right:33px;padding-left:33px}.message-box-button[_ngcontent-%COMP%]{color:#00f;border-color:transparent;background-color:transparent}.message-box-button[_ngcontent-%COMP%]:hover{color:red;font-size:initial}.message-box-button[_ngcontent-%COMP%]:active{color:#a200ff}"]})}return s})()},4168:(A,M,r)=>{r.d(M,{X:()=>d});var a=r(3279),p=r(2176),g=r(6610),I=r(1640);const t=["progressSpinnerRef"];function C(l,_){if(1&l&&(a.j41(0,"ul",5)(1,"li")(2,"span",6),a.nrm(3,"i",7),a.k0s(),a.EFF(4),a.k0s()()),2&l){const c=_.$implicit;a.R7$(3),a.Y8G("ngClass",c.value.inRun?"fas fa-spinner fa-pulse":"fas fa-check-square"),a.R7$(),a.SpI("",c.value.title," ")}}function R(l,_){if(1&l&&(a.nrm(0,"mat-progress-spinner",3)(1,"br"),a.j41(2,"div"),a.EFF(3),a.nrm(4,"br"),a.DNE(5,C,5,2,"ul",4),a.nI1(6,"keyvalue"),a.k0s()),2&l){const c=a.XpG();a.Y8G("color",c.optionsData.color)("diameter",c.optionsData.diameter)("mode",c.optionsData.mode)("strokeWidth",c.optionsData.strokeWidth)("value",c.optionsData.value),a.R7$(3),a.SpI("",c.optionsData.message," "),a.R7$(2),a.Y8G("ngForOf",a.bMT(6,7,c.optionsData.processInfoAll))}}function S(l,_){if(1&l&&(a.j41(0,"div",1),a.nrm(1,"mat-progress-spinner",3)(2,"br"),a.j41(3,"div"),a.EFF(4),a.k0s()()),2&l){const c=a.XpG();a.R7$(),a.Y8G("color",c.optionsData.color)("diameter",c.optionsData.diameter)("mode",c.optionsData.mode)("strokeWidth",c.optionsData.strokeWidth)("value",c.optionsData.value),a.R7$(3),a.JRh(c.optionsData.message)}}let d=(()=>{class l{vcRef;overlayService;static nextId=0;id=++l.nextId;set options(c){this.optionsData=c}get options(){return this.optionsData}optionsData;progressSpinnerRef;progressSpinnerOverlayConfig;overlayRef;constructor(c,m){this.vcRef=c,this.overlayService=m}ngOnInit(){!this.optionsData||!this.optionsData.Globally||(this.progressSpinnerOverlayConfig={hasBackdrop:this.optionsData.backdropEnabled},this.optionsData.positionGloballyCenter&&(this.progressSpinnerOverlayConfig.positionStrategy=this.overlayService.positionGloballyCenter()),this.overlayRef=this.overlayService.createOverlay(this.progressSpinnerOverlayConfig))}ngDoCheck(){!this.optionsData||!this.optionsData.Globally||(this.optionsData.display&&!this.overlayRef.hasAttached()?(this.overlayService.attachTemplatePortal(this.overlayRef,this.progressSpinnerRef,this.vcRef),this.optionsData&&this.optionsData.cdr&&this.optionsData.cdr.detectChanges()):!this.optionsData.display&&this.overlayRef.hasAttached()&&this.overlayRef.detach())}static \u0275fac=function(m){return new(m||l)(a.rXU(a.c1b),a.rXU(p.s))};static \u0275cmp=a.VBU({type:l,selectors:[["cms-progress-spinner"]],viewQuery:function(m,b){if(1&m&&a.GBs(t,7),2&m){let v;a.mGM(v=a.lsd())&&(b.progressSpinnerRef=v.first)}},inputs:{options:"options"},decls:3,vars:1,consts:[["progressSpinnerRef",""],[1,"message"],["class","message",4,"ngIf"],[3,"color","diameter","mode","strokeWidth","value"],["class","fa-ul",4,"ngFor","ngForOf"],[1,"fa-ul"],[1,"fa-li"],[3,"ngClass"]],template:function(m,b){1&m&&a.DNE(0,R,7,9,"ng-template",1,0,a.C5r)(2,S,5,6,"div",2),2&m&&(a.R7$(2),a.Y8G("ngIf",!b.optionsData.Globally&&b.optionsData.display))},dependencies:[g.YU,g.Sq,g.bT,I.LG,g.lG],styles:[".message[_ngcontent-%COMP%]{position:absolute;text-align:center;top:49%;left:44%}"]})}return l})()}}]);