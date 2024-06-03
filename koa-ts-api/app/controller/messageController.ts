import { Context } from "koa";
import response from "../../utils/response";
import messageModel from "../model/messageModel";

export const getMessages=async (ctx:Context)=>{
  const {from,to} = ctx.request.body
  const messages = await messageModel.find({
    users:{
      $all:[from,to]
    }
  }).sort({updatedAt:1})
  const projectedMessages= messages.map((msg:any) => {
    return {
      fromSelf: msg.sender.toString() === from,
      message: msg.message.text,
    };
  });

  response.success(ctx,projectedMessages)
}

export const addMessage = async (ctx:Context)=>{
  const {from,to,message} = ctx.request.body
  const data= await messageModel.create({
    message: { text: message },
    users: [from, to],
    sender: from,
  });
  if(data) return response.success(ctx,'Message added successfully.')
    else return response.error(ctx, "Failed to add message to the database" )
}