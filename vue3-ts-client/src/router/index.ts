/*
 * @Date: 2023-12-19 14:56:07
 * @Description: 
 * @LastEditTime: 2023-12-19 15:07:01
 * @FilePath: \pc\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { start, close } from '@/utils/nprogress'
import { loadImg } from '@/utils/loadImg'
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
  },
];
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    });
  },
})

// 路由前置后卫
router.beforeEach(async (to, from, next) => {
  const { PreloadImg } = to.meta;
  if (PreloadImg) {
    await loadImg(PreloadImg)
    // 开启进度条
    start();
  }
  next()
});
// 路由后置后卫
router.afterEach(() => {
  // 关闭进度条
  close();
});

export default router
