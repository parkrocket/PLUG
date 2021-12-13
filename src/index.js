import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Comp/Head.js';
import Footer from './Comp/Footer.js';
import Main from './Main.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <Main/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
