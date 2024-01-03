/*
 * @Date: 2023-12-29 18:18:29
 * @Description: 
 * @LastEditTime: 2023-12-29 18:26:09
 * @FilePath: \react-hook-ts\src\store\modules\counterStore.ts
 */
import { createSlice } from '@reduxjs/toolkit'

const counterStore=createSlice({
  name:'counter',
  // 初始化state
  initialState:{
    count:0  
  },
  // 修改数据的方法 同步方法
  reducers:{
    inscrement(state){
      state.count++;
    },
    decrement(state){
      state.count--
    },
    addTo10(state,actions){
      state.count+=actions.payload
    }
  }
})


// 结构出来actionCreater 函数

const  {inscrement,decrement,addTo10} = counterStore.actions;

// 获取reducer

const reducer= counterStore.reducer;

// 以按需导出方式导出actions
export { inscrement,decrement,addTo10}

export default reducer;