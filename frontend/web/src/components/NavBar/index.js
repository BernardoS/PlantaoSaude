import React,{useState} from 'react';
import logoSymbol from '../../images/Logo.png';
import logoPhrase from '../../images/PlantaoSaude.png';
import './style.css';

const NavBar = () =>{
    const [signed,setSigned] = useState(false);
    const navegaAcesso=()=>{
        !signed?setSigned(true):setSigned(false);
    }
    return(
        <div className="bar">
            <div className="logo">
                <img alt="Símbolo da Plantão Saúde" className="logoSymbol" src={logoSymbol}/>
                <img alt="Frase Plantão Saúde" className="logoPhrase" src={logoPhrase}/>
            </div>
            <div className="menu">
                <button>Estatísticas da cidade</button>
                {signed?<button onClick={()=>navegaAcesso()}>Acesso Hospital</button>:<button onClick={()=>navegaAcesso()}>Sair</button>}        
            </div>
        </div>
    )
}

export default NavBar;