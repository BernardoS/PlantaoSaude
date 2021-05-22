//library imports
import React from 'react';

//local imports
import './style.css';
import bannerImage from '../../images/Banner.png'
import searchIcon from '../../images/icons/search-solid.svg';



const Home = () =>{
    return(
        <div className="container">
            <div className="backgroundLayer">
                <h1 className="headline">Saiba o melhor local para ser atendido</h1>
                <img className="banner" alt="Ilustração de Hospital" src={bannerImage}/>
            </div>
            <div>
                <form className="form">
                    <input className="searchBar"/>
                    <img alt="Ícone de busca" className="searchIcon" src={searchIcon}/>
                    <div className="line"/>
                    <select className="especialityField" name="especialidades" id="especialidades">
                        <option value="Ortopedia">Ortopedia</option>
                        <option value="Geriatria">Geriatria</option>
                        <option value="Gastrointestinal">Gastroinstestinal</option>
                        <option value="Neurologia">Neurologia</option>
                        <option selected value="Especialidades">Especialidades</option>
                    </select>
                    <div className="line"/>
                    <select className="ocupationField" name="ocupação" id="ocupação">
                        <option selected value="100%">Menor que 100%</option>
                        <option  value="90%">Menor que 90%</option>
                        <option  value="80%">Menor que 80%</option>
                        <option  value="70%">Menor que 70%</option>
                        <option  value="60%">Menor que 60%</option>
                        <option  value="50%">Menor que 50%</option>
                        <option  value="40%">Menor que 40%</option>
                        <option  value="30%">Menor que 30%</option>
                        <option  value="20%">Menor que 20%</option>
                        <option  value="10%">Menor que 10%</option>
                        <option selected value="Ocupação">Ocupação</option>
                    </select>
                </form> 
            </div>
            <div className="smartSearch">
                <h2>Busca Inteligente</h2>
                <div className="smartSearchOption">

                </div>
                <div className="smartSearchOption">

                </div>
            </div>
            
        </div>
    )
}

export default Home;
