import React from 'react';

//import {List} from '../../../../../components/List';

import './SectionTertiary.css';

const List = ({data, title, id}) =>(
    <main id = {id}>
        <header>
            <span>{title || ''}</span>
        </header>
        <section>  
            <ul>
                {
                    data.map((content, index_main) => 
                        <li
                            key = {`${index_main}_lists_${title}`}
                            className = {`list-content ${(index_main == 0) ? 'fist-children' : ''}`}
                        >
                            <ul>
                                {Object.keys(content).map(
                                    (values,index_children) => 
                                        <li
                                            key = {`${index_children}_content_${title}`}
                                        >
                                            {content[String(values)]}
                                        </li>
                                        
                                )}
                            </ul>
                        </li>
                    )
                }
            </ul>
        </section>
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
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
            especializacao: 'DENTISTA',
            prioridade : 'REGULAR', 
        },
        {
            nome : 'AGNALDO  SANTYS',
            consultorio : 'A-22',
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
                id = {'list-section-tertiary'}
                title = {'CHAMADAS'}
                data = {dadosPaciente}
            />
        </section>
    );
}