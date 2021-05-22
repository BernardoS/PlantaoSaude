//library imports
import React from 'react';

//local imports
import './style.css';
import acessarIcon from '../../images/Logar.png';
import cadastrarIcon from '../../images/Cadastrar.png';

const Acesso = () =>{
    return(
        <div className="box">
            <button className="leftButton">
                <img className="buttonImage" alt="Ícone para acessar centro de saúde" src={acessarIcon}/>
                <h2>Acessar centro de saúde</h2>
            </button>
            <div className="line"/>
            <button className="rightButton">
                <img className="buttonImage" alt="Ícone para cadastrar centro de saúde" src={cadastrarIcon}/>
                <h2>Cadastrar centro de saúde</h2>
            </button>
        </div>
    )
}

export default Acesso