//library imports
import React from 'react';

//local imports
import './style.css';
import Ocupation from '../../components/Charts/Ocupation';
import OcupationHistory from '../../components/Charts/OcupationHistory';
import Specialities from '../../components/Charts/Specialities';

export default function Dados(){
    return(
        <div className="dataBox">
            <h1>Dados</h1>
            <h2>Taxa de Ocupação dos leitos de Araguaína</h2>
            <Ocupation/>
            <h2>Histórico da Taxa de Ocupação dos leitos de Araguaína</h2>
            <OcupationHistory/>
            <h2>Especialidades médicas mais procuradas em Araguaína</h2>
            <Specialities/>
        </div>
    );
}
