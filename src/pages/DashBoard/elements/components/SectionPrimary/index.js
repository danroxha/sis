import React from 'react';
import Button from '../../../../../components/Button';

export default function SectionPrimary(){
    return(
        <section
            className = {'section-primary-tools'}
        >
                <Button>
                    <span>Cadastrar Paciente</span>
                </Button>
                
                <Button>
                    <span>Calendario Profissional</span>
                </Button>

                <Button>
                    <span>Campanhas</span>
                </Button>
            </section>
    );
}