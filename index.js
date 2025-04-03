import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Optional: For styling your app
import App from './App.jsx';  // Add the .jsx extension explicitly

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This matches the div with id="root" in index.html
);

