import React from 'react';
import {Tabs} from '../../../../components/Tab';

import './style.css'

export default function Header(){
    return (
        <header id='header-login'>
            <img className='logo' src='#' alt=''/>
            <h1>Sistema Informatizado de Saúde</h1>    
            <Tabs className = 'nav-tabs-login'>
                {[
                    {name : 'login'},
                    {name : 'help'},
                ]}
            </Tabs>                
        </header>
    );
}
