import React from 'react';

//import {List} from '../../../../../components/List';

import data_fa from './data_fa';

import './SectionTertiary.css';

const ListCall = ({data}) =>(
    <ul>
        {
            data.map((content, index_main) => 
                <li
                    key = {`${index_main}_lists_`}
                >
                    <ul
                        className = {`list-content ${(index_main === 0) ? 'fist-children' : ''}`}
                    >
                        {Object.keys(content).map(
                            (values,index_children) => 
                                <li
                                    key = {`${index_children}_content_`}
                                >
                                    {console.log(values)}
                                    {`${String(values).toLocaleUpperCase()}: ${content[String(values)]}`}
                                </li>
                                        
                        )}
                    </ul>
                </li>
            )
        }
    </ul>
);


export default function SectionTertiary(){
    return(
        <section id = "section-tertiary">
            <header>
                    <span>CHAMADAS</span>
            </header> 
            <section className="list-section-tertiary">
                    
                <ListCall
                    data = {data_fa}
                />
            </section>
        </section>
    );
}