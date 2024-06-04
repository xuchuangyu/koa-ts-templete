import koaRouter from 'koa-router'
import AuthMiddleware from '../../middleware/AuthMiddleware';
import IndexController from '../../controller/IndexController';
import UploadController from '../../controller/UploadController';


const router= new koaRouter({prefix:'/api'})
router.get('/',AuthMiddleware,IndexController.index)
router.post('/upload',UploadController.upload)
export default router