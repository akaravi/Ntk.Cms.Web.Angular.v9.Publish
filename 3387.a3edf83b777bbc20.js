"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[3387,7421],{3438:(R,O,a)=>{a.d(O,{x:()=>d});var i=a(3308),t=a(6610),r=a(8189),o=a(7788),T=a(5154),v=a(9722);let d=(()=>{class h{constructor(n,_,f,m,y,B){this.elRef=n,this.renderer=_,this.publicHelper=f,this.cmsToastrService=m,this.cdr=y,this.document=B,this.DataEnumRecordStatus()}DataEnumRecordStatus(){var n=this;return(0,i.A)(function*(){(yield n.publicHelper.getEnumRecordStatus()).listItems.forEach(f=>{const m=document.createElement("option");m.innerHTML=" "+f.title+' <i Class="'+n.iconStatus(f.value)+'"></i>',m.value=f.value.toString(),n.elRef.nativeElement.add(m)}),n.elRef.nativeElement.options.length>0&&n.row&&n.row.recordStatus&&n.renderer.setProperty(n.elRef.nativeElement,"value",n.row.recordStatus)})()}onChange(){const n=this.elRef.nativeElement,_=n.value;this.addLoader(n),this.contentService.setAccessDataType(r.FYP.Editor),this.contentService.ServiceSetStatus(this.row.id,_).subscribe({next:f=>{f.isSuccess?(this.handleSuccessCase(n),this.cmsToastrService.typeSuccessSetStatus(f.errorMessage),this.row.recordStatus=0|_,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(f.errorMessage),this.handleErrorCase(n))},error:f=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(f),this.handleErrorCase(n)}})}handleSuccessCase(n){this.removeBackground(n),this.addSuccess(n),setTimeout(()=>{this.removeBackground(n)},1e3)}handleErrorCase(n){this.removeBackground(n);const _=this.document.createElement("img");_.style.width="20px",_.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const f=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(f,_),setTimeout(()=>{this.renderer.removeChild(f,_)},1e3)}addLoader(n){this.addBackground(n,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(n){this.addBackground(n,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(n,_,f){n.style.background=`#fff url("${_}") no-repeat right 20px center`,n.style.backgroundSize=`${f}px`}removeBackground(n){n.style.background="none"}iconStatus(n){let _="";switch(n){case 1:default:_="fa fa-check";break;case 2:_="fa fa-eye-slash";break;case 3:_="fa fa-times";break;case 4:_="fa fa-hourglass-half";break;case 5:_="far fa-thumbs-down";break;case 6:_="fa fa-archive"}return _}static#t=this.\u0275fac=function(_){return new(_||h)(o.rXU(o.aKT),o.rXU(o.sFG),o.rXU(T.A),o.rXU(v.k),o.rXU(o.gRc),o.rXU(t.qQ))};static#e=this.\u0275dir=o.FsC({type:h,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(_,f){1&_&&o.bIt("change",function(){return f.onChange()})},inputs:{row:"row",contentService:"contentService"}})}return h})()},4252:(R,O,a)=>{a.d(O,{r:()=>r});var i=a(7788),t=a(8351);let r=(()=>{class o{constructor(v){this.stepper=v}selectionChanged(){const v=this.stepper._getStepLabelId(this.stepper.selectedIndex),D=document.getElementById(v);D&&D.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})}static#t=this.\u0275fac=function(D){return new(D||o)(i.rXU(t.M6))};static#e=this.\u0275dir=i.FsC({type:o,selectors:[["mat-vertical-stepper"]],hostBindings:function(D,C){1&D&&i.bIt("animationDone",function(){return C.selectionChanged()})}})}return o})()},4237:(R,O,a)=>{a.d(O,{v:()=>i});var i=function(t){return t[t.none=0]="none",t[t.add=1]="add",t[t.edit=2]="edit",t[t.delete=3]="delete",t[t.list=4]="list",t[t.select=5]="select",t}(i||{})},9256:(R,O,a)=>{a.d(O,{G:()=>i});class i{}},1268:(R,O,a)=>{a.d(O,{M:()=>r});var i=a(7788),t=a(6098);let r=(()=>{class o{constructor(v){this.sanitizer=v}transform(v){return"cms-RecordStatusEnum-cell-"+v}static#t=this.\u0275fac=function(D){return new(D||o)(i.rXU(t.up,16))};static#e=this.\u0275pipe=i.EJ8({name:"statusCellClass",type:o,pure:!0})}return o})()},6381:(R,O,a)=>{a.d(O,{T:()=>r});var i=a(7788),t=a(6098);let r=(()=>{class o{constructor(v){this.sanitizer=v}transform(v,D=!1){let C="";switch(v){case 1:default:C="fa fa-check";break;case 2:C="fa fa-times";break;case 3:C="fa fa-trash";break;case 4:C="fa fa-hourglass-half";break;case 5:C="far fa-thumbs-down";break;case 6:C="fa fa-archive"}return C}static#t=this.\u0275fac=function(D){return new(D||o)(i.rXU(t.up,16))};static#e=this.\u0275pipe=i.EJ8({name:"statusIconClass",type:o,pure:!0})}return o})()},5459:(R,O,a)=>{a.d(O,{o:()=>C});var i=a(5312),t=a(6482),r=a(7788);let o=(()=>{class I{static#t=this.nextId=0;constructor(h,l){this.dialogRef=h,this.data=l,this.id=++I.nextId,l||this.dialogRef.close(!1)}ngOnInit(){}onDismiss(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static#e=this.\u0275fac=function(l){return new(l||I)(r.rXU(t.CP),r.rXU(t.Vh))};static#a=this.\u0275cmp=r.VBU({type:I,selectors:[["app-confirmation-dialog"]],decls:18,vars:4,consts:[[1,"menu","menu-box-modal","rounded-m","menu-active",2,"display","block","width","350px","height","320px","padding","20px"],[1,"menu-title"],[1,"fa","fa-question-circle","scale-box","float-start","me-3","ms-3","fa-3x","mt-1","color-blue-dark"],[1,"color-highlight"],[1,"font-20"],[1,"close-menu",3,"click"],[1,"fa","fa-times-circle"],[1,"content","mt-0"],[1,"pe-3",3,"innerHTML"],[1,"row","mb-0"],[1,"col-6"],[1,"btn","close-menu","btn-full","btn-m","bg-red-dark","font-600","rounded-s",3,"click"],[1,"btn","close-menu","btn-full","btn-m","bg-green-dark","font-600","rounded-s",3,"click"]],template:function(l,n){1&l&&(r.j41(0,"div",0)(1,"div",1),r.nrm(2,"i",2),r.j41(3,"p",3),r.EFF(4),r.k0s(),r.j41(5,"h1",4),r.EFF(6,"\u0645\u0637\u0645\u0626\u0646\u06cc\u062f\u061f"),r.k0s(),r.j41(7,"a",5),r.bIt("click",function(){return n.onDismiss()}),r.nrm(8,"i",6),r.k0s()(),r.j41(9,"div",7),r.nrm(10,"p",8),r.j41(11,"div",9)(12,"div",10)(13,"a",11),r.bIt("click",function(){return n.onDismiss()}),r.EFF(14),r.k0s()(),r.j41(15,"div",10)(16,"a",12),r.bIt("click",function(){return n.onConfirm()}),r.EFF(17),r.k0s()()()()()),2&l&&(r.R7$(4),r.SpI(" ",n.data.title,""),r.R7$(6),r.Y8G("innerHTML",n.data.message,r.npT),r.R7$(4),r.JRh(n.data.btnCancelText),r.R7$(3),r.JRh(n.data.btnConfirmText))},encapsulation:2})}return I})();var T=a(8339),v=a(2882);class D{constructor(d,h){this.title=d,this.message=h,this.btnConfirmText="OK",this.btnCancelText="Cancel",this.dialogSize="sm"}}let C=(()=>{class I{constructor(h,l,n){this.dialog=h,this.tokenHelper=l,this.translate=n}confirm(h,l,n="",_="",f="sm"){const m=new D(h,l);return m.btnConfirmText=n,m.btnCancelText=_,m.dialogSize=f,(!m.btnConfirmText||""==m.btnConfirmText||0==m.btnConfirmText.length)&&this.translate.get("ACTION.CONFIRM").subscribe(L=>{m.btnConfirmText=L}),(!m.btnCancelText||""==m.btnCancelText||0==m.btnCancelText.length)&&this.translate.get("ACTION.CANCEL").subscribe(L=>{m.btnCancelText=L}),this.dialog.open(o,{height:"90%",panelClass:this.tokenHelper.isMobile?"dialog-fullscreen":"dialog-min",enterAnimationDuration:i.c.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.c.cmsViewConfig.exitAnimationDuration,data:m}).afterClosed().toPromise().then(L=>Promise.resolve(L))}static#t=this.\u0275fac=function(l){return new(l||I)(r.KVO(t.bZ),r.KVO(T._),r.KVO(v.c$))};static#e=this.\u0275prov=r.jDH({token:I,factory:I.\u0275fac})}return I})()},1704:(R,O,a)=>{a.d(O,{E:()=>h});var i=a(7788),t=a(6610);const r=[[["","cms-tree-body",""]],[["","cms-tree-header",""]],[["","cms-tree-action",""]],[["","cms-tree-footer",""]]],o=["[cms-tree-body]","[cms-tree-header]","[cms-tree-action]","[cms-tree-footer]"];function T(l,n){1&l&&(i.j41(0,"div",8)(1,"p",9),i.SdG(2,1),i.k0s()())}function v(l,n){1&l&&i.nrm(0,"div",10)}function D(l,n){1&l&&(i.j41(0,"div",11),i.SdG(1,2),i.k0s())}function C(l,n){1&l&&i.nrm(0,"div",12)}function I(l,n){1&l&&i.nrm(0,"div",10)}function d(l,n){1&l&&(i.j41(0,"div",6)(1,"p",13),i.SdG(2,3),i.k0s()())}let h=(()=>{class l{static#t=this.nextId=0;constructor(){this.id=++l.nextId,this.optionHeaderDisplay=!0,this.optionActionMainDisplay=!0,this.optionFooterDisplay=!0}ngOnInit(){}static#e=this.\u0275fac=function(f){return new(f||l)};static#a=this.\u0275cmp=i.VBU({type:l,selectors:[["app-cms-html-tree"]],inputs:{optionHeaderDisplay:"optionHeaderDisplay",optionActionMainDisplay:"optionActionMainDisplay",optionFooterDisplay:"optionFooterDisplay"},ngContentSelectors:o,decls:10,vars:6,consts:[[1,"card","card-style"],[1,"row","justify-content-center","tree-parent"],["class","font-14 opacity-50",4,"ngIf"],["class","divider mb-1",4,"ngIf"],["class","col-12 pe-0 tree-child-hidden",4,"ngIf"],["class","divider mb-1 tree-child-hidden",4,"ngIf"],[1,"col-12","pe-0"],["class","col-12 pe-0",4,"ngIf"],[1,"font-14","opacity-50"],[1,"text-center","mb-2","mt-2","color-highlight","font-600"],[1,"divider","mb-1"],[1,"col-12","pe-0","tree-child-hidden"],[1,"divider","mb-1","tree-child-hidden"],[1,"text-center"]],template:function(f,m){1&f&&(i.NAR(r),i.j41(0,"div",0)(1,"div",1),i.DNE(2,T,3,0,"div",2)(3,v,1,0,"div",3)(4,D,2,0,"div",4)(5,C,1,0,"div",5),i.j41(6,"div",6),i.SdG(7),i.k0s(),i.DNE(8,I,1,0,"div",3)(9,d,3,0,"div",7),i.k0s()()),2&f&&(i.R7$(2),i.Y8G("ngIf",m.optionHeaderDisplay),i.R7$(),i.Y8G("ngIf",m.optionHeaderDisplay),i.R7$(),i.Y8G("ngIf",m.optionActionMainDisplay),i.R7$(),i.Y8G("ngIf",m.optionActionMainDisplay),i.R7$(3),i.Y8G("ngIf",m.optionFooterDisplay),i.R7$(),i.Y8G("ngIf",m.optionFooterDisplay))},dependencies:[t.bT],encapsulation:2})}return l})()},4660:(R,O,a)=>{a.d(O,{p:()=>P});var i=a(3308),t=a(7788),r=a(7222),o=a(8189),T=a(5804),v=a(965),D=a(8887),C=a(3793),I=a(2831),d=a(3527),h=a(2882),l=a(5154),n=a(6610),_=a(2497),f=a(8278),m=a(9344),y=a(6182),B=a(4587),L=a(7912),F=a(8267);const S=["*"];function U(M,b){if(1&M&&(t.j41(0,"label",8),t.EFF(1),t.k0s()),2&M){const e=t.XpG();t.Mz_("for","app-cms-site-selector-",e.id,""),t.R7$(),t.JRh(e.optionLabel)}}function p(M,b){if(1&M&&(t.nrm(0,"img",11),t.nI1(1,"cmsthumbnail")),2&M){const e=t.XpG().$implicit;t.FS9("src",t.bMT(1,1,e.linkImageIdSrc),t.B4B)}}function u(M,b){if(1&M&&(t.j41(0,"mat-option",9),t.DNE(1,p,2,3,"img",10),t.j41(2,"span"),t.EFF(3),t.k0s()()),2&M){const e=b.$implicit,c=t.XpG();t.Y8G("value",e)("disabled",c.optionDisabled),t.R7$(),t.Y8G("ngIf",e.linkImageIdSrc),t.R7$(2),t.JRh(c.displayOption(e))}}function s(M,b){if(1&M){const e=t.RV6();t.j41(0,"mat-icon",12),t.bIt("click",function(){t.eBV(e);const g=t.XpG();return t.Njj(g.onActionSelectClear())}),t.EFF(1,"close"),t.k0s()}}let P=(()=>{class M{static#t=this.nextId=0;constructor(e,c,g,A,E){this.coreEnumService=e,this.translate=c,this.publicHelper=g,this.cdr=A,this.categoryService=E,this.id=++M.nextId,this.dataModelResult=new o.N$V,this.dataModelSelect=new o.skK,this.formControl=new r.MJ,this.optionDisabled=!1,this.optionSelectFirstItem=!1,this.optionPlaceholder="",this.optionLabel="",this.optionChange=new t.bkB,this.optionReload=()=>this.onActionButtonReload(),this.publicHelper.processService.cdr=this.cdr}set optionSelectForce(e){this.onActionSelectForce(e)}ngOnInit(){this.loadOptions(),(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}loadOptions(){this.filteredOptions=this.formControl.valueChanges.pipe((0,v.Z)(""),(0,D.B)(1500),(0,C.F)(),(0,I.n)(e=>this.DataGetAll("string"==typeof e||"number"==typeof e?e:"")))}displayFn(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}displayOption(e){return e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0&&e.virtual_Parent.virtual_Parent&&e.virtual_Parent.virtual_Parent.title.length>0?e.virtual_Parent.virtual_Parent.titleML+" > "+e.virtual_Parent.titleML+" > "+e.titleML:e&&e.virtual_Parent&&e.virtual_Parent.title.length>0?e.virtual_Parent.titleML+" > "+e.titleML:e?e.titleML:void 0}DataGetAll(e){var c=this;return(0,i.A)(function*(){const g=new o.O2i;if(g.rowPerPage=20,g.accessLoad=!0,e&&e.length>0){let E=new o.ycK;E=new o.ycK,E.propertyName="Symbol",E.value=e,E.searchType=o._GO.Contains,E.clauseType=o.jL_.Or,g.filters.push(E),E=new o.ycK,E.propertyName="Title",E.value=e,E.searchType=o._GO.Contains,E.clauseType=o.jL_.Or,g.filters.push(E),e&&"number"==typeof+e&&+e>0&&(E=new o.ycK,E.propertyName="Id",E.value=e,E.searchType=o._GO.Equal,E.clauseType=o.jL_.Or,g.filters.push(E))}const A=c.constructor.name+"main";return c.translate.get("MESSAGE.Receiving_information").subscribe(E=>{c.publicHelper.processService.processStart(A,E,c.constructor.name)}),yield(0,T._)(c.categoryService.ServiceGetAll(g)).then(E=>(c.dataModelResult=E,c.optionSelectFirstItem&&(!c.dataModelSelect||!c.dataModelSelect.id||c.dataModelSelect.id<=0)&&c.dataModelResult.listItems.length>0&&(c.optionSelectFirstItem=!1,setTimeout(()=>{c.formControl.setValue(c.dataModelResult.listItems[0])},1e3),c.onActionSelect(c.dataModelResult.listItems[0])),c.publicHelper.processService.processStop(A),E.listItems))})()}onActionSelect(e){this.optionDisabled||(this.dataModelSelect=e,this.optionChange.emit(this.dataModelSelect))}onActionSelectClear(){this.optionDisabled||(this.dataModelSelect=null,this.formControl.setValue(null),this.optionChange.emit(null))}push(e){return this.filteredOptions.pipe((0,d.T)(c=>(c.find(g=>g.id===e.id)||c.push(e),c)))}onActionSelectForce(e){if("number"==typeof e&&e>0){if(this.dataModelSelect&&this.dataModelSelect.id===e)return;if(this.dataModelResult&&this.dataModelResult.listItems&&this.dataModelResult.listItems.find(c=>c.id===e)){const c=this.dataModelResult.listItems.find(g=>g.id===e);return this.dataModelSelect=c,void this.formControl.setValue(c)}this.categoryService.ServiceGetOneIncludeParent(e).subscribe({next:c=>{c.isSuccess&&(this.filteredOptions=this.push(c.item),this.dataModelSelect=c.item,this.formControl.setValue(c.item),this.optionChange.emit(c.item))}})}else{if(typeof e==typeof o.skK)return this.filteredOptions=this.push(e),this.dataModelSelect=e,void this.formControl.setValue(e);this.formControl.setValue(null)}}onActionButtonReload(){this.dataModelSelect=new o.skK,this.loadOptions()}static#e=this.\u0275fac=function(c){return new(c||M)(t.rXU(o.i9D),t.rXU(h.c$),t.rXU(l.A),t.rXU(t.gRc),t.rXU(o.QZQ))};static#a=this.\u0275cmp=t.VBU({type:M,selectors:[["app-cms-location-selector"]],inputs:{optionDisabled:"optionDisabled",optionSelectFirstItem:"optionSelectFirstItem",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionReload:"optionReload",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},ngContentSelectors:S,decls:10,vars:13,consts:[["matauto","matAutocomplete"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4","progressOverlayContainer"],[3,"optionsInfoAreaId"],["class","color-highlight",3,"for",4,"ngIf"],["type","text","matInput","",1,"form-control","validate-name",3,"placeholder","formControl","matAutocomplete","id"],[3,"optionSelected","displayWith"],[3,"value","disabled",4,"ngFor","ngForOf"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"color-highlight",3,"for"],[3,"value","disabled"],["style","vertical-align:middle;","class","ntk-hover-zoom","aria-hidden","","height","25","width","25",3,"src",4,"ngIf"],["aria-hidden","","height","25","width","25",1,"ntk-hover-zoom",2,"vertical-align","middle",3,"src"],["matSuffix","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"]],template:function(c,g){if(1&c){const A=t.RV6();t.NAR(),t.j41(0,"div",1),t.nrm(1,"app-progress-spinner",2),t.DNE(2,U,2,3,"label",3),t.nrm(3,"input",4),t.j41(4,"mat-autocomplete",5,0),t.bIt("optionSelected",function(K){return t.eBV(A),t.Njj(g.onActionSelect(K.option.value))}),t.DNE(6,u,4,4,"mat-option",6),t.nI1(7,"async"),t.k0s(),t.DNE(8,s,2,0,"mat-icon",7),t.SdG(9),t.k0s()}if(2&c){const A=t.sdS(5);t.R7$(),t.Y8G("optionsInfoAreaId",g.constructor.name),t.R7$(),t.Y8G("ngIf",(null==g.optionLabel?null:g.optionLabel.length)>0),t.R7$(),t.FS9("placeholder",g.optionPlaceholder),t.Mz_("id","app-cms-site-selector-",g.id,""),t.Y8G("formControl",g.formControl)("matAutocomplete",A),t.BMQ("disabled",!!g.optionDisabled||null),t.R7$(),t.Y8G("displayWith",g.displayFn),t.R7$(2),t.Y8G("ngForOf",t.bMT(7,11,g.filteredOptions)),t.R7$(2),t.Y8G("ngIf",null==g.dataModelSelect?null:g.dataModelSelect.id)}},dependencies:[n.Sq,n.bT,r.me,r.BC,r.l_,_.$3,f.wT,_.pN,m.yw,y.An,B.fg,L._,n.Jj,F.r],encapsulation:2})}return M})()},4768:(R,O,a)=>{a.d(O,{p:()=>D});var i=a(7788),t=a(9197),o=a(5312),T=a(9722),v=a(8786);let D=(()=>{class C{static#t=this.nextId=0;set optonCenter(d){this.map&&d&&d.lat&&d.lon&&0!==d.lat&&0!==d.lon&&this.map.setView(new t.LatLng(d.lat,d.lon),this.zoom)}set optionCurrentPoint(d){this.onActionCurrentPoint(d)}constructor(d){this.cmsToastrService=d,this.id=++C.nextId,this.map$=new i.bkB,this.zoom$=new i.bkB,this.options={layers:[(0,t.tileLayer)(o.c.leafletUrl,{opacity:.7,maxZoom:19,detectRetina:!0})],zoom:16,center:[32.684985,51.6359425]},this.destroy=!1}ngOnInit(){const n=t.icon({iconRetinaUrl:"assets/leaflet/marker-icon-2x.png",iconUrl:"assets/leaflet/marker-icon.png",shadowUrl:"assets/leaflet/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]});t.Marker.prototype.options.icon=n}ngOnDestroy(){this.map&&(this.map.clearAllEventListeners(),this.destroy=!0)}onMapReady(d){setTimeout(()=>{this.map&&!this.destroy&&d.invalidateSize()},500),this.map=d,this.map$.emit(d),this.zoom=d.getZoom(),this.zoom$.emit(this.zoom)}onMapZoomEnd(d){this.zoom=d.target.getZoom(),this.zoom$.emit(this.zoom)}onActionCurrentPoint(d=!0){this.getPosition().then(h=>{this.map.setView(new t.LatLng(h.lat,h.lon),this.zoom)})}getPosition(){return new Promise((d,h)=>{navigator.geolocation.getCurrentPosition(l=>{d({lon:l.coords.longitude,lat:l.coords.latitude})},l=>{this.cmsToastrService.typeErrorGetPosition()})})}static#e=this.\u0275fac=function(h){return new(h||C)(i.rXU(T.k))};static#a=this.\u0275cmp=i.VBU({type:C,selectors:[["app-cms-map"]],inputs:{options:"options",optonCenter:"optonCenter",optionCurrentPoint:"optionCurrentPoint"},outputs:{map$:"map$",zoom$:"zoom$"},decls:1,vars:1,consts:[["leaflet","",1,"map-container",3,"leafletMapReady","leafletMapZoomEnd","leafletOptions"]],template:function(h,l){1&h&&(i.j41(0,"div",0),i.bIt("leafletMapReady",function(_){return l.onMapReady(_)})("leafletMapZoomEnd",function(_){return l.onMapZoomEnd(_)}),i.k0s()),2&h&&i.Y8G("leafletOptions",l.options)},dependencies:[v.V1],styles:[".map-container[_ngcontent-%COMP%]{width:100%;height:300px}"]})}return C})()},7392:(R,O,a)=>{a.d(O,{v:()=>F});var i=a(6809),t=a(7788),r=a(7222),o=a(8189),T=a(965),v=a(8887),D=a(2831),C=a(3527),I=a(9722),d=a(6610),h=a(2497),l=a(8278),n=a(3986),_=a(9344),f=a(6182);const m=["tagInput"];function y(S,U){if(1&S){const p=t.RV6();t.j41(0,"mat-chip",9),t.bIt("removed",function(){const s=t.eBV(p).$implicit,P=t.XpG();return t.Njj(P.remove(s))}),t.EFF(1),t.j41(2,"button",10)(3,"mat-icon"),t.EFF(4,"cancel"),t.k0s()()()}if(2&S){const p=U.$implicit;t.R7$(),t.SpI(" ",p.display," ")}}function B(S,U){if(1&S&&(t.j41(0,"mat-option",11),t.EFF(1),t.k0s()),2&S){const p=U.$implicit;t.Y8G("value",p),t.R7$(),t.SpI(" ",p.display," ")}}let F=(()=>{class S{static#t=this.nextId=0;constructor(p,u){this.service=p,this.cmsToastrService=u,this.id=++S.nextId,this.optionDisabled=!1,this.optionPlaceholder="+ Tag",this.optionLabel="",this.optionChange=new t.bkB,this.tagDataModel=[],this.tagLastDataModel=[],this.selectForceStatus=!0,this.separatorKeysCodes=[i.Fm],this.tagCtrl=new r.MJ(""),this.addOnBlur=!0,this.filteredOptions=this.tagCtrl.valueChanges.pipe((0,T.Z)(null),(0,v.B)(400),(0,D.n)(s=>this.filter(s||"")))}set optionSelectForce(p){this.onActionSelectForce(p)}ngOnInit(){(!this.optionLabel||0==this.optionLabel.length&&this.optionPlaceholder?.length>0)&&(this.optionLabel=this.optionPlaceholder)}filter(p){const u=new o.O2i;u.rowPerPage=20,u.accessLoad=!0;let s=new o.ycK;return s.propertyName="Title",s.value=p,s.searchType=o._GO.Contains,s.clauseType=o.jL_.Or,u.filters.push(s),p&&"number"==typeof+p&&+p>0&&(s=new o.ycK,s.propertyName="Id",s.value=p,s.searchType=o._GO.Equal,s.clauseType=o.jL_.Or,u.filters.push(s)),this.service.ServiceGetAll(u).pipe((0,C.T)(P=>(this.tagLastDataModel=P.listItems.map(M=>({display:M.title,value:M.id})),this.tagLastDataModel)))}checkIndex(p){let u=0,s=-1;return this.tagDataModel.forEach(P=>{P.value==p&&(s=u),u++}),s}add(p){let u;p.value&&this.tagLastDataModel.forEach(s=>{(s.display==p.value||s.value+""==p.value)&&(u=s)}),u&&this.checkIndex(u.value)<0&&(this.tagDataModel.push(u),this.onActionChange()),p.chipInput.clear(),this.tagCtrl.setValue(null)}remove(p){const u=this.checkIndex(p.value);u>=0&&(this.tagDataModel.splice(u,1),this.onActionChange())}selected(p){const u=p.option.value;this.checkIndex(u.value)<0&&this.tagDataModel.push(u),this.tagInput.nativeElement.value="",this.tagCtrl.setValue(null),this.onActionChange()}onActionChange(){const p=[];this.tagDataModel.forEach(u=>{p.findIndex(s=>s==u.value)<0&&p.push(u.value)}),this.selectForceStatus=!1,this.optionChange.emit(p)}onActionSelectForce(p){if(!this.selectForceStatus||!p||0===p.length)return;const u=new o.O2i;p.forEach(s=>{if(s>0){const P=new o.ycK;P.propertyName="Id",P.value=s,P.clauseType=o.jL_.Or,u.filters.push(P)}}),this.service.ServiceGetAll(u).subscribe({next:s=>{s.isSuccess?s.listItems.forEach(P=>{this.tagDataModel.findIndex(M=>M.value==P.id)<0&&this.tagDataModel.push({value:P.id,display:P.title})}):this.cmsToastrService.typeErrorGetAll(s.errorMessage)},error:s=>{this.cmsToastrService.typeErrorGetAll(s)}})}static#e=this.\u0275fac=function(u){return new(u||S)(t.rXU(o.XFG),t.rXU(I.k))};static#a=this.\u0275cmp=t.VBU({type:S,selectors:[["app-cms-tag-autocomplete"]],viewQuery:function(u,s){if(1&u&&t.GBs(m,5),2&u){let P;t.mGM(P=t.lsd())&&(s.tagInput=P.first)}},inputs:{optionDisabled:"optionDisabled",optionPlaceholder:"optionPlaceholder",optionLabel:"optionLabel",optionSelectForce:"optionSelectForce"},outputs:{optionChange:"optionChange"},decls:12,vars:12,consts:[["chipList",""],["tagInput",""],["auto","matAutocomplete"],["appearance","fill",2,"width","100%"],["aria-label","tag selection",3,"disabled"],[3,"removed",4,"ngFor","ngForOf"],[3,"matChipInputTokenEnd","placeholder","matChipInputAddOnBlur","formControl","matAutocomplete","matChipInputFor","matChipInputSeparatorKeyCodes"],[3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],[3,"removed"],["type","button","matChipRemove","",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-gray"],[3,"value"]],template:function(u,s){if(1&u){const P=t.RV6();t.j41(0,"mat-form-field",3)(1,"mat-label"),t.EFF(2),t.k0s(),t.j41(3,"mat-chip-grid",4,0),t.DNE(5,y,5,1,"mat-chip",5),t.j41(6,"input",6,1),t.bIt("matChipInputTokenEnd",function(b){return t.eBV(P),t.Njj(s.add(b))}),t.k0s()(),t.j41(8,"mat-autocomplete",7,2),t.bIt("optionSelected",function(b){return t.eBV(P),t.Njj(s.selected(b))}),t.DNE(10,B,2,2,"mat-option",8),t.nI1(11,"async"),t.k0s()()}if(2&u){const P=t.sdS(4),M=t.sdS(9);t.R7$(2),t.JRh(s.optionLabel),t.R7$(),t.Y8G("disabled",s.optionDisabled),t.R7$(2),t.Y8G("ngForOf",s.tagDataModel),t.R7$(),t.Y8G("placeholder"," + "+s.optionPlaceholder)("matChipInputAddOnBlur",s.addOnBlur)("formControl",s.tagCtrl)("matAutocomplete",M)("matChipInputFor",P)("matChipInputSeparatorKeyCodes",s.separatorKeysCodes),t.R7$(4),t.Y8G("ngForOf",t.bMT(11,10,s.filteredOptions))}},dependencies:[d.Sq,r.me,r.BC,r.l_,h.$3,l.wT,h.pN,n.Jl,n.HW,n.D7,n.Zv,_.rl,_.nJ,f.An,d.Jj],encapsulation:2})}return S})()}}]);