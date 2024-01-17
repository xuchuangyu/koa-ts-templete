/*
 * @Date: 2024-01-03 14:14:52
 * @Descripimport
 * @LastEditTime: 2024-01-17 17:25:44
 * @FilePath: \react-hook-ts\src\index.tsx
 */
import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import { BrowserRouter,Routes  } from 'react-router-dom'
import RouterBlock from 'react-router-block'
import store, { setupStore } from './store';
import { ConfigProvider } from 'antd';
import theme from '@/config/theme'
import App from "./App";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// 上面说了会调用这个加载缓存
setupStore();

root.render(
  <Provider store={store}>
      <ConfigProvider
            theme={theme}
      >
        <Suspense>
          <BrowserRouter>
                  <App />
            </BrowserRouter>
        </Suspense>
      </ConfigProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
