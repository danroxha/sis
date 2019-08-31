import React from 'react';
import './Button.css';

export default function Button({children, type, classNames}){
    return( 
        <button 
            className={`buttons ${classNames}`}
            type={type || 'text'}
        >
            {children || 'butão'}
        </button>
    );
}
