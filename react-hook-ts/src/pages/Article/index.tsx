/*
 * @Date: 2024-01-11 16:39:10
 * @Description: 
 * @LastEditTime: 2024-01-17 16:34:33
 * @FilePath: \react-hook-ts\src\pages\Article\index.tsx
 */

import { useSearchParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Article=(props:any)=>{
  const [ param ]= useSearchParams();
  const navigate=useNavigate()
  return (<div>我是文章页
    <span onClick={()=>navigate('/message')}>toMissage</span>
  </div>)
}

export default Article