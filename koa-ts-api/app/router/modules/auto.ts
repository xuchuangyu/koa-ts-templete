/*
 * @Date: 2023-12-18 10:52:59
 * @Description: 
 * @LastEditTime: 2023-12-18 14:46:10
 * @FilePath: \koa\app\router\modules\token.ts
 */
import LoginController from '../../controller/LoginController';
import UploadController from '../../controller/UploadController';
import koaRouter from 'koa-router'

const router= new koaRouter({prefix:'/api'})
router.post('/login',LoginController.index)
router.post('/upload',UploadController.upload)

export default router;