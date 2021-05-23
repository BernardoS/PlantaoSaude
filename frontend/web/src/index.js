//library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {AuthProvider} from './contexts/auth';

//local imports
import './index.css';
import App from './pages/App';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


