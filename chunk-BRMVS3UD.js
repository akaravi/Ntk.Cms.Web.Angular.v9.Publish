import{Ld as i,nd as r}from"./chunk-XKQYEJGP.js";var c=class{constructor(s,e,t,o){this.baseService=s,this.item=e,this.publicHelper=t,this.translate=o,this.tokenInfo=new r,this.fieldsInfo=new Map,this.dataModelResult=new i,t.pageInfo.updateContentService(s),this.DataGetAccess(),this.dataModel=e}DataGetAccess(){let s=this.constructor.name+"main";this.translate.get("MESSAGE.Receiving_information").subscribe(e=>{this.publicHelper.processService.processStart(s,e,this.constructor.name)}),this.baseService.ServiceViewModel().subscribe({next:e=>{e.isSuccess?this.fieldsInfo=this.publicHelper.fieldInfoConvertor(e.access):this.publicHelper.cmsToastrService.typeErrorGetAccess(e.errorMessage),this.publicHelper.processService.processStop(s)},error:e=>{this.publicHelper.cmsToastrService.typeErrorGetAccess(e),this.publicHelper.processService.processStop(s,!1)}})}};export{c as a};
