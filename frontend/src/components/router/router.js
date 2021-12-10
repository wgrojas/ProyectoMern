import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';
import Productos from'../productos/index'
import DashBoard from './dashBoard'
import ListarProductos from "../productos/listarProductos";

export default function AppRouter() {

  return (
    <div>
    
    <Router>
      <Switch>
        
        <PrivateRoute exact path='/panel'component={Productos} />
        <PrivateRoute exact path={['/productos']} component={ListarProductos} />
        <Route exact path="/*" component={DashBoard} />
      
        
      </Switch>

    </Router>

    </div>

  );
}
