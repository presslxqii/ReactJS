import React from 'react';
import style from './AuthSwitchForm.module.scss'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.divGroup}>
                    <NavLink to='/auth/login' activeClassName={style.active}>
                        Login
                     </NavLink>
                </div>
                <div className={style.divGroup} >
                    <NavLink to='/auth/registration' activeClassName={style.active}>
                        Registration
                     </NavLink>
                </div>
            </div>
        </div>
    );
}