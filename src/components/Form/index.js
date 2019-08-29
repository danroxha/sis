import React from 'react';
import './Form.css'

const Input = ({name, type, placeholder, value, id, className, label, func}) => 
(
    <label>
        {label}
        <input
            onChange = {func}
            name = {name} 
            type = {type || ''}
            placeholder = {placeholder || ''}
            value = {value || ''}
            
        />
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