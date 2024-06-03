/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-05 10:26:09
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 21:57:51
 * @FilePath: \koa-api\app\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dotenv from 'dotenv'
dotenv.config()
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import Koa from 'koa'
import {initRouter} from './router'
import AccesssLogMiddleware from './middleware/AccesssLogMiddleware'
import mongoose from 'mongoose'
import cors  from 'koa-cors'
import path from 'path'


mongoose
  .connect(process.env.MONGO_URL as string, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });


const app:any= new Koa;
  app
  .use(koaBody({
    multipart:true,
    formidable:{
      maxFieldsSize: 10 * 1024 * 1024,
    },
  }))
  .use(cors())
  .use(AccesssLogMiddleware)
  .use(koaStatic(path.join(__dirname,'../statics')))
  initRouter(app)
export default app;