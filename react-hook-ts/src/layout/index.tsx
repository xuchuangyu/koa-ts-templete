/*
 * @Date: 2024-01-12 11:14:21
 * @Description: 
 * @LastEditTime: 2024-01-12 11:17:51
 * @FilePath: \react-hook-ts\src\layout\index.tsx
 */
import { Outlet } from 'react-router-dom'



const Layout=({props}:any)=>{
  console.log(props)
  return (
  <div>


    <Outlet />
  </div>)
}

export default Layout