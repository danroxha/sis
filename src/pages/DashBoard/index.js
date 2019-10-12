import React from 'react';
import Container from '../../components/Container';
import HeaderDash from './HeaderDash';
import MenuBar from './MenuBar';
import Tools from './Tools';
import './index.css';

export default function DashBoard(){
    return (
        <Container id='page-dashboard-index'>  
            <HeaderDash />
            <MenuBar />
            <Tools />
        </Container> 
    );
}