/*
 * @Date: 2023-12-18 10:52:59
 * @Description: 
 * @LastEditTime: 2023-12-18 14:46:10
 * @FilePath: \koa\app\router\modules\token.ts
 */
import koaRouter from 'koa-router'
import { getAllUsers, logOut, login, register, setAvatar } from '../../controller/userController';

const router= new koaRouter({prefix:'/api/auth'})

router.post("/login",login)
router.post('/register',register)
router.get('/allusers/:id',getAllUsers)
router.post('/setavatar/:id',setAvatar)
router.get('/logout/:id',logOut)
export default router;