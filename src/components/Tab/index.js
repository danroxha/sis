import React from 'react';

import './Tab.css';

const redirectTabsEnable = children => {

	for(const elements of children)
		if(!!elements['props'].enable)
		{ 
			window.location.hash = `#${elements['props']['name']}`;
			break;
		}
}

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

const ViewTabs = ({children}) =>{
	if(!Array.isArray(children))
		children = [children];
	
	redirectTabsEnable(children);
	
	return (
		children
			.map((data, index) => (
				<section
					className = 'tab-view'	
					id={`${data.props.name}`}		
					key = {(`${index}-${data.name}`)}  
					
				>
					{children[index]}
				
				</section>
			))
		);
}

export {Tabs, ViewTabs};
