//library imports
import React from 'react';

//local imports
import './style.css';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Routes from '../../routes/index';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar/>
        <Routes />
      <Footer/>
    </Router>
  );
}

export default App;
