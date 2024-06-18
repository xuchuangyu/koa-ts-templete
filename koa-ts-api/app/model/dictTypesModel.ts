import mongoose from "mongoose";

const Schema =  mongoose.Schema 

const dictTypesModel =new  Schema({
    //字典类型【字段编码】
    code:{
      type:String,
      unique:true,
    },
    //字典类型【字段状态】（启用=1|禁用=0）
    status:{
      type:Number,
    },
    name:String,
})

export default mongoose.model("dictTypes",dictTypesModel )