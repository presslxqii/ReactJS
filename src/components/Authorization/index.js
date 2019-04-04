import React, {Component} from 'react';
import LoginBox from '../Authorization/Login/index'
import RegisterBox from '../Authorization/Register/index'
import AuthSwitchForm from '../Authorization/SwitchForm/index'
import {Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Route path='/' component={AuthSwitchForm}>
                    <Route path='/login' component={LoginBox}/>
                    <Route path='/registration' component={RegisterBox}/>
                </Route>
            </div>
        );
    }
}

export default App
