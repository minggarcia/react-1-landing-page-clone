import './index.css';
/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          background-color: #f7f4ed;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        ::after,
        ::before {
          box-sizing: border-box;
        }
        ::-webkit-scrollbar {
          width: 15px;
          height: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #efe9db;
        }
        ::-webkit-scrollbar-thumb {
          background: #e4decc;
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
