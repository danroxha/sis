import React from 'react';
import {Input, Form} from '../../../components/Form';
import {Button} from '../../../components/Button';

import './style/Tools.css';

export default function Tools(){
    return(
        <main id={'tools-section'}>
            <section>
                <Button>
                    <img src="#" alt=""/>
                    <span>Cadastrar Paciente</span>
                </Button>
                
                <Button>
                    <img src="#" alt=""/>
                    <span>Calendario Profissional</span>
                </Button>

                <Button>
                    <img src="#" alt=""/>
                    <span>Campanhas</span>
                </Button>
            </section>
            <section>
                <Form>
                    <Input label='cpf'/>
                    <Input label='nome'/>
                    <Button>Pesquisar</Button>
                </Form>
            </section>
            <section>
                <Form>
                    <Input label='cpf'/>
                    <Input label='nome'/>
                    <Button>Pesquisar</Button>
                </Form>
            </section>
        </main>
    );
}