import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../login/loginM';
import DashBoard from './dashboard.router'
import Productos from '../productos/index';
import PrivateRoute from '../auth/privateroute';
import MenuCrud from '../navbar/nav';
import Registro from '../registro/registro'

export default function AppRouter() {

  return (
    <div>
    <MenuCrud/>
    <Router>
      <Switch>
        <Route exact path={['/registro']} component={Registro} />
        <Route exact path={['/login']} component={Login} />
        <PrivateRoute exact path="/panel" component={Productos} />
        <Route exact path="/*" component={DashBoard} />
      
      </Switch>
    </Router>
</div>

  );
}
