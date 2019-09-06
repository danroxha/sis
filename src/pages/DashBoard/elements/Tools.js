import React from 'react';
import {Input, Form} from '../../../components/Form';

export default function Tools(){
    return(
        <main>
            <section>
                <div>Cadastrar Paciente</div>
                <div>Calendario Profissional</div>
                <div>Campanhas</div>
            </section>
            <section>
                <Form>
                    <Input />
                    <Input />
                </Form>
            </section>
            <section>
            </section>
        </main>
    );
}