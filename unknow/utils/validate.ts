import Schema,{ Rules,Values }  from "async-validator";
import { Context } from "koa";
import response from "./response";


async function validate<T extends Values>(ctx:Context,rules:Rules,flag:boolean=false):Promise<{data:T,error:any|null}>{

    const validator= new Schema(rules)
    let data:any={}
    if(!ctx.request.body){
      return {
        data:{} as T,
        error:'参数不能为空',
      }
    }
    switch(ctx.method){
      case 'GET': break;
      case 'POST': data = getFormData(ctx); break;
      case 'PUT' :  data = getFormData(ctx); break; 
      case 'DELETE':  data = getFormData(ctx); break ;
    }
    return await validator.validate(data)
    .then(()=>{
      return {
        data:data as T,
        error:null
      }
    })
    .catch((err)=>{
      if(flag){
        return {
          error:err,
          data:{} as T
        }
      }
      return {
        error:err.error[0].message,
        data:{} as T
      }
    })
}

function getFormData(ctx:Context){
  return ctx.request.body
}

export default validate