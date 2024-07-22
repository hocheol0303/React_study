import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chap_03/Library';
import Clock from './chap_04/Clock';
import CommentList from './chap_05/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

// chap_04: setInterval 함수로 업데이트 하기
setInterval(() => {
  root.render(
      // chap_03: 리액트로 웹페이지 생성하기
    <React.StrictMode>
      <Library />
      <Clock />
      <CommentList />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
