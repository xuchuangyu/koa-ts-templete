/*
 * @Date: 2023-12-27 11:04:19
 * @Description: 
 * @LastEditTime: 2024-01-02 14:55:34
 * @FilePath: \react-hook-ts\src\store\modules\channelStore.ts
 */
/*
 * @Date: 2023-12-27 11:04:19
 * @Description: 
 * @LastEditTime: 2023-12-27 11:49:54
 * @FilePath: \webpack-react-ts-main\src\store\modules\channelStore.ts
 */
import { createSlice } from '@reduxjs/toolkit'
import MessageApi from '../../api/message'

const channelStore=createSlice({
  name:'channel',
  initialState:{
    channelList:[],
  },
  reducers:{
    setChannels(state,actions){
      state.channelList=actions.payload;
    }
  },
})


//  异步请求部分
const {setChannels} = channelStore.actions

const fetchChannelsList:any = ()=>{
  return async (dispatch:any)=>{
   const res= await MessageApi.getGoodsList()
   console.log(res.data.data)
   dispatch(setChannels(res.data.data))
  }
}

const channelReducer=channelStore.reducer

export { fetchChannelsList }

export default channelReducer