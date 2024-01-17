/*
 * @Date: 2024-01-12 18:03:41
 * @Description: 
 * @LastEditTime: 2024-01-17 11:15:44
 * @FilePath: \react-hook-ts\src\utils\mapMenus.ts
 */
import React from "react";
import { RouteObject } from "react-router-dom";
// import { IMenus } from "../view/Login/data";
// 菜单转路由
export function mapMenusToRouter(userMenus: any) {
  const routes: RouteObject[] = [];
  // 1.默认加载所有路由
  const allRoutes: RouteObject[] = [];
  // 这里加载的是 图001 router/main/* 的所有文件路径
  //@ts-ignore
  const routeFiles = require?.context(`../router/main`, true, /.tsx/);
  routeFiles.keys().forEach((key:string) => {
    // 根据路径导入路由
    const route = require(`../router/main${key.split(".")[1]}`);
    allRoutes.push(route.default);
  });

  // 2.根据menus来筛选路由
  function filterRoute(menus:any) {
    for (const menuItem of menus) {
      // if (menuItem.type === 1) {
        for(let item of allRoutes){
          if(item.path === menuItem.path) console.log(item)
        }
        const route = allRoutes.find((item) => item.path === menuItem.path);
        if (route) {
          routes.push({
            ...route,
          });
        }
      // } else if (menuItem.type === 2) {
      //   filterRoute(menuItem.children ?? []);
      // }
    }
  }
  filterRoute(userMenus);
  // 返回筛选完的路由
  return routes;
}

// 合并路由
export function handleMergeRoutes(
  defaultRoutes: RouteObject[],
  routes: RouteObject[]
) {
  // 拷贝原路由(坚持React数据不变的力量)
  const newDefaultRoutes = deepCopyRoute<RouteObject[]>(defaultRoutes);
  // 拿到main路由
  const routeItem = newDefaultRoutes.find((item) => item.id === "main") ?? {};
  // 添加新路由
  // routeItem.children = routes;
  // 返回新路由
  return newDefaultRoutes;
}

// 拷贝路由对象
function deepCopyRoute<T>(raw: T): T {
  let copyData: any = Array.isArray(raw) ? [] : {};

  for (const key in raw) {
    const value: any = raw[key];
    // 如果是普通类型或者react元素则不深拷贝
    const condition = typeof value !== "object" || React.isValidElement(value);
    if (condition) {
      copyData[key] = value;
    } else if (typeof value === "object") {
      copyData[key] = deepCopyRoute(value);
    }
  }
  return copyData;
}

