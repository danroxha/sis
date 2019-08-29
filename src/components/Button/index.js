import React from 'react';
import './Button.css';

export default ({children, type, classNames}) =>
( 
    <button 
        className={`buttons ${classNames}`}
        type={type || 'text'}
    >
        {children || 'butão'}
    </button>
);
