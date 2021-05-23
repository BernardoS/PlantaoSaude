//library imports
import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../contexts/auth';

//local imports
import logoSymbol from '../../images/Logo.png';
import logoPhrase from '../../images/PlantaoSaude.png';
import NavBarLink from './NavBarLink';
import './style.css';


export default function  NavBar(){

    const {signed,doLogout} = useContext(AuthContext);

    useEffect(()=>{

    },[signed]);

    function handleLogout(){
        doLogout();
    }
    
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
                {signed&& <button onClick={()=>handleLogout()}>Sair</button>}
            </div>
        </div>
    )
}

