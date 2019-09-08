import React, {useState} from 'react';
import './Form.css'


const Input = ({name, type, placeholder, value, id, classNamesInput, label, func}) =>{
    
    const [styleFillInput, setStyleFillInput ] = useState("empty-style-input");
    
    const toggleStyleInput = () =>
        ((value === "" || value === undefined) && styleFillInput !== "empty-style-input")
        ? setStyleFillInput("empty-style-input")
        : setStyleFillInput("fill-style-input");

    return (
        <label
            className = {'-label-input-component'}
        > 
            <input
                className = {classNamesInput || '-input-default-style-component-global'}
                onChange = {func || (() => {})}
                onFocus = {toggleStyleInput}
                onBlur = {toggleStyleInput}
                name = {name || ''} 
                type = {type || 'text'}
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
        className = {classNames || ''}
        onSubmit = {func || (()=>{})}
        method = {method || 'POST'}
    >

        {children || ''}
    
    </form>
);

const Select = ({data, classNames, selected}) => (
    
    <select 
        className={ classNames ||'-select-input-default-style-component-global'}
    >
        {data 
            ? data.map((value, index) =>(
                <option
                    key = {`${value.name + index}`} 
                    value={`${value.name}`}
                >
                    {`${value.name}`}
                </option>
            ))
                : ''
        }
        </select>
);

export {Input, Form, Select,};