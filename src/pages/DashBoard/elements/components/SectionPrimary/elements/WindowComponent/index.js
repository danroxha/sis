import React from 'react';
import {Form, Input} from '../../../../../../../components/Form';
import {ButtonClose} from '../../../../../../../components/Button';

import './WindowComponent.css';

export default function WindowComponent({children}){
    
    return(
        <section id="window-component">
            <header>
                <i className="button-close material-icons">add</i>
            </header>
            <>
                {children}
            </>
        </section>
    );
}
