import React, { Component } from 'react';
import style from '../css/AuthForm.module.css'
import { connect } from 'react-redux';

class LoginBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            accounts: this.props.accounts,
            isPasswordValid: false,
            isUsernameValid: false,
            stylePassword: `${style.loginInput}`,
            styleUsername: `${style.loginInput}`,
        };
    }

    submitLogin() {
        if (!(this.state.isPasswordValid && this.state.isUsernameValid)){
            return
        }
        var password = this.refs.password.value;
        var login = this.refs.username.value.toUpperCase()
        var isValid = this.props.accounts.some(account => account.login.toUpperCase() === login
         && account.password === password)
        debugger
        console.log(isValid)
    }

    handlePasswordChange(e){
        if (e.target.value.length === 0){
            this.setState({ stylePassword: `${style.loginInput} ${style.invalid}`, isPasswordValid: false });
            return
        }
        this.setState({ stylePassword: `${style.loginInput}`, isPasswordValid: true });
    }

    handleUsernameChange(e){
        if (e.target.value.length === 0){
            this.setState({ styleUsername: `${style.loginInput} ${style.invalid}`, isUsernameValid: false });
            return
        }
        this.setState({ styleUsername: `${style.loginInput}`, isUsernameValid: true });
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
                            ref="username"
                            onChange={this.handleUsernameChange.bind(this)}  />
                        </div>
                        <div className={style.inputGroup}>
                            <span className="fontawesome-lock"></span>
                            <input type="password" 
                            name="password" 
                            className={this.state.stylePassword} 
                            placeholder="Password" 
                            ref="password"
                            onChange={this.handlePasswordChange.bind(this)}    
                            />
                        </div>
                        <button className={style.loginBtn} type="button" onClick={this.submitLogin.bind(this)}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (storeState) => ({
    accounts: storeState.accounts.get('accounts')
  })

export default connect(mapStateToProps)(LoginBox);