import React, { Component } from 'react';
import LoginBox from './LoginBox'
import RegisterBox from './RegisterBox'
import style from '../css/AuthControl.module.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox(){
    this.setState({
      isRegisterOpen: false,
      isLoginOpen: true
    })
  }

  showRegisterBox(){
    this.setState({
      isRegisterOpen: true,
      isLoginOpen: false
    })
  }
  
  render() {
    return (
      <div>
        <div className={style.mainContainer}>
          <div className={style.container}>
            <div className={style.divGroup} onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
            <div className={style.divGroup} onClick={this.showRegisterBox.bind(this)}>
              Register
            </div>
          </div>
        </div>
        <div className="root-container">
          {this.state.isLoginOpen && <LoginBox/>}
          {this.state.isRegisterOpen && <RegisterBox/>}
        </div>
      </div>
    );
  }
}

export default App
