import React from 'react';

import './Search.css';

const Search = ({placeholder, data}) => (
    <form>
        <input 
            type = 'text'
            placeholder = {placeholder || ''}
            className = {'search-input -common'}
        />
        <select 
            className= {'search-select -common'}
        >
            {data 
                ? data.map((value, index) =>
                    (   <option
                            key = {`${value.name + index}`} 
                            value={`${value.name}`}
                        >
                            {`${value.name}`}
                        </option>
                    )
                )
                : ''
        }
        </select>
    </form>
);

export default Search;