import React from 'react';
import {NavLink} from 'react-router-dom'

export default () => {
    return (
        <div>
            <NavLink to='/profile'>
                Profile
            </NavLink>
            <NavLink to='/messages'>
                Messages
            </NavLink>
            <NavLink to='/settings'>
                Settings
            </NavLink>
        </div>
    );
}