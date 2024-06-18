import koaRouter from 'koa-router'
import {  getUserList }  from '../../controller/UserController'

const router= new koaRouter({prefix:'/api/user'})

router.get('/list',getUserList)


export default router;