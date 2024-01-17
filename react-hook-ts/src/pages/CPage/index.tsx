/*
 * @Date: 2024-01-11 16:39:10
 * @Description: 
 * @LastEditTime: 2024-01-17 17:22:36
 * @FilePath: \react-hook-ts\src\pages\CPage\index.tsx
 */

import { useSearchParams,Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useRouter } from '@/hooks/useRouter'

const CPage=(props:any)=>{
  const [ param ]= useSearchParams();
  const { goBackPage } = useRouter()
  const naviaate=useNavigate()
  return (<div>
    我是CPage      
     <span onClick={()=>goBackPage('/APage')}>返回A Page</span>
  </div>)
}

export default CPage