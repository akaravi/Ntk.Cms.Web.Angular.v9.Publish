"use strict";(self.webpackChunkntk_cms_web=self.webpackChunkntk_cms_web||[]).push([[4608],{4608:(j,c,t)=>{t.r(c),t.d(c,{WebDesignerBuilderModule:()=>N});var b=t(6900),m=t(6610),a=t(7222),p=t(5468),g=t(6182),T=t(8351),h=t(3627),I=t(3342),k=t(7153),n=t(8189),A=t(8550),f=t(4429),d=t(9675);class v{configRouteTemplateFileImage;configRouteFileStorage;cmsSite;cmsPage;cmsParentPage;cmsPageTemplate;moduleInfoes;templateConfig;bodySetting}var E=t(4434),e=t(3279),C=t(8339),u=t(2882),F=t(9722),S=t(5154),D=t(7912);const M=[{path:"",component:(()=>{class r{tokenHelper;cdr;translate;cmsToastrService;publicHelper;webDesignerMainPageService;requestId="";constructor(l,o,i,s,O,B){this.tokenHelper=l,this.cdr=o,this.translate=i,this.cmsToastrService=s,this.publicHelper=O,this.webDesignerMainPageService=B,this.publicHelper.processService.cdr=this.cdr,this.translate.get("MESSAGE.Receiving_information").subscribe(W=>{this.loading.message=W})}cmsApiStoreSubscribe;tokenInfo=new n.l$k;loading=new E.o;fieldsInfo=new Map;dataModel=new v;dataPageModel=new n.Nd9;dataModelResult=new n.N$V;ngOnInit(){this.tokenHelper.getCurrentToken().then(l=>{this.tokenInfo=l,this.DataGetOneContent(),this.tokenHelper.CheckIsAdmin()}),this.cmsApiStoreSubscribe=this.tokenHelper.getCurrentTokenOnChange().subscribe({next:l=>{this.tokenInfo=l,this.DataGetOneContent(),this.tokenHelper.CheckIsAdmin()}})}ngOnDestroy(){this.cmsApiStoreSubscribe.unsubscribe()}DataGetOneContent(){const l=this.constructor.name+"webDesignerMainPageService.ServiceGetOneById";this.translate.get("MESSAGE.Receiving_information").subscribe(o=>{this.publicHelper.processService.processStart(l,o,this.constructor.name)}),this.webDesignerMainPageService.setAccessLoad(),this.webDesignerMainPageService.setAccessDataType(n.FYP.Editor),this.webDesignerMainPageService.ServiceGetOneById(this.requestId).subscribe({next:o=>{this.fieldsInfo=this.publicHelper.fieldInfoConvertor(o.access),this.dataPageModel=o.item,o.isSuccess||this.cmsToastrService.typeErrorMessage(o.errorMessage),this.publicHelper.processService.processStop(l)},error:o=>{this.cmsToastrService.typeError(o),this.publicHelper.processService.processStop(l)}})}onActionAdd(){}static \u0275fac=function(o){return new(o||r)(e.rXU(C._),e.rXU(e.gRc),e.rXU(u.c$),e.rXU(F.k),e.rXU(S.A),e.rXU(n.JM2))};static \u0275cmp=e.VBU({type:r,selectors:[["app-web-designer-builder"]],decls:60,vars:37,consts:[[1,"row"],["Class","col-xl-2"],[1,"ntk-cms-html-tree-header"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",2,"width","98%",3,"click"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-red",3,"click"],["type","button",1,"btn","font-13","font-600","btn-s","m-1","rounded-s","shadow-xl","border-0","gradient-highlight",3,"click"],[1,"ntk-cms-html-tree-body"],[1,"ntk-cms-html-tree-footer"],["Class","col-xl-10"],[1,"ntk-cms-html-list-header"],[3,"optionsInfoAreaId"],[1,"ntk-cms-html-list-footer"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(4),e.nI1(5,"translate"),e.k0s(),e.j41(6,"button",4),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(7),e.nI1(8,"translate"),e.k0s(),e.j41(9,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(10),e.nI1(11,"translate"),e.k0s(),e.j41(12,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(13),e.nI1(14,"translate"),e.k0s(),e.j41(15,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(16),e.nI1(17,"translate"),e.k0s(),e.j41(18,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(19),e.nI1(20,"translate"),e.k0s(),e.j41(21,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"div",2),e.EFF(25),e.nI1(26,"translate"),e.nrm(27,"br"),e.j41(28,"button",5),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(29,"lg"),e.k0s(),e.j41(30,"button",5),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(31,"md"),e.k0s(),e.j41(32,"button",5),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(33,"sm"),e.k0s(),e.j41(34,"button",5),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(35,"xs"),e.k0s()(),e.j41(36,"div",2),e.EFF(37),e.nI1(38,"translate"),e.nrm(39,"br"),e.j41(40,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(41),e.nI1(42,"translate"),e.k0s(),e.j41(43,"button",3),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(44),e.nI1(45,"translate"),e.k0s()(),e.j41(46,"div",6),e.EFF(47," body "),e.k0s(),e.j41(48,"div",7),e.EFF(49," tree-footer "),e.k0s()(),e.j41(50,"div",8)(51,"div",9)(52,"button",5),e.bIt("click",function(){return i.onActionAdd()}),e.EFF(53),e.nI1(54,"translate"),e.k0s()(),e.j41(55,"div"),e.nrm(56,"app-progress-spinner",10),e.EFF(57," Body "),e.k0s(),e.j41(58,"div",11),e.EFF(59," footer "),e.k0s()()()),2&o&&(e.R7$(4),e.JRh(e.bMT(5,13,"ACTION.SAVE_CONTENT")),e.R7$(3),e.JRh(e.bMT(8,15,"ACTION.DELETE_CONTENT")),e.R7$(3),e.JRh(e.bMT(11,17,"ACTION.LOADING_CONTENT")),e.R7$(3),e.JRh(e.bMT(14,19,"ACTION.ASSUMPTION_CONTENT")),e.R7$(3),e.JRh(e.bMT(17,21,"ACTION.INTERNALIZATION_CONTENT")),e.R7$(3),e.JRh(e.bMT(20,23,"ACTION.OUTFLOW_CONTENT")),e.R7$(3),e.JRh(e.bMT(23,25,"ACTION.HISTORY_CONTENT")),e.R7$(3),e.SpI(" ",e.bMT(26,27,"TITLE.DISPLAY_SIZE")," "),e.R7$(12),e.SpI(" ",e.bMT(38,29,"TITLE.DISPLAY")," "),e.R7$(4),e.JRh(e.bMT(42,31,"TITLE.Preview")),e.R7$(3),e.JRh(e.bMT(45,33,"TITLE.Preview_MOTHER")),e.R7$(9),e.JRh(e.bMT(54,35,"TITLE.CREATE_ROW")),e.R7$(3),e.Y8G("optionsInfoAreaId",i.constructor.name))},dependencies:[D._,u.D9]})}return r})(),data:{title:"ROUTE.WEBDESIGNERBUILDER"},children:[]}];let R=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.$C({type:r});static \u0275inj=e.G2t({imports:[d.iI.forChild(M),d.iI]})}return r})(),N=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=e.$C({type:r});static \u0275inj=e.G2t({providers:[n.XBe,n.i9D,n.pjw,n.XFG,n.WCW,n.nuK,n.JLX,n.ERs,n.HZX,n.JM2,n.IW5,n.P8v,n.kE8,n.sVA],imports:[m.MD,R,a.YN,a.X1.withConfig({warnOnNgModelWithFormControl:"never"}),A.G,h.Qt,g.m_,p.RG,T.aP,k.JG,I.UA,b.ad,f.CoreModuleModule]})}return r})()}}]);