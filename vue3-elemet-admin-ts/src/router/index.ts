import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import useStore from '@/store';

export const Layout = () => import('@/layout/index.vue');

// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true }
  },



  {
    path: '/',
    component: Layout,
    redirect: '/message',
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        meta: { hidden: true }
      },
    ]
  },
  {
    path: '/message',
    component: Layout,
    meta: { title: '消息菜单', icon: 'goods' },
    redirect: '/message/list',
    children: [
      {
        path: 'list',
        component: () => import('@/views/message/index.vue'),
        name: 'message',
        meta: { title: '消息列表', icon: 'goods' },
      }
    ]
  },


];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 重置路由
export function resetRouter() {
  const { permission } = useStore();
  permission.routes.forEach(route => {
    const name = route.name;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
}

export default router;
