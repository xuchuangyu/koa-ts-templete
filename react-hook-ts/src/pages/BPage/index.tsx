/*
 * @Date: 2024-01-11 16:39:10
 * @Description: 
 * @LastEditTime: 2024-01-17 16:52:22
 * @FilePath: \react-hook-ts\src\pages\BPage\index.tsx
 */

import { useSearchParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const BPage=(props:any)=>{
  const [ param ]= useSearchParams();
  return (<div>我是BPage    <Link to={'/CPage'} >to CPage</Link></div>)
}

export default BPage