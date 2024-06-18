import mongoose from "mongoose";

const {Schema,model} =  mongoose 

const menusModel =new  Schema({
    perm:String,
    icon:String,
    name:String,
    parentId:{
      type:Number,
      default:0,
    },
    path:String,
    component:{
      type:String,
      default:''
    },
    sort:Number,
    type:String,
    visible:Number
})

export default model('menus',menusModel)