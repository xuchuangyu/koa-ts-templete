import { Context,Next } from 'koa';
import { accessLogger } from '../logger'


function AccesssLogMiddleware(ctx:Context,next:Next){
  const logStr=`path:${ctx.path}| method:${ctx.method} |ua:${ctx.header['user-agent']}`;
  accessLogger.info(logStr)
  return next()
}

export default AccesssLogMiddleware