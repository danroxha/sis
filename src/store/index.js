import {createStore} from 'redux';

const INITIAL_STATE = {
    data : false,
};


function windowToggle(state = INITIAL_STATE, action){
    switch(action.type){
        case 'CHANGE_STATE_WINDOW':
            state.data =  !state.data;
            return {...state }; 
        default:
            return state;
    }
}

const store = createStore(windowToggle);

export default store;