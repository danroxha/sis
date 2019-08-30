import React from 'react';
import Header from './elements/Header';
import FormLogin from './elements/FormLogin'
import Help from './elements/Help'
import './index.css';
import {ViewTabs} from '../../components/Tab';

export default () =>
(
    <section id='page-login-index'>
        <main className='container-box'>
            <Header />
            <ViewTabs  >
                <FormLogin enable name='login'/>
                <Help   name='help'/>
            </ViewTabs>
        </main>
    </section>
);
