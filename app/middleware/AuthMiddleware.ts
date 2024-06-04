import { Context,Next } from "koa";
import { verify  } from '../../utils/auth'
import response from "../../utils/response";

function AuthMiddleware(ctx:Context,next:Next){
    const token=ctx.header['authorization'];
    if(token!==undefined && token !==""){
      const {error} = verify(token)
      if(error !==null){
        //@ts-ignore
        response.error(ctx,error,null,401)
        return 
      }else{
        return next()
      }
    }else{
      response.error(ctx,'authorization 不能为空',null,401)
    }
}

export default AuthMiddleware