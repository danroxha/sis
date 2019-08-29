import React from 'react';

import './Tab.css';


const Tabs = ({children : name, className: _className}) => 
(
    <nav>
        {
			name.map(value=> (
                <a 
					key = {value.name} 
					href={`#${value.name}`} 
					className={`tabs ${_className || ''}`} 
				> 
					{value.name}
				</a>
                )
            )
		}
    </nav>
);

const ViewTabs = ({children, enable}) =>{
return (
	children
		.map((data, index) => (
			<section
				id={`${data.props.name}`}		
				key = {(`${index}-${data.name}`)}  
				className = 'tab-view'
			>
				{children[index]}
			
			</section>
		))
	);
}

export {Tabs, ViewTabs};
