import mongoose from "mongoose";

const Schema =  mongoose.Schema 
const deptsModel =new  Schema({
  email:{
    type:String,
    unique:true,
    require:true,
  },
  // 部门领导
  leader:String,
  mobile:{
    type:String,
    default:'',
  },
  name:{
    type:String,
    default:'',
  },
  parentId:{
    type:Schema.Types.ObjectId,
  },
  
  sort:Number,
  status:Number,
})


export default mongoose.model("depts",deptsModel )