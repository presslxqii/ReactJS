import React, { Component } from 'react';
import style from '../css/AuthForm.module.css'
import {registration} from "../redux/actions"
import { connect } from 'react-redux';

class RegisterBox extends Component {

    constructor(props) {
      super(props);
      this.state = {
          accounts: this.props.accounts,
          isPasswordValid: false,
          isUsernameValid: false,
          isEmailValid: false,
          stylePassword: `${style.loginInput}`,
          styleUsername: `${style.loginInput}`,
          styleEmail: `${style.loginInput}`,
          username: '',
          password: '',
          email: ''
      };
    }

    handlePasswordChange(e){
        if (e.target.value.length === 0){
            this.setState({ stylePassword: `${style.loginInput} ${style.invalid}`, isPasswordValid: false });
            return
        }
        
        this.setState({ stylePassword: `${style.loginInput}`, isPasswordValid: true, password: e.target.value  });
    }

    handleUsernameChange(e){
        if (e.target.value.length === 0){
            this.setState({ styleUsername: `${style.loginInput} ${style.invalid}`, isUsernameValid: false  });
            return
        }

        this.setState({ styleUsername: `${style.loginInput}`, isUsernameValid: true, username: e.target.value });
    }
    
    handleEmailChange(e){
      if (e.target.value.length === 0){
          this.setState({ styleEmail: `${style.loginInput} ${style.invalid}`, isEmailValid: false });
          return
      }

      this.setState({ styleEmail: `${style.loginInput}`, isEmailValid: true, email: e.target.value });
  }
  
    submitRegister() {
      const {isPasswordValid, isUsernameValid, isEmailValid} = this.state
      if (!(isPasswordValid && isUsernameValid && isEmailValid)){
        return
      }
      debugger;

      const {username, password, email} = this.state
      this.props.handleRegistration({'login': username, 'password': password })
    }
  
    render() {
      return (
        <div className={style.mainContainer}>
          <div className={style.innerContainer}>
            <div className={style.box}>
              <div className={style.inputGroup}>
                <span className="fontawesome-user"></span>
                <input type="text"
                  name="username"
                  className={this.state.styleUsername}
                  placeholder="Username"
                  onChange={this.handleUsernameChange.bind(this)}/>
              </div>
              <div className={style.inputGroup}>
              <span className="fontawesome-envelope"></span>
                <input type="text" 
                name="email" 
                className={this.state.styleEmail}
                onChange={this.handleEmailChange.bind(this)}
                placeholder="Email"/>
              </div>
              <div className={style.inputGroup}>
                <span className="fontawesome-lock"></span>
                <input type="password" 
                name="password" 
                className={this.state.stylePassword}
                onChange={this.handlePasswordChange.bind(this)}  
                placeholder="Password"/>
              </div>
              <button type="button" className={style.loginBtn} onClick={this.submitRegister.bind(this)}>Register</button>
            </div>
          </div>
        </div>
      );
    }
  }

const mapStateToProps = (storeState) => ({
    accounts: storeState.accounts.get('accounts')
  })

const mapDispatchToProps = {
  handleRegistration:registration
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBox);