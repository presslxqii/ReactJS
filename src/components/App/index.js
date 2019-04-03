import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch, Router} from 'react-router-dom'
import MainForm from '../MainForm'
import Authorization from '../Authorization/index'
import AuthSwitchForm from "../Authorization/SwitchForm";
import LoginBox from "../Authorization/Login";
import RegisterBox from "../Authorization/Register";

class App extends Component {
  render() {
    return (
        <Router>
            <Route path='/' component={AuthSwitchForm}>
                <Route path='/login' component={LoginBox}/>
                <Route path='/registration' component={RegisterBox}/>
            </Route>
          <Authorization/>
          <Route path='/main' component={MainForm}/>
        </Router>
    );
  }
}

export default App
