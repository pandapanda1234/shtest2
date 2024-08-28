import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LinkButtons from './LinkButtons';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

// ページのrootを指定する
const root = ReactDOM.createRoot(document.getElementById('root'));
// rootにに内容を描画する
root.render(
  // Reactのデバッグ時に非推奨の挙動を検知する機能を有効にする
  <React.StrictMode>
    {/* ルーティングの親となる要素 */}
    <BrowserRouter>
      {/* ルーティング項目 */}
      <AppRoutes />
    </BrowserRouter>
    {/* ページ下部のリンクボタン */}
    <LinkButtons />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
