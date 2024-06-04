import koaRouter from 'koa-router'
 import UserController from '../../controller/UserController';



const router= new koaRouter({prefix:'/api/user'})

router.get('/list',UserController.getUserList)

export default router