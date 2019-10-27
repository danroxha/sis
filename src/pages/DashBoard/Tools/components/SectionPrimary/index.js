import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../../../../components/Button';
import Container from '../../../../../components/Container';
import RegisterPacient from './RegisterPatient';
import ProfissionalCalendar from './ProfessionalCalendar';
import Campaigns from './Campaigns';
import './style.css';


export default function SectionPrimary(){
    
    const [showComponentOpen, setShowComponentOpen] = useState('');
    const closedWindow = useSelector(state => state.data);
    const dispatch = useDispatch();

    const showTool = (open) => open ? showComponentOpen: '';
    const openOrCloseTool = (component = "") => () => {
        
        dispatch({type : 'CHANGE_STATE_WINDOW'});
        
        setShowComponentOpen(
            <Container id="showTool">
                {component}
            </Container>
        );

    };
   
    return(
        <Container
            className = {'section-primary-tools'}
        >
                <Button onClick = {openOrCloseTool(< RegisterPacient />)} >
                    <i className="large material-icons">group_add</i>
                    <p>Cadastrar Paciente</p>
                </Button>
                    
                <Button onClick = {openOrCloseTool(< ProfissionalCalendar />)}>
                    <i className="material-icons tiny">perm_contact_calendar</i>
                    <p>Calendário Profissional</p>
                </Button>

                <Button onClick = {openOrCloseTool(< Campaigns />)}>
                    <i className="large  material-icons">local_activity</i>
                    <p>Campanha</p>
                </Button>
    
                {showTool(closedWindow)}
        </Container>
    );
}
