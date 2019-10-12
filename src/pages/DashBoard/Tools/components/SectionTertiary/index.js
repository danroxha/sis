import React, {useState} from 'react';
import Container from '../../../../../components/Container';
import ListCall from './elements/CallList';
import PatientList from './elements/PatientList';
import './style.css';


import data_fa from './data_fa';


const ToggleIcon = ({state, fn}) => {

    return (
        <i 
            onClick = {fn || (()=>'')}
            className="material-icons tiny _style-font-icon-toggle"
        >
            {(state) ? 'toggle_off' : 'toggle_on'}
        </i>
    );
    
}

const ToggleList = ({state, children, className}) => {
    return (
        <Container className={className || ''}>
            {(state) ? children[0] : children[1]}
        </Container>
    );
}

export default function SectionTertiary(){
    
    const titles = ["CHAMADA", "LISTA DE PACIENTES"];

    const [stateToggle, setStateToggle] = useState(true);
    const [titleContent, setTitleContent] = useState(titles[Number(!stateToggle)]);
    
    const stateChange = () => {
        if(stateToggle){
            setStateToggle(false);
            setTitleContent(titles[Number(stateToggle)]);
        
        }else{
            setStateToggle(true);
            setTitleContent(titles[Number(stateToggle)]);
        }
    }
    
    return(
        <Container id = "section-tertiary">
            <header>
                <span>{titleContent}</span>
                <ToggleIcon 
                    state = {stateToggle}
                    fn = {stateChange}
                />
            </header> 
            
            <ToggleList 
                state = {stateToggle}
                className = {"list-section-tertiary"}
            >    
                <ListCall data = {data_fa} />
                <PatientList data = {data_fa} />
            
            </ToggleList>
           
        </Container>
    );
}