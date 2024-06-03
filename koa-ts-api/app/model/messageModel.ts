import mongoose from "mongoose";

const MessageSchema =new mongoose.Schema(
  {
    message:{
      text:{type:String,require:true}
    },
    users:Array,
    sender:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      require:true
    }
  },
  {
    timestamps: true,
  }
)


export default mongoose.model('Messages',MessageSchema)