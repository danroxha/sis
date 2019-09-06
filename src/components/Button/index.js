import React from 'react';
import './Button.css';

const Button = ({children, type, classNames}) =>(
    <button 
        className={`buttons ${classNames}`}
        type={type || ''}
    >
        {children || 'butão'}
    </button>   
);


const ButtonLink = ({children, type, classNames, href}) => (
    <a 
            href = {href || ''} 
            className = {'link-button'}
    >
        <button 
            className={`buttons ${classNames}`}
            type={type || 'text'}
        >
            {children || 'butão'}
        </button>
    </a>
)

export {Button, ButtonLink};
