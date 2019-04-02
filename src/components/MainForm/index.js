import React from 'react';
import Header from './Header/index'
import Sidebar from './Sidebar/index'
import Profile from './Profile/index'
import style from './style.module.scss'

export default () => {
    return (
        <div className={style.wrapper}>
            <Header className={style.header}/>
            <Sidebar className={style.sidebar}/>
            <Profile className={style.profile}/>
        </div>
    );
}
