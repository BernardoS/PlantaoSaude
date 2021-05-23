//library imports
import React from 'react';
import FileInputComponent from 'react-file-input-previews-base64';

//local imports
import './style.css';

export default function Cadastro(){
    return(
        <div className="cadBox">
            <h1 className="pageTitle">Cadastro de unidade de saúde</h1>
            <form className="registerForm">
                <section className="authSection">
                    <h2>Autenticação</h2>
                        <p>Login</p>
                        <input />
                        <p>Senha</p>
                        <input/>
                </section>
                <section className="indentificationSection">
                    <h2>Identificação</h2>
                        <p>Nome</p>
                        <input/>
                        <p>Foto</p>
                        <FileInputComponent
                            labelText=""
                            labelStyle={{
                                fontSize:25
                            }}
                            multiple={true}
                            callbackFunction={(file_arr)=>{console.log(file_arr)}}
                            accept="image/*" 
                            />
                </section>
                
                <section className="locationContactSection">
                    <div className="locationSection">
                        <h2>Localização</h2>
                            <p>Endereço</p>
                            <input />
                            <p>CEP</p>
                            <input/>
                    </div>
                    <div className="contactSection">
                        <h2>Contato</h2>
                            <p>Telefone</p>
                            <input />
                            <p>Email</p>
                            <input/>
                    </div>  
                </section>
                <section className="buttonSection">
                    <button className="finishButton">Finalizar</button>
                </section>
            </form>
        </div>
    );
}
