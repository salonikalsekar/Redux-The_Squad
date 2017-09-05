export const ADD_CHAR = 'ADD_CHARACTER';
export const REMOVE_CHAR = 'REMOVE_CHARACTER';

export function addCharacterById(id){
    const action={
    type: ADD_CHAR,
    id
}
return action;
}

export function removeCharacterById(id){
    const action={
    type: REMOVE_CHAR,
    id
}
return action;
}