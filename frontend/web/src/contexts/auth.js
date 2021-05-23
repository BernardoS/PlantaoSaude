//library imports
import React,{createContext,useEffect,useState} from 'react';

//local imports
import SignIn from '../service/auth';

const AuthContext = createContext();

export const AuthProvider=({children})=>{

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        function loadStoragedData(){
            const stotragedUser = localStorage.getItem('user');
            if(stotragedUser){
                setUser(JSON.parse(stotragedUser));
            }
        }
        

        loadStoragedData();
    },[])

    async function doLogin(){
        const response = await SignIn();
        setUser(response.user);
        localStorage.setItem('user',JSON.stringify(response.user));
        console.log(response);
    }

    async function doLogout(){
        localStorage.clear();
        setUser(null);
    }


    return(
        <AuthContext.Provider 
            value={{
                signed:Boolean(user),
                user:{},
                doLogin,
                doLogout,
                loading,
                setLoading
                }}>

            {children}
            
        </AuthContext.Provider>
    );
}
export  default AuthContext;