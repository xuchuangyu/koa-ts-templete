import UserController from '../../controller/UserController';
import koaRouter from 'koa-router'


const router= new koaRouter({prefix:'/api/user'})

router.get('/list',UserController.getUserList)
export default router;