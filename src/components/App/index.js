import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import MainForm from '../MainForm'
import Authorization from '../Authorization/index'
import AuthSwitchForm from "../Authorization/SwitchForm";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Authorization/>
          <Route path='/main' component={MainForm}/>
        </BrowserRouter>
    );
  }
}

export default App
