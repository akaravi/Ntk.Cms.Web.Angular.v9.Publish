"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[6272],{2824:(W,c,t)=>{t.r(c),t.d(c,{WebDesignerBuilderModule:()=>E});var g=t(4350),m=t(8692),d=t(92),p=t(8659),A=t(3331),T=t(707),b=t(4721),h=t(4467),f=t(1661),n=t(4511),Z=t(6087),v=t(7360),a=t(6114);class C{configRouteTemplateFileImage;configRouteFileStorage;cmsSite;cmsPage;cmsParentPage;cmsPageTemplate;moduleInfoes;templateConfig;bodySetting}var O=t(656),e=t(4537),N=t(727),u=t(6707),k=t(2607),I=t(4032),S=t(5738);const D=[{path:"",component:(()=>{class r{tokenHelper;cdr;translate;cmsToastrService;publicHelper;webDesignerMainPageService;requestId="";constructor(l,o,i,s,U,L){this.tokenHelper=l,this.cdr=o,this.translate=i,this.cmsToastrService=s,this.publicHelper=U,this.webDesignerMainPageService=L,this.loading.cdr=this.cdr,this.loading.message=this.translate.instant("MESSAGE.Receiving_information")}cmsApiStoreSubscribe;tokenInfo=new n.OdC;loading=new O.O;fieldsInfo=new Map;dataModel=new C;dataPageModel=new n.RIQ;dataModelResult=new n.y$4;ngOnInit(){this.tokenHelper.getCurrentToken().then(l=>{this.tokenInfo=l,this.DataGetOneContent(),this.tokenHelper.CheckIsAdmin()}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe(l=>{this.tokenInfo=l,this.DataGetOneContent(),this.tokenHelper.CheckIsAdmin()})}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}DataGetOneContent(){const l=this.constructor.name+"webDesignerMainPageService.ServiceGetOneById";this.loading.Start(l),this.webDesignerMainPageService.setAccessLoad(),this.webDesignerMainPageService.setAccessDataType(n.dR.Editor),this.webDesignerMainPageService.ServiceGetOneById(this.requestId).subscribe(o=>{this.fieldsInfo=this.publicHelper.fieldInfoConvertor(o.access),this.dataPageModel=o.item,o.isSuccess||this.cmsToastrService.typeErrorMessage(o.errorMessage),this.loading.Stop(l)},o=>{this.cmsToastrService.typeError(o),this.loading.Stop(l)})}onActionAdd(){}static \u0275fac=function(o){return new(o||r)(e.Y36(N.v),e.Y36(e.sBO),e.Y36(u.sK),e.Y36(k.e),e.Y36(I.i),e.Y36(n.SUF))};static \u0275cmp=e.Xpm({type:r,selectors:[["app-web-designer-builder"]],decls:60,vars:37,consts:[[1,"row"],["Class","col-xl-2"],[1,"ntk-cms-html-tree-header"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",2,"width","98%",3,"click"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-red",3,"click"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"click"],[1,"ntk-cms-html-tree-body"],[1,"ntk-cms-html-tree-footer"],["Class","col-xl-10"],[1,"ntk-cms-html-list-header"],[3,"options"],[1,"ntk-cms-html-list-footer"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"button",4),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.TgZ(21,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e.TgZ(24,"div",2),e._uU(25),e.ALo(26,"translate"),e._UZ(27,"br"),e.TgZ(28,"button",5),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(29,"lg"),e.qZA(),e.TgZ(30,"button",5),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(31,"md"),e.qZA(),e.TgZ(32,"button",5),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(33,"sm"),e.qZA(),e.TgZ(34,"button",5),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(35,"xs"),e.qZA()(),e.TgZ(36,"div",2),e._uU(37),e.ALo(38,"translate"),e._UZ(39,"br"),e.TgZ(40,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(41),e.ALo(42,"translate"),e.qZA(),e.TgZ(43,"button",3),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(44),e.ALo(45,"translate"),e.qZA()(),e.TgZ(46,"div",6),e._uU(47," body "),e.qZA(),e.TgZ(48,"div",7),e._uU(49," tree-footer "),e.qZA()(),e.TgZ(50,"div",8)(51,"div",9)(52,"button",5),e.NdJ("click",function(){return i.onActionAdd()}),e._uU(53),e.ALo(54,"translate"),e.qZA()(),e.TgZ(55,"div"),e._UZ(56,"app-progress-spinner",10),e._uU(57," Body "),e.qZA(),e.TgZ(58,"div",11),e._uU(59," footer "),e.qZA()()()),2&o&&(e.xp6(4),e.Oqu(e.lcZ(5,13,"ACTION.SAVE_CONTENT")),e.xp6(3),e.Oqu(e.lcZ(8,15,"ACTION.DELETE_CONTENT")),e.xp6(3),e.Oqu(e.lcZ(11,17,"ACTION.LOADING_CONTENT")),e.xp6(3),e.Oqu(e.lcZ(14,19,"ACTION.ASSUMPTION_CONTENT")),e.xp6(3),e.Oqu(e.lcZ(17,21,"ACTION.INTERNALIZATION_CONTENT")),e.xp6(3),e.Oqu(e.lcZ(20,23,"ACTION.OUTFLOW_CONTENT")),e.xp6(3),e.Oqu(e.lcZ(23,25,"ACTION.HISTORY_CONTENT")),e.xp6(3),e.hij(" ",e.lcZ(26,27,"TITLE.DISPLAY_SIZE")," "),e.xp6(12),e.hij(" ",e.lcZ(38,29,"TITLE.DISPLAY")," "),e.xp6(4),e.Oqu(e.lcZ(42,31,"TITLE.Preview")),e.xp6(3),e.Oqu(e.lcZ(45,33,"TITLE.Preview_MOTHER")),e.xp6(9),e.Oqu(e.lcZ(54,35,"TITLE.CREATE_ROW")),e.xp6(3),e.Q6J("options",i.loading))},dependencies:[S.O,u.X$]})}return r})(),data:{title:"ROUTE.WEBDESIGNERBUILDER"},children:[]}];let B=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({imports:[a.Bz.forChild(D),a.Bz]})}return r})(),E=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.oAB({type:r});static \u0275inj=e.cJS({providers:[n.EAm,n.FLW,n.Z8z,n.dF2,n.PwI,n.VqD,n.UIH,n.zef,n.KQH,n.SUF,n.eck,n.BeA,n.cW6,n.qgh],imports:[m.ez,B,d.u5,d.UX.withConfig({warnOnNgModelWithFormControl:"never"}),Z.m.forRoot(),b.UM,A.Ps,p.lN,T.T5,f.v3,h.FR,g._t,v.CoreModuleModule]})}return r})()}}]);