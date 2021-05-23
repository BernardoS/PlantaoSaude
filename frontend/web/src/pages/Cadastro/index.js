//library imports
import React, { useState } from 'react';
import FileBase from 'react-file-base64';

//local imports
import './style.css';
import {createHospital} from '../../service/api';

export default function Cadastro(){

    const [login,setLogin] = useState(null);
    const [senha,setSenha] = useState(null);
    const [nome,setNome] = useState(null);
    const [foto,setFoto] = useState(null);
    const [endereco,setEndereco] = useState(null);
    const [cep,setCep] = useState(null);
    const [telefone,setTelefone] = useState(null);
    const [email,setEmail] = useState(null);

    async function handleSubmit(){
        console.log('teste')
        const {data} = await createHospital({
            nome_hospital:nome, 
            login:login,
            email:email,
            senha:senha,
            cep:cep,
            endereco: endereco,
            telefone: telefone,
            foto:foto
        });
        console.log(data);
    }

    return(
        <div className="cadBox">
            <h1 className="pageTitle">Cadastro de unidade de saúde</h1>
            <form onSubmit={handleSubmit} className="registerForm">
                <section className="authSection">
                    <h2>Autenticação</h2>
                        <p>Login</p>
                        <input 
                            value={login}
                            onChange={(e)=>setLogin(e.target.value)}
                            type="text"
                        />
                        <p>Senha</p>
                        <input 
                            value={senha}
                            onChange={(e)=>setSenha(e.target.value)}
                            type="password"
                        />
                </section>
                <section className="indentificationSection">
                    <h2>Identificação</h2>
                        <p>Nome</p>
                        <input
                            value={nome}
                            onChange={(e)=>setNome(e.target.value)}
                        />
                        <p>Foto</p>
                        <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=>setFoto(base64)}
                    />
                </section>
                
                <section className="locationContactSection">
                    <div className="locationSection">
                        <h2>Localização</h2>
                            <p>Endereço</p>
                            <input 
                                value={endereco}
                                onChange={(e)=>setEndereco(e.target.value)}
                            />
                            <p>CEP</p>
                            <input
                                value={cep}
                                onChange={(e)=>setCep(e.target.value)}
                            />
                    </div>
                    <div className="contactSection">
                        <h2>Contato</h2>
                            <p>Telefone</p>
                            <input 
                                value={telefone}
                                onChange={(e)=>setTelefone(e.target.value)}
                            />
                            <p>Email</p>
                            <input
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                    </div>  
                </section>
                <section className="buttonSection">
                    <button type="submit" className="finishButton">Finalizar</button>
                </section>
            </form>
                
        </div>
    );
}
