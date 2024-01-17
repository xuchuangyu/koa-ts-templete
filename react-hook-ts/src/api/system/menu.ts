/*
 * @Date: 2024-01-12 17:03:01
 * @Description: 
 * @LastEditTime: 2024-01-12 17:04:43
 * @FilePath: \react-hook-ts\src\api\system\menu.ts
 */

import request from '@/utils/request'

const MenuApi= class MenuApi{
  listRoutes() {
    return request({
      url: '/api/v1/admin/menus/routes',
      method: 'get',
    });
  }
  
}

export default new MenuApi()