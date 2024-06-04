import koaRouter from 'koa-router'
import AdminController from '../../controller/AdminController';



const router= new koaRouter({prefix:'/api/admin'})

router.get('/list',AdminController.getAdminList)


export default router