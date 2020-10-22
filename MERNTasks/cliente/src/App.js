import React from 'react';
import './index.css';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Proyectostate from './context/proyectos/proyectoState';

function App() {
  return (
    <Proyectostate>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
    </Proyectostate>
  );
}

export default App;
