//library imports
import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';

//local imports
import './style.css';
import '../../components/Charts/Ocupation';
import editIcon from '../../images/icons/edit.svg';
import Ocupation from '../../components/Charts/Ocupation';
import OcupationHistory from '../../components/Charts/OcupationHistory';
import Specialities from '../../components/Charts/Specialities';
import AuthContext from '../../contexts/auth';

const HospitalPerfil = () =>{

    const {hospitalData} = useContext(AuthContext);

    //const [ocupation,setOcupation] = useState(80);
    return(
        <div className="container">
            <img alt="Imagem do Hospital" className="hospitalImage" src={`${hospitalData.foto}`} />
            <div className="overlay">
                <h2>{hospitalData.nome_hospital}</h2>
                <button><img alt="Ícone de edição" className="editIcon" src={editIcon} /></button>
            </div>
            <div className="profileBox">

                <section className="ocupationSection">
                    <h2 className="sectionTitle">Ocupação atual</h2>
                    <div className="sectionContent">
                        <h2 className="ocupationData">{80}%</h2>
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
                    <Link to="/hospital/controle"><button>Atualizar Dados</button></Link>
                </section>
            </div>
        </div>
    );
}

export default HospitalPerfil;