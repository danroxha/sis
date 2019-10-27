import React from 'react';


export default function LabelIcon({children, icon, className, onClick}){

  return(
    <div 
      onClick = {onClick}
      className = {className || ''}
    >
      <i className='material-icons'>{icon}</i>
      {children || ''}
    </div>
  );
}