import React from 'react';

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

const ListCall = ({data}) =>(
    <ul>
        {
            data.map((content, index_main) => 
                <li
                    key = {`${index_main}_lists_`}
                >
                    <ul
                       className = {`list-content ${(index_main === 0) ? '_first-children' : '_next-children'}`}
                    >
                        {Object.keys(content).map(
                            (values,index_children) => 
                                <li
                                    key = {`${index_children}_content_`}
                                    /**
                                     * Class inserida para simbolizar a o estado do paciente chamado
                                     * 
                                     * LEGENDA
                                     * 
                                     * VERDE: PACIENTE CHAMADO
                                     * AMARELO: PACIENTE FOI ATENDIDO
                                     * VERMELHO: PACIENTE FOI CHAMADO E NÃO COMPARECEU NA CONSULTA ATÉ O MOMENTO
                                     * CINZA: PACIENTE NÃO COMPARECEU NA CONSULTA.
                                     * 
                                     */
                                    className = {
                                        (index_main === 0 && index_children === 0)
                                            ? '_green_circle_status'
                                            : (index_children === 0) 
                                                ? '_yellow_circle_status'
                                                : ''
                                        }
                                >
                                
                                    {   
                                        (index_main === 0)
                                        ? `${(String(values) !== 'nome')? `${String(values).capitalize()} :` : '' } ${content[String(values)]}`
                                        : (String(values) === 'nome')? `${content[String(values)]}`: ''
                                    }
                                </li>
                            
                        )}
                    </ul>
                </li>
            )
        }
    </ul>
);

export default ListCall;