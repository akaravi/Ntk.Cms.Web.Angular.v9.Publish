"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[799,4121],{3673:(E,g,s)=>{s.d(g,{G:()=>r});var f=s(8239),h=s(8692),t=s(4511),i=s(4537),p=s(4032),d=s(2607);let r=(()=>{class u{elRef;renderer;publicHelper;cmsToastrService;cdr;document;row;contentService;constructor(e,n,c,l,C,b){this.elRef=e,this.renderer=n,this.publicHelper=c,this.cmsToastrService=l,this.cdr=C,this.document=b,this.DataEnumRecordStatus()}DataEnumRecordStatus(){var e=this;return(0,f.Z)(function*(){(yield e.publicHelper.getEnumRecordStatus()).listItems.forEach(c=>{const l=document.createElement("option");l.innerHTML=" "+c.title+' <i Class="'+e.iconStatus(c.value)+'"></i>',l.value=c.value.toString(),e.elRef.nativeElement.add(l)}),e.elRef.nativeElement.options.length>0&&e.row&&e.row.recordStatus&&e.renderer.setProperty(e.elRef.nativeElement,"value",e.row.recordStatus)})()}onChange(){const e=this.elRef.nativeElement,n=e.value;this.addLoader(e),this.contentService.setAccessDataType(t.dR.Editor),this.contentService.ServiceSetStatus(this.row.id,n).subscribe(c=>{c.isSuccess?(this.handleSuccessCase(e),this.cmsToastrService.typeSuccessSetStatus(c.errorMessage),this.row.recordStatus=0|n,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(c.errorMessage),this.handleErrorCase(e))},c=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(c),this.handleErrorCase(e)})}handleSuccessCase(e){this.removeBackground(e),this.addSuccess(e),setTimeout(()=>{this.removeBackground(e)},1e3)}handleErrorCase(e){this.removeBackground(e);const n=this.document.createElement("img");n.style.width="20px",n.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const c=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(c,n),setTimeout(()=>{this.renderer.removeChild(c,n)},1e3)}addLoader(e){this.addBackground(e,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(e){this.addBackground(e,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(e,n,c){e.style.background=`#fff url("${n}") no-repeat right 20px center`,e.style.backgroundSize=`${c}px`}removeBackground(e){e.style.background="none"}iconStatus(e){let n="";switch(e){case 1:default:n="fa fa-check";break;case 2:n="fa fa-eye-slash";break;case 3:n="fa fa-times";break;case 4:n="fa fa-hourglass-half";break;case 5:n="far fa-thumbs-down";break;case 6:n="fa fa-archive"}return n}static \u0275fac=function(n){return new(n||u)(i.Y36(i.SBq),i.Y36(i.Qsj),i.Y36(p.i),i.Y36(d.e),i.Y36(i.sBO),i.Y36(h.K0))};static \u0275dir=i.lG2({type:u,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(n,c){1&n&&i.NdJ("change",function(){return c.onChange()})},inputs:{row:"row",contentService:"contentService"}})}return u})()},9084:(E,g,s)=>{s.d(g,{Y:()=>p});var f=s(7241),h=s(7969),t=s(4537),i=s(4511);let p=(()=>{class d{service;constructor(o){this.service=o}transform(o){return!o||o<=0?new f.y:this.service.ServiceGetOneById(o,1e6).pipe((0,h.U)(a=>{var r="";return a.isSuccess&&(a.item.title&&a.item.title.length>0&&(r=a.item.title),a.item.id&&a.item.id>0&&(r.length>0&&(r+=" | "),r+=a.item.id),a.item.domain&&a.item.domain.length>0&&a.item.subDomain&&a.item.subDomain.length>0?(r.length>0&&(r+=" | "),r=r+a.item.subDomain+"."+a.item.domain):a.item.domain&&a.item.domain.length>0&&(r.length>0&&(r+=" | "),r+=a.item.domain)),0===r.length&&(r=o.toString()),r},a=>o.toString()))}static \u0275fac=function(a){return new(a||d)(t.Y36(i._0e,16))};static \u0275pipe=t.Yjl({name:"cmssiteinfo",type:d,pure:!0})}return d})()},5897:(E,g,s)=>{s.d(g,{Y:()=>t});var f=s(4537),h=s(5998);let t=(()=>{class i{sanitizer;constructor(d){this.sanitizer=d}transform(d){return"cms-RecordStatusEnum-cell-"+d}static \u0275fac=function(_){return new(_||i)(f.Y36(h.H7,16))};static \u0275pipe=f.Yjl({name:"statusCellClass",type:i,pure:!0})}return i})()},6639:(E,g,s)=>{s.d(g,{G:()=>t});var f=s(4537),h=s(5998);let t=(()=>{class i{sanitizer;constructor(d){this.sanitizer=d}transform(d,_=!1){let o="";switch(d){case 1:default:o="fa fa-check";break;case 2:o="fa fa-times";break;case 3:o="fa fa-trash";break;case 4:o="fa fa-hourglass-half";break;case 5:o="far fa-thumbs-down";break;case 6:o="fa fa-archive"}return o}static \u0275fac=function(_){return new(_||i)(f.Y36(h.H7,16))};static \u0275pipe=f.Yjl({name:"statusIconClass",type:i,pure:!0})}return i})()},3914:(E,g,s)=>{s.d(g,{s:()=>o});var f=s(2340),h=s(4536),t=s(4537);let i=(()=>{class a{dialogRef;data;static nextId=0;id=++a.nextId;constructor(u,m){this.dialogRef=u,this.data=m,m||this.dialogRef.close(!1)}ngOnInit(){}onDismiss(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(m){return new(m||a)(t.Y36(h.so),t.Y36(h.WI))};static \u0275cmp=t.Xpm({type:a,selectors:[["app-confirmation-dialog"]],decls:18,vars:4,consts:[[1,"menu","menu-box-modal","rounded-m","menu-active",2,"display","block","width","350px","height","320px","padding","20px"],[1,"menu-title"],[1,"fa","fa-question-circle","scale-box","float-start","me-3","ms-3","fa-3x","mt-1","color-blue-dark"],[1,"color-highlight"],[1,"font-20"],[1,"close-menu",3,"click"],[1,"fa","fa-times-circle"],[1,"content","mt-0"],[1,"pe-3",3,"innerHTML"],[1,"row","mb-0"],[1,"col-6"],[1,"btn","close-menu","btn-full","btn-m","bg-red-dark","font-600","rounded-s",3,"click"],[1,"btn","close-menu","btn-full","btn-m","bg-green-dark","font-600","rounded-s",3,"click"]],template:function(m,e){1&m&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"i",2),t.TgZ(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"h1",4),t._uU(6,"\u0645\u0637\u0645\u0626\u0646\u06cc\u062f\u061f"),t.qZA(),t.TgZ(7,"a",5),t.NdJ("click",function(){return e.onDismiss()}),t._UZ(8,"i",6),t.qZA()(),t.TgZ(9,"div",7),t._UZ(10,"p",8),t.TgZ(11,"div",9)(12,"div",10)(13,"a",11),t.NdJ("click",function(){return e.onDismiss()}),t._uU(14),t.qZA()(),t.TgZ(15,"div",10)(16,"a",12),t.NdJ("click",function(){return e.onConfirm()}),t._uU(17),t.qZA()()()()()),2&m&&(t.xp6(4),t.hij(" ",e.data.title,""),t.xp6(6),t.Q6J("innerHTML",e.data.message,t.oJD),t.xp6(4),t.Oqu(e.data.btnCancelText),t.xp6(3),t.Oqu(e.data.btnConfirmText))},encapsulation:2})}return a})();var p=s(727),d=s(6707);class _{title;message;constructor(r,u){this.title=r,this.message=u}btnConfirmText="OK";btnCancelText="Cancel";dialogSize="sm"}let o=(()=>{class a{dialog;tokenHelper;translate;constructor(u,m,e){this.dialog=u,this.tokenHelper=m,this.translate=e}confirm(u,m,e="",n="",c="sm"){const l=new _(u,m);return l.btnConfirmText=e,l.btnCancelText=n,l.dialogSize=c,(!l.btnConfirmText||""==l.btnConfirmText||0==l.btnConfirmText.length)&&this.translate.get("ACTION.CONFIRM").subscribe(v=>{l.btnConfirmText=v}),(!l.btnCancelText||""==l.btnCancelText||0==l.btnCancelText.length)&&this.translate.get("ACTION.CANCEL").subscribe(v=>{l.btnCancelText=v}),this.dialog.open(i,{height:"90%",panelClass:this.tokenHelper.isMobile?"dialog-fullscreen":"dialog-min",enterAnimationDuration:f.N.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:f.N.cmsViewConfig.exitAnimationDuration,data:l}).afterClosed().toPromise().then(v=>Promise.resolve(v))}static \u0275fac=function(m){return new(m||a)(t.LFG(h.uw),t.LFG(p.v),t.LFG(d.sK))};static \u0275prov=t.Yz7({token:a,factory:a.\u0275fac})}return a})()}}]);