import koaRouter from 'koa-router'
import { getMessages,addMessage } from '../../controller/messageController';


const router= new koaRouter({prefix:'/api/messages'})

router.post('/addmsg',addMessage)
router.post('/getmsg',getMessages)
export default router;