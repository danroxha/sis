import React from 'react';
import {Form, Input, Select} from '../Form/';
import './Search.css';

const Search = ({placeholder, data}) => 
(
    <Form>
        <Input 
            classNamesInput = {'search-input -common'}
            type={'text'}
            placeholder={placeholder}
           
        />
        <Select 
            data = {data}
            classNames = {'search-select -common'}
        />
    </Form>
);

export default Search;