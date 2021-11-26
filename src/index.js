import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// 이제 ThemeContext 안에 있는 애들은 서로 value를 공유할 수 있게 되었지만...
// 저렇게 한개씩 넘겨주는 것은 효율적이지 않다. 
// 하여 개발자들이 사용하는 방식은... ThemeContext 내에서 Provider를 만들어서 아예 해당 오브젝트들 전체를 prop으로 넘겨 ThemeContext 내에서 처리를 하여 통째로 돌려받아 사용한다. 