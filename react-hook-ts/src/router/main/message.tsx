/*
 * @Date: 2024-01-17 16:31:51
 * @Description: 
 * @LastEditTime: 2024-01-17 16:32:14
 * @FilePath: \react-hook-ts\src\router\main\Message.tsx
 */


import AuthRouter from '@/router/AuthRouter'
import Layout from '@/layout/index'
import { lazy } from "react";


const lazyLoad = (attr:{moduleName:string,path?:string,auth?:boolean}) => {
  const Module = lazy(() => import(`@/pages/${attr.moduleName}`));
  return <Module attr={attr} />;
};


export default  {
    path:'/message',
    element:<AuthRouter><Layout /></AuthRouter>,
    children:[
      {
        path:'',
        element:<AuthRouter>{lazyLoad({moduleName:"Message",})}</AuthRouter>,
      }
    ]
  }