import React from 'react';


const List = ({data}) => (
    <li>
        {data.map((content, index) => {
            return(
                <ul>
                    <li>{`${content.nome}`}</li>
                    <li>{`CONSULTÓRIO: ${content.consultorio}`}</li>
                    <li>{`ESPECIALIZAÇÃO: ${content.especializacao}`}</li>
                    <li>{`PRIORIDADE: ${content.prioridade}`}</li>
                </ul>
                
            );
        })}
    </li>
);



export {List};

/*
        <ul>
            <h2>{title}</h2>
            {
                (data)
                ? data.map((content, index) =>(
                    <li
                        key = {`${content.text} + ${index}`}
                    >
                        {content.text}
                    </ul>    
                    )            
                )
                : ''
            }
        </ul>
        */
