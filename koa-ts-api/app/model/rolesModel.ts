import mongoose from "mongoose";

const {Schema,model} =  mongoose 

const rolesModel = new Schema({
    name:String,
    sort:Number,
    dataScope:Number,
    code:String,
    status:Number,
    menusIds:[{
      type:Schema.Types.ObjectId,
      ref:'menus',
    }],
})

export default model('roles',rolesModel)