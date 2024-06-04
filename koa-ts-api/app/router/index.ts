/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-05 10:26:42
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 21:37:37
 * @FilePath: \koa-api\app\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import * as fs from 'fs';
import {resolve,join} from 'path'

export function initRouter(app:any){
  function pathResolve(dir: string) {
    return resolve(__dirname, './', dir);
  }
  const dirpath= pathResolve('modules')
  fs.readdirSync(dirpath).forEach(async (file: string) => {
    if (file.endsWith('.ts')) {
      const filePath = join(dirpath, file);
      const module= await import(filePath)
     
      if(module?.default?.routes)  app.use(module.default.routes())
    }
  });
}

