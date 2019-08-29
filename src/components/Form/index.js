import React from 'react';
import './Form.css'

const Input = ({name, type, placeholder, value, id, className, label, func}) => 
(
    <label for>
        {label}
        <input
            onChange = {func}
            className = {className || ''} 
            type = {type || ''}
            placeholder = {placeholder || ''}
            value = {value || ''}
            
        />
    </label>
);
const Form = ({children}) =>
(
    <form>
        {children}
    </form>
);

export {Input, Form};