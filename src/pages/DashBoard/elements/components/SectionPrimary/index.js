import React from 'react';
import Button from '../../../../../components/Button';

import './SectionPrimary.css';

export default function SectionPrimary(){
    return(
        <section
            className = {'section-primary-tools'}
        >
                <Button>
                    <i className="large material-icons">group_add</i>
                    <p>Cadastrar Paciente</p>
                </Button>
                
                <Button>
                    <i className="material-icons tiny">perm_contact_calendar</i>
                    <p>Calendario Profissional</p>
                </Button>

                <Button>
                    <i className="large  material-icons">local_activity</i>
                    <p>Campanha</p>
                </Button>    
            </section>
    );
}