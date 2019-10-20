import React from 'react';


export default function LabelIcon({children, icon, className, props}){
  
  console.log(props);

  return(
    <div className = {className || ''}>
      <i className='material-icons'>{icon}</i>     
    </div>
  );
}