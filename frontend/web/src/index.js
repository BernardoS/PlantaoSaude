//library imports
import React from 'react';
import ReactDOM from 'react-dom';
import AuthContext from './contexts/auth';

//local imports
import './index.css';
import App from './pages/App';


ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={{signed:true}}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


