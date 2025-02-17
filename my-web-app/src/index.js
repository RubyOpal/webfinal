import React from 'react';
import ReactDOM from 'react-dom/client'; // use this for React 18 or above
import './index.css';
import App from './App'; // Your App component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // for React 18 or above
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
