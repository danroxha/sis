import React from 'react';

export default function List({data, title}){
    console.log(data)
    return(
        <ul>
            <h2>{title}</h2>
            {
                (data)
                ? data.map((content, index) =>(
                    <li
                        key = {`${content.text} + ${index}`}
                    >
                        {content.text}
                    </li>    
                    )            
                )
                : ''
            }
        </ul>
    );   
}
