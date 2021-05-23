//library imports
import React from 'react';


//local imports
import './style.css';
import bannerImage from '../../images/Banner.png'
import buscaHospital from '../../images/Busca_Hospital.png';
import buscaTriagem from '../../images/Busca_Triagem.png';
import SearchBar from '../../components/SearchBar';

export default function Home(props){

    

    return(
        <div className="container">
            <div className="backgroundLayer">
                <h1 className="headline">Saiba o melhor local para ser atendido</h1>
                <img className="banner" alt="Ilustração de Hospital" src={bannerImage}/>
            </div>
            <div className="searchBarDiv" >
                <SearchBar config={props}/>
            </div>
            <div className="smartSearch">
                <h2>Busca Inteligente</h2>
                <div className="smartSearchOption">
                    <div>
                        <h2>Buscar melhor hospital</h2>
                        <p>
                        Baseado nas lotações dos hospitais, nas especialidades disponíveis o Plantão Saúde lhe fornece a opção mais segura e eficiente.
                        </p>
                        <button>Achar melhor hospital</button>
                    </div>
                    <div>
                        <img className="optionImage" alt="Ilustração de personagem procurando" src={buscaHospital} />
                    </div>
                </div>
                <div className="smartSearchOption">
                    <div>
                        <h2>Pré-Triagem</h2>
                        <p>
                        Responda um questionários sobre os seus sintomas e descubra qual o hospital mais adequado para atender os seus sintomas.
                        </p>
                        <button>Fazer pré-triagem</button>
                    </div>
                    <div>
                        <img className="optionImage" alt="Ilustração de personagens usando a triagem" src={buscaTriagem} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}



