import React from 'react';
import './Button.css';

const Button = ({children, type, classNames,onClick}) =>(
    <button 
        className={`buttons ${classNames || ''}`}
        type={type || ''}
        onClick = {onClick}
    >
        {children || 'butão'}
    </button>   
);

const ButtonClose = ({className}) => (
   <i className = {`${className} tiny material-icons`}>close</i> 
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
);

export default Button;
export {Button, ButtonLink, ButtonClose};
