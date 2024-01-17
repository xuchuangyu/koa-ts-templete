/*
 * @Date: 2024-01-11 18:21:19
 * @Description: 
 * @LastEditTime: 2024-01-17 15:48:31
 * @FilePath: \react-hook-ts\src\router\AuthRouter.tsx
 */

import { Navigate,useLocation,useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Appraisal =  ({ children  }: any) => {
  const location = useLocation();

  // const {  pathname } = location
  const {  attr={} }= children.props
  const isLogin = localStorage.getItem("token");
  //@ts-ignore
  if(Boolean(isLogin)){
    // 如果是登陆状态，想要跳转到登陆，重定向到主页
    if (attr.path === "/login") {
      return <Navigate to="/" />
    }else{
      return (children);
    }
  }else{
    if(attr.path === "/login"){
      return (children);
    }else{
      return  <Navigate to="/login" />

    }
  }
};

export default Appraisal