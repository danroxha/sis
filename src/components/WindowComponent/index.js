import React from 'react';
import {useDispatch}  from 'react-redux';
import './WindowComponent.css';


function WindowComponent({children, title}){

    const dispatch = useDispatch();
    const closeWindow = () => dispatch({type : 'CHANGE_STATE_WINDOW'});

    return(
        <section id="window-component">
            <header>
                <span>{title || "Window Title"}</span>
                <i onClick={closeWindow}className="material-icons button-close">close</i>
            </header>
            <main>
                {children || "body"}
            </main>
        </section>
    );
}

export default WindowComponent;