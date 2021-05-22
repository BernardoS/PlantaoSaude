//library imports
import React from 'react'; 

//local imports
import './style.css'

const Login = () =>{
    return(
        <div className="box">
            <form>
                <div className="formContent">
                    <p>Login</p>
                    <input />
                    <p>Senha</p>
                    <input />
                </div>
                <div className="formFooter">
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;