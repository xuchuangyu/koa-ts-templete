/*
 * @Date: 2024-01-12 16:51:20
 * @Description: 
 * @LastEditTime: 2024-01-12 17:47:46
 * @FilePath: \react-hook-ts\src\store\modules\permissionStore.ts
 */
import { createSlice } from '@reduxjs/toolkit'
import Router from '@/router/index'


const permissionStore=createSlice({
  name:'permission',
  initialState:{
    routes:[],
  },
  reducers:{
    setRoutes(state,action){
      state.routes=Router.concat(action.payload)
    }
  }
})

const { setRoutes } = permissionStore.actions
const permissionReducer = permissionStore.reducer;


export { setRoutes } 

export default permissionReducer
