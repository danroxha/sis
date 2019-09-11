import React from 'react';
import {Form, Input, Select} from '../Form/';
import './Search.css';

const Search = ({placeholder, data}) => 
(
    <Form
        classNames = {'form-search-data'}
    >
        <Input 
            classNamesInput = {'-commom'}
            type={'text'}
            placeholder={placeholder}
        />
        
        <Select 
            classNames = {'-commom'}
            data = {data}
        />
    </Form>
);

export default Search;