"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[1050,7421],{3438:(M,C,o)=>{o.d(C,{x:()=>T});var t=o(3308),h=o(6610),i=o(8189),c=o(7788),b=o(5154),_=o(9722);let T=(()=>{class f{constructor(e,a,d,m,R,n){this.elRef=e,this.renderer=a,this.publicHelper=d,this.cmsToastrService=m,this.cdr=R,this.document=n,this.DataEnumRecordStatus()}DataEnumRecordStatus(){var e=this;return(0,t.A)(function*(){(yield e.publicHelper.getEnumRecordStatus()).listItems.forEach(d=>{const m=document.createElement("option");m.innerHTML=" "+d.title+' <i Class="'+e.iconStatus(d.value)+'"></i>',m.value=d.value.toString(),e.elRef.nativeElement.add(m)}),e.elRef.nativeElement.options.length>0&&e.row&&e.row.recordStatus&&e.renderer.setProperty(e.elRef.nativeElement,"value",e.row.recordStatus)})()}onChange(){const e=this.elRef.nativeElement,a=e.value;this.addLoader(e),this.contentService.setAccessDataType(i.FYP.Editor),this.contentService.ServiceSetStatus(this.row.id,a).subscribe({next:d=>{d.isSuccess?(this.handleSuccessCase(e),this.cmsToastrService.typeSuccessSetStatus(d.errorMessage),this.row.recordStatus=0|a,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(d.errorMessage),this.handleErrorCase(e))},error:d=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(d),this.handleErrorCase(e)}})}handleSuccessCase(e){this.removeBackground(e),this.addSuccess(e),setTimeout(()=>{this.removeBackground(e)},1e3)}handleErrorCase(e){this.removeBackground(e);const a=this.document.createElement("img");a.style.width="20px",a.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const d=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(d,a),setTimeout(()=>{this.renderer.removeChild(d,a)},1e3)}addLoader(e){this.addBackground(e,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(e){this.addBackground(e,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(e,a,d){e.style.background=`#fff url("${a}") no-repeat right 20px center`,e.style.backgroundSize=`${d}px`}removeBackground(e){e.style.background="none"}iconStatus(e){let a="";switch(e){case 1:default:a="fa fa-check";break;case 2:a="fa fa-eye-slash";break;case 3:a="fa fa-times";break;case 4:a="fa fa-hourglass-half";break;case 5:a="far fa-thumbs-down";break;case 6:a="fa fa-archive"}return a}static#t=this.\u0275fac=function(a){return new(a||f)(c.rXU(c.aKT),c.rXU(c.sFG),c.rXU(b.A),c.rXU(_.k),c.rXU(c.gRc),c.rXU(h.qQ))};static#e=this.\u0275dir=c.FsC({type:f,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(a,d){1&a&&c.bIt("change",function(){return d.onChange()})},inputs:{row:"row",contentService:"contentService"}})}return f})()},1268:(M,C,o)=>{o.d(C,{M:()=>i});var t=o(7788),h=o(6098);let i=(()=>{class c{constructor(_){this.sanitizer=_}transform(_){return"cms-RecordStatusEnum-cell-"+_}static#t=this.\u0275fac=function(E){return new(E||c)(t.rXU(h.up,16))};static#e=this.\u0275pipe=t.EJ8({name:"statusCellClass",type:c,pure:!0})}return c})()},6381:(M,C,o)=>{o.d(C,{T:()=>i});var t=o(7788),h=o(6098);let i=(()=>{class c{constructor(_){this.sanitizer=_}transform(_,E=!1){let p="";switch(_){case 1:default:p="fa fa-check";break;case 2:p="fa fa-times";break;case 3:p="fa fa-trash";break;case 4:p="fa fa-hourglass-half";break;case 5:p="far fa-thumbs-down";break;case 6:p="fa fa-archive"}return p}static#t=this.\u0275fac=function(E){return new(E||c)(t.rXU(h.up,16))};static#e=this.\u0275pipe=t.EJ8({name:"statusIconClass",type:c,pure:!0})}return c})()},5459:(M,C,o)=>{o.d(C,{o:()=>p});var t=o(5312),h=o(6482),i=o(7788);let c=(()=>{class u{static#t=this.nextId=0;constructor(f,v){this.dialogRef=f,this.data=v,this.id=++u.nextId,v||this.dialogRef.close(!1)}ngOnInit(){}onDismiss(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static#e=this.\u0275fac=function(v){return new(v||u)(i.rXU(h.CP),i.rXU(h.Vh))};static#n=this.\u0275cmp=i.VBU({type:u,selectors:[["app-confirmation-dialog"]],decls:18,vars:4,consts:[[1,"menu","menu-box-modal","rounded-m","menu-active",2,"display","block","width","350px","height","320px","padding","20px"],[1,"menu-title"],[1,"fa","fa-question-circle","scale-box","float-start","me-3","ms-3","fa-3x","mt-1","color-blue-dark"],[1,"color-highlight"],[1,"font-20"],[1,"close-menu",3,"click"],[1,"fa","fa-times-circle"],[1,"content","mt-0"],[1,"pe-3",3,"innerHTML"],[1,"row","mb-0"],[1,"col-6"],[1,"btn","close-menu","btn-full","btn-m","bg-red-dark","font-600","rounded-s",3,"click"],[1,"btn","close-menu","btn-full","btn-m","bg-green-dark","font-600","rounded-s",3,"click"]],template:function(v,e){1&v&&(i.j41(0,"div",0)(1,"div",1),i.nrm(2,"i",2),i.j41(3,"p",3),i.EFF(4),i.k0s(),i.j41(5,"h1",4),i.EFF(6,"\u0645\u0637\u0645\u0626\u0646\u06cc\u062f\u061f"),i.k0s(),i.j41(7,"a",5),i.bIt("click",function(){return e.onDismiss()}),i.nrm(8,"i",6),i.k0s()(),i.j41(9,"div",7),i.nrm(10,"p",8),i.j41(11,"div",9)(12,"div",10)(13,"a",11),i.bIt("click",function(){return e.onDismiss()}),i.EFF(14),i.k0s()(),i.j41(15,"div",10)(16,"a",12),i.bIt("click",function(){return e.onConfirm()}),i.EFF(17),i.k0s()()()()()),2&v&&(i.R7$(4),i.SpI(" ",e.data.title,""),i.R7$(6),i.Y8G("innerHTML",e.data.message,i.npT),i.R7$(4),i.JRh(e.data.btnCancelText),i.R7$(3),i.JRh(e.data.btnConfirmText))},encapsulation:2})}return u})();var b=o(8339),_=o(2882);class E{constructor(T,f){this.title=T,this.message=f,this.btnConfirmText="OK",this.btnCancelText="Cancel",this.dialogSize="sm"}}let p=(()=>{class u{constructor(f,v,e){this.dialog=f,this.tokenHelper=v,this.translate=e}confirm(f,v,e="",a="",d="sm"){const m=new E(f,v);return m.btnConfirmText=e,m.btnCancelText=a,m.dialogSize=d,(!m.btnConfirmText||""==m.btnConfirmText||0==m.btnConfirmText.length)&&this.translate.get("ACTION.CONFIRM").subscribe(l=>{m.btnConfirmText=l}),(!m.btnCancelText||""==m.btnCancelText||0==m.btnCancelText.length)&&this.translate.get("ACTION.CANCEL").subscribe(l=>{m.btnCancelText=l}),this.dialog.open(c,{height:"90%",panelClass:this.tokenHelper.isMobile?"dialog-fullscreen":"dialog-min",enterAnimationDuration:t.c.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:t.c.cmsViewConfig.exitAnimationDuration,data:m}).afterClosed().toPromise().then(l=>Promise.resolve(l))}static#t=this.\u0275fac=function(v){return new(v||u)(i.KVO(h.bZ),i.KVO(b._),i.KVO(_.c$))};static#e=this.\u0275prov=i.jDH({token:u,factory:u.\u0275fac})}return u})()},1387:(M,C,o)=>{o.d(C,{U:()=>b});var t=o(6610),h=o(6409),i=o(6262),c=o(7788);let b=(()=>{class _{static#t=this.\u0275fac=function(u){return new(u||_)};static#e=this.\u0275mod=c.$C({type:_});static#n=this.\u0275inj=c.G2t({providers:[(0,h.$R)((0,h.Sx)())],imports:[t.MD,i.Xx]})}return _})()},7848:(M,C,o)=>{o.d(C,{l:()=>R});var t=o(7788),h=o(6610),i=o(2882);let c=(()=>{class n{transform(s,r){if(!s)return[];let g=Object.keys(s);return g=g.filter(k=>k&&k.length>0&&k.toLowerCase().indexOf("antiinjection")<0),r&&r.size>0&&(g=g.filter(k=>k&&k.length>0&&r.has(k))),g}static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275pipe=t.EJ8({name:"listkeys",type:n,pure:!0})}return n})();function b(n,l){1&n&&(t.j41(0,"div",6)(1,"div",7),t.EFF(2),t.nI1(3,"translate"),t.k0s(),t.j41(4,"div",7),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.nrm(7,"div",8),t.k0s()),2&n&&(t.R7$(2),t.JRh(t.bMT(3,2,"TITLE.parameter")),t.R7$(3),t.JRh(t.bMT(6,4,"TITLE.Values")))}function _(n,l){if(1&n&&(t.j41(0,"div",9)(1,"div",7),t.EFF(2),t.k0s(),t.j41(3,"div",7),t.EFF(4),t.k0s(),t.nrm(5,"div",10),t.k0s()),2&n){const s=l.$implicit,r=t.XpG(2);t.R7$(2),t.JRh(r.optionFields&&r.optionFields.size>0?r.optionFields.get(s):s),t.R7$(2),t.JRh(r.dataModel[s])}}function E(n,l){if(1&n&&(t.j41(0,"div",3),t.DNE(1,b,8,6,"div",4)(2,_,6,2,"div",5),t.nI1(3,"listkeys"),t.k0s()),2&n){const s=t.XpG();t.R7$(),t.Y8G("ngIf",s.optionViewHead),t.R7$(),t.Y8G("ngForOf",t.i5U(3,2,s.dataModel,s.optionFields))}}function p(n,l){if(1&n&&(t.j41(0,"div",7),t.EFF(1),t.k0s()),2&n){const s=l.$implicit,r=t.XpG(3);t.R7$(),t.JRh(r.optionFields&&r.optionFields.size>0?r.optionFields.get(s):s)}}function u(n,l){if(1&n&&(t.j41(0,"div",6),t.DNE(1,p,2,1,"div",11),t.nI1(2,"listkeys"),t.nrm(3,"div",8),t.k0s()),2&n){const s=t.XpG(2);t.R7$(),t.Y8G("ngForOf",t.i5U(2,1,s.dataModel[0],s.optionFields))}}function T(n,l){if(1&n&&(t.j41(0,"div",7),t.EFF(1),t.k0s()),2&n){const s=l.$implicit,r=t.XpG().$implicit;t.R7$(),t.JRh(r[s])}}function f(n,l){if(1&n&&(t.j41(0,"div",9),t.DNE(1,T,2,1,"div",11),t.nI1(2,"listkeys"),t.nrm(3,"div",10),t.k0s()),2&n){const s=l.$implicit,r=t.XpG(2);t.R7$(),t.Y8G("ngForOf",t.i5U(2,1,s,r.optionFields))}}function v(n,l){if(1&n&&(t.j41(0,"div",3),t.DNE(1,u,4,4,"div",4)(2,f,4,4,"div",5),t.k0s()),2&n){const s=t.XpG();t.R7$(),t.Y8G("ngIf",s.optionViewHead),t.R7$(),t.Y8G("ngForOf",s.dataModel)}}function e(n,l){if(1&n&&(t.j41(0,"div",7),t.EFF(1),t.k0s()),2&n){const s=l.$implicit,r=t.XpG(3);t.R7$(),t.JRh(r.optionFields&&r.optionFields.size>0?r.optionFields.get(s):s)}}function a(n,l){if(1&n&&(t.j41(0,"div",6),t.DNE(1,e,2,1,"div",11),t.nI1(2,"listkeys"),t.nrm(3,"div",8),t.k0s()),2&n){const s=t.XpG(2);t.R7$(),t.Y8G("ngForOf",t.i5U(2,1,s.dataModel[0],s.optionFields))}}function d(n,l){if(1&n&&(t.j41(0,"div",7),t.EFF(1),t.k0s()),2&n){const s=l.$implicit,r=t.XpG(2);t.R7$(),t.JRh(r.dataModel[s])}}function m(n,l){if(1&n&&(t.j41(0,"div",3),t.DNE(1,a,4,4,"div",4),t.j41(2,"div",9),t.DNE(3,d,2,1,"div",11),t.nI1(4,"listkeys"),t.nrm(5,"div",10),t.k0s()()),2&n){const s=t.XpG();t.R7$(),t.Y8G("ngIf",s.optionViewHead),t.R7$(2),t.Y8G("ngForOf",t.i5U(4,2,s.dataModel,s.optionFields))}}let R=(()=>{class n{static#t=this.nextId=0;constructor(){this.id=++n.nextId,this.optionMethod=1,this.optionViewHead=!0}ngOnInit(){}static#e=this.\u0275fac=function(r){return new(r||n)};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-cms-json-list"]],inputs:{optionMethod:"optionMethod",dataModel:"dataModel",optionFields:"optionFields",optionViewHead:"optionViewHead"},decls:5,vars:3,consts:[[1,"card","card-style"],[1,"content","mb-0"],["class","table",4,"ngIf"],[1,"table"],["class","th",4,"ngIf"],["class","tr",4,"ngFor","ngForOf"],[1,"th"],[1,"td"],[1,"clear"],[1,"tr"],[2,"clear","both"],["class","td",4,"ngFor","ngForOf"]],template:function(r,g){1&r&&(t.j41(0,"div",0)(1,"div",1),t.DNE(2,E,4,5,"div",2)(3,v,3,2,"div",2)(4,m,6,5,"div",2),t.k0s()()),2&r&&(t.R7$(2),t.Y8G("ngIf",1===g.optionMethod&&g.dataModel),t.R7$(),t.Y8G("ngIf",2===g.optionMethod&&g.dataModel),t.R7$(),t.Y8G("ngIf",3===g.optionMethod&&g.dataModel))},dependencies:[h.Sq,h.bT,i.D9,c],styles:[".table[_ngcontent-%COMP%]{display:table;border:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .th[_ngcontent-%COMP%]{display:table-row;background-color:#40a1f5;color:#fff;font-weight:700}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f9f9f9}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row;border-bottom:1px solid #000}.table[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:15px;border-bottom:1px solid #40A1F5}.table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border:0}.clear[_ngcontent-%COMP%]{clear:both}"]})}return n})()}}]);