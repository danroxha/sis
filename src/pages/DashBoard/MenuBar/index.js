import React from 'react';
import LabelIcon from '../../../components/LabelIcon';
import Container from '../../../components/Container';

import './style.css';

export default function MenuBar(){
    return(
        <nav className={'nav-bar-menu'}>
            <Container className="menu_section_primary">

                <LabelIcon icon="person_pin">UserName</LabelIcon>
                <LabelIcon icon="menu">Menu</LabelIcon>
            
            </Container>
            
            <Container className="menu_section_secundary">

                <LabelIcon icon="settings">UserName</LabelIcon>
                <LabelIcon icon="assessment">Menu</LabelIcon>
                <LabelIcon icon="event_note">Menu</LabelIcon>
                <LabelIcon icon="message">UserName</LabelIcon>
                <LabelIcon icon="power_settings_new">Menu</LabelIcon>
            
            </Container>

        </nav>
    );
}