import React from 'react';
import Header from './elements/Header';
import Form from './elements/Form'
import Help from './elements/Help'
import './index.css';
import {ViewTabs} from '../../components/Tab';

export default function(){
    return(
        <section id='page-login-index'>
            <main className='container-box'>
                <Header />
                <ViewTabs  >
                    <Form enable name='login'/>
                    <Help  name='help'/>
                </ViewTabs>
            </main>
        </section>
    );
}