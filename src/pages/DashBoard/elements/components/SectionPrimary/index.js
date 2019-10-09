import React, {useState, useEffect} from 'react';
import Button from '../../../../../components/Button';
import RegisterPacient from './RegisterPatient';
import ProfissionalCalendar from './ProfessionalCalendar';
import Campaigns from './Campaigns';

import './SectionPrimary.css';


export default function SectionPrimary(){
    
    const [showComponent, setShowComponent] = useState('');
    const [closedWindow, setClosedWindow] = useState(true);
    
    
    const openOrCloseTool = (component = "") => () => {
        
        setClosedWindow(!closedWindow);

        if(closedWindow){
            setShowComponent(
                <div id="showTool">
                    {component}
                </div>
            );
            return;
        }

        setClosedWindow("");
        

    };
    

    return(
        <section
            className = {'section-primary-tools'}
        >
            <Button onClick = {openOrCloseTool(< RegisterPacient />)} >
                <i className="large material-icons">group_add</i>
                <p>Cadastrar Paciente</p>
            </Button>
                
            <Button onClick = {openOrCloseTool(< ProfissionalCalendar />)}>
                <i className="material-icons tiny">perm_contact_calendar</i>
                <p>Calendario Profissional</p>
            </Button>

            <Button onClick = {openOrCloseTool(< Campaigns />)}>
                <i className="large  material-icons">local_activity</i>
                <p>Campanha</p>
            </Button>

            {showComponent}
        
        </section>
    );
}
