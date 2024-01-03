import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login' 
import Article from '../pages/Article'
import Notfound from '../pages/Notfound'

const Router= createBrowserRouter([
  {
    path:'/login',
    Component:Login
  },{
    path:'/article',
    Component:Article
  },{
    path:'*',
    Component:Notfound
  }
])

export default Router;