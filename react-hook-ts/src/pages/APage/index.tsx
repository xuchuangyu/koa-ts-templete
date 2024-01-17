/*
 * @Date: 2024-01-11 16:39:10
 * @Description: 
 * @LastEditTime: 2024-01-17 17:08:27
 * @FilePath: \react-hook-ts\src\pages\APage\index.tsx
 */

import { useSearchParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const APage=(props:any)=>{
  const [ param ]= useSearchParams();
  return (<div>我是APage
    <Link to={'/BPage'} >To BPage</Link>
    <Link to={'/Article'} >To Article</Link>
    <Link to={'/CPage'} >To CPage</Link>
  </div>)
}

export default APage