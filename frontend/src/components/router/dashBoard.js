import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import error from "../404.jpg";
import Menu from '../navbar/navbar';
import Registro from '../registro/registro'
import Login from '../login/loginM'


export default function DashBoard() {

  return (

    <div>

    <Menu />
    
      <Switch>
        <Route exact path={['/']} component={Home} />
        <Route exact path={['/registro']} component={Registro} />
        <Route exact path={['/login']} component={Login} />

       
        {/* <PrivateRoute exact path={["/crearProductos"]} component={CrearProducto}/> */}
        <Route
          path={'*'}
          component={() => (
            // <h1 style={{ marginTop: 300 }}>
             <img style={{ marginTop: 200 }} src={error} alt="404"/> 
            //  404
            //  <br />
            // Pagina no encontrada
            // </h1>
          )}
        />
      </Switch>
    

    </div>
  );
}
