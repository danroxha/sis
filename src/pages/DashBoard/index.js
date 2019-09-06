import React from 'react';
import HeaderDash from './elements/HeaderDash';
import MenuBar from './elements/MenuBar';
import Tools from './elements/Tools';

import './index.css';

export default function DashBoard(){
    return (
        <section id='page-dashboard-index'>
            <HeaderDash />
            <MenuBar />
            <Tools /> 
        </section>
    );
}