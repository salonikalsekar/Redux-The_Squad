import character_json from '../data/characters.json';
import { ADD_CHAR, REMOVE_CHAR } from '../actions';  

import { createCharacter } from './helpers';

function heroes(state = [], action){
    switch(action.type){
        case ADD_CHAR:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_CHAR:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;
        default:
            return state;

    }
}


export default heroes;