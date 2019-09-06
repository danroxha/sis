import React from 'react';
import Search from '../../../components/Search/';

import './style/HeaderDash.css';

export default function HeaderDash(){

    const list = [
        {name: 'Paciente'},
        {name: 'Médico'},
        {name: 'Campanha'},
    ]

    return(
        <header
            id = {'header_dashboard'}
        >
            <Search
                placeholder = {'Pesquisar'}
                data = {list}
            />
        </header>
    );
}