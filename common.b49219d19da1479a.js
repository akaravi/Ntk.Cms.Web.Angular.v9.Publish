"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[8592],{2379:(R,E,o)=>{o.d(E,{l:()=>y});var i=o(8239),t=o(4537),h=o(92),a=o(4511),S=o(7445),M=o(1927),A=o(3151),v=o(2147),g=o(1528),D=o(7969),n=o(656),u=o(2607),_=o(6707),C=o(8692),I=o(1637),P=o(1379),L=o(8659),b=o(3331),U=o(9665),F=o(5738);function K(O,c){if(1&O&&(t.TgZ(0,"label",8),t._uU(1),t.qZA()),2&O){const e=t.oxw();t.MGl("for","app-cms-site-selector-",e.id,""),t.xp6(1),t.Oqu(e.optionLabel)}}function N(O,c){if(1&O&&(t.TgZ(0,"mat-option",9)(1,"span"),t._uU(2),t.qZA()()),2&O){const e=c.$implicit,l=t.oxw();t.Q6J("value",e)("disabled",l.optionDisabled),t.xp6(2),t.Oqu(l.displayOption(e))}}function Z(O,c){if(1&O){const e=t.EpF();t.TgZ(0,"mat-icon",10),t.NdJ("click",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const B=["*"];let y=(()=>{class O{coreEnumService;cmsToastrService;cdr;translate;categoryService;static nextId=0;id=++O.nextId;constructor(e,l,d,s,p){this.coreEnumService=e,this.cmsToastrService=l,this.cdr=d,this.translate=s,this.categoryService=p,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new a.y$4;dataModelSelect=new a.$Qt;formControl=new h.NI;filteredOptions;optionSelectFirstItem=!1;optionPlaceholder="";optionDisabled=!1;optionRequired=!1;optionLabel="";optionChange=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(e){this.onActionSelectForce(e)}loading=new n.O;get optionLoading(){return this.loading}set optionLoading(e){this.loading=e}ngOnInit(){this.loadOptions(),(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,M.O)(""),(0,A.b)(1500),(0,v.x)(),(0,g.w)(e=>"string"==typeof e||"number"==typeof e?this.DataGetAll(e||""):[]))}displayFn(e){return e?e.moduleNameML+"("+e.moduleName+") # "+e.moduleEntityNameML+"("+e.moduleEntityNameML+")":void 0}displayOption(e){return e?e.moduleNameML+"("+e.moduleName+") # "+e.moduleEntityNameML+"("+e.moduleEntityNameML+")":void 0}DataGetAll(e){var l=this;return(0,i.Z)(function*(){const d=new a.Hay;d.rowPerPage=50,d.accessLoad=!0;let s=new a.AO3;s.propertyName="moduleName",s.value=e,s.searchType=a.J6G.Contains,s.clauseType=a.ppe.Or,d.filters.push(s),s=new a.AO3,s.propertyName="moduleEntityName",s.value=e,s.searchType=a.J6G.Contains,s.clauseType=a.ppe.Or,d.filters.push(s),e&&"number"==typeof+e&&+e>0&&(s=new a.AO3,s.propertyName="Id",s.value=e,s.searchType=a.J6G.Equal,s.clauseType=a.ppe.Or,d.filters.push(s));const p=l.constructor.name+"main";return l.loading.Start(p),yield(0,S.z)(l.categoryService.ServiceGetAll(d)).then(r=>(l.dataModelResult=r,l.optionSelectFirstItem&&(!l.dataModelSelect||!l.dataModelSelect.id||l.dataModelSelect.id<=0)&&l.dataModelResult.listItems.length>0&&(l.optionSelectFirstItem=!1,setTimeout(()=>{l.formControl.setValue(l.dataModelResult.listItems[0])},1e3),l.onActionSelect(l.dataModelResult.listItems[0])),l.loading.Stop(p),r.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}onActionEmpty(){this.formControl.setValue(0),this.dataModelSelect=new a.$Qt,this.optionChange.emit(this.dataModelSelect)}push(e){return this.filteredOptions.pipe((0,D.U)(l=>(l.find(d=>d.id===e.id)||l.push(e),l)))}onActionSelectForce(e){if("number"==typeof e&&e>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(l=>l.id===e)){const l=this.dataModelResult.listItems.find(d=>d.id===e);return this.dataModelSelect=l,void this.formControl.setValue(l)}this.categoryService.ServiceGetOneById(e).subscribe({next:l=>{l.isSuccess?(this.filteredOptions=this.push(l.item),this.dataModelSelect=l.item,this.formControl.setValue(l.item),this.optionChange.emit(l.item)):this.cmsToastrService.typeErrorMessage(l.errorMessage)}})}else{if(typeof e==typeof a.$Qt)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new a.$Qt,this.loadOptions()}static \u0275fac=function(l){return new(l||O)(t.Y36(a.FLW),t.Y36(u.e),t.Y36(t.sBO),t.Y36(_.sK),t.Y36(a.ngI))};static \u0275cmp=t.Xpm({type:O,selectors:[["app-core-module-entity-selector"]],inputs:{optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionDisabled:"optionDisabled",optionRequired:"optionRequired",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:B,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],[3,"options"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],["class","color-highlight",3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[1,"color-highlight",3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(l,d){if(1&l&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"app-progress-spinner",1),t.YNc(2,K,2,2,"label",2),t._UZ(3,"input",3),t.TgZ(4,"mat-autocomplete",4,5),t.NdJ("optionSelected",function(p){return d.onActionSelect(p.option.value)}),t.YNc(6,N,3,3,"mat-option",6),t.ALo(7,"async"),t.qZA(),t.YNc(8,Z,2,0,"mat-icon",7),t.Hsn(9),t.qZA()),2&l){const s=t.MAs(5);t.xp6(1),t.Q6J("options",d.loading),t.xp6(1),t.Q6J("ngIf",(null==d.optionLabel?null:d.optionLabel.length)>0),t.xp6(1),t.s9C("placeholder",d.optionPlaceholder),t.MGl("id","app-cms-site-selector-",d.id,""),t.Q6J("formControl",d.formControl)("matAutocomplete",s),t.uIk("disabled",!!d.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",d.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(7,10,d.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==d.dataModelSelect?null:d.dataModelSelect.id)}},dependencies:[C.sg,C.O5,h.Fj,h.JJ,h.oH,I.XC,P.ey,I.ZL,L.R9,b.Hw,U.Nt,F.O,C.Ov],encapsulation:2})}return O})()},7641:(R,E,o)=>{o.d(E,{W:()=>h});var i=o(4537),t=o(6074);let h=(()=>{class a{themeService;constructor(M){this.themeService=M}ngOnInit(){}onActionCleanDataMenu(){this.themeService.cleanDataMenu()}static \u0275fac=function(A){return new(A||a)(i.Y36(t.f))};static \u0275cmp=i.Xpm({type:a,selectors:[["app-menu-footer"]],decls:24,vars:0,consts:[[1,"card","card-style"],[1,"font-28","text-center","color-theme","font-800","pt-3","mt-3"],[1,"boxed-text-l","mb-4"],[1,"text-center","mb-4"],[1,"icon","icon-xs","rounded-sm","shadow-l","mr-1","bg-facebook"],[1,"fab","fa-facebook-f"],[1,"icon","icon-xs","rounded-sm","shadow-l","mr-1","bg-twitter"],[1,"fab","fa-twitter"],[1,"icon","icon-xs","rounded-sm","shadow-l","mr-1","bg-phone"],[1,"fa","fa-phone"],["data-menu","menu-share",1,"icon","icon-xs","rounded-sm","mr-1","shadow-l","bg-red-dark"],[1,"fa","fa-share-alt"],[1,"back-to-top","icon","icon-xs","rounded-sm","shadow-l","bg-highlight","color-white"],[1,"fa","fa-arrow-up"],[1,"divider","mb-3"],[1,"row","text-center","mb-3","pl-3","pr-3"],["href","#",1,"font-11","col-4"]],template:function(A,v){1&A&&(i.TgZ(0,"div",0)(1,"h4",1),i._uU(2,"\u0627\u067e\u06a9\u06cc\u062a"),i.qZA(),i.TgZ(3,"p",2),i._uU(4," \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647 \u0628\u0647 \u0645\u0646\u0638\u0648\u0631 \u0647\u0645\u062e\u0648\u0627\u0646\u06cc \u0628\u0627 \u0637\u0631\u0627\u062d\u06cc \u0647\u0627\u06cc \u0645\u062f\u0631\u0646\u060c \u0648 \u0628\u0647 \u0635\u0641\u062d\u0647 \u0634\u0645\u0627 \u0638\u0627\u0647\u0631\u06cc \u0639\u0627\u0644\u06cc \u06a9\u0647 \u0634\u0627\u06cc\u0633\u062a\u0647 \u0622\u0646 \u0627\u0633\u062a \u0645\u06cc \u062f\u0647\u062f. "),i.qZA(),i.TgZ(5,"div",3)(6,"a",4),i._UZ(7,"i",5),i.qZA(),i.TgZ(8,"a",6),i._UZ(9,"i",7),i.qZA(),i.TgZ(10,"a",8),i._UZ(11,"i",9),i.qZA(),i.TgZ(12,"a",10),i._UZ(13,"i",11),i.qZA(),i.TgZ(14,"a",12),i._UZ(15,"i",13),i.qZA()(),i._UZ(16,"div",14),i.TgZ(17,"div",15)(18,"a",16),i._uU(19,"\u062d\u0631\u06cc\u0645 \u062e\u0635\u0648\u0635\u06cc"),i.qZA(),i.TgZ(20,"a",16),i._uU(21,"\u0634\u0631\u0627\u06cc\u0637 \u0627\u0633\u062a\u0641\u0627\u062f\u0647"),i.qZA(),i.TgZ(22,"a",16),i._uU(23,"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc"),i.qZA()()())}})}return a})()},5852:(R,E,o)=>{o.d(E,{d:()=>v});var i=o(4537),t=o(92),h=o(5905),a=o(8692);let S=(()=>{class g{_elRef;_renderer;disabledNumberOnly;constructor(n,u){this._elRef=n,this._renderer=u}ngOnInit(){this.disabledNumberOnly||this._renderer.setAttribute(this._elRef.nativeElement,"onkeypress","return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0")}static \u0275fac=function(u){return new(u||g)(i.Y36(i.SBq),i.Y36(i.Qsj))};static \u0275dir=i.lG2({type:g,selectors:[["","numberOnly",""]],inputs:{disabledNumberOnly:"disabledNumberOnly"}})}return g})();function M(g,D){if(1&g){const n=i.EpF();i.TgZ(0,"input",3),i.NdJ("keydown",function(_){i.CHM(n);const C=i.oxw(2);return i.KtG(C.onKeyDown(_))})("keyup",function(_){const I=i.CHM(n).index,P=i.oxw(2);return i.KtG(P.onKeyUp(_,I))}),i.qZA()}if(2&g){const n=D.$implicit,u=D.index,_=i.oxw(2);i.Gre("otp-input ",_.config.inputClass,""),i.hYB("id","otp_",u,"_",_.componentKey,""),i.Q6J("pattern",_.config.allowNumbersOnly?"\\d*":"")("type",_.inputType)("placeholder",(null==_.config?null:_.config.placeholder)||"")("disabledNumberOnly",!_.config.allowNumbersOnly)("ngStyle",_.config.inputStyles)("formControl",_.otpForm.controls[n])}}function A(g,D){if(1&g&&(i.TgZ(0,"div",1),i.YNc(1,M,1,11,"input",2),i.ALo(2,"keys"),i.qZA()),2&g){const n=i.oxw();i.Gre("wrapper ",n.config.containerClass,""),i.MGl("id","c_",n.componentKey,""),i.Q6J("ngStyle",n.config.containerStyles),i.xp6(1),i.Q6J("ngForOf",i.lcZ(2,6,null==n.otpForm?null:n.otpForm.controls))}}let v=(()=>{class g{keysPipe;config={length:4};onInputChange=new i.vpe;otpForm;inputControls=new Array(this.config.length);componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36);inputType;constructor(n){this.keysPipe=n}ngOnInit(){this.otpForm=new t.cw({});for(let n=0;n<this.config.length;n++)this.otpForm.addControl(this.getControlName(n),new t.NI);this.inputType=this.getInputType()}ngAfterViewInit(){if(!this.config.disableAutoFocus){const n=document.getElementById(`c_${this.componentKey}`);if(n){n.addEventListener("paste",_=>this.handlePaste(_));const u=n.getElementsByClassName("otp-input")[0];u&&u.focus&&u.focus()}}}getControlName(n){return`ctrl_${n}`}ifLeftArrow(n){return this.ifKeyCode(n,37)}ifRightArrow(n){return this.ifKeyCode(n,39)}ifBackspaceOrDelete(n){return"Backspace"===n.key||"Delete"===n.key||this.ifKeyCode(n,8)||this.ifKeyCode(n,46)}ifKeyCode(n,u){return(n.keyCode||n.charCode)==u}onKeyDown(n){if(this.ifKeyCode(n,32))return!1}onKeyUp(n,u){const _=this.appendKey(`otp_${u+1}`),C=this.appendKey("otp_"+(u-1));if(this.ifRightArrow(n))this.setSelected(_);else{if(!this.ifLeftArrow(n))return this.ifBackspaceOrDelete(n)&&!n.target.value?(this.setSelected(C),void this.rebuildValue()):void(n.target.value&&(this.ifValidEntry(n)&&this.setSelected(_),this.rebuildValue()));this.setSelected(C)}}appendKey(n){return`${n}_${this.componentKey}`}setSelected(n){this.focusTo(n);const u=document.getElementById(n);u&&u.setSelectionRange&&setTimeout(()=>{u.setSelectionRange(0,1)},0)}ifValidEntry(n){const u=String.fromCharCode(n.keyCode);return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(u)||this.config.allowKeyCodes&&this.config.allowKeyCodes.includes(n.keyCode)||n.keyCode>=96&&n.keyCode<=105}focusTo(n){const u=document.getElementById(n);u&&u.focus()}setValue(n){if(!this.config.allowNumbersOnly||!isNaN(n)){if(this.otpForm.reset(),!n)return void this.rebuildValue();if(n=n.toString().replace(/\s/g,""),Array.from(n).forEach((_,C)=>{this.otpForm.get(this.getControlName(C))&&this.otpForm.get(this.getControlName(C)).setValue(_)}),!this.config.disableAutoFocus){const _=document.getElementById(`c_${this.componentKey}`);var u=n.length<this.config.length?n.length:this.config.length-1;let C=_.getElementsByClassName("otp-input")[u];C&&C.focus&&C.focus()}this.rebuildValue()}}rebuildValue(){let n="";this.keysPipe.transform(this.otpForm.controls).forEach(u=>{this.otpForm.controls[u].value&&(n+=this.otpForm.controls[u].value)}),this.onInputChange.emit(n)}getInputType(){return this.config.isPasswordInput?"password":this.config.allowNumbersOnly?"tel":"text"}handlePaste(n){let u=n.clipboardData||window.clipboardData;if(u)var _=u.getData("Text");n.stopPropagation(),n.preventDefault(),_&&this.setValue(_)}static \u0275fac=function(u){return new(u||g)(i.Y36(h.V))};static \u0275cmp=i.Xpm({type:g,selectors:[["ng-otp-input"]],inputs:{config:"config"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[["style","direction: ltr;",3,"class","id","ngStyle",4,"ngIf"],[2,"direction","ltr",3,"id","ngStyle"],["numberOnly","","maxlength","1","autocomplete","off",3,"pattern","type","placeholder","disabledNumberOnly","ngStyle","class","formControl","id","keydown","keyup",4,"ngFor","ngForOf"],["numberOnly","","maxlength","1","autocomplete","off",3,"pattern","type","placeholder","disabledNumberOnly","ngStyle","formControl","id","keydown","keyup"]],template:function(u,_){1&u&&i.YNc(0,A,3,8,"div",0),2&u&&i.Q6J("ngIf",null==_.otpForm?null:_.otpForm.controls)},dependencies:[a.sg,a.O5,a.PC,t.Fj,t.JJ,t.nD,t.c5,t.oH,S,h.V],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]})}return g})()},8838:(R,E,o)=>{o.d(E,{T:()=>t});var i=o(4537);let t=(()=>{class h{transform(S,...M){return JSON.stringify(S,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}static \u0275fac=function(M){return new(M||h)};static \u0275pipe=i.Yjl({name:"prettyjson",type:h,pure:!0})}return h})()},6049:(R,E,o)=>{o.d(E,{T:()=>l});var i=o(8239),t=o(4537),h=o(92),a=o(4511),S=o(7445),M=o(1927),A=o(3151),v=o(2147),g=o(1528),D=o(7969),n=o(656),u=o(6707),_=o(4032),C=o(8692),I=o(1637),P=o(1379),L=o(8659),b=o(9665),U=o(5738),F=o(1418);function K(d,s){if(1&d&&(t._UZ(0,"img",13),t.ALo(1,"cmsthumbnail")),2&d){const p=t.oxw();t.s9C("src",t.lcZ(1,1,null==p.dataModelSelect?null:p.dataModelSelect.linkMainImageIdSrc),t.LSH)}}function N(d,s){if(1&d&&(t._UZ(0,"img",13),t.ALo(1,"cmsthumbnail")),2&d){const p=t.oxw().$implicit;t.s9C("src",t.lcZ(1,1,p.linkMainImageIdSrc),t.LSH)}}function Z(d,s){if(1&d&&(t.TgZ(0,"mat-option",14),t.YNc(1,N,2,3,"img",15),t.TgZ(2,"span"),t._uU(3),t.qZA()()),2&d){const p=s.$implicit,r=t.oxw();t.Q6J("value",p)("disabled",r.optionDisabled),t.xp6(1),t.Q6J("ngIf",p.linkMainImageIdSrc),t.xp6(2),t.Oqu(r.displayOption(p))}}function B(d,s){1&d&&t._UZ(0,"i",16)}function y(d,s){1&d&&t._UZ(0,"i",17)}function O(d,s){if(1&d){const p=t.EpF();t.TgZ(0,"i",18),t.NdJ("click",function(){t.CHM(p);const m=t.oxw();return t.KtG(m.onActionSelectClear())}),t.qZA()}}function c(d,s){1&d&&(t.TgZ(0,"em"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&d&&(t.xp6(1),t.hij("(",t.lcZ(2,1,"TITLE.Necessary"),")"))}const e=["*"];let l=(()=>{class d{coreEnumService;translate;cdr;publicHelper;categoryService;static nextId=0;id=++d.nextId;constructor(p,r,m,T,f){this.coreEnumService=p,this.translate=r,this.cdr=m,this.publicHelper=T,this.categoryService=f,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new a.y$4;dataModelSelect=new a.CWo;formControl=new h.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionRequired=!1;optionChange=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(p){this.onActionSelectForce(p)}loading=new n.O;get optionLoading(){return this.loading}set optionLoading(p){this.loading=p}ngOnInit(){this.loadOptions(),(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,M.O)(""),(0,A.b)(1500),(0,v.x)(),(0,g.w)(p=>this.DataGetAll("string"==typeof p||"number"==typeof p?p:"")))}displayFn(p){return p?p.titleML:void 0}displayOption(p){return p?p.titleML:void 0}dateUseStore=!0;DataGetAll(p){var r=this;return(0,i.Z)(function*(){if(r.dateUseStore&&(r.dataModelResult=yield r.publicHelper.getCurrency(),r.dataModelResult.isSuccess))return r.optionSelectFirstItem&&(!r.dataModelSelect||!r.dataModelSelect.id||r.dataModelSelect.id<=0)&&r.dataModelResult.listItems.length>0&&(r.optionSelectFirstItem=!1,setTimeout(()=>{r.formControl.setValue(r.dataModelResult.listItems[0])},1e3),r.onActionSelect(r.dataModelResult.listItems[0])),r.dataModelResult.listItems;const m=new a.Hay;if(m.rowPerPage=20,m.accessLoad=!0,p&&p.length>0){let f=new a.AO3;f=new a.AO3,f.propertyName="Symbol",f.value=p,f.searchType=a.J6G.Contains,f.clauseType=a.ppe.Or,m.filters.push(f),f=new a.AO3,f.propertyName="Title",f.value=p,f.searchType=a.J6G.Contains,f.clauseType=a.ppe.Or,m.filters.push(f),p&&"number"==typeof+p&&+p>0&&(f=new a.AO3,f.propertyName="Id",f.value=p,f.searchType=a.J6G.Equal,f.clauseType=a.ppe.Or,m.filters.push(f))}const T=r.constructor.name+"ServiceGetAll";return r.loading.Start(T),r.categoryService.setAccessDataType(a.dR.Viewer),yield(0,S.z)(r.categoryService.ServiceGetAll(m)).then(f=>(r.dataModelResult=f,r.optionSelectFirstItem&&(!r.dataModelSelect||!r.dataModelSelect.id||r.dataModelSelect.id<=0)&&r.dataModelResult.listItems.length>0&&(r.optionSelectFirstItem=!1,setTimeout(()=>{r.formControl.setValue(r.dataModelResult.listItems[0])},1e3),r.onActionSelect(r.dataModelResult.listItems[0])),r.loading.Stop(T),f.listItems))})()}onActionSelect(p){this.optionDisabled||(this.dataModelSelect=p,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(p){return this.filteredOptions.pipe((0,D.U)(r=>(r.find(m=>m.id===p.id)||r.push(p),r)))}onActionSelectForce(p){if("number"==typeof p&&p>0){if(this.dataModelSelect&&this.dataModelSelect.id===p)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(r=>r.id===p)){const r=this.dataModelResult.listItems.find(m=>m.id===p);return this.dataModelSelect=r,void this.formControl.setValue(r)}this.categoryService.ServiceGetOneById(p).subscribe(r=>{r.isSuccess&&(this.filteredOptions=this.push(r.item),this.dataModelSelect=r.item,this.formControl.setValue(r.item),this.optionChange.emit(r.item))})}else{if(typeof p==typeof a.CWo)return this.filteredOptions=this.push(p),this.dataModelSelect=p,void this.formControl.setValue(p);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new a.CWo,this.loadOptions()}static \u0275fac=function(r){return new(r||d)(t.Y36(a.FLW),t.Y36(u.sK),t.Y36(t.sBO),t.Y36(_.i),t.Y36(a._GB))};static \u0275cmp=t.Xpm({type:d,selectors:[["app-cms-currency-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionRequired:"optionRequired",optionReload:"optionReload",optionSelectForce:"optionSelectForce",optionLoading:"optionLoading"},outputs:{optionChange:"optionChange"},ngContentSelectors:e,decls:17,vars:16,consts:[[3,"options"],[1,"input-style","has-borders","has-icon","input-style-always-active","validate-field","mb-4"],["matPrefix",""],["class","ntk-hover-zoom","style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["type","text","aria-label","Assignee","matInput","","id","forminput",3,"placeholder","formControl","matAutocomplete","required"],["for","forminput",1,"color-highlight"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],[3,"value","disabled",4,"ngFor","ngForOf"],["class","fa fa-info  invalid color-red-dark",4,"ngIf"],["class","fa fa-check  valid color-green-dark",4,"ngIf"],["class","fa fa-times  action color-red-dark",3,"click",4,"ngIf"],[4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],[1,"fa","fa-info","invalid","color-red-dark"],[1,"fa","fa-check","valid","color-green-dark"],[1,"fa","fa-times","action","color-red-dark",3,"click"]],template:function(r,m){if(1&r&&(t.F$t(),t._UZ(0,"app-progress-spinner",0),t.TgZ(1,"div",1)(2,"span",2),t.YNc(3,K,2,3,"img",3),t._uU(4," \xa0"),t.qZA(),t._UZ(5,"input",4),t.TgZ(6,"label",5),t._uU(7),t.qZA(),t.TgZ(8,"mat-autocomplete",6,7),t.NdJ("optionSelected",function(f){return m.onActionSelect(f.option.value)}),t.YNc(10,Z,4,4,"mat-option",8),t.ALo(11,"async"),t.qZA(),t.YNc(12,B,1,0,"i",9),t.YNc(13,y,1,0,"i",10),t.YNc(14,O,1,0,"i",11),t.YNc(15,c,3,3,"em",12),t.Hsn(16),t.qZA()),2&r){const T=t.MAs(9);t.Q6J("options",m.loading),t.xp6(3),t.Q6J("ngIf",m.dataModelSelect&&(null==m.dataModelSelect?null:m.dataModelSelect.linkMainImageIdSrc)),t.xp6(2),t.s9C("placeholder",m.optionPlaceholder),t.Q6J("formControl",m.formControl)("matAutocomplete",T)("required",m.optionRequired),t.uIk("disabled",!!m.optionDisabled||null),t.xp6(2),t.Oqu(m.optionLabel),t.xp6(1),t.Q6J("displayWith",m.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(11,14,m.filteredOptions)),t.xp6(2),t.Q6J("ngIf",!m.formControl.valid),t.xp6(1),t.Q6J("ngIf",m.optionRequired&&m.formControl.valid),t.xp6(1),t.Q6J("ngIf",(null==m.dataModelSelect?null:m.dataModelSelect.id)>0),t.xp6(1),t.Q6J("ngIf",m.optionRequired&&(!m.dataModelSelect||!m.dataModelSelect.id||m.dataModelSelect.id<=0))}},dependencies:[C.sg,C.O5,h.Fj,h.JJ,h.Q7,h.oH,I.XC,P.ey,I.ZL,L.qo,b.Nt,U.O,C.Ov,u.X$,F.v],encapsulation:2})}return d})()},1060:(R,E,o)=>{o.d(E,{l:()=>S});var i=o(8692),t=o(5732),h=o(1757),a=o(4537);let S=(()=>{class M{static \u0275fac=function(g){return new(g||M)};static \u0275mod=a.oAB({type:M});static \u0275inj=a.cJS({imports:[t.JF,i.ez,h.Ch]})}return M})()},1126:(R,E,o)=>{o.d(E,{g:()=>B});var i=o(8239),t=o(4537),h=o(92),a=o(4511),S=o(7445),M=o(1927),A=o(3151),v=o(2147),g=o(1528),D=o(7969),n=o(656),u=o(6707),_=o(8692),C=o(1637),I=o(1379),P=o(8659),L=o(3331),b=o(9665),U=o(5738);function F(y,O){if(1&y&&(t.TgZ(0,"label",8),t._uU(1),t.qZA()),2&y){const c=t.oxw();t.MGl("for","app-cms-site-selector-",c.id,""),t.xp6(1),t.Oqu(c.optionLabel)}}function K(y,O){if(1&y&&(t.TgZ(0,"mat-option",9)(1,"span"),t._uU(2),t.qZA()()),2&y){const c=O.$implicit,e=t.oxw();t.Q6J("value",c)("disabled",e.optionDisabled),t.xp6(2),t.Oqu(e.displayOption(c))}}function N(y,O){if(1&y){const c=t.EpF();t.TgZ(0,"mat-icon",10),t.NdJ("click",function(){t.CHM(c);const l=t.oxw();return t.KtG(l.onActionSelectClear())}),t._uU(1,"close"),t.qZA()}}const Z=["*"];let B=(()=>{class y{coreEnumService;translate;cdr;categoryService;static nextId=0;id=++y.nextId;constructor(c,e,l,d){this.coreEnumService=c,this.translate=e,this.cdr=l,this.categoryService=d,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}dataModelResult=new a.y$4;dataModelSelect=new a.six;loading=new n.O;get optionLoading(){return this.loading}set optionLoading(c){this.loading=c}formControl=new h.NI;filteredOptions;optionDisabled=!1;optionSelectFirstItem=!1;optionPlaceholder="";optionLabel="";optionChange=new t.vpe;optionReload=()=>this.onActionReload();set optionSelectForce(c){this.onActionSelectForce(c)}ngOnInit(){this.loadOptions()}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,M.O)(""),(0,A.b)(1500),(0,v.x)(),(0,g.w)(c=>this.DataGetAll("string"==typeof c||"number"==typeof c?c:"")))}displayFn(c){return c?c.title+" # "+c.className:void 0}displayOption(c){return c?c.title+" # "+c.className:void 0}DataGetAll(c){var e=this;return(0,i.Z)(function*(){const l=new a.Hay;if(l.rowPerPage=20,l.accessLoad=!0,c&&c.length>0){let s=new a.AO3;s=new a.AO3,s.propertyName="classname",s.value=c,s.searchType=a.J6G.Contains,s.clauseType=a.ppe.Or,l.filters.push(s),s=new a.AO3,s.propertyName="name",s.value=c,s.searchType=a.J6G.Contains,s.clauseType=a.ppe.Or,l.filters.push(s),s=new a.AO3,s.propertyName="email",s.value=c,s.searchType=a.J6G.Contains,s.clauseType=a.ppe.Or,l.filters.push(s),s=new a.AO3,s.propertyName="lastname",s.value=c,s.searchType=a.J6G.Contains,s.clauseType=a.ppe.Or,l.filters.push(s),c&&"number"==typeof+c&&+c>0&&(s=new a.AO3,s.propertyName="Id",s.value=c,s.searchType=a.J6G.Equal,s.clauseType=a.ppe.Or,l.filters.push(s))}const d=e.constructor.name+"main";return e.loading.Start(d),yield(0,S.z)(e.categoryService.ServiceGetAll(l)).then(s=>(e.dataModelResult=s,e.optionSelectFirstItem&&(!e.dataModelSelect||!e.dataModelSelect.id||e.dataModelSelect.id<=0)&&e.dataModelResult.listItems.length>0&&(e.optionSelectFirstItem=!1,setTimeout(()=>{e.formControl.setValue(e.dataModelResult.listItems[0])},1e3),e.onActionSelect(e.dataModelResult.listItems[0])),e.loading.Stop(d),s.listItems))})()}onActionSelect(c){this.optionDisabled||(this.dataModelSelect=c,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(new a.six))}push(c){return this.filteredOptions.pipe((0,D.U)(e=>(e.find(l=>l.id===c.id)||e.push(c),e)))}onActionSelectForce(c){if("number"==typeof c&&c>0){if(this.dataModelSelect&&this.dataModelSelect.id===c)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(e=>e.id===c)){const e=this.dataModelResult.listItems.find(l=>l.id===c);return this.dataModelSelect=e,void this.formControl.setValue(e)}this.categoryService.ServiceGetOneById(c).subscribe(e=>{e.isSuccess&&(this.filteredOptions=this.push(e.item),this.dataModelSelect=e.item,this.formControl.setValue(e.item),this.optionChange.emit(e.item))})}else{if(typeof c==typeof a.six)return this.filteredOptions=this.push(c),this.dataModelSelect=c,void this.formControl.setValue(c);this.formControl.setValue(null)}}onActionReload(){this.dataModelSelect=new a.six,this.loadOptions()}static \u0275fac=function(e){return new(e||y)(t.Y36(a.FLW),t.Y36(u.sK),t.Y36(t.sBO),t.Y36(a.EAm))};static \u0275cmp=t.Xpm({type:y,selectors:[["app-cms-module-selector"]],inputs:{optionLoading:"optionLoading",optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:Z,decls:10,vars:12,consts:[[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],[3,"options"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"displayWith","optionSelected"],["matauto","matAutocomplete"],["class","color-highlight",3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[1,"color-highlight",3,"value","disabled"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(e,l){if(1&e&&(t.F$t(),t.TgZ(0,"div",0),t._UZ(1,"app-progress-spinner",1),t.YNc(2,F,2,2,"label",2),t._UZ(3,"input",3),t.TgZ(4,"mat-autocomplete",4,5),t.NdJ("optionSelected",function(s){return l.onActionSelect(s.option.value)}),t.YNc(6,K,3,3,"mat-option",6),t.ALo(7,"async"),t.qZA(),t.YNc(8,N,2,0,"mat-icon",7),t.Hsn(9),t.qZA()),2&e){const d=t.MAs(5);t.xp6(1),t.Q6J("options",l.loading),t.xp6(1),t.Q6J("ngIf",(null==l.optionLabel?null:l.optionLabel.length)>0),t.xp6(1),t.s9C("placeholder",l.optionPlaceholder),t.MGl("id","app-cms-site-selector-",l.id,""),t.Q6J("formControl",l.formControl)("matAutocomplete",d),t.uIk("disabled",!!l.optionDisabled||null),t.xp6(1),t.Q6J("displayWith",l.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(7,10,l.filteredOptions)),t.xp6(2),t.Q6J("ngIf",null==l.dataModelSelect?null:l.dataModelSelect.id)}},dependencies:[_.sg,_.O5,h.Fj,h.JJ,h.oH,C.XC,I.ey,C.ZL,P.R9,L.Hw,b.Nt,U.O,_.Ov],encapsulation:2})}return y})()}}]);