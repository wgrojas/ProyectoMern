import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import error from "../404.jpg";
import ListarProductos from "../productos/listarProductos";
import Menu from '../navbar/navbar';


export default function DashBoard() {
  return (

    <div>
    <Menu />
    <Router>
      <Switch>
        <Route exact path={['/']} component={Home} />
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
    </div>
  );
}
