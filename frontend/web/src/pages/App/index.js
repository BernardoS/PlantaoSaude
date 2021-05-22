//library imports
import React from 'react';

//local imports
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Login from '../Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Login/>
      <Footer/>
    </div>
  );
}

export default App;
