/*
 * @Date: 2023-12-28 10:29:04
 * @Description:
 * @LastEditTime: 2024-01-03 10:24:37
 * @FilePath: \react-hook-ts\src\App.tsx
 */
import React, {  useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {fetchChannelsList  } from './store/modules/channelStore'
import { RouterProvider } from 'react-router-dom'
import Router from './router/index'


function App() {
  const dispatch=useDispatch();
  const {  channelList } = useSelector((state:any)=>state.channel)
  useEffect(()=>{
    dispatch(fetchChannelsList())
  },[dispatch])
  return <div className="App">
    <RouterProvider router={Router} />
  </div>;
}

export default App;
