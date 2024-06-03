import { Context } from 'koa'
import User from '../model/userModel'
import bcrypt from 'bcrypt'
import validate from '../../utils/validate'
import { Rules } from 'async-validator'
import response from '../../utils/response'
import UserService from '../service/UserService'
import { URLSearchParams } from 'url'

interface IUsers{
  username:string,
  email:string,
  password:string,
}
const rules:Rules={
  username:{
    required:true,
    message:'用户名不能为空',
  },
  password:{
    required:true,
    message:'密码不能为空 ',
  }
}
export const login = async (ctx:Context)=>{
  const { error,data } = await validate<IUsers>(ctx,rules)
  if(error!==null){
    return response.error(ctx,error)
  }
  const user =  await UserService.getUsersByUserName(data.username)
  if(!user){
    return  response.error(ctx,'Incorrect Username or Password')
  }
  const isPasswordValid =  await bcrypt?.compare(data.password,user.password as string)
  if(!isPasswordValid) return  response.error(ctx,'Incorrect Username or Password')
  delete user.password;
  response.success(ctx,user)
}

const registerRules:Rules={
  username:{
    required:true,
    message:'用户名不能为空',
  },
  email:{
    required:true,
    message:'电子邮箱不能为空',
  },
  password:{
    required:true,
    message:'密码不能为空',
  }
}

export const register =async  (ctx:Context)=>{
  try{
    const { error,data } = await validate<IUsers>(ctx,registerRules)
    const usernameCheck = await UserService.getUsersByUserName(data.username);
    if(usernameCheck) return  response.error(ctx,'Username already used');
    const emailCheck = await UserService.getUsersByEmail(data.email);
    if(emailCheck) return response.error(ctx,'Email already used')
    const hashedPassword = await bcrypt.hash(data.password,10);
    const user = await UserService.addUser({
      email:data.email,
      username:data.username,
      password:hashedPassword,
    })
    delete user.password;
    response.success(ctx,user)
  }catch(err:any){
    response.error(ctx,'注册失败',err)
  }
}

export const getAllUsers = async (ctx:Context)=>{
  try{
      const id = ctx.params['id']
      const users =  await User.find({_id:{$ne:id}}).select(["email","username","avatarImage","_id"]);
      response.success(ctx,users)
  }catch(err){
    response.error(ctx,'接口异常',err)
  }
}


export const setAvatar = async (ctx:Context) =>{
  try{
    const userId = ctx.params['id']
    const image = ctx.params['image']
    const avatarImage = image;
    const userData = await User.findByIdAndUpdate(userId,{
     isAvatarImageSet:true,
     avatarImage
    },
    {new:true}
   )
   response.success(ctx,{
     isSet:userData?.isAvatarImageSet,
     image:userData?.avatarImage
   })
  }catch(err){
    response.error(ctx,'接口异常',err)
  }
}

export const logOut = (ctx:Context)=>{
  try{
    const id = ctx.params['id']
    if(!id) return response.error(ctx,'User id is required ');
    response.success(ctx)
  }catch(err:any){
    response.success(ctx,'接口异常',err)
  }
}