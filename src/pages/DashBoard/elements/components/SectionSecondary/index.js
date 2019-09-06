import React from 'react';
import {Button} from '../../../../../components/Button';
import {Form, Input} from '../../../../../components/Form';

export default function SectionSecondary(){
    return(
        <section>
            <Form>
                <Input label='cpf'/>
                <Input label='nome'/>
                <Button>Pesquisar</Button>
            </Form>
        </section>
    );
}