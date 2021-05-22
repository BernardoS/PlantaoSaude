//library imports
import React from 'react';
import {Link} from 'react-router-dom';

//local imports
import logoSymbol from '../../images/Logo.png';
import logoPhrase from '../../images/PlantaoSaude.png';
import NavBarLink from './NavBarLink';
import './style.css';


export default function  NavBar(){
    
    return(
        <div className="bar">
            <Link to='/'>
                <div className="logo">
                    <img alt="Símbolo da Plantão Saúde" className="logoSymbol" src={logoSymbol}/>
                    <img alt="Frase Plantão Saúde" className="logoPhrase" src={logoPhrase}/>
                </div>
            </Link>
            <div className="menu">
                <NavBarLink page="">Home</NavBarLink>
                <NavBarLink page="dados">Estatísticas da cidade</NavBarLink>
                <NavBarLink page="acesso">Acesso Hospital</NavBarLink>
            </div>
        </div>
    )
}

