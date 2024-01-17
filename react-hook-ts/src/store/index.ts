/*
 * @Date: 2023-12-26 16:09:31
 * @Description: 
 * @LastEditTime: 2024-01-12 18:08:19
 * @FilePath: \react-hook-ts\src\store\index.ts
 */
/* app/store.ts */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counterStore';
import channelReducer from './modules/channelStore';
import permissionReducer from './modules/permissionStore';
import loginReducer, { loadLocalLogin }  from './modules/loginStore';
import userStore from './modules/userStore';
// import todoReducer from './features/todo/todoSlice';
 
 const store = configureStore({
  reducer: {
    counter: counterReducer,
    channel:channelReducer,
    user:userStore,
    permission:permissionReducer,
    login: loginReducer,
  },
});

// 统一在这里初始化一些缓存的数据
export function setupStore() {
  // 这里是缓存的菜单，程序加载会先调用这个
  store.dispatch(loadLocalLogin());
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store