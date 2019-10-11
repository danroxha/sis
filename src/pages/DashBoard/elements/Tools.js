import React from 'react';
import {Provider} from 'react-redux';
import store from '../../../store';
import SectionPrimary from './components/SectionPrimary';
import SectionSecondary from './components/SectionSecondary';
import SectionTertiary from './components/SectionTertiary';
import './style/Tools.css';


export default function Tools(){
    return(
        <main id={'tools-section'}>
            <div id="tools-section-limit">
                <Provider store={store}>
                    <SectionPrimary />
                </Provider>
                <SectionSecondary />
            </div>
            <SectionTertiary />
        </main>
    );
}