//library imports
import React,{useContext} from 'react';
import {Switch,Route, Redirect} from "react-router-dom";

//local imports
import AuthContext from '../contexts/auth';
//Open Routes
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Acesso from '../pages/Acesso';
import Busca from '../pages/Busca';
import Dados from '../pages/Dados';

//Restrict Routes
import HospitalPerfil from '../pages/HospitalPerfil';
import ControleOcupacao from '../pages/HospitalPerfil/ControleOcupacao';


export default function Routes(){

    const {signed} = useContext(AuthContext);

    return (
        <>
            {signed?<RestrictRoutes/>:<OpenRoutes/>}
        </>
    );
}


function OpenRoutes(){
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/acesso' component={Acesso}/>
            <Route exact path='/acesso/login' component={Login}/>
            <Route exact path='/acesso/cadastro' component={Cadastro}/>
            <Route exact path='/dados' component={Dados}/>
            <Route exact path='/busca' component={Busca}/>
            <Redirect to="/"/>
        </Switch>
    );
}

function RestrictRoutes(){
    return(
        <Switch>
            <Route exact path="/hospital" component={HospitalPerfil}/>
            <Route exact path="/hospital/controle" component={ControleOcupacao}/>
            <Route exact path='/dados' component={Dados}/>
            <Route exact path='/busca' component={Busca}/>
            <Route exact path='/' component={Home}/>
            <Redirect to="/hospital"/>
        </Switch>
    );
}
