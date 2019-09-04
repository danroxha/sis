import React, {useState} from 'react';
import './Form.css'



const Input = ({name, type, placeholder, value, id, className, label, func}) =>{
    
    const [styleFillInput, setStyleFillInput ] = useState("empty-style-input");
    
    const toggleStyleInput = () => (value === "" && styleFillInput !== "empty-style-input")
        ? setStyleFillInput("empty-style-input")
        : setStyleFillInput("fill-style-input");

    return (
        <label> 
            <input
                
                onChange = {func}
                onFocus = {toggleStyleInput}
                onBlur = {toggleStyleInput}
                name = {name} 
                type = {type || ''}
                placeholder = {placeholder || ''}
                value = {value || ''}
                    
            />
            <span className = {styleFillInput}>{label}</span>
        </label>
    );
}
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