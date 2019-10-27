import React, {useState} from 'react';
import LabelIcon from '../../../components/LabelIcon';
import Container from '../../../components/Container';

import './style.css';

export default function MenuBar(){
    
    const [toogleState, setToogleState] = useState(false);
    const [toogleClass, setToogleClass] = useState(
        ['hidden_menu',
         'hidden_menu_span',
        ]
    );
    
    const toogleMenu = () => {    
        const class_change = [
            'hidden_menu', 
            'hidden_menu_span',
        ];

        setToogleState(!toogleState);
        setToogleClass(class_change);
        
        if(toogleState){
            setToogleState(false);
            return;    
        }else{
            
            setToogleState(true);
            setToogleClass(['', '']);
        }
        
    }

    return(
        <nav onFocus={toogleMenu}className={`${toogleClass[0]} nav-bar-menu`}>
            <Container 
                className={`${toogleClass[0]} menu_section_primary`}
            >
                <LabelIcon className='label_icon' icon='person_pin'>
                    <span className = {`${toogleClass[1]}`}>User</span>
                </LabelIcon>
                <LabelIcon 
                    onClick = {toogleMenu}
                    className='label_icon' icon='menu'
                />

            </Container>
            <Container 
                className= {`${toogleClass[0]} menu_section_secundary`}
            >
                <LabelIcon 
                    className='label_icon animation_label_icon' icon='settings'
                >
                    <span className={`${toogleClass[1]}`}>Configuração</span>
                </LabelIcon>
                <LabelIcon 
                    className='label_icon animation_label_icon' icon='assessment'
                >
                    <span className={`${toogleClass[1]}`}>Estatísticas</span>
                </LabelIcon>
                <LabelIcon 
                    className='label_icon animation_label_icon' icon='event_note'
                >
                    <span className={`${toogleClass[1]}`}>Lembretes</span>
                </LabelIcon>
                <LabelIcon 
                    className='label_icon animation_label_icon' icon='message'
                >
                    <span className={`${toogleClass[1]}`}>Messagens</span>
                </LabelIcon>
                <LabelIcon 
                    className='label_icon' icon='power_settings_new'
                >
                    <span className={`${toogleClass[1]}`}>Sair</span>
                </LabelIcon>
            </Container>
            
        </nav>
    );
}
