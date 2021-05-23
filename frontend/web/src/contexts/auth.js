//library imports
import React,{createContext,useEffect,useState} from 'react';

//local imports
import {logarHospital} from '../service/api';

const AuthContext = createContext();

export const AuthProvider=({children})=>{

    const [hospitalData,setHospitalData] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        function loadStoragedData(){
            const stotragedHospital = localStorage.getItem('hospitalData');
            if(stotragedHospital){
                setHospitalData(JSON.parse(stotragedHospital));
            }
        }
        

        loadStoragedData();
    },[])

    async function doLogin(login,senha){
        const {data} = await logarHospital(login,senha);
        setHospitalData(data.response);
        localStorage.setItem('hospitalData',JSON.stringify(data.response));
    }

    async function doLogout(){
        localStorage.clear();
        setHospitalData(null);
    }




    return(
        <AuthContext.Provider 
            value={{
                signed:Boolean(hospitalData),
                doLogin,
                doLogout,
                loading,
                setLoading,
                }}>

            {children}
            
        </AuthContext.Provider>
    );
}
export  default AuthContext;