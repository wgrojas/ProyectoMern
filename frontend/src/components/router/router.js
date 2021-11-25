import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';

import login from '../login/login';
import Productos from '../productos/index';
import Home from '../pages/home/home';
import error from "../404.jpg";
import ListarProductos from "../productos/listarProductos";



export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/']} component={Home} />
        <Route exact path={['/login']} component={login} />
        <PrivateRoute exact path="/panel" component={Productos} />
        <Route exact path={["/productos"]} component={ListarProductos}/>
        {/* <PrivateRoute exact path={["/crearProductos"]} component={CrearProducto}/> */}
        <Route
          path={'*'}
          component={() => (
            // <h1 style={{ marginTop: 300 }}>
            <img src={error} alt="404"/>
            //   404
            //   <br />
            //   Pagina no encontrada
            // </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
