import React from 'react';
import {Button} from '../../../../../components/Button';
import {Form, Input, Select} from '../../../../../components/Form';

import './SectionSecondary.css';

export default function SectionSecondary(){
    const list = [
        {name: 'PACIENTE'},
        {name: 'MEDICO'},
        {name: 'CAMPANHA'},
    ]
    /*
    
                */

    return(
        <section 
            className = {'section-secondary-tools'}
        >
            <Form
                classNames = {''}
            >
                <Input
                    label='CPF' 
                    name='cpf' 
                    type='text' 
                />
                
                <Input 
                    label='name' 
                    name='name' 
                    type='text' 
                />

                <Select data = {list}/>
                
                <Button 
                    type='submit'
                    classNames='button-submit'
                >
                    Pesquisar
                </Button>
                
            </Form>
        </section>
    );
}