/*
 * @Date: 2024-01-03 14:14:52
 * @Description: 
 * @LastEditTime: 2024-01-08 15:35:03
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
