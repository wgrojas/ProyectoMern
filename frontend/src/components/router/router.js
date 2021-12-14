import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../auth/privateroute';
import Productos from'../productos/index'
import DashBoard from './dashBoard'


export default function AppRouter() {

  return (
    <div>
    
    <Router>
      <Switch>
        
        <PrivateRoute exact path='/panel'component={Productos} />
        <Route exact path="/*" component={DashBoard} />
      
        
      </Switch>

    </Router>

    </div>

  );
}
