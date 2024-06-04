import koaRouter from 'koa-router'
import LoginController from '../../controller/LoginController';
const router= new koaRouter({prefix:'/api/login'})

router.post('/',LoginController.index)

export default router