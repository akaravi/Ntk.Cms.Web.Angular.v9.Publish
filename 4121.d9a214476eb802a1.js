"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4121],{3673:(g,m,r)=>{r.d(m,{G:()=>f});var e=r(8239),u=r(8692),h=r(4511),s=r(4537),i=r(4032),l=r(2607);let f=(()=>{class _{elRef;renderer;publicHelper;cmsToastrService;cdr;document;row;contentService;constructor(t,a,o,p,b,S){this.elRef=t,this.renderer=a,this.publicHelper=o,this.cmsToastrService=p,this.cdr=b,this.document=S}getEnumRecordStatus(){var t=this;return(0,e.Z)(function*(){(yield t.publicHelper.getEnumRecordStatus()).listItems.forEach(o=>{const p=document.createElement("option");p.innerHTML=" "+o.title+' <i Class="'+t.iconStatus(o.value)+'"></i>',p.value=o.value.toString(),t.elRef.nativeElement.add(p)}),t.elRef.nativeElement.options.length>0&&t.row&&t.row.recordStatus&&t.renderer.setProperty(t.elRef.nativeElement,"value",t.row.recordStatus)})()}onChange(){const t=this.elRef.nativeElement,a=t.value;this.addLoader(t),this.contentService.setAccessDataType(h.dR.Editor),this.contentService.ServiceSetStatus(this.row.id,a).subscribe(o=>{o.isSuccess?(this.handleSuccessCase(t),this.cmsToastrService.typeSuccessSetStatus(o.errorMessage),this.row.recordStatus=0|a,this.cdr.markForCheck()):(this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeErrorSetStatus(o.errorMessage),this.handleErrorCase(t))},o=>{this.renderer.setProperty(this.elRef.nativeElement,"value",this.row.recordStatus),this.cmsToastrService.typeError(o),this.handleErrorCase(t)})}handleSuccessCase(t){this.removeBackground(t),this.addSuccess(t),setTimeout(()=>{this.removeBackground(t)},1e3)}handleErrorCase(t){this.removeBackground(t);const a=this.document.createElement("img");a.style.width="20px",a.src="https://www.seekpng.com/png/detail/334-3345964_error-icon-download-attention-symbol.png";const o=this.renderer.parentNode(this.elRef.nativeElement);this.renderer.appendChild(o,a),setTimeout(()=>{this.renderer.removeChild(o,a)},1e3)}addLoader(t){this.addBackground(t,"https://replit.com/public/images/loading_dots.gif",20)}addSuccess(t){this.addBackground(t,"https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg",20)}addBackground(t,a,o){t.style.background=`#fff url("${a}") no-repeat right 20px center`,t.style.backgroundSize=`${o}px`}removeBackground(t){t.style.background="none"}iconStatus(t){let a="";switch(t){case 1:default:a="fa fa-check";break;case 2:a="fa fa-eye-slash";break;case 3:a="fa fa-times";break;case 4:a="fa fa-hourglass-half";break;case 5:a="far fa-thumbs-down";break;case 6:a="fa fa-archive"}return a}static \u0275fac=function(a){return new(a||_)(s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(i.i),s.Y36(l.e),s.Y36(s.sBO),s.Y36(u.K0))};static \u0275dir=s.lG2({type:_,selectors:[["","cmsRecordStatusSelfSave",""]],hostBindings:function(a,o){1&a&&s.NdJ("change",function(){return o.onChange()})},inputs:{row:"row",contentService:"contentService"}})}return _})()},5897:(g,m,r)=>{r.d(m,{Y:()=>h});var e=r(4537),u=r(5998);let h=(()=>{class s{sanitizer;constructor(l){this.sanitizer=l}transform(l){return"cms-RecordStatusEnum-cell-"+l}static \u0275fac=function(c){return new(c||s)(e.Y36(u.H7,16))};static \u0275pipe=e.Yjl({name:"statusCellClass",type:s,pure:!0})}return s})()},6639:(g,m,r)=>{r.d(m,{G:()=>h});var e=r(4537),u=r(5998);let h=(()=>{class s{sanitizer;constructor(l){this.sanitizer=l}transform(l,c=!1){let n="";switch(l){case 1:default:n="fa fa-check";break;case 2:n="fa fa-times";break;case 3:n="fa fa-trash";break;case 4:n="fa fa-hourglass-half";break;case 5:n="far fa-thumbs-down";break;case 6:n="fa fa-archive"}return n}static \u0275fac=function(c){return new(c||s)(e.Y36(u.H7,16))};static \u0275pipe=e.Yjl({name:"statusIconClass",type:s,pure:!0})}return s})()},3914:(g,m,r)=>{r.d(m,{s:()=>s});var e=r(4537),u=r(9154);let h=(()=>{class i{activeModal;static nextId=0;id=++i.nextId;title;message;btnOkText;btnCancelText;constructor(c){this.activeModal=c}ngOnInit(){}decline(){this.activeModal.close(!1)}accept(){this.activeModal.close(!0)}dismiss(){this.activeModal.dismiss()}static \u0275fac=function(n){return new(n||i)(e.Y36(u.Kz))};static \u0275cmp=e.Xpm({type:i,selectors:[["app-confirmation-dialog"]],inputs:{title:"title",message:"message",btnOkText:"btnOkText",btnCancelText:"btnCancelText"},decls:12,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",3,"innerHTML"],[1,"modal-footer"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"click"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-green",3,"click"]],template:function(n,d){1&n&&(e.TgZ(0,"div",0)(1,"h4",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return d.dismiss()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e._UZ(6,"div",4),e.TgZ(7,"div",5)(8,"button",6),e.NdJ("click",function(){return d.decline()}),e._uU(9),e.qZA(),e.TgZ(10,"button",7),e.NdJ("click",function(){return d.accept()}),e._uU(11),e.qZA()()),2&n&&(e.xp6(2),e.Oqu(d.title),e.xp6(4),e.Q6J("innerHTML",d.message,e.oJD),e.xp6(3),e.Oqu(d.btnCancelText),e.xp6(2),e.Oqu(d.btnOkText))},encapsulation:2})}return i})(),s=(()=>{class i{modalService;constructor(c){this.modalService=c}confirm(c,n,d="OK",f="Cancel",_="sm"){const v=this.modalService.open(h,{size:_});return v.componentInstance.title=c,v.componentInstance.message=n,v.componentInstance.btnOkText=d,v.componentInstance.btnCancelText=f,v.result}static \u0275fac=function(n){return new(n||i)(e.LFG(u.FF))};static \u0275prov=e.Yz7({token:i,factory:i.\u0275fac})}return i})()}}]);