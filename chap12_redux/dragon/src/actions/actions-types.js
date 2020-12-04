import { ON_CHANGE, ADD_DRAGON, DELETE_DRAGON } from '../constants/actions';

export const set_dragon = (payload) => {
    return {
        type: ON_CHANGE,
        [payload.name]: payload.value
    }
}

export const add_dragon = (payload) => {
    return {
        type: ADD_DRAGON, 
        payload
    }
}

export const delete_dragon = (key) => {
    return {
        type: DELETE_DRAGON, 
        key
    }
}