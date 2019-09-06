import React from 'react';
import {Button} from '../../../../../components/Button';

export default function SectionPrimary(){
    return(
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
    );
}