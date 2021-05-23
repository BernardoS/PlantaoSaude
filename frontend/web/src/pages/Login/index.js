//library imports
import React,{useContext} from 'react'; 


//local imports
import './style.css';
import AuthContext from '../../contexts/auth';

export default function Login(){

    const {signed,doLogin} = useContext(AuthContext);
    
    console.log(signed);

    async function handleSignIn(){
        doLogin()
        console.log('logar');
    }

    return(
        <div className="loginBox">
            <form>
                <div className="formContent">
                    <p>Login</p>
                    <input />
                    <p>Senha</p>
                    <input />
                </div>
            </form>
                <div className="formFooter">
                    <button onClick={()=>{handleSignIn()}}>Entrar</button>
                </div>
        </div>
    );
}

