/*
 * @Date: 2023-12-26 16:09:31
 * @Description: 
 * @LastEditTime: 2023-12-27 14:11:10
 * @FilePath: \webpack-react-ts-main\src\store\index.ts
 */
/* app/store.ts */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counterStore';
import channelReducer from './modules/channelStore';
// import todoReducer from './features/todo/todoSlice';
 
 const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel:channelReducer,
  },
});

export default store