/*
 * @Date: 2024-01-12 16:44:47
 * @Description: 
 * @LastEditTime: 2024-01-17 17:35:05
 * @FilePath: \react-hook-ts\src\hooks\useRouter.ts
 */
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@/store";
import defaultRoutes from "@/router";
import { handleMergeRoutes, mapMenusToRouter } from "@/utils/mapMenus";
import { sessionStorage } from '@/utils/storage'
import { useNavigate } from 'react-router-dom'


export function useLoadRouter() {
  const [routes, setRoutes] = useState(defaultRoutes);

  const { menus } = useSelector(
    (state: RootState) => ({
      menus: state.login.menus,
    }),
    shallowEqual
  );
    
  // useEffect监听的是redux/login里面的menus数据有没有改变
  useEffect(() => {
    // mapMenusToRouter方法是把菜单转成路由
    const newRoutes = mapMenusToRouter(menus);
    // handleMergeRoutes方法是把默认路由和新路由合并起来
    const router=defaultRoutes.concat(newRoutes);
    // const router = handleMergeRoutes(routes, newRoutes);
    // 最后设置最新的路由
    setRoutes(router);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menus]);

  return routes;
}


export const useRouter=()=>{
  const navigate=useNavigate()
  // 返回到指定路由页面
  function goBackPage(pageName:string){
    const obj:string[]= sessionStorage.get('router')
    let index=obj.findIndex((item:string)=>pageName===item.split('-')[0])
    navigate(-index)
    obj.splice(0,index) 
    sessionStorage.set('router',obj)
  }
  return {goBackPage}
}