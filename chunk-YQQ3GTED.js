import{d as Ve}from"./chunk-65HX2R4L.js";import{a as ke}from"./chunk-2WBSERDS.js";import{$ as oe,Ab as ve,Cb as be,K as ee,L as te,N as ne,O as ie,Od as Be,Sb as we,Tb as Te,Ub as Ie,Vb as ye,Wa as de,Wb as Ee,Xa as ce,Xb as Ae,Za as me,ea as ae,kc as Ne,o as X,p as z,pa as le,qa as pe,s as J,t as U,ub as Se,v as Y,vb as xe,x as Z,y as $}from"./chunk-C6VDHA6X.js";import"./chunk-XBKVRVC6.js";import{Db as L,Eb as P,Fb as R,Ib as F,Je as Me,Kb as i,La as n,Lb as h,Lc as K,Ld as fe,Ma as v,Mb as _,Qb as A,Qd as ge,Qe as he,Rb as N,Re as k,Sb as B,Vd as V,Wj as Ce,Yb as p,Zb as d,Zd as _e,ab as w,cb as M,da as I,ek as D,fd as re,fk as H,g as G,gc as q,gd as se,ja as y,ka as E,kd as j,lb as t,mb as o,nb as S,nd as ue,ra as m,rb as T,sa as u,ub as g,wb as b,zc as Q}from"./chunk-XKQYEJGP.js";var Oe=(()=>{let r=class r{constructor(){}ngOnInit(){}};r.\u0275fac=function(a){return new(a||r)},r.\u0275cmp=y({type:r,selectors:[["app-core-main-action"]],decls:1,vars:0,template:function(a,e){a&1&&S(0,"router-outlet")},dependencies:[se],encapsulation:2});let l=r;return l})();var De=["vform"],He=["Message"];function We(l,r){if(l&1){let C=T();t(0,"textarea",30),B("ngModelChange",function(a){m(C);let e=b();return N(e.dataMessageContentModel.messageBody,a)||(e.dataMessageContentModel.messageBody=a),u(a)}),i(1,"                  "),o()}if(l&2){let C=b();A("ngModel",C.dataMessageContentModel.messageBody)}}function Ge(l,r){if(l&1){let C=T();t(0,"button",31),g("click",function(){m(C);let a=b();return u(a.onActionMessageContentAdd())}),S(1,"i",32),i(2),p(3,"translate"),o()}l&2&&(n(2),_(" ",d(3,1,"TITLE.Added_to_the_text")," "))}function qe(l,r){if(l&1){let C=T();t(0,"button",31),g("click",function(){m(C);let a=b();return u(a.onActionMessageContentNew())}),S(1,"i",32),i(2),p(3,"translate"),o()}l&2&&(n(2),_(" ",d(3,1,"TITLE.Message_Text")," "))}function Qe(l,r){l&1&&(t(0,"mat-error"),i(1),p(2,"translate"),t(3,"strong"),i(4),p(5,"translate"),o()()),l&2&&(n(),_(" ",d(2,2,"TITLE.Message_Text")," "),n(3),h(d(5,4,"content.required")))}function Ke(l,r){if(l&1&&(t(0,"button",35),S(1,"i",36),i(2),p(3,"translate"),o()),l&2){b(2);let C=F(9);M("disabled",!C.valid),n(2),_(" ",d(3,2,"ACTION.Send_Message")," ")}}function Xe(l,r){if(l&1&&(t(0,"div",33),S(1,"app-progress-spinner",3),w(2,Ke,4,4,"button",34),o()),l&2){let C=b();n(),M("optionsInfoAreaId",C.constructor.name),n(),M("ngIf",!C.publicHelper.processService.processInRun)}}var O=(()=>{let r=class r{constructor(c,a,e,s,f,x,Pe,Re){this.coreEnumService=c,this.coreTokenNotificationService=a,this.activatedRoute=e,this.cmsToastrService=s,this.cdr=f,this.publicHelper=x,this.translate=Pe,this.tokenHelper=Re,this.tokenInfo=new ue,this.dataModelParentSelected=new Ce,this.dataModel=new he,this.dataModelResult=new fe,this.formInfo=new ge,this.clipboardText="",this.dataMessageCategoryModel=new D,this.dataMessageContentModel=new H,this.step=0,this.publicHelper.processService.cdr=this.cdr,this.tokenHelper.getCurrentToken().then(Fe=>{this.tokenInfo=Fe})}ngOnInit(){}readClipboardFromDevTools(){return new Promise((c,a)=>{let e=()=>G(this,null,function*(){try{let s=yield navigator.clipboard.readText();c(s)}catch(s){a(s)}window.removeEventListener("focus",e)});window.addEventListener("focus",e),console.log("Hit <Tab> to give focus back to document (or we will face a DOMException);")})}onActionMessageLTR(){this.message.nativeElement.style.direction="ltr",this.message.nativeElement.style.textAlign="left"}onActionMessageRTL(){this.message.nativeElement.style.direction="rtl",this.message.nativeElement.style.textAlign="right"}onActionSelectMessageCategory(c){c&&c.id.length>0?this.dataMessageCategoryModel=c:this.dataMessageCategoryModel=new D}onActionSelectMessageContent(c){c&&c.id.length>0?this.dataMessageContentModel=c:this.dataMessageContentModel=new H}onActionMessageContentAdd(){this.dataMessageContentModel?.messageBody?.length>0?this.dataModel.content.length>0&&(this.dataModel.content=this.dataModel.content+" "+this.dataMessageContentModel.messageBody):this.dataModel.content=this.dataMessageContentModel.messageBody}onActionMessageContentNew(){this.dataMessageContentModel?.messageBody?.length>0&&(this.dataModel.content=this.dataMessageContentModel.messageBody)}onFormSubmit(){if(!this.formGroup.valid)return;this.formInfo.formSubmitAllow=!1;let c=this.constructor.name+"main";this.translate.get("MESSAGE.Receiving_information").subscribe(a=>{this.publicHelper.processService.processStart(c,a,this.constructor.name)}),this.formInfo.formAlert="",this.formInfo.formError="",this.coreTokenNotificationService.ServiceSendNotification(this.dataModel).subscribe({next:a=>{this.formInfo.formSubmitAllow=!0,this.dataModelResult=a,a.isSuccess?(this.formInfo.formAlert=this.translate.instant("MESSAGE.Submit_request_was_successfully_registered"),this.cmsToastrService.typeSuccessMessage(this.translate.instant("MESSAGE.Send_request_was_successfully_registered"))):(this.translate.get("ERRORMESSAGE.MESSAGE.typeError").subscribe(e=>{this.formInfo.formAlert=e}),this.formInfo.formError=a.errorMessage,this.cmsToastrService.typeErrorMessage(a.errorMessage)),this.publicHelper.processService.processStop(c)},error:a=>{this.formInfo.formSubmitAllow=!0,this.cmsToastrService.typeError(a),this.publicHelper.processService.processStop(c,!1)},complete:()=>{}})}setStep(c){this.step=c}nextStep(){this.step++}prevStep(){this.step--}};r.\u0275fac=function(a){return new(a||r)(v(V),v(k),v(re),v(xe),v(q),v(ve),v(le),v(Se))},r.\u0275cmp=y({type:r,selectors:[["app-core-main-action-send-notification"]],viewQuery:function(a,e){if(a&1&&(L(De,5),L(He,5)),a&2){let s;P(s=R())&&(e.formGroup=s.first),P(s=R())&&(e.message=s.first)}},decls:141,vars:94,consts:[["vform","ngForm"],["content",""],[1,"card","card-style","progressOverlayContainer"],[3,"optionsInfoAreaId"],[1,"content","mb-0"],[1,"mb-0","color-highlight","font-600","font-12"],[3,"ngSubmit"],[1,"ntk-cms-html-card-body"],[1,"row"],[1,"col-6"],[1,"example-headers-align"],["hideToggle","",3,"opened","expanded"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-blue",3,"click"],["matInput","","name","dataMessageContentModel.messageBody","type","text","rows","10","id","dataMessageContentModel.messageBody",3,"ngModel","ngModelChange",4,"ngIf"],["type","button","class","btn font-13 font-600 btn-s m-1 rounded-s shadow-xl border-0 gradient-gray",3,"click",4,"ngIf"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-teal",3,"click"],[1,"d-flex","mb-3"],[1,"pt-1"],["data-trigger-switch","dataModel.sendToAll",1,"font-600","font-14"],[1,"ms-auto","me-3","pe-2"],[1,"custom-control","ios-switch","small-switch"],["type","checkbox","id","dataModel.sendToAll","name","dataModel.sendToAll",1,"ios-input",3,"ngModelChange","ngModel"],["for","dataModel.sendToAll",1,"custom-control-label"],[1,"message-box"],[1,"row",2,"height","300px"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],["for","dataModel.content",1,"color-highlight"],["matInput","","name","dataModel.content","type","text","placeholder","...","minlength","1","maxlength","500","rows","9","id","dataModel.content",1,"form-control","validate-name",3,"ngModelChange","ngModel"],[4,"ngIf"],["class","row","style","height:140px;bottom: 4vh;justify-content: center;",4,"ngIf"],["matInput","","name","dataMessageContentModel.messageBody","type","text","rows","10","id","dataMessageContentModel.messageBody",3,"ngModelChange","ngModel"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-gray",3,"click"],[1,"ft-x"],[1,"row",2,"height","140px","bottom","4vh","justify-content","center"],["type","submit","class","btn font-13 font-600 btn-s m-1 rounded-s shadow-xl border-0 gradient-highlight",3,"disabled",4,"ngIf"],["type","submit",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"disabled"],[1,"fa","fa-check-square-o"]],template:function(a,e){if(a&1){let s=T();t(0,"div",2),S(1,"app-progress-spinner",3),t(2,"div",4)(3,"p",5),i(4," \u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u06A9\u0646\u06CC\u062F "),o(),t(5,"p"),i(6),p(7,"translate"),o(),t(8,"form",6,0),g("ngSubmit",function(){return m(s),u(e.onFormSubmit())}),i(10),t(11,"div",7)(12,"div",8)(13,"div",9)(14,"mat-accordion",10)(15,"mat-expansion-panel",11),g("opened",function(){return m(s),u(e.setStep(0))}),t(16,"mat-expansion-panel-header")(17,"mat-panel-title"),i(18),p(19,"translate"),o(),t(20,"mat-panel-description"),i(21),p(22,"translate"),t(23,"mat-icon"),i(24,"account_circle"),o()()(),t(25,"mat-action-row")(26,"button",12),g("click",function(){return m(s),u(e.nextStep())}),i(27),p(28,"translate"),o()()(),t(29,"mat-expansion-panel",11),g("opened",function(){return m(s),u(e.setStep(1))}),t(30,"mat-expansion-panel-header")(31,"mat-panel-title"),i(32),p(33,"translate"),o(),t(34,"mat-panel-description"),i(35),p(36,"translate"),t(37,"mat-icon"),i(38,"map"),o()()(),w(39,We,2,1,"textarea",13)(40,Ge,4,3,"button",14)(41,qe,4,3,"button",14),t(42,"mat-action-row")(43,"button",15),g("click",function(){return m(s),u(e.prevStep())}),i(44),p(45,"translate"),o(),t(46,"button",12),g("click",function(){return m(s),u(e.nextStep())}),i(47),p(48,"translate"),o()()(),t(49,"mat-expansion-panel",11),g("opened",function(){return m(s),u(e.setStep(2))}),t(50,"mat-expansion-panel-header")(51,"mat-panel-title"),i(52),p(53,"translate"),o(),t(54,"mat-panel-description"),i(55),p(56,"translate"),t(57,"mat-icon"),i(58,"date_range"),o()()(),t(59,"mat-action-row")(60,"button",15),g("click",function(){return m(s),u(e.prevStep())}),i(61),p(62,"translate"),o(),t(63,"button",12),g("click",function(){return m(s),u(e.nextStep())}),i(64),p(65,"translate"),o()()(),t(66,"mat-expansion-panel",11),g("opened",function(){return m(s),u(e.setStep(3))}),t(67,"mat-expansion-panel-header")(68,"mat-panel-title"),i(69),p(70,"translate"),o(),t(71,"mat-panel-description"),i(72),p(73,"translate"),t(74,"mat-icon"),i(75,"date_range"),o()()(),S(76,"div",8)(77,"hr"),t(78,"mat-action-row")(79,"button",15),g("click",function(){return m(s),u(e.prevStep())}),i(80),p(81,"translate"),o(),t(82,"button",12),g("click",function(){return m(s),u(e.nextStep())}),i(83),p(84,"translate"),o()()(),t(85,"mat-expansion-panel",11),g("opened",function(){return m(s),u(e.setStep(4))}),t(86,"mat-expansion-panel-header")(87,"mat-panel-title"),i(88),p(89,"translate"),o(),t(90,"mat-panel-description"),i(91),p(92,"translate"),t(93,"mat-icon"),i(94,"date_range"),o()()(),t(95,"mat-action-row")(96,"button",15),g("click",function(){return m(s),u(e.prevStep())}),i(97),p(98,"translate"),o(),t(99,"button",12),g("click",function(){return m(s),u(e.nextStep())}),i(100),p(101,"translate"),o()()(),t(102,"mat-expansion-panel",11),g("opened",function(){return m(s),u(e.setStep(5))}),t(103,"mat-expansion-panel-header")(104,"mat-panel-title"),i(105),p(106,"translate"),o(),t(107,"mat-panel-description"),i(108),p(109,"translate"),t(110,"mat-icon"),i(111,"date_range"),o()()(),t(112,"div",16)(113,"div",17)(114,"h5",18),i(115),p(116,"translate"),o()(),t(117,"div",19)(118,"div",20)(119,"input",21),B("ngModelChange",function(x){return m(s),N(e.dataModel.sendToAll,x)||(e.dataModel.sendToAll=x),u(x)}),o(),S(120,"label",22),o()()(),t(121,"mat-action-row")(122,"button",15),g("click",function(){return m(s),u(e.prevStep())}),i(123),p(124,"translate"),o(),t(125,"button",12),g("click",function(){return m(s),u(e.nextStep())}),i(126),p(127,"translate"),o()()()()(),t(128,"div",9)(129,"div",23)(130,"div",24)(131,"div",25)(132,"label",26),i(133),p(134,"translate"),o(),t(135,"textarea",27,1),B("ngModelChange",function(x){return m(s),N(e.dataModel.content,x)||(e.dataModel.content=x),u(x)}),o(),t(137,"em"),i(138),o(),w(139,Qe,6,6,"mat-error",28),o()(),w(140,Xe,3,2,"div",29),o()()()()()()()}if(a&2){let s=F(136);n(),M("optionsInfoAreaId",e.constructor.name),n(5),_(" ",d(7,42,"TITLE.Be_Careful_When_Entering_Information")," "),n(4),_(" ",e.formInfo.formTitle," "),n(5),M("expanded",e.step===0),n(3),_(" ",d(19,44,"TITLE.Direction")," "),n(3),_(" ",d(22,46,"TITLE.Select_the_path_to_send_the_message")," "),n(6),h(d(28,48,"ACTION.NEXT")),n(2),M("expanded",e.step===1),n(3),_(" ",d(33,50,"TITLE.Message_Text")," "),n(3),_(" ",d(36,52,"TITLE.Select_the_text_of_the_default_messages")," "),n(4),M("ngIf",(e.dataMessageContentModel==null||e.dataMessageContentModel.messageBody==null?null:e.dataMessageContentModel.messageBody.length)>0),n(),M("ngIf",(e.dataMessageContentModel==null||e.dataMessageContentModel.messageBody==null?null:e.dataMessageContentModel.messageBody.length)>0&&(e.dataModel.content==null?null:e.dataModel.content.length)>0),n(),M("ngIf",(e.dataMessageContentModel==null||e.dataMessageContentModel.messageBody==null?null:e.dataMessageContentModel.messageBody.length)>0),n(3),h(d(45,54,"ACTION.BACK")),n(3),h(d(48,56,"ACTION.NEXT")),n(2),M("expanded",e.step===2),n(3),_(" ",d(53,58,"TITLE.Phonebook")," "),n(3),_(" ",d(56,60,"TITLE.Audience_selection")," "),n(6),h(d(62,62,"ACTION.BACK")),n(3),h(d(65,64,"ACTION.NEXT")),n(2),M("expanded",e.step===3),n(3),_(" ",d(70,66,"TITLE.Shipping_time")," "),n(3),_(" ",d(73,68,"TITLE.Time_to_start_sending_and_finish")," "),n(8),h(d(81,70,"ACTION.BACK")),n(3),h(d(84,72,"ACTION.NEXT")),n(2),M("expanded",e.step===4),n(3),_(" ",d(89,74,"TITLE.Timing")," "),n(3),_(" ",d(92,76,"TITLE.Retry_schedule")," "),n(6),h(d(98,78,"ACTION.BACK")),n(3),h(d(101,80,"ACTION.NEXT")),n(2),M("expanded",e.step===5),n(3),_(" ",d(106,82,"TITLE.Settings")," "),n(3),_(" ",d(109,84,"TITLE.Send_settings")," "),n(7),_(" ",d(116,86,"TITLE.Send_To_All"),""),n(4),A("ngModel",e.dataModel.sendToAll),n(4),h(d(124,88,"ACTION.BACK")),n(3),h(d(127,90,"ACTION.END")),n(7),h(d(134,92,"TITLE.Message_Text")),n(2),A("ngModel",e.dataModel.content),n(3),_("",s.value.length," / 500"),n(),M("ngIf",s.errors==null?null:s.errors.required),n(),M("ngIf",e.formInfo.formSubmitAllow)}},dependencies:[Q,$,z,X,J,U,ee,te,Z,Y,Ae,we,Te,Ie,Ee,ye,oe,de,me,be,pe],styles:[".form-body[_ngcontent-%COMP%]{width:500px}@media (max-width: 700px){.form-body[_ngcontent-%COMP%]{display:contents}}#file-manager[_ngcontent-%COMP%]{width:calc(100vw - 16px);height:calc(100vh - 16px)}.recordStatus-1.mat-select-panel[_ngcontent-%COMP%]{background:#ff0}.recordStatus-2.mat-select-panel[_ngcontent-%COMP%]{background:#000}.recordStatus-3.mat-select-panel[_ngcontent-%COMP%]{background:red}.mat-tab-group[_ngcontent-%COMP%]{height:95%}.message-box[_ngcontent-%COMP%]{background-image:url(/assets/media/bg/iphone.png);height:600px;width:300px;background-position:center;background-repeat:no-repeat;background-size:cover;padding-right:33px;padding-left:33px}.message-box-button[_ngcontent-%COMP%]{color:#00f;border-color:transparent;background-color:transparent}.message-box-button[_ngcontent-%COMP%]:hover{color:red;font-size:initial}.message-box-button[_ngcontent-%COMP%]:active{color:#a200ff}"]});let l=r;return l})();var ze=[{path:"",component:Oe,children:[{path:"send-notification",component:O},{path:"send-notification/inbox-extras",component:O},{path:"send-notification/outbox-extras",component:O}]}],Le=(()=>{let r=class r{};r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=E({type:r}),r.\u0275inj=I({imports:[j.forChild(ze),j]});let l=r;return l})();var At=(()=>{let r=class r{};r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=E({type:r}),r.\u0275inj=I({providers:[_e,V,Me,ke,k],imports:[K,Le,ne,ie.withConfig({warnOnNgModelWithFormControl:"never"}),Be,Ve,ce,ae,Ne]});let l=r;return l})();export{At as CoreMainActionModule};
