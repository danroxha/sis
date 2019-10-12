import React from 'react';

export default function Container({children, id, className}){
    return(
        <section id = {id} className = {className}>
            {children}
        </section>
    );
}