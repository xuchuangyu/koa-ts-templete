/*
 * @Date: 2024-01-11 16:39:10
 * @Description: 
 * @LastEditTime: 2024-01-17 16:51:16
 * @FilePath: \react-hook-ts\src\pages\Message\index.tsx
 */

import { useSearchParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Message=(props:any)=>{
  const [ param ]= useSearchParams();
  const navigate=useNavigate()
  return (<div>我是Message
    <span onClick={()=>navigate('/message')}>toMissage</span>
    <Link to={'/APage'} > toAPage </Link>
  </div>)
}

export default Message