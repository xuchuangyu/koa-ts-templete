import {Context} from 'koa'
import UserService from "../service/UserService";
import {sign} from '../../utils/auth'
import response from '../../utils/response';
import { Rules } from 'async-validator'
import validate from '../../utils/validate';


class LoginController{
  async  index(ctx:Context){
    const rules:Rules={
      name:[{
        message:'用户名不能为空',
        required:true,
        type:'string'
      }]
    }
    interface IAdmin{
      name:string,
    }
    const res =await validate<IAdmin>(ctx,rules)
    if(res.error){
     return  response.error(ctx,res.error)
    }
    const admin = UserService.getUser();
    if(admin===null){
      response.error(ctx,'管理员不存在')
      return
    }
    const token= sign(admin)
    response.success(ctx,{token})
  }
}

export default new LoginController