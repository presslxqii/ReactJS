import React from 'react';
import {NavLink} from 'react-router-dom'
import style from './style.module.scss'

export default () => {
    return (
        <div className={style.sidebar}>
            <div>
                <NavLink to='/profile'  activeClassName={style.active}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/messages'  activeClassName={style.active}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to='/settings'  activeClassName={style.active}>
                    Settings
                </NavLink>
            </div>
        </div>
    );
}