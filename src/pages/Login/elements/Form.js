import React, {useState} from 'react';
import Button from '../../../components/Button/';
import {Form, Input} from '../../../components/Form';

import './style/Form.css';

export default function(){
    const [acess, setAcess] = useState('');
    const [password, setPassword] = useState('');
    
    const handleAcess = event => setAcess(event.target.value);
    const handlePassword = event => setPassword(event.target.value);

    
    const handleSubmitLogin = event => {
        event.preventDefault();
        alert(`LOGIN ACESS SUBMIT\nACESS: ${acess}\nPASSWORD: ${password}`);
    }

    return (
        /*
        <form className='login-box' onSubmit = {handleSubmitLogin}>
            <input 
                type='email'
                onChange = {handleAcess}
                value = {acess}
            />
            <input 
                type='password'
                onChange = {handlePassword}
                value = {password}
            />    
            <Button type='submit' classNames='button-submit' >Acessar</Button>
        </form>
        */
       <Form >
           <Input
                func = {handleAcess} 
                label='acesso' 
                name='username' 
                type='email' 
                value = {acess} 
            />
           
           <Input 
                func = {handlePassword}
                label='senha' 
                name='password' 
                type='password' 
                value={password} 
            />

            <Button type='submit' classNames='button-submit' >Acessar</Button>
       
       </Form>
    );
}