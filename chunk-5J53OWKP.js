import{Dd as r,Fe as i}from"./chunk-DTYEIAZU.js";var c=class{constructor(s,e,t,o){this.baseService=s,this.item=e,this.publicHelper=t,this.translate=o,this.constructorInfoAreaId=this.constructor.name,this.tokenInfo=new i,this.fieldsInfo=new Map,this.dataModelResult=new r,t.pageInfo.updateContentService(s),this.DataGetAccess(),this.dataModel=e}DataGetAccess(){let s=this.constructor.name+"main";this.translate.get("MESSAGE.Receiving_information").subscribe(e=>{this.publicHelper.processService.processStart(s,e,this.constructorInfoAreaId)}),this.baseService.ServiceViewModel().subscribe({next:e=>{e.isSuccess?this.fieldsInfo=this.publicHelper.fieldInfoConvertor(e.access):this.publicHelper.cmsToastrService.typeErrorGetAccess(e.errorMessage),this.publicHelper.processService.processStop(s)},error:e=>{this.publicHelper.cmsToastrService.typeErrorGetAccess(e),this.publicHelper.processService.processStop(s,!1)}})}};export{c as a};