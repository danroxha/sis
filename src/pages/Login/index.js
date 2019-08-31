import React from 'react';
import Header from './elements/Header';
import FormLogin from './elements/FormLogin'
import Help from './elements/Help'
import './index.css';
import {ViewTabs} from '../../components/Tab';

export default function Login(){
    return(
        <section id='page-login-index'>
            <main className='container-box'>
                <Header />
                <ViewTabs  className = 'mobile-style'>
                    <FormLogin enable name='login'/>
                    <Help   name='help'/>
                </ViewTabs>
            </main>
        </section>
    );
}
