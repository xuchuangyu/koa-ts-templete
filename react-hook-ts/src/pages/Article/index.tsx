import { useSearchParams } from 'react-router-dom'


const Article=()=>{
  const [ param ]= useSearchParams();
  console.log(param)
  return <div>我是文章页</div>
}

export default Article