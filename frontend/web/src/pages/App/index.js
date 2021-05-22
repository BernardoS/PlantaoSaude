//library imports
import React from 'react';

//local imports
import './style.css';
import NavBar from '../../components/NavBar';
import Home from '../Home';
import Footer from '../../components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
