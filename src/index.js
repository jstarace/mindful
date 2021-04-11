import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
