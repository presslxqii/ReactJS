import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.module.scss'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
