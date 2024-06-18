import mongoose from "mongoose";

const Schema =  mongoose.Schema 

const dictItemsModel =new  Schema({
  typeCode:String,
  name:String,
  status:{
    type:Number,
    max:1,
    enum:[1,2],
  },
  value:String,
  sort:Number,
})

export default mongoose.model("dictItems",dictItemsModel )