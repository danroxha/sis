import React from 'react';
import {Tabs} from '../../../components/Tab';

import './style/Header.css'
import './style/Tabs.css'

export default () =>
(
    <header id='header-login'>
        <img className='logo' src='#' alt=''/>
        <h1>Sistema Informatizado de Saúde.</h1>    
        <Tabs className = 'nav-tabs-login'>
            {[
                {name : 'login'},
                {name : 'help'},
            ]}
        </Tabs>                
    </header>
);
