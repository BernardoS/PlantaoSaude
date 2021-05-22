import React from 'react';
import logoSymbol from '../../images/Logo.png';
import logoPhrase from '../../images/PlantaoSaude.png';
import './style.css';

const NavBar = () =>{
    
    return(
        <div className="bar">
            <div className="logo">
                <img alt="Símbolo da Plantão Saúde" className="logoSymbol" src={logoSymbol}/>
                <img alt="Frase Plantão Saúde" className="logoPhrase" src={logoPhrase}/>
            </div>
            <div className="menu">
                <button>Estatísticas da cidade</button>
                <button onClick={()=>{}}>Acesso Hospital</button>
            </div>
        </div>
    )
}

export default NavBar;