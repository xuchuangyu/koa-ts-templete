/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-06 21:32:22
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 21:53:00
 * @FilePath: \koa-api\app\controller\UploadController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Context } from "koa";
import response from "../../utils/response";
import fs from 'fs'
import path from "path";

class UploadController{
  upload=(ctx:Context)=>{
    if(ctx.request.files){
      //@ts-ignore
      const file= ctx.request.files?.file
       //@ts-ignore
      console.log(file)
       //@ts-ignore
      const reader=fs.createReadStream(file.filepath)
       //@ts-ignore
      const ext= path.extname(file.originalFilename)

      const filepath=`/upload/${this.readomStr(11)}${ext}`
      const write= fs.createWriteStream('statics/'+filepath)
      reader.pipe(write);
      response.success(ctx,{file:filepath})
    }else{
      response.error(ctx,'文件不能为空')
    }
  }
  readomStr(length:number){
    const random='s2rertgwergvsdfgwretywergu6yirtyuutrdgfhbfgdherthberthfdhdfsgsadfg'
    let randomStr='';
    for(let i=0;i<length;i++){
      randomStr+=random[Math.floor(Math.random()*random.length)]
    }
    return randomStr
  }
}

export default new UploadController