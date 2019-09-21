import React from 'react';
import Button from '../../../../../components/Button';

import './SectionPrimary.css';

export default function SectionPrimary(){
    return(
        <section
            className = {'section-primary-tools'}
        >
                <Button>
                    <i class="large material-icons">group_add</i>
                    <p>Cadastrar</p>
                </Button>
                
                <Button>
                    <i class="material-icons tiny">perm_contact_calendar</i>
                    <p>Calendario Profissional</p>
                </Button>

                <Button>
                   
                    <i class="large  material-icons">local_activity</i>
                    <p>Calendario Profissional</p>
                </Button>
            </section>
    );
}