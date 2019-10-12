import React from 'react';


const PatientList = ({data}) => (
<ul>
        {
            data.map((content, index_main) => 
                <li
                    key = {`${index_main}_lists_`}
                >
                    <ul
                       className = {`list-content _gray_circle_status`}
                    >
                        <li>{content['nome']}</li>
                    </ul>
                </li>
            )
        }
    </ul>
);

export default PatientList;