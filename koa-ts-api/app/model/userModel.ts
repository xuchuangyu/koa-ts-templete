import mongoose from "mongoose";

const UserSchema =  new mongoose.Schema({
  username:{
    type:String,
    require:true,
    min:3,
    max:20,
    unique:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
    max:30
  },
  password:{
    type:String,
    require:true,
    min:8,
  },
  isAvatarImageSet:{
    type:Boolean,
    default:false,
  },
  avatarImage:{
    type:String,
    default:""
  }
})

export default mongoose.model("Users",UserSchema)