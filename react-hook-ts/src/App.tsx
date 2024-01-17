/*
 * @Date: 2024-01-12 10:55:48
 * @Description: 
 * @LastEditTime: 2024-01-17 17:17:12
 * @FilePath: \react-hook-ts\src\App.tsx
 */
import React, { memo ,Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { useLoadRouter } from "./hooks/useRouter";
import { useSelector } from 'react-redux'
import { Navigate,useLocation,useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { sessionStorage } from '@/utils/storage'

const App = memo( () => {
  // 直接调用上面写好的hook即可，这样子就不会很乱啦
  const routes = useLoadRouter();
  const { pathname ,key} = useLocation();  // 2、存储当前路由地址`
  useEffect(()=>{ //  3、通过 useEffect 监听路由变化触发事务时间`
          toDoSometing() // 4、具体的事务处理`
  },[pathname,key])
  function toDoSometing(){
    let obj:any=sessionStorage.get('router')
    if(obj){
      // 同一页面
      if(`${pathname}-${key}`===obj[0]) return false;
      if(obj.length>=2&&obj[1]===`${pathname}-${key}`){
        // 回退操作 路由出栈
        obj.shift(`${pathname}-${key}`)
      }else{
        //路由入栈
        obj.unshift(`${pathname}-${key}`)
      }
    }else{
      //路由入栈
      obj=[`${pathname}-${key}`]
    }
    sessionStorage.set('router',obj)
  }
  return <>{useRoutes(routes)}</>;
});
export default App;
