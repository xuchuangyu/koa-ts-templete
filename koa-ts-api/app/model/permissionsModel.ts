import mongoose from "mongoose";

const {Schema,model} =  mongoose 
const permissionsModel = new Schema({
  // 权限名称
  name:String,
  // URL权限标识
  btnPerm:String,
  //  URL权限标识
  urlPerm:String,
  // 所属菜单id
  menuId:{
    type:Schema.Types.ObjectId,
    ref:'menus',
  },
})

export default model('permissions',permissionsModel)