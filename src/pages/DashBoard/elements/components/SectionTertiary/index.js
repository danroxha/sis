import React from 'react';

//import {List} from '../../../../../components/List';

const List = ({data, title}) =>(
    <main>
        <h2>{title || ''}</h2>
        <ul>
            {
                data.map(content => 
                    <li>
                        <ul>
                            {Object.keys(content).map(
                                values => <li>{content[String(values)]}</li>
                                    
                            )}
                        </ul>
                    </li>
                )
            }
        </ul>
    </main>
);


export default function SectionTertiary(){

    let dadosPaciente = [
        {
            nome : 'ASTROGILDO MAGINES SANTYS',
            consultorio : 'A-18',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'MAGINES SANTYS SILVA',
            consultorio : 'A-19',
            especializacao: 'PEDIATRA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'SANTYS ASTROGILDO ',
            consultorio : 'A-20',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
    ]

    return(
        <section>
            <List
                title = {'CHAMADAS'}
                data = {dadosPaciente}
            />
        </section>
    );
}