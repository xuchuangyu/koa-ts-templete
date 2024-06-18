import mongoose,{Model} from "mongoose";

import { createHash } from "crypto";


const {Schema,model} =  mongoose 
const AdminUserSchema =new  Schema({
  // 用户头像
  avatar:{
    type:String,
    require:true,
    min:3,
    max:20,
    default:'',
  },
  email:{
    type:String,
    default:'',
  },
  //:'性别（ 1= 男 2 = 女 ）'
  gender:{
    type:Number,
    enum:[1,2],
  },
  mobile:{
    type:String,
    default:'',
  },
  // 部门关联id
  deptId:{
    type:Schema.Types.ObjectId,
    ref:'dept',
  },
  password:{
    type:String,
    require:true,
    min:8,
    set(v:string){
      return  createHash('md5').update(v).digest('hex')
    },
  },
  //用户名称
  nickname:{
    type:String,
    default:'',
  },
  //用户状态 （正常 =  1 禁用 = 2）'
  status:{
    type:Number,
    max:1,
    enum:[1,2],
  },
  //用户名
  username:{
    type:String,
    default:'',
  },
  RolesId:[{
    type:Schema.Types.ObjectId,
    ref:'roles',
  }]
})

export default model("userAdmin",AdminUserSchema)