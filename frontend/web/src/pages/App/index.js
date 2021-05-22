//library imports
import React from 'react';

//local imports
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HospitalProfile from '../HospitalProfile';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <HospitalProfile/>
      <Footer/>
    </div>
  );
}

export default App;
