//library imports
import React from 'react';
import {Link} from 'react-router-dom';

//local imports
import './style.css';
import acessarIcon from '../../images/Logar.png';
import cadastrarIcon from '../../images/Cadastrar.png';

export default function Acesso(){
    return(
        <div className="accessBox">
            <Link to="/acesso/login" className="leftButton">
                <img className="buttonImage" alt="Ícone para acessar centro de saúde" src={acessarIcon}/>
                <h2>Acessar centro de saúde</h2>
            </Link>
            <div className="line"/>
            <Link to="/acesso/cadastro" className="rightButton">
                <img className="buttonImage" alt="Ícone para cadastrar centro de saúde" src={cadastrarIcon}/>
                <h2>Cadastrar centro de saúde</h2>
            </Link>
        </div>
    )
}
