/*
 * @Date: 2024-01-12 17:54:46
 * @Description: 
 * @LastEditTime: 2024-01-12 18:17:15
 * @FilePath: \react-hook-ts\src\store\modules\loginStore.ts
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 这里统一加载缓存的一些数据
export const loadLocalLogin = createAsyncThunk(
  "login/loadLocalLogin",
  (_, { dispatch }) => {
    const menus = localStorage.getItem("menus");
    if (menus) {
      dispatch(changeMenusAction(JSON.parse(menus)));
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    menus: [],
  },
  reducers: {
    changeMenusAction(state, { payload }) {
      // 把数据存到redux里面，有点类似vuex
      console.log(payload)
      state.menus = payload;
      localStorage.setItem("menus", JSON.stringify(payload));
    },
  },
});

export const { changeMenusAction } = loginSlice.actions;

export default loginSlice.reducer;
