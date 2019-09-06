import React from 'react';

import SectionPrimary from './components/SectionPrimary';
import SectionSecondary from './components/SectionSecondary';
import SectionTertiary from './components/SectionTertiary';

import './style/Tools.css';

export default function Tools(){
    return(
        <main id={'tools-section'}>
            <SectionPrimary />
            <SectionSecondary />
            <SectionTertiary />
        </main>
    );
}