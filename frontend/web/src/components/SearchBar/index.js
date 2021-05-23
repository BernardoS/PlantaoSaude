//library imports
import React,{useState} from 'react';

//local imports
import './style.css';
import searchIcon from '../../images/icons/search-solid.svg';

function SearchBar({config}){
    const [search,setSearch] = useState(null);
    const [speciality,setSpeciality] = useState(null);
    const [ocupation,setOcupation] = useState(null);

    function handleSubmit(){
        if((search===null) && (speciality===null) && (ocupation===null)){
            return alert('PREENCHA UM DOS CAMPOS DE PESQUISA');
        }else{
            config.history.push({
                pathname:'/busca',
                state:{
                    search,
                    speciality,
                    ocupation
                }
            })
        }
    }


    return(
        <form className="form" onSubmit={handleSubmit}>
                    <input 
                        className="searchBar"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />

                    <button type="submit" className="submitButton"><img alt="Ícone de busca" className="searchIcon" src={searchIcon}/></button>
                    <div className="lineSearch"/>

                    <select 
                        value={speciality} 
                        className="specialityField" 
                        name="especialidades" 
                        id="especialidades"
                        onChange={(e)=>setSpeciality(e.target.value)}>

                        <option value="Ortopedia">Ortopedia</option>
                        <option value="Geriatria">Geriatria</option>
                        <option value="Gastrointestinal">Gastroinstestinal</option>
                        <option value="Neurologia">Neurologia</option>
                        <option selected value="Especialidades">Especialidades</option>

                    </select>

                    <div className="lineSearch"/>

                    <select 
                        className="ocupationField" 
                        name="ocupação" 
                        id="ocupação"
                        value={ocupation}
                        onChange={(e)=>setOcupation(e.target.value)}>

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
    );
}

export default SearchBar;