"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[9351],{9084:(P,_,l)=>{l.d(_,{Y:()=>A});var C=l(7241),s=l(7969),g=l(4537),f=l(4511);let A=(()=>{class t{service;constructor(m){this.service=m}transform(m){return!m||m<=0?new C.y:this.service.ServiceGetOneById(m,1e6).pipe((0,s.U)(c=>{var r="";return c.isSuccess&&(c.item.title&&c.item.title.length>0&&(r=c.item.title),c.item.id&&c.item.id>0&&(r.length>0&&(r+=" | "),r+=c.item.id),c.item.domain&&c.item.domain.length>0&&c.item.subDomain&&c.item.subDomain.length>0?(r.length>0&&(r+=" | "),r=r+c.item.subDomain+"."+c.item.domain):c.item.domain&&c.item.domain.length>0&&(r.length>0&&(r+=" | "),r+=c.item.domain)),0===r.length&&(r=m.toString()),r},c=>m.toString()))}static \u0275fac=function(c){return new(c||t)(g.Y36(f._0e,16))};static \u0275pipe=g.Yjl({name:"cmssiteinfo",type:t,pure:!0})}return t})()},6777:(P,_,l)=>{l.d(_,{R:()=>lt});var C=l(4536),s=l(4511),g=l(7969),f=l(656),A=l(2340),t=l(4537),b=l(2607),m=l(5732),c=l(6114),r=l(6707),E=l(727),N=l(4032),h=l(8692),d=l(92),M=l(8659),v=l(9665),I=l(2516),Q=l(4580),T=l(5738),R=l(5952),y=l(8239),L=l(7445),x=l(1927),Z=l(3151),O=l(2147),w=l(1528),S=l(1637),k=l(1379),F=l(3331);function J(i,u){if(1&i&&(t.TgZ(0,"label",8),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.MGl("for","app-cms-site-selector-",e.id,""),t.xp6(1),t.Oqu(e.optionLabel)}}function D(i,u){if(1&i&&(t.TgZ(0,"mat-option",9)(1,"span"),t._uU(2),t.qZA()()),2&i){const e=u.$implicit,o=t.oxw();t.Q6J("value",e)("disabled",o.optionDisabled),t.xp6(2),t.Oqu(o.displayOption(e))}}function G(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"mat-icon",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const U=["*"];let V=(()=>{class i{coreEnumService;cmsToastrService;cdr;translate;categoryService;static nextId=0;id=++i.nextId;constructor(e,o,n,a,p){this.coreEnumService=e,this.cmsToastrService=o,this.cdr=n,this.translate=a,this.categoryService=p,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new s.y$4;dataModelSelect=new s.lWT;formControl=new d.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionChange=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new f.O;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,x.O)(""),(0,Z.b)(1500),(0,O.x)(),(0,w.w)(e=>"string"==typeof e||"number"==typeof e?this.DataGetAll(e||""):[]))}displayFn(e){return e?e.title:void 0}displayOption(e){return e?e.title:void 0}DataGetAll(e){var o=this;return(0,y.Z)(function*(){const n=new s.Hay;n.rowPerPage=20,n.accessLoad=!0;let a=new s.AO3;return a.propertyName="Title",a.value=e,a.searchType=s.J6G.Contains,a.clauseType=s.ppe.Or,n.filters.push(a),e&&"number"==typeof+e&&+e>0&&(a=new s.AO3,a.propertyName="Id",a.value=e,a.searchType=s.J6G.Equal,a.clauseType=s.ppe.Or,n.filters.push(a)),o.loading.Start("DataGetAll"),yield(0,L.z)(o.categoryService.ServiceGetAll(n)).then(p=>(o.dataModelResult=p,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id.length<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0])},1e3),o.onActionSelect(o.dataModelResult.listItems[0])),o.loading.Stop("DataGetAll"),p.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,g.U)(o=>(o.find(n=>n.id===e.id)||o.push(e),o)))}onActionSelectForce(e){if("string"==typeof e&&e.length>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===e)){const o=this.dataModelResult.listItems.find(n=>n.id===e);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(e).subscribe({next:o=>{o.isSuccess?(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item)):this.cmsToastrService.typeErrorMessage(o.errorMessage)}})}else{if(typeof e==typeof s.lWT)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new s.lWT,this.loadOptions()}static \u0275fac=function(o){return new(o||i)(t.Y36(s.FLW),t.Y36(b.e),t.Y36(t.sBO),t.Y36(r.sK),t.Y36(s.sZP))};static \u0275cmp=t.Xpm({type:i,selectors:[["app-cms-sms-apipath-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:U,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],[3,"options"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],["class","color-highlight",3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[1,"color-highlight",3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(o,n){if(1&o&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"app-progress-spinner",1),t.YNc(2,J,2,2,"label",2),t._UZ(3,"input",3),t.TgZ(4,"mat-autocomplete",4,5),t.NdJ("optionSelected",function(p){return n.onActionSelect(p.option.value)}),t.YNc(6,D,3,3,"mat-option",6),t.ALo(7,"async"),t.qZA(),t.YNc(8,G,2,0,"mat-icon",7),t.Hsn(9),t.qZA()),2&o){const a=t.MAs(5);t.xp6(1),t.Q6J("options",n.loading),t.xp6(1),t.Q6J("ngIf",(null==n.optionLabel?null:n.optionLabel.length)>0),t.xp6(1),t.s9C("placeholder",n.optionPlaceholder),t.MGl("id","app-cms-site-selector-",n.id,""),t.Q6J("formControl",n.formControl)("matAutocomplete",a),t.uIk("disabled",!!n.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",n.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(7,10,n.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==n.dataModelSelect?null:n.dataModelSelect.id)}},dependencies:[h.sg,h.O5,d.Fj,d.JJ,d.oH,S.XC,k.ey,S.ZL,M.R9,F.Hw,v.Nt,T.O,h.Ov],encapsulation:2})}return i})();function Y(i,u){if(1&i&&(t.TgZ(0,"label",8),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.MGl("for","app-cms-site-selector-",e.id,""),t.xp6(1),t.Oqu(e.optionLabel)}}function H(i,u){if(1&i&&(t.TgZ(0,"mat-option",9)(1,"span"),t._uU(2),t.qZA()()),2&i){const e=u.$implicit,o=t.oxw();t.Q6J("value",e)("disabled",o.optionDisabled),t.xp6(2),t.Oqu(o.displayOption(e))}}function B(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"mat-icon",10),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const q=["*"];let K=(()=>{class i{coreEnumService;cmsToastrService;translate;cdr;categoryService;static nextId=0;id=++i.nextId;constructor(e,o,n,a,p){this.coreEnumService=e,this.cmsToastrService=o,this.translate=n,this.cdr=a,this.categoryService=p,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new s.y$4;dataModelSelect=new s.FEG;formControl=new d.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionSelectFirstItemOnChangeApi=!1;optionLabel="";optionPlaceholder="";optionChange=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new f.O;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}set optionLinkApiPathId(e){e!=this.privateLinkApiPathId&&(""!=this.privateLinkApiPathId&&this.onActionSelectClear(),this.privateLinkApiPathId=e,this.privateLinkApiPathId!=this.privateLinkApiPathIdLast&&(this.optionSelectFirstItem=this.optionSelectFirstItemOnChangeApi),this.privateLinkApiPathIdLast=e,this.loadOptions())}privateLinkApiPathId="";privateLinkApiPathIdLast="";ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,x.O)(""),(0,Z.b)(1500),(0,O.x)(),(0,w.w)(e=>"string"==typeof e||"number"==typeof e?this.DataGetAll(e||""):[]))}displayFn(e){return e?e.numberChar:void 0}displayOption(e){return e?e.numberChar:void 0}DataGetAll(e){var o=this;return(0,y.Z)(function*(){const n=new s.Hay;n.rowPerPage=20,n.accessLoad=!0;let a=new s.AO3;return a.propertyName="NumberChar",a.value=e,a.searchType=s.J6G.Contains,a.clauseType=s.ppe.Or,n.filters.push(a),o.privateLinkApiPathId&&o.privateLinkApiPathId.length>0&&(a=new s.AO3,a.propertyName="ApiPathAndApiNumbers",a.propertyAnyName="LinkApiPathId",a.value=o.privateLinkApiPathId,a.searchType=s.J6G.Equal,n.filters.push(a)),o.loading.Start("DataGetAll"),yield(0,L.z)(o.categoryService.ServiceGetAll(n)).then(p=>(o.dataModelResult=p,o.optionSelectFirstItem&&(!o.dataModelSelect||!o.dataModelSelect.id||o.dataModelSelect.id.length<=0)&&o.dataModelResult.listItems.length>0&&(o.optionSelectFirstItem=!1,setTimeout(()=>{o.formControl.setValue(o.dataModelResult.listItems[0]),o.onActionSelect(o.dataModelResult.listItems[0])},1e3)),o.loading.Stop("DataGetAll"),p.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=new s.FEG,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,g.U)(o=>(o.find(n=>n.id===e.id)||o.push(e),o)))}onActionSelectForce(e){if("string"==typeof e&&e.length>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.id===e)){const o=this.dataModelResult.listItems.find(n=>n.id===e);return this.dataModelSelect=o,void this.formControl.setValue(o)}if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(o=>o.numberChar===e)){const o=this.dataModelResult.listItems.find(n=>n.numberChar===e);return this.dataModelSelect=o,void this.formControl.setValue(o)}this.categoryService.ServiceGetOneById(e).subscribe({next:o=>{o.isSuccess?(this.filteredOptions=this.push(o.item),this.dataModelSelect=o.item,this.formControl.setValue(o.item),this.optionChange.emit(o.item)):(!this.dataModelResult.listItems||0===this.dataModelResult.listItems.length)&&this.cmsToastrService.typeErrorMessage(o.errorMessage)}})}else{if(typeof e==typeof s.FEG)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new s.FEG,this.loadOptions()}static \u0275fac=function(o){return new(o||i)(t.Y36(s.FLW),t.Y36(b.e),t.Y36(r.sK),t.Y36(t.sBO),t.Y36(s.cPv))};static \u0275cmp=t.Xpm({type:i,selectors:[["app-cms-sms-api-number-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionSelectFirstItemOnChangeApi:"optionSelectFirstItemOnChangeApi",optionLabel:"optionLabel",optionPlaceholder:"optionPlaceholder",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading",optionLinkApiPathId:"optionLinkApiPathId"},outputs:{optionChange:"optionChange"},ngContentSelectors:q,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],[3,"options"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],["class","color-highlight",3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[1,"color-highlight",3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(o,n){if(1&o&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"app-progress-spinner",1),t.YNc(2,Y,2,2,"label",2),t._UZ(3,"input",3),t.TgZ(4,"mat-autocomplete",4,5),t.NdJ("optionSelected",function(p){return n.onActionSelect(p.option.value)}),t.YNc(6,H,3,3,"mat-option",6),t.ALo(7,"async"),t.qZA(),t.YNc(8,B,2,0,"mat-icon",7),t.Hsn(9),t.qZA()),2&o){const a=t.MAs(5);t.xp6(1),t.Q6J("options",n.loading),t.xp6(1),t.Q6J("ngIf",(null==n.optionLabel?null:n.optionLabel.length)>0),t.xp6(1),t.s9C("placeholder",n.optionPlaceholder),t.MGl("id","app-cms-site-selector-",n.id,""),t.Q6J("formControl",n.formControl)("matAutocomplete",a),t.uIk("disabled",!!n.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",n.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(7,10,n.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==n.dataModelSelect?null:n.dataModelSelect.id)}},dependencies:[h.sg,h.O5,d.Fj,d.JJ,d.oH,S.XC,k.ey,S.ZL,M.R9,F.Hw,v.Nt,T.O,h.Ov],encapsulation:2})}return i})();const W=["Message"],j=["vform"];function $(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onActionSendUrlToQDoc())}),t._UZ(1,"i",44),t._uU(2),t.ALo(3,"translate"),t.qZA()}2&i&&(t.xp6(2),t.hij(" ",t.lcZ(3,1,"ACTION.VIEW")," "))}function X(i,u){if(1&i&&(t.TgZ(0,"div")(1,"a",45),t._UZ(2,"img",46),t.ALo(3,"translate"),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(1),t.s9C("href",e.optionurlViewContent,t.LSH),t.xp6(1),t.s9C("alt",t.lcZ(3,3,"TITLE.Scan_the_barcode")),t.Q6J("src",e.optionurlViewContentQRCodeBase64,t.LSH)}}function z(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"div",10)(2,"div",24)(3,"p"),t._uU(4),t.qZA()()(),t.TgZ(5,"div",10)(6,"div",14)(7,"div",17)(8,"label",25),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"input",26,27),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.QDocModel.username=n)}),t.qZA()(),t.YNc(13,$,4,3,"button",28),t._UZ(14,"br")(15,"br"),t.TgZ(16,"button",29),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onActionOpenLink())}),t._uU(17),t.ALo(18,"translate"),t.qZA()(),t.TgZ(19,"div",30),t.YNc(20,X,4,5,"div",9),t.TgZ(21,"div",31)(22,"a",32),t._UZ(23,"i",33),t.qZA(),t.TgZ(24,"a",34),t._UZ(25,"i",35),t.qZA(),t.TgZ(26,"a",36),t._UZ(27,"i",37),t.qZA(),t.TgZ(28,"a",38),t._UZ(29,"i",39),t.qZA(),t.TgZ(30,"a",40),t._UZ(31,"i",41),t.qZA(),t.TgZ(32,"span",42),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onActionCopied())}),t._UZ(33,"i",43),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(4),t.hij(" ",e.optionLabel,""),t.xp6(5),t.Oqu(t.lcZ(10,16,"ACTION.ID_Code")),t.xp6(2),t.Q6J("ngModel",e.QDocModel.username),t.xp6(2),t.Q6J("ngIf",e.optionurlViewContent&&e.optionurlViewContent.length>0&&e.QDocModel.username),t.xp6(4),t.hij("",t.lcZ(18,18,"ACTION.VIEW_PAGE")," "),t.xp6(3),t.Q6J("ngIf",(null==e.optionurlViewContentQRCodeBase64?null:e.optionurlViewContentQRCodeBase64.length)>0&&(null==e.optionurlViewContent?null:e.optionurlViewContent.length)>0),t.xp6(2),t.hYB("href","whatsapp://send?text=",e.optionLabel,"- ",e.optionurlViewContent,"",t.LSH),t.xp6(2),t.hYB("href","https://telegram.me/share/url?url=",e.optionurlViewContent,"&text=",e.optionLabel,"",t.LSH),t.xp6(2),t.hYB("href","https://www.linkedin.com/shareArticle?url=",e.optionurlViewContent,"&title=",e.optionLabel,"",t.LSH),t.xp6(2),t.MGl("href","http://www.facebook.com/share.php?u=",e.optionurlViewContent,"",t.LSH),t.xp6(2),t.hYB("href","http://twitter.com/share?text=",e.optionLabel,"&url=",e.optionurlViewContent,"",t.LSH),t.xp6(2),t.Q6J("cdkCopyToClipboard",e.optionurlViewContent)}}function tt(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"app-cms-sms-api-number-selector",47),t.NdJ("optionLoadingChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.loading=n)})("optionChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.onActionSelectApiNumber(n))}),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("optionLoading",e.loading)("optionLinkApiPathId",null==e.dataModel?null:e.dataModel.linkApiPathId)("optionPlaceholder",e.translate.instant("TITLE.sender_number"))("optionSelectFirstItem",!0)("optionSelectFirstItemOnChangeApi",!0)}}function et(i,u){1&i&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"strong"),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&i&&(t.xp6(1),t.hij(" ",t.lcZ(2,2,"TITLE.Message_Text")," "),t.xp6(3),t.Oqu(t.lcZ(5,4,"MESSAGE.required")))}function ot(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"div",17)(1,"label",48),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"textarea",49,50),t.NdJ("ngModelChange",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.dataModel.toNumbers=n)}),t._uU(6,"                                                "),t.qZA(),t.TgZ(7,"em"),t._uU(8),t.ALo(9,"translate"),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,3,"TITLE.Receiver_number")),t.xp6(2),t.Q6J("ngModel",e.dataModel.toNumbers),t.xp6(4),t.Oqu(t.lcZ(9,5,"TITLE.You_can_separate_the_number_of_the_recipient_of_the_message_with_an_inter"))}}function nt(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"button",53),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.onFormSubmit())}),t._UZ(1,"i",44),t._uU(2),t.ALo(3,"translate"),t.qZA()}if(2&i){t.oxw(2);const e=t.MAs(13);t.Q6J("disabled",!e.valid),t.xp6(2),t.hij(" ",t.lcZ(3,2,"ACTION.Send_Message")," ")}}function it(i,u){if(1&i&&(t.TgZ(0,"div",51),t.YNc(1,nt,4,4,"button",52),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",!e.loading.display)}}const at=function(i){return{direction:i}};let lt=(()=>{class i{cmsToastrService;data;dialogRef;smsMainApiPathService;http;router;translate;tokenHelper;publicHelper;static nextId=0;id=++i.nextId;constructor(e,o,n,a,p,st,rt,ct,pt){this.cmsToastrService=e,this.data=o,this.dialogRef=n,this.smsMainApiPathService=a,this.http=p,this.router=st,this.translate=rt,this.tokenHelper=ct,this.publicHelper=pt,o&&(this.optionLabel=o.title,this.optionurlViewContentQRCodeBase64=o.urlViewContentQRCodeBase64,this.optionurlViewContent=o.urlViewContent)}dataModel=new s.sh1;loading=new f.O;formInfo=new s.LEF;loadingAction=new f.O;tokenInfo=new s.OdC;message;formGroup;optionLabel="";optionurlViewContentQRCodeBase64="";optionurlViewContent="";QDocModel={};cmsApiStoreSubscribe;ngOnInit(){this.dataModel.message=`${this.optionLabel}\n    ${this.optionurlViewContent}`,this.tokenHelper.getCurrentToken().then(e=>{this.tokenInfo=e}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe(e=>{this.tokenInfo=e})}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}onActionSelectApiNumber(e){e&&e.id?.length>0?this.dataModel.linkFromNumber=e.id:e&&e.numberChar?.length>0&&(this.dataModel.linkFromNumber=e.numberChar)}onActionMessageLTR(){this.message.nativeElement.style.direction="ltr",this.message.nativeElement.style.textAlign="left"}onActionMessageRTL(){this.message.nativeElement.style.direction="rtl",this.message.nativeElement.style.textAlign="right"}sendByShow=!1;dataModelParentSelected;onActionSelectPrivateSiteConfig(e){this.dataModelParentSelected=e,e&&e.id.length>0&&(this.dataModel.linkApiPathId=e.id,this.sendByShow=!1,e.apiAbilitySendByDirect&&(this.dataModel.sendByQeue=!1),e.apiAbilitySendByQueue&&(this.dataModel.sendByQeue=!0),e.apiAbilitySendByQueue&&e.apiAbilitySendByDirect&&(this.sendByShow=!0))}onActionSendUrlToQDoc(){this.QDocModel.message=this.optionurlViewContent,!this.QDocModel.username&&this.QDocModel.username.length<=0?this.cmsToastrService.typeWarningSelected("\u06a9\u062f \u0634\u0646\u0627\u0633\u0647 \u0631\u0627 \u0627\u0632 \u0648\u0628\u0633\u0627\u06cc\u062a https://Qdoc.ir \u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0645\u0627\u06cc\u06cc\u062f"):this.http.post(A.N.cmsServerConfig.configQDocServerPath,this.QDocModel,{headers:{}}).pipe((0,g.U)(e=>{this.cmsToastrService.typeSuccessMessage(this.translate.instant("MESSAGE.The_order_was_sent_to_the_website"))})).toPromise()}onFormSubmit(){if(!this.formGroup.valid)return;(!this.dataModel.linkApiPathId||this.dataModel.linkApiPathId.length<=0)&&this.cmsToastrService.typeErrorFormInvalid(),this.formInfo.formSubmitAllow=!1;const e=this.constructor.name+"main";this.loadingAction.Start(e),this.formInfo.formAlert="",this.formInfo.formError="",this.smsMainApiPathService.ServiceSendMessage(this.dataModel).subscribe({next:o=>{this.formInfo.formSubmitAllow=!0,o.isSuccess?(this.formInfo.formAlert=this.translate.instant("MESSAGE.Submit_request_was_successfully_registered"),this.cmsToastrService.typeSuccessMessage(this.translate.instant("MESSAGE.Send_request_was_successfully_registered"))):(this.formInfo.formAlert=this.translate.instant("ERRORMESSAGE.MESSAGE.typeError"),this.formInfo.formError=o.errorMessage,this.cmsToastrService.typeErrorMessage(o.errorMessage)),this.loadingAction.Stop(e)},error:o=>{this.formInfo.formSubmitAllow=!0,this.cmsToastrService.typeError(o),this.loadingAction.Stop(e)},complete:()=>{}})}onActionCopied(){this.cmsToastrService.typeSuccessCopedToClipboard()}onActionOpenLink(){this.router.serializeUrl(this.router.createUrlTree([this.optionurlViewContent])),window.open(this.optionurlViewContent,"_blank")}static \u0275fac=function(o){return new(o||i)(t.Y36(b.e),t.Y36(C.WI),t.Y36(C.so),t.Y36(s.sZP),t.Y36(m.eN),t.Y36(c.F0),t.Y36(r.sK),t.Y36(E.v),t.Y36(N.i))};static \u0275cmp=t.Xpm({type:i,selectors:[["app-cms-link-to"]],viewQuery:function(o,n){if(1&o&&(t.Gf(W,5),t.Gf(j,5)),2&o){let a;t.iGM(a=t.CRH())&&(n.message=a.first),t.iGM(a=t.CRH())&&(n.formGroup=a.first)}},inputs:{optionLabel:"optionLabel",optionurlViewContentQRCodeBase64:"optionurlViewContentQRCodeBase64",optionurlViewContent:"optionurlViewContent"},decls:43,vars:25,consts:[[3,"Key"],[3,"options"],[1,"card","card-style"],[1,"content","mb-0"],[1,"mb-0","color-highlight","font-600","font-12"],[3,"ngStyle","ngSubmit"],["vform","ngForm"],[3,"label"],[1,"row",2,"padding","5px"],[4,"ngIf"],[1,"row"],[1,"col-md-6","col-sm-6","col-xs-9",2,"padding-top","40px"],[3,"optionLoading","optionSelectForce","optionPlaceholder","optionSelectFirstItem","optionChange","optionLoadingChange"],[3,"optionLoading","optionSelectForce","optionLinkApiPathId","optionPlaceholder","optionSelectFirstItem","optionSelectFirstItemOnChangeApi","optionLoadingChange","optionChange",4,"ngIf"],[1,"col-md-6","col-sm-6","col-xs-9"],[1,"message-box"],[1,"row",2,"height","300px"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],["for","dataModel.message",1,"color-highlight"],["matInput","","name","dataModel.message","type","text","placeholder","...","minlength","1","maxlength","500","rows","9","id","dataModel.message",1,"form-control","validate-name",3,"ngModel","ngModelChange"],["Message",""],[1,"row",2,"height","83px"],["class","input-style has-borders no-icon input-style-always-active validate-field mb-4",4,"ngIf"],["class","row","style","height:140px;bottom: 4vh;justify-content: center;",4,"ngIf"],[1,"col-md-12","col-sm-12","col-xs-18"],["for","QDocModel.username",1,"color-highlight"],["matInput","","type","text","name","QDocModel.username","id","QDocModel.username","placeholder","12345",3,"ngModel","ngModelChange"],["QDocCode",""],["type","button","class","btn font-13 font-600 btn-s m-1 rounded-s shadow-xl border-0 gradient-highlight",3,"click",4,"ngIf"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"click"],[1,"col-md-6","col-sm-6","col-xs-9",2,"text-align","center"],[1,"mt-4"],["target","_blank",1,"style","whatsapp",3,"href"],[1,"flaticon-whatsapp","text-dark"],["target","_blank",1,"style","telegram",3,"href"],[1,"flaticon2-telegram-logo","text-dark"],["target","_blank",1,"style","linkedin",3,"href"],[1,"flaticon-linkedin-logo","text-dark"],["target","_blank",1,"style","facebook",3,"href"],[1,"flaticon-facebook-letter-logo","text-dark"],["target","_blank",1,"style","twitter",3,"href"],[1,"flaticon-twitter-logo","text-dark"],[1,"navi-icon","style","cursor",3,"cdkCopyToClipboard","click"],[1,"flaticon2-copy","text-dark"],[1,"fa","fa-check-square-o"],["target","_blank",3,"href"],["height","200px","width","200px",3,"src","alt"],[3,"optionLoading","optionSelectForce","optionLinkApiPathId","optionPlaceholder","optionSelectFirstItem","optionSelectFirstItemOnChangeApi","optionLoadingChange","optionChange"],["for","dataModel.toNumbers",1,"color-highlight"],["matInput","","name","dataModel.toNumbers","type","text","placeholder","0912","minlength","1","maxlength","500","rows","2","id","dataModel.toNumbers",1,"form-control","validate-name",3,"ngModel","ngModelChange"],["ToNumbers",""],[1,"row",2,"height","140px","bottom","4vh","justify-content","center"],["type","submit","class","btn font-13 font-600 btn-s m-1 rounded-s shadow-xl border-0 gradient-highlight",3,"disabled","click",4,"ngIf"],["type","submit",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"disabled","click"]],template:function(o,n){if(1&o&&(t._UZ(0,"app-cms-guide-notice",0)(1,"app-progress-spinner",1),t.TgZ(2,"div",2)(3,"div",3)(4,"p",4),t._uU(5," \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0646\u06cc\u062f "),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"\u0627\u0637\u0644\u0627\u0639\u0627\u062a"),t.qZA(),t.TgZ(8,"h4"),t._uU(9,"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0648\u0644\u06cc\u0647"),t.qZA(),t.TgZ(10,"p"),t._uU(11," \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0639\u0645\u0648\u0645\u06cc \u06a9\u0647 \u062f\u0631 \u0628\u0627\u0644\u0627\u06cc \u06a9\u0627\u0631\u062a \u0634\u0645\u0627 \u062f\u0631 \u0635\u0641\u062d\u0647 \u0646\u0645\u0627\u06cc\u0647 \u0634\u0645\u0627 \u0646\u0634\u0627\u0646 \u062f\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f. \u0627\u06cc\u0646 \u0641\u0642\u0637 \u06cc\u06a9 \u0635\u0641\u062d\u0647 \u0633\u0627\u062e\u062a\u06af\u06cc \u0627\u0633\u062a. "),t.qZA(),t.TgZ(12,"form",5,6),t.NdJ("ngSubmit",function(){return n.onFormSubmit()}),t.TgZ(14,"mat-tab-group")(15,"mat-tab",7),t.ALo(16,"translate"),t.TgZ(17,"div",8),t.YNc(18,z,34,20,"div",9),t.qZA()(),t.TgZ(19,"mat-tab",7),t.ALo(20,"translate"),t.TgZ(21,"div",10)(22,"div",11)(23,"app-cms-sms-apipath-selector",12),t.NdJ("optionChange",function(p){return n.onActionSelectPrivateSiteConfig(p)})("optionLoadingChange",function(p){return n.loading=p}),t.qZA(),t.YNc(24,tt,1,5,"app-cms-sms-api-number-selector",13),t.qZA(),t.TgZ(25,"div",14)(26,"div",15)(27,"div",16)(28,"div",17)(29,"label",18),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"textarea",19,20),t.NdJ("ngModelChange",function(p){return n.dataModel.message=p}),t._uU(34,"                                                "),t.qZA(),t.TgZ(35,"em"),t._uU(36),t.qZA(),t.YNc(37,et,6,6,"mat-error",9),t.qZA()(),t._UZ(38,"br"),t.TgZ(39,"div",21),t.YNc(40,ot,10,7,"div",22),t.qZA(),t._UZ(41,"br"),t.YNc(42,it,2,1,"div",23),t.qZA()()()()()()()()),2&o){const a=t.MAs(33);t.Q6J("Key","linkto.content"),t.xp6(1),t.Q6J("options",n.loadingAction),t.xp6(11),t.Q6J("ngStyle",t.VKq(23,at,n.tokenInfo.direction)),t.xp6(3),t.s9C("label",t.lcZ(16,17,"TITLE.LINKTO")),t.xp6(3),t.Q6J("ngIf",n.optionurlViewContent&&n.optionurlViewContent.length>0),t.xp6(1),t.s9C("label",t.lcZ(20,19,"TITLE.Send_Message")),t.xp6(4),t.Q6J("optionLoading",n.loading)("optionSelectForce",null==n.dataModel?null:n.dataModel.linkApiPathId)("optionPlaceholder",n.translate.instant("TITLE.Direction"))("optionSelectFirstItem",!0),t.xp6(1),t.Q6J("ngIf",(null==n.dataModel.linkApiPathId?null:n.dataModel.linkApiPathId.length)>0),t.xp6(6),t.Oqu(t.lcZ(31,21,"TITLE.Message_Text")),t.xp6(2),t.Q6J("ngModel",n.dataModel.message),t.xp6(4),t.hij("",a.value.length," / 500"),t.xp6(1),t.Q6J("ngIf",null==a.errors?null:a.errors.required),t.xp6(3),t.Q6J("ngIf",!(n.dataModel.toContactCategories&&0!==(null==n.dataModel.toContactCategories?null:n.dataModel.toContactCategories.length)||n.dataModel.toContactContents&&0!==(null==n.dataModel.toContactContents?null:n.dataModel.toContactContents.length))),t.xp6(2),t.Q6J("ngIf",n.formInfo.formSubmitAllow&&!(null!=n.loading&&n.loading.display))}},dependencies:[h.O5,h.PC,d._Y,d.Fj,d.JJ,d.JL,d.wO,d.nD,d.On,d.F,M.TO,v.Nt,I.uX,I.SP,Q.i3,T.O,R.v,V,K,r.X$],styles:[".style[_ngcontent-%COMP%]{padding:6px;margin:2px;font-size:20px;text-align:center;text-decoration:none;border:black solid 2px;border-radius:50%}.style-copy[_ngcontent-%COMP%]{color:#000;border-radius:20%}.whatsapp[_ngcontent-%COMP%]:hover{background-color:#adff2f}.facebook[_ngcontent-%COMP%]:hover{background:#3B5998}.twitter[_ngcontent-%COMP%]:hover{background:#55ACEE}.linkedin[_ngcontent-%COMP%]:hover{background:#007bb5}.telegram[_ngcontent-%COMP%]:hover{background:#125688}.cursor[_ngcontent-%COMP%]{cursor:pointer}.message-box[_ngcontent-%COMP%]{background-image:url(/assets/media/bg/iphone.png);height:600px;width:300px;background-position:center;background-repeat:no-repeat;background-size:cover;padding-right:33px;padding-left:33px}.message-box-button[_ngcontent-%COMP%]{color:#00f;border-color:transparent;background-color:transparent}.message-box-button[_ngcontent-%COMP%]:hover{color:red;font-size:initial}.message-box-button[_ngcontent-%COMP%]:active{color:#a200ff}"]})}return i})()}}]);