import{$ as K,J as W,K as Q,Ka as Z,L as z,La as $,Sa as ee,Va as te,ca as J,mb as ce,p as R,s as G,sb as pe,t as j,ub as de,v as q,x as B,y as L,zc as ue}from"./chunk-KJ7N6JEA.js";import{b as X,c as Y,p as se}from"./chunk-DZ6Q7KCE.js";import{Bd as ie,Be as _e,Cd as ne,Ce as Ie,Db as D,Eb as N,Fb as k,Ge as le,Ia as F,Ib as w,Jd as re,Kb as p,La as o,Lb as M,Ma as u,Mb as S,Qb as A,Qd as oe,Rb as O,Sb as U,Yb as C,Zb as h,ab as _,cb as c,ce as ae,gc as H,ja as V,lb as a,mb as l,nb as I,ob as T,pb as E,ra as m,rb as v,sa as f,ub as b,wb as d,zb as y,zc as P}from"./chunk-LELKRAIN.js";var De=["vform"];function Ne(i,s){i&1&&(a(0,"p"),p(1," \u0628\u0631\u0627\u06CC \u062A\u0627\u06CC\u06CC\u062F \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F "),l())}function ke(i,s){i&1&&(a(0,"p"),p(1," \u0628\u0631\u0627\u06CC \u062A\u0627\u06CC\u06CC\u062F\u060C \u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0635\u062D\u06CC\u062D \u0628\u0627\u0634\u062F "),l())}function He(i,s){i&1&&(a(0,"mat-error"),p(1," Email is "),a(2,"strong"),p(3),C(4,"translate"),l()()),i&2&&(o(3),M(h(4,1,"MESSAGE.required")))}function Pe(i,s){if(i&1){let r=v();a(0,"div",12)(1,"label",13),p(2),l(),a(3,"input",14,1),U("ngModelChange",function(e){m(r);let n=d(2);return O(n.dataModel.email,e)||(n.dataModel.email=e),f(e)}),l(),a(5,"em"),p(6),l(),_(7,He,5,3,"mat-error",8),l()}if(i&2){let r=w(4),t=d(2);o(2),M(t.fieldsInfo.email==null?null:t.fieldsInfo.email.fieldTitle),o(),y("placeholder",t.fieldsInfo.email==null?null:t.fieldsInfo.email.fieldTitle),A("ngModel",t.dataModel.email),c("disabled",!(t.fieldsInfo.email!=null&&t.fieldsInfo.email.accessAddField)),o(3),S("",r.value.length," / 100"),o(),c("ngIf",r.errors==null?null:r.errors.required)}}function Re(i,s){if(i&1&&(T(0),_(1,Pe,8,6,"div",11),E()),i&2){let r=d();o(),c("ngIf",r.fieldsInfo.email==null?null:r.fieldsInfo.email.accessWatchField)}}function Ge(i,s){if(i&1){let r=v();T(0),a(1,"p"),p(2," \u0639\u062F\u062F \u062F\u0631\u06CC\u0627\u0641\u062A\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u0641\u0631\u0645\u0627\u06CC\u06CC\u062F "),l(),a(3,"div",15)(4,"ng-otp-input",16,2),b("onInputChange",function(e){m(r);let n=d();return f(n.onOtpChange(e))}),l()(),E()}if(i&2){let r=d();o(4),c("config",r.otpConfig)}}function je(i,s){i&1&&(a(0,"mat-error"),p(1),C(2,"translate"),a(3,"strong"),p(4),C(5,"translate"),l()()),i&2&&(o(),S(" ",h(2,2,"AUTH.INPUT.CAPTCHACODE")," "),o(3),M(h(5,4,"MESSAGE.required")))}function qe(i,s){if(i&1){let r=v();T(0),a(1,"img",17),b("click",function(){m(r);let e=d();return f(e.onCaptchaOrder())}),l(),a(2,"mat-icon",18),b("click",function(){m(r);let e=d();return f(e.onCaptchaOrder())}),p(3,"refresh"),l(),a(4,"div",19),I(5,"i",20),a(6,"input",21,3),C(8,"translate"),U("ngModelChange",function(e){m(r);let n=d();return O(n.dataModel.captchaText,e)||(n.dataModel.captchaText=e),f(e)}),l(),a(9,"label",22),p(10),C(11,"translate"),l(),I(12,"i",23)(13,"i",24),_(14,je,6,6,"mat-error",8),l(),E()}if(i&2){let r=w(7),t=d();o(),y("src",t.captchaModel.image,F),o(5),y("placeholder",h(8,6,"AUTH.INPUT.CAPTCHACODE")),A("ngModel",t.dataModel.captchaText),c("disabled",!t.formInfo.buttonSubmittedEnabled),o(4),M(h(11,8,"AUTH.INPUT.CAPTCHACODE")),o(4),c("ngIf",r.errors==null?null:r.errors.required)}}function Be(i,s){if(i&1){let r=v();a(0,"div",25)(1,"button",26),b("click",function(){m(r);let e=d();return f(e.onFormCancel())}),I(2,"i",27),p(3),C(4,"translate"),l(),a(5,"button",28),I(6,"i",29),p(7),C(8,"translate"),l()()}if(i&2){let r=d(),t=w(8);o(3),S(" ",h(4,3,"ACTION.CANCEL")," "),o(2),c("disabled",!t.form.valid||r.stepTwo&&(r.dataModel==null||r.dataModel.code==null?null:r.dataModel.code.length)<4),o(2),S(" ",h(8,5,"ACTION.CONFIRM")," ")}}var it=(()=>{let s=class s{constructor(t,e,n,g,x,me,fe,Ce,he,ge){this.data=t,this.dialogRef=e,this.coreEnumService=n,this.coreUserService=g,this.coreAuthService=x,this.cmsToastrService=me,this.publicHelper=fe,this.tokenHelper=Ce,this.cdr=he,this.translate=ge,this.constructorInfoAreaId=this.constructor.name,this.firstRun=!0,this.aoutoCaptchaOrder=1,this.dataModelResult=new ne,this.dataModel=new _e,this.fieldsInfo=new Map,this.passwordIsValid=!1,this.captchaModel=new ie,this.formInfo=new re,this.onCaptchaOrderInProcess=!1,this.otpConfig={allowNumbersOnly:!0,length:4,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"50px",height:"50px",margin:"5px"}},this.stepOne=!0,this.stepTwo=!1,this.publicHelper.processService.cdr=this.cdr}ngOnInit(){this.onCaptchaOrder(),this.formInfo.formTitle=this.translate.instant("ACTION.CONFIRMEMAIL"),this.tokenHelper.getTokenInfoState().then(t=>{this.dataModel.email=t.email,this.dataModel.linkUserId=t.userId}),this.DataGetAccess()}DataGetAccess(){let t=this.constructor.name+"DataGetAccess";this.translate.get("MESSAGE.Receiving_information").subscribe(e=>{this.publicHelper.processService.processStart(t,e,this.constructorInfoAreaId)}),this.coreUserService.ServiceViewModel().subscribe({next:e=>{e.isSuccess?this.fieldsInfo=this.publicHelper.fieldInfoConvertor(e.access):this.cmsToastrService.typeErrorGetAccess(e.errorMessage),this.publicHelper.processService.processStop(t)},error:e=>{this.cmsToastrService.typeErrorGetAccess(e),this.publicHelper.processService.processStop(t,!1)}})}onEmailConfirm(){this.dataModel.captchaKey=this.captchaModel.key,this.coreAuthService.ServiceEmailConfirm(this.dataModel).subscribe({next:t=>{t.isSuccess?(this.cmsToastrService.typeSuccessEmailConfirm(),this.stepOne?(this.stepOne=!1,this.stepTwo=!0):this.stepTwo&&this.dialogRef.close({dialogChangedDate:!0})):(this.cmsToastrService.typeErrorMessage(t.errorMessage),this.firstRun=!1,this.formInfo.buttonSubmittedEnabled=!0,this.onCaptchaOrder())}})}onOtpChange(t){this.dataModel.code=t}onFormCancel(){this.dialogRef.close({dialogChangedDate:!1})}onCaptchaOrder(){if(this.onCaptchaOrderInProcess)return;this.dataModel.captchaText="";let t=this.constructor.name+".ServiceCaptcha";this.translate.get("MESSAGE.get_security_photo_content").subscribe(e=>{this.publicHelper.processService.processStart(t,e,this.constructorInfoAreaId)}),this.coreAuthService.ServiceCaptcha().subscribe({next:e=>{if(e.isSuccess){this.captchaModel=e.item,this.expireDate=e.item.expire;let n=new Date,x=new Date(e.item.expire).getTime()-n.getTime();this.aoutoCaptchaOrder<10&&(this.aoutoCaptchaOrder=this.aoutoCaptchaOrder+1,setTimeout(()=>{this.firstRun||this.onCaptchaOrder()},x))}else this.cmsToastrService.typeErrorGetCpatcha(e.errorMessage);this.onCaptchaOrderInProcess=!1,this.publicHelper.processService.processStop(t)},error:e=>{this.onCaptchaOrderInProcess=!1,this.publicHelper.processService.processStop(t)}})}};s.\u0275fac=function(e){return new(e||s)(u($),u(Z),u(oe),u(ae),u(le),u(ce),u(pe),u(se),u(H),u(X))},s.\u0275cmp=V({type:s,selectors:[["app-core-user-email-confirm"]],viewQuery:function(e,n){if(e&1&&D(De,5),e&2){let g;N(g=k())&&(n.formGroup=g.first)}},decls:13,vars:8,consts:[["vform","ngForm"],["Email",""],["ngOtpInput",""],["captchaText",""],[1,"card","card-style","loader-container"],[3,"optionsInfoAreaId"],[1,"content","mb-0"],[1,"mb-0","color-highlight","font-600","font-12"],[4,"ngIf"],[3,"ngSubmit"],["class","form-actions",4,"ngIf"],["class","input-style has-borders no-icon input-style-always-active validate-field mb-4",4,"ngIf"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],["for","dataModel.email",1,"color-highlight"],["matInput","","name","dataModel.email","type","email","id","dataModel.email","required","",1,"form-control","validate-name","input-ltr-center",3,"ngModelChange","ngModel","disabled","placeholder"],[2,"text-align","center"],[3,"onInputChange","config"],["alt","",1,"mb-3",3,"click","src"],["matSuffix","",3,"click"],[1,"input-style","no-borders","has-icon","validate-field","mb-4"],[1,"fa","fa-quote-left"],["name","dataModel.captchaText","id","dataModel.captchaText","type","text","minlength","5","maxlength","5","autocomplete","off","required","",1,"form-control","validate-name","input-ltr-center",3,"ngModelChange","ngModel","disabled","placeholder"],["for","dataModel.captchaText",1,"color-highlight"],[1,"fa","fa-times","disabled","invalid","color-red-dark"],[1,"fa","fa-check","disabled","valid","color-green-dark"],[1,"form-actions"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-gray",3,"click"],[1,"ft-x"],["type","submit",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"disabled"],[1,"fa","fa-check-square-o"]],template:function(e,n){if(e&1){let g=v();a(0,"div",4),I(1,"app-progress-spinner",5),a(2,"div",6)(3,"p",7),p(4),l(),_(5,Ne,2,0,"p",8)(6,ke,2,0,"p",8),a(7,"form",9,0),b("ngSubmit",function(){return m(g),f(n.onEmailConfirm())}),_(9,Re,2,1,"ng-container",8)(10,Ge,6,1,"ng-container",8)(11,qe,15,10,"ng-container",8)(12,Be,9,7,"div",10),l()()()}e&2&&(o(),c("optionsInfoAreaId",n.constructorInfoAreaId),o(3),S(" ",n.formInfo.formTitle," "),o(),c("ngIf",!n.dataModel.email||(n.dataModel==null||n.dataModel.email==null?null:n.dataModel.email.length)===0),o(),c("ngIf",(n.dataModel==null||n.dataModel.email==null?null:n.dataModel.email.length)>0),o(3),c("ngIf",n.stepOne),o(),c("ngIf",n.stepTwo),o(),c("ngIf",!n.firstRun),o(),c("ngIf",n.formInfo.formSubmitAllow))},dependencies:[P,L,R,G,j,W,Q,z,B,q,K,J,ee,te,de,ue,Y],encapsulation:2});let i=s;return i})();var Le=["vform"];function We(i,s){i&1&&(a(0,"p"),p(1," \u0628\u0631\u0627\u06CC \u062A\u0627\u06CC\u06CC\u062F \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F "),l())}function Qe(i,s){i&1&&(a(0,"p"),p(1," \u0628\u0631\u0627\u06CC \u062A\u0627\u06CC\u06CC\u062F \u060C\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062E\u0648\u062F \u0631\u0627 \u0628\u0631\u0631\u0633\u06CC \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0635\u062D\u06CC\u062D \u0628\u0627\u0634\u062F "),l())}function ze(i,s){i&1&&(a(0,"mat-error"),p(1," Mobile is "),a(2,"strong"),p(3),C(4,"translate"),l()()),i&2&&(o(3),M(h(4,1,"MESSAGE.required")))}function Ke(i,s){if(i&1){let r=v();a(0,"div",12)(1,"label",13),p(2),l(),a(3,"input",14,1),U("ngModelChange",function(e){m(r);let n=d(2);return O(n.dataModel.mobile,e)||(n.dataModel.mobile=e),f(e)}),l(),a(5,"em"),p(6),l(),_(7,ze,5,3,"mat-error",8),l()}if(i&2){let r=w(4),t=d(2);o(2),M(t.fieldsInfo.mobile==null?null:t.fieldsInfo.mobile.fieldTitle),o(),y("placeholder",t.fieldsInfo.mobile==null?null:t.fieldsInfo.mobile.fieldTitle),A("ngModel",t.dataModel.mobile),c("disabled",!(t.fieldsInfo.mobile!=null&&t.fieldsInfo.mobile.accessAddField)),o(3),S("",r.value.length," / 100"),o(),c("ngIf",r.errors==null?null:r.errors.required)}}function Je(i,s){if(i&1&&(T(0),_(1,Ke,8,6,"div",11),E()),i&2){let r=d();o(),c("ngIf",r.fieldsInfo.mobile==null?null:r.fieldsInfo.mobile.accessWatchField)}}function Xe(i,s){if(i&1){let r=v();T(0),a(1,"p"),p(2," \u0639\u062F\u062F \u062F\u0631\u06CC\u0627\u0641\u062A\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u0641\u0631\u0645\u0627\u06CC\u06CC\u062F "),l(),a(3,"div",15)(4,"ng-otp-input",16,2),b("onInputChange",function(e){m(r);let n=d();return f(n.onOtpChange(e))}),l()(),E()}if(i&2){let r=d();o(4),c("config",r.otpConfig)}}function Ye(i,s){i&1&&(a(0,"mat-error"),p(1),C(2,"translate"),a(3,"strong"),p(4),C(5,"translate"),l()()),i&2&&(o(),S(" ",h(2,2,"AUTH.INPUT.CAPTCHACODE")," "),o(3),M(h(5,4,"MESSAGE.required")))}function Ze(i,s){if(i&1){let r=v();T(0),a(1,"img",17),b("click",function(){m(r);let e=d();return f(e.onCaptchaOrder())}),l(),a(2,"mat-icon",18),b("click",function(){m(r);let e=d();return f(e.onCaptchaOrder())}),p(3,"refresh"),l(),a(4,"div",19),I(5,"i",20),a(6,"input",21,3),C(8,"translate"),U("ngModelChange",function(e){m(r);let n=d();return O(n.dataModel.captchaText,e)||(n.dataModel.captchaText=e),f(e)}),l(),a(9,"label",22),p(10),C(11,"translate"),l(),I(12,"i",23)(13,"i",24),_(14,Ye,6,6,"mat-error",8),l(),E()}if(i&2){let r=w(7),t=d();o(),y("src",t.captchaModel.image,F),o(5),y("placeholder",h(8,6,"AUTH.INPUT.CAPTCHACODE")),A("ngModel",t.dataModel.captchaText),c("disabled",!t.formInfo.buttonSubmittedEnabled),o(4),M(h(11,8,"AUTH.INPUT.CAPTCHACODE")),o(4),c("ngIf",r.errors==null?null:r.errors.required)}}function $e(i,s){if(i&1){let r=v();a(0,"div",25)(1,"button",26),b("click",function(){m(r);let e=d();return f(e.onFormCancel())}),I(2,"i",27),p(3),C(4,"translate"),l(),a(5,"button",28),I(6,"i",29),p(7),C(8,"translate"),l()()}if(i&2){let r=d(),t=w(8);o(3),S(" ",h(4,3,"ACTION.CANCEL")," "),o(2),c("disabled",!t.form.valid||r.stepTwo&&(r.dataModel==null||r.dataModel.code==null?null:r.dataModel.code.length)<4),o(2),S(" ",h(8,5,"ACTION.CONFIRM")," ")}}var at=(()=>{let s=class s{constructor(t,e,n,g,x,me,fe,Ce,he,ge){this.data=t,this.dialogRef=e,this.coreEnumService=n,this.coreUserService=g,this.coreAuthService=x,this.cmsToastrService=me,this.publicHelper=fe,this.tokenHelper=Ce,this.cdr=he,this.translate=ge,this.constructorInfoAreaId=this.constructor.name,this.firstRun=!0,this.aoutoCaptchaOrder=1,this.dataModelResult=new ne,this.dataModel=new Ie,this.fieldsInfo=new Map,this.passwordIsValid=!1,this.captchaModel=new ie,this.formInfo=new re,this.onCaptchaOrderInProcess=!1,this.otpConfig={allowNumbersOnly:!0,length:4,isPasswordInput:!1,disableAutoFocus:!1,placeholder:"",inputStyles:{width:"50px",height:"50px",margin:"5px"}},this.stepOne=!0,this.stepTwo=!1,this.publicHelper.processService.cdr=this.cdr}ngOnInit(){this.onCaptchaOrder(),this.formInfo.formTitle=this.translate.instant("ACTION.CONFIRMEMAIL"),this.tokenHelper.getTokenInfoState().then(t=>{this.dataModel.mobile=t.mobile,this.dataModel.linkUserId=t.userId}),this.DataGetAccess()}DataGetAccess(){let t=this.constructor.name+"DataGetAccess";this.translate.get("MESSAGE.Receiving_information").subscribe(e=>{this.publicHelper.processService.processStart(t,e,this.constructorInfoAreaId)}),this.coreUserService.ServiceViewModel().subscribe({next:e=>{e.isSuccess?this.fieldsInfo=this.publicHelper.fieldInfoConvertor(e.access):this.cmsToastrService.typeErrorGetAccess(e.errorMessage),this.publicHelper.processService.processStop(t)},error:e=>{this.cmsToastrService.typeErrorGetAccess(e),this.publicHelper.processService.processStop(t,!1)}})}onMobileConfirm(){this.dataModel.captchaKey=this.captchaModel.key,this.coreAuthService.ServiceMobileConfirm(this.dataModel).subscribe({next:t=>{t.isSuccess?(this.cmsToastrService.typeSuccessMobileConfirm(),this.stepOne?(this.stepOne=!1,this.stepTwo=!0):this.stepTwo&&this.dialogRef.close({dialogChangedDate:!0})):(this.cmsToastrService.typeErrorMessage(t.errorMessage),this.firstRun=!1,this.formInfo.buttonSubmittedEnabled=!0,this.onCaptchaOrder())}})}onOtpChange(t){this.dataModel.code=t}onFormCancel(){this.dialogRef.close({dialogChangedDate:!1})}onCaptchaOrder(){if(this.onCaptchaOrderInProcess)return;this.dataModel.captchaText="";let t=this.constructor.name+".ServiceCaptcha";this.translate.get("MESSAGE.get_security_photo_content").subscribe(e=>{this.publicHelper.processService.processStart(t,e,this.constructorInfoAreaId)}),this.coreAuthService.ServiceCaptcha().subscribe({next:e=>{if(e.isSuccess){this.captchaModel=e.item,this.expireDate=e.item.expire;let n=new Date,x=new Date(e.item.expire).getTime()-n.getTime();this.aoutoCaptchaOrder<10&&(this.aoutoCaptchaOrder=this.aoutoCaptchaOrder+1,setTimeout(()=>{this.firstRun||this.onCaptchaOrder()},x))}else this.cmsToastrService.typeErrorGetCpatcha(e.errorMessage);this.onCaptchaOrderInProcess=!1,this.publicHelper.processService.processStop(t)},error:e=>{this.onCaptchaOrderInProcess=!1,this.publicHelper.processService.processStop(t)}})}};s.\u0275fac=function(e){return new(e||s)(u($),u(Z),u(oe),u(ae),u(le),u(ce),u(pe),u(se),u(H),u(X))},s.\u0275cmp=V({type:s,selectors:[["app-core-user-mobile-confirm"]],viewQuery:function(e,n){if(e&1&&D(Le,5),e&2){let g;N(g=k())&&(n.formGroup=g.first)}},decls:13,vars:8,consts:[["vform","ngForm"],["Mobile",""],["ngOtpInput",""],["captchaText",""],[1,"card","card-style","loader-container"],[3,"optionsInfoAreaId"],[1,"content","mb-0"],[1,"mb-0","color-highlight","font-600","font-12"],[4,"ngIf"],[3,"ngSubmit"],["class","form-actions",4,"ngIf"],["class","input-style has-borders no-icon input-style-always-active validate-field mb-4",4,"ngIf"],[1,"input-style","has-borders","no-icon","input-style-always-active","validate-field","mb-4"],["for","dataModel.mobile",1,"color-highlight"],["matInput","","name","dataModel.mobile","type","text","id","dataModel.mobile","required","",1,"form-control","validate-name","input-ltr-center",3,"ngModelChange","ngModel","disabled","placeholder"],[2,"text-align","center"],[3,"onInputChange","config"],["alt","",1,"mb-3",3,"click","src"],["matSuffix","",3,"click"],[1,"input-style","no-borders","has-icon","validate-field","mb-4"],[1,"fa","fa-quote-left"],["name","dataModel.captchaText","id","dataModel.captchaText","type","text","minlength","5","maxlength","5","autocomplete","off","required","",1,"form-control","validate-name","input-ltr-center",3,"ngModelChange","ngModel","disabled","placeholder"],["for","dataModel.captchaText",1,"color-highlight"],[1,"fa","fa-times","disabled","invalid","color-red-dark"],[1,"fa","fa-check","disabled","valid","color-green-dark"],[1,"form-actions"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-gray",3,"click"],[1,"ft-x"],["type","submit",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"disabled"],[1,"fa","fa-check-square-o"]],template:function(e,n){if(e&1){let g=v();a(0,"div",4),I(1,"app-progress-spinner",5),a(2,"div",6)(3,"p",7),p(4),l(),_(5,We,2,0,"p",8)(6,Qe,2,0,"p",8),a(7,"form",9,0),b("ngSubmit",function(){return m(g),f(n.onMobileConfirm())}),_(9,Je,2,1,"ng-container",8)(10,Xe,6,1,"ng-container",8)(11,Ze,15,10,"ng-container",8)(12,$e,9,7,"div",10),l()()()}e&2&&(o(),c("optionsInfoAreaId",n.constructorInfoAreaId),o(3),S(" ",n.formInfo.formTitle," "),o(),c("ngIf",!n.dataModel.mobile||(n.dataModel==null||n.dataModel.mobile==null?null:n.dataModel.mobile.length)===0),o(),c("ngIf",(n.dataModel==null||n.dataModel.mobile==null?null:n.dataModel.mobile.length)>0),o(3),c("ngIf",n.stepOne),o(),c("ngIf",n.stepTwo),o(),c("ngIf",!n.firstRun),o(),c("ngIf",n.formInfo.formSubmitAllow))},dependencies:[P,L,R,G,j,W,Q,z,B,q,K,J,ee,te,de,ue,Y],encapsulation:2});let i=s;return i})();export{it as a,at as b};
