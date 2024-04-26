import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
