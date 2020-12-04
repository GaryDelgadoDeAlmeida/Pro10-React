import { ON_CHANGE, ADD_QUESTION, ADD_DRAGON } from '../constants/actions';

export const set_question = (payload) => {

    return {
        type: ON_CHANGE, 
        payload
    }
}

export const add_question = () => {

    return {
        type: ADD_QUESTION,
    }
}

export const add_dragon = (payload) => {
    return {
        type: ADD_DRAGON, 
        payload
    }
}