//library imports
import React,{useState} from 'react';
import SearchBar from '../../components/SearchBar';

//local imports
import './style.css';
import hospital from '../../images/hospital.jpg'

export default function Busca(props){

    const [state,setState] = useState(
        props.location.state ? props.location.state : ""
    );

    return(
        <div className="searchPageBox">
            <div className="searchHeader">
                <SearchBar config={props}/>
                <h2>Mostrando todos os Hospitais com as características selecionadas</h2>
            </div>
            <div className="searchContent">
                
                <div className="hospitalCard">
                    <img src={hospital} alt="hospital"/>
                    <div>
                        <h1>Dom Orione:</h1>
                    </div>
                    <h3>Ocupação:{30}%</h3>
                    <h3>Especialidades: ...</h3>
                    <h3>Endereço: ...</h3>
                    <button className="hospitalButton">Mais detalhes</button>
                </div>
                
            </div>
        </div>
    );
}
