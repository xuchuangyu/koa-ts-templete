

import AuthRouter from '@/router/AuthRouter'
import Layout from '@/layout/index'
import { lazy } from "react";


const lazyLoad = (attr:{moduleName:string,path?:string,auth?:boolean}) => {
  const Module = lazy(() => import(`@/pages/${attr.moduleName}`));
  return <Module attr={attr} />;
};


export default  {
    path:'/article',
    element:<AuthRouter><Layout /></AuthRouter>,
    children:[
      {
        path:'',
        element:<AuthRouter>{lazyLoad({moduleName:"Article",})}</AuthRouter>,
      }
    ]
  }