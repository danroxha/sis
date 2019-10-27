import React from 'react';

import {Button} from '../../../../../components/Button';
import Container from '../../../../../components/Container';
import {Form, Input, Select} from '../../../../../components/Form';

import './style.css';

export default function SectionSecondary(){
    const list = [
        {name: 'Paciente'},
        {name: 'Medico'},
        {name: 'Campanha'},
    ]
   
    return(
        <Container 
            className = {'section-secondary-tools'}
        >
            <Form
                classNames = {''}
            >
                <span className = {'title-section-secondary'}>Agendar consulta</span>
                <Input
                    label='cpf' 
                    name='cpf' 
                    type='text' 
                />
                
                <Input 
                    label='Nome' 
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
        </Container>
    );
}