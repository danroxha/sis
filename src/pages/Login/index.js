import React from 'react';
import Header from './components/Header/';
import FormLogin from './components/FormLogin/'
import Help from './components/Help/'
import {ViewTabs} from '../../components/Tab';

import './style.css';

export default function Login(){
    return(
        <section id='page-login-index'>
            <main className='container-box'>
                <Header />
                <ViewTabs  className = 'mobile-style'>
                    <FormLogin enable name='login'/>
                    <Help name='help'/>
                </ViewTabs>
            </main>
        </section>
    );
}
