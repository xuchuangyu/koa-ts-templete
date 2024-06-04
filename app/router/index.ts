/*
 * @Author: xuchuangyu 254568214@qq.com
 * @Date: 2023-12-05 10:26:42
 * @LastEditors: xuchuangyu 254568214@qq.com
 * @LastEditTime: 2023-12-06 21:37:37
 * @FilePath: \koa-api\app\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import koaRouter from 'koa-router'
import IndexController from '../controller/IndexController';
import AuthMiddleware from '../middleware/AuthMiddleware';
import LoginController from '../controller/LoginController';
import AdminController from '../controller/AdminController';
import UserController from '../controller/UserController';
import UploadController from '../controller/UploadController';

const router= new koaRouter({prefix:'/api'})

router.post('/login',LoginController.index)
router.get('/admin/list',AdminController.getAdminList)
router.get('/user/list',UserController.getUserList)
router.post('/upload',UploadController.upload)
router.use(AuthMiddleware)
router.get('/',IndexController.index)
export default router;