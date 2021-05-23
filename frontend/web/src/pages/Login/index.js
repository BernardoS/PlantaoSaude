//library imports
import React,{useContext, useState} from 'react'; 


//local imports
import './style.css';
import AuthContext from '../../contexts/auth';

export default function Login(){

    const [login,setLogin] = useState(null);
    const [senha,setSenha] = useState(null);

    const {signed,doLogin} = useContext(AuthContext);
    
    //console.log(signed);

    async function handleSignIn(){
        doLogin(login,senha)
        console.log('logar');
    }

    return(
        <div className="loginBox">
            <form >
                <div className="formContent">
                    <p>Login</p>
                    <input 
                        value={login}
                        onChange={(e)=>setLogin(e.target.value)}
                    />
                    <p>Senha</p>
                    <input 
                        type="password"
                        value={senha}
                        onChange={(e)=>setSenha(e.target.value)}
                    />
                </div>
                
            </form>
            <div className="formFooter">
                    <button onClick={()=>handleSignIn()}>Entrar</button>
                </div>
        </div>
    );
}

