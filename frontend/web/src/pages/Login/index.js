//library imports
import React,{useContext} from 'react'; 


//local imports
import './style.css';
import authService from '../../service/auth';
import AuthContext from '../../contexts/auth';

export default function Login(){

    const {signed} = useContext(AuthContext);
    
    console.log(signed);

    async function handleSignIn(){
        const response = await authService();
        console.log(response);
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

