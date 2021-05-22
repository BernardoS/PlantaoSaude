import React from 'react';

import './style.css'
import randomLogo from '../../images/random-logo-plantao-saude-white.png';

const Footer = () =>{
    return(
        <div className="footer">
            <img alt="Logo do Time Random Software" src={randomLogo}/>
            <div className="footerLine"/>
            <p>Desenvolvido pelo time Random na Hackathon Govtech para a cidade de Araguaína TO<br/>
            Artes por: <a href="https://www.freepik.com/pch-vector">Pch.Vector</a></p>
        </div>
    );
}

export default Footer;