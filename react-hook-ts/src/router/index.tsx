/*
 * @Date: 2024-01-11 16:39:10
 * @Description: 
 * @LastEditTime: 2024-01-17 16:22:23
 * @FilePath: \react-hook-ts\src\router\index.tsx
 */
import { lazy } from "react";
import { createBrowserRouter,Navigate,RouteObject ,useLocation  } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import Layout from "@/layout";

const lazyLoad = (attr:{moduleName:string,path?:string,auth?:boolean}) => {
  const Module = lazy(() => import(`../pages/${attr.moduleName}`));
  return <Module attr={attr} />;
};

const Router: RouteObject[]|any = [
  {
    path:'/',
    element:<Navigate to={'/article'} />
  },
  {
    path:'/login',
    element:<AuthRouter>{lazyLoad({moduleName:"Login",path:'/login'})}</AuthRouter>,
  },
  {
    path:'/APage',
    element:<AuthRouter>{lazyLoad({moduleName:"APage",path:'/APage'})}</AuthRouter>,
  },
  {
    path:'/BPage',
    element:<AuthRouter>{lazyLoad({moduleName:"BPage",path:'/BPage'})}</AuthRouter>,
  },
  {
    path:'/CPage',
    element:<AuthRouter>{lazyLoad({moduleName:"CPage",path:'/CPage'})}</AuthRouter>,
  },
  {
    path:'*',
    element:<AuthRouter>{lazyLoad({moduleName:"Notfound",})}</AuthRouter>
  },
]

export default Router;