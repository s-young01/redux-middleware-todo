import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';
import Reduxthunk from 'redux-thunk';

// 스토어 생성하기 
// 데브툴즈와 미들웨어 같이 적용할 때
const store = createStore(rootReducer, composeWithDevTools(
      applyMiddleware(Reduxthunk, logger)
    ));
// 데브툴즈 없이 미들웨어만 적용하ㄴ고 싶을 때  
// const store = createStore(rootReducer, applyMiddleware(myLogger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
