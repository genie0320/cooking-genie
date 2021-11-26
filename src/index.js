import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeContext } from './context/ThemeContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={{ color: 'blue' }}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

