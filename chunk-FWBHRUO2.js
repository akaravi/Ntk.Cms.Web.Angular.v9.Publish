import{Ab as s,Bb as h,Cb as p,dd as f,ed as b,oc as u,rb as n,sd as m,zb as d,zd as C}from"./chunk-WRSNPIPL.js";import{Dd as a,Fe as r,Id as c,aq as i}from"./chunk-KXTWLLZH.js";var S=class{constructor(e,t,l,o,R){this.baseService=e,this.item=t,this.publicHelper=l,this.tokenHelper=o,this.translate=R,this.constructorInfoAreaId=this.constructor.name,this.filteModelContent=new c,this.tableSource=new u,this.tokenInfo=new r,this.fieldsInfo=new Map,this.optionsSearch=new m,this.optionsStatist=new C,this.tableRowsSelected=[],this.dataModelResult=new a,this.clickCount=0,this.viewGuideNotice=!1,this.actionScrollIntoViewRun=!1,this.tableRowSelectDoubleClick=!1,this.tableRowSelect3Click=!1,this.tableRowSelectActionMenuClick=!1,l.pageInfo.updateContentService(e)}onActionTableRowSelect(e){this.clickCount++,setTimeout(()=>{this.tableRowSelected=e,this.publicHelper.pageInfo.updateContentInfo(new n(e.id,e.title,e.viewContentHidden,"",e.urlViewContent)),this.tableRowSelected.id===e.id?e.expanded==!0?e.expanded=!1:e.expanded=!0:e.expanded=!1,this.clickCount===1?(this.tableRowSelectDoubleClick=!1,this.tableRowSelect3Click=!1):this.clickCount===2?(this.tableRowSelectDoubleClick=!0,this.tableRowSelect3Click=!1):this.clickCount===3&&(this.tableRowSelectDoubleClick=!1,this.tableRowSelect3Click=!0),this.clickCount=0},500)}onActionTableRowMouseClick(e){this.tableRowSelected.id===e.id?(e.expanded=!1,this.onActionTableRowSelect(this.item),this.publicHelper.pageInfo.updateContentInfo(new n("","",!1,"",""))):(this.onActionTableRowSelect(e),e.expanded=!0)}onActionTableRowMouseEnter(e){i.cmsViewConfig.tableRowMouseEnter&&(e.expanded=!0)}onActionTableRowMouseLeave(e){i.cmsViewConfig.tableRowMouseEnter&&(!this.tableRowSelected||this.tableRowSelected.id!==e.id)&&(e.expanded=!1)}onActionTableRowSelectActionMenu(e){this.onActionTableRowSelect(e),setTimeout(()=>{this.tableRowSelectActionMenuClick=!this.tableRowSelectActionMenuClick},1e3)}onActionButtonMemo(){var e="";this.publicHelper.isMobile?e="dialog-fullscreen":e="dialog-min",this.publicHelper.dialog.open(s,{height:"70%",panelClass:e,enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,data:{service:this.baseService}}).afterClosed().subscribe(l=>{l&&l.dialogChangedDate})}onActionButtonMemoRow(e=this.tableRowSelected){var t="";this.publicHelper.isMobile?t="dialog-fullscreen":t="dialog-min",this.publicHelper.dialog.open(s,{height:"70%",panelClass:t,enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,data:{service:this.baseService,id:this.tableRowSelected?this.tableRowSelected.id:"",title:this.tableRowSelected?this.tableRowSelected.title:""}}).afterClosed().subscribe(o=>{o&&o.dialogChangedDate})}onActionGridExpandRows(e){this.tableSource.data.forEach(t=>{t.expanded=e})}onActionButtonExport(){var e="";this.tokenHelper.isMobile?e="dialog-fullscreen":e="dialog-min",this.publicHelper.dialog.open(b,{height:"50%",enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,panelClass:e,data:{service:this.baseService,filterModel:this.filteModelContent,title:""}}).afterClosed().subscribe(l=>{})}onActionButtonPrintRow(e=this.tableRowSelected){if(!e||!e.id||e.id.length===0){this.publicHelper.cmsToastrService.typeErrorSelectedRow();return}if(this.onActionTableRowSelect(e),this.dataModelResult==null||this.dataModelResult.access==null||!this.dataModelResult.access.accessEditRow){this.publicHelper.cmsToastrService.typeErrorAccessWatch();return}var t="";this.tokenHelper.isMobile?t="dialog-fullscreen":t="dialog-min",this.publicHelper.dialog.open(f,{height:"50%",width:"50%",panelClass:t,enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,data:{service:this.baseService,id:this.tableRowSelected?this.tableRowSelected.id:"",title:this.tableRowSelected?this.tableRowSelected.title:""}}).afterClosed().subscribe(o=>{})}onActionButtonPin(e=this.tableRowSelected){var t="";this.publicHelper.isMobile?t="dialog-fullscreen":t="dialog-min",this.publicHelper.dialog.open(h,{height:"70%",panelClass:t,enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,data:{service:this.baseService,id:this.tableRowSelected?this.tableRowSelected.id:"",title:this.tableRowSelected?this.tableRowSelected.title:""}}).afterClosed().subscribe(o=>{o&&o.dialogChangedDate})}onActionButtonTask(e=this.tableRowSelected){var t="";this.publicHelper.isMobile?t="dialog-fullscreen":t="dialog-min",this.publicHelper.dialog.open(p,{height:"70%",panelClass:t,enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,data:{service:this.baseService,id:this.tableRowSelected?this.tableRowSelected.id:"",title:this.tableRowSelected?this.tableRowSelected.title:""}}).afterClosed().subscribe(o=>{o&&o.dialogChangedDate})}onActionButtonComment(e=this.tableRowSelected){var t="";this.publicHelper.isMobile?t="dialog-fullscreen":t="dialog-min",this.publicHelper.dialog.open(d,{height:"70%",panelClass:t,enterAnimationDuration:i.cmsViewConfig.enterAnimationDuration,exitAnimationDuration:i.cmsViewConfig.exitAnimationDuration,data:{service:this.baseService,id:this.tableRowSelected?this.tableRowSelected.id:"",title:this.tableRowSelected?this.tableRowSelected.title:""}}).afterClosed().subscribe(o=>{o&&o.dialogChangedDate})}DataGetAccess(){let e=this.constructor.name+"main";this.translate.get("MESSAGE.Receiving_information").subscribe(t=>{this.publicHelper.processService.processStart(e,t,this.constructorInfoAreaId)}),this.baseService.ServiceViewModel().subscribe({next:t=>{t.isSuccess?this.fieldsInfo=this.publicHelper.fieldInfoConvertor(t.access):this.publicHelper.cmsToastrService.typeErrorGetAccess(t.errorMessage),this.publicHelper.processService.processStop(e)},error:t=>{this.publicHelper.cmsToastrService.typeErrorGetAccess(t),this.publicHelper.processService.processStop(e,!1)}})}};export{S as a};