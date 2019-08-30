import React from 'react';
import './Form.css'



const Input = ({name, type, placeholder, value, id, className, label, func}) =>
(
    <label> 
        <input
            onChange = {func}
            name = {name} 
            type = {type || ''}
            placeholder = {placeholder || ''}
            value = {value || ''}
                
        />
        <span>{label}</span>
    </label>
);

const Form = ({classNames ,func, method, children}) =>
(
    <form
        className = {`${classNames}`} 
        onSubmit = {func || ''}
        method = {method || ''}
    >
        {children}
    </form>
);

export {Input, Form};