//library imports
import React, { useState,useContext } from 'react';

//local imports
import './style.css';
import AuthContext from '../../../contexts/auth';
import {registrarOcupacao} from '../../../service/api';

export default function ControleOcupacao(){

    const {hospitalData} = useContext(AuthContext);
    const [id,setId] = useState(hospitalData._id);

    const [totalLeitos,setTotalLeitos] = useState(null);
    const [leitosOcupados,setLeitosOcupados] = useState(null);

    async function handleSubmit(){
        const response = await registrarOcupacao(id,totalLeitos,leitosOcupados);

        console.log(response);
    }

    return(
        <div className="controleBox">
            <form onSubmit={handleSubmit()}>
                <h2>Total de Leitos</h2>
                <input
                    value={totalLeitos}
                    onChange={(e)=>setTotalLeitos(e.target.value)} 
                />
                <h2>Leitos Ocupados</h2>
                <input
                    value={leitosOcupados}
                    onChange={(e)=>setLeitosOcupados(e.target.value)} 
                /><br/>
                <button>Registrar</button>
            </form>
        </div>
    );
}