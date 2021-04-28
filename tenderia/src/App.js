import React from 'react';
import Login from './LoginWeb/Login.js';
import Signup from './SignUpWeb/Signup.js';
import Usuario from './Inicio-Usuario/Usuario.js';
import './App.css';
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
import {AuthProvider}  from './utils/Auth.js';
import PrivateRoute from './utils/PrivateRoute.js';
import Landing from './Landing/Landing.js';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={withRouter(Landing)}></Route>
            <Route exact path="/login" component={withRouter(Login)}>
            </Route>
            <Route exact path="/sign-up" component={withRouter(Signup)}>
            </Route>
            <PrivateRoute exact path="/user" component={withRouter(Usuario)}>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
