//library imports
import React from 'react';
import {Switch,Route, Redirect} from "react-router-dom";
//local imports

//Open Routes
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Acesso from '../pages/Acesso';
import Busca from '../pages/Busca';
import Dados from '../pages/Dados';

//Restrict Routes
import HospitalPerfil from '../pages/HospitalPerfil';



export default function Routes(){
    return (
        <>
            <OpenRoutes/>
            <RestrictRoutes/>
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
        </Switch>
    );
}

function RestrictRoutes(){
    return(
        <Switch>
            <Route exact path="/hospital" component={HospitalPerfil}/>
        </Switch>
    );
}
