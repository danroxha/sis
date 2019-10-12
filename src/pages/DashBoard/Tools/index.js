import React from 'react';
import {Provider} from 'react-redux';
import store from '../../../store';
import Container from '../../../components/Container';
import SectionPrimary from './components/SectionPrimary';
import SectionSecondary from './components/SectionSecondary';
import SectionTertiary from './components/SectionTertiary';
import './style.css';


export default function Tools(){
    return(
        <main id={'tools-section'}>
            <Container id="tools-section-limit">
                <Provider store={store}>
                    <SectionPrimary />
                </Provider>
                <SectionSecondary />
            </Container>
            <SectionTertiary />
        </main>
    );
}