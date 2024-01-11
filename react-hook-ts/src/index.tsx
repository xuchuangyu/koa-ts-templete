/*
 * @Date: 2024-01-03 14:14:52
 * @Descripimport
 * @LastEditTime: 2024-01-11 15:35:12
 * @FilePath: \react-hook-ts\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import Router from './router/index'
import store from './store';
import { ConfigProvider, Button, Space, Input, Divider } from 'antd';
import theme from '@/config/theme'



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
      <ConfigProvider
            theme={theme}
      >
        <RouterProvider router={Router}  />
      </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
