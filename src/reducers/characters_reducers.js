import character_json from '../data/characters.json';
import { ADD_CHAR, REMOVE_CHAR } from '../actions';  
import { createCharacter } from './helpers';

function characters(state = character_json, action){
    switch(action.type){
        case ADD_CHAR:
            let characters= state.filter(item=> item.id !== action.id);
            return characters;
        case REMOVE_CHAR:
            characters=[...state, createCharacter(action.id)]
            return characters;
        default:
            return state;
    }
}

export default characters;