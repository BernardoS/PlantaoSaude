//library imports
import React, { useState } from 'react';

//local imports
import './style.css';
import '../../components/Charts/Ocupation';
import hospitalImage from '../../images/hospital.jpg';
import editIcon from '../../images/icons/edit.svg';
import Ocupation from '../../components/Charts/Ocupation';
import OcupationHistory from '../../components/Charts/OcupationHistory';
import Specialities from '../../components/Charts/Specialities';

const HospitalPerfil = () =>{
    const [ocupation,setOcupation] = useState(80);
    return(
        <div className="container">
            <img alt="Imagem do Hospital" className="hospitalImage" src={hospitalImage} />
            <div className="overlay">
                <h2>Hospital Dom Orione</h2>
                <button><img alt="Ícone de edição" className="editIcon" src={editIcon} /></button>
            </div>
            <div className="profileBox">

                <section className="ocupationSection">
                    <h2 className="sectionTitle">Ocupação atual</h2>
                    <div className="sectionContent">
                        <h2 className="ocupationData">{ocupation}%</h2>
                        <Ocupation className="ocupationData"/>
                    </div>
                </section>

                <section className="ocupationHistorySection">
                    <h2 className="sectionTitle">Histórico da taxa de ocupação dos leitos</h2>
                    <div className="sectionContent">
                        <OcupationHistory className="ocupationData"/>
                    </div>
                </section>

                <section className="specialityHistorySection">
                    <h2 className="sectionTitle">Especialidades mais procuradas na sua cidade</h2>
                    <div className="sectionContent">
                        <Specialities className="ocupationData"/>
                    </div>
                </section>
                <section className="buttonSection">
                    <button>Atualizar Dados</button>
                </section>
            </div>
        </div>
    );
}

export default HospitalPerfil;