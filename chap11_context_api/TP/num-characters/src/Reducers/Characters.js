import { createContext } from 'react';

const initialState = {
    texts: [],
    userText: "",
    userTextStyle: "palevioletred",
    userTextSize: "15px",
    message: ""
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ON_CHANGE":
            return {
                ...state,
                [action.name] : action.value,
                message: ""
            };

        case "ON_SUBMIT":
            if(state.userText === "" || state.userTextStyle === "" || state.userTextSize === "") {
                return {
                    ...state,
                    message: "Attention, l'un des champs des vides. Veuillez à tous les remplir."
                }
            }
            
            return {
                ...state,
                texts: state.texts.concat([[state.userText, state.userTextStyle, state.userTextSize]]),
                message: "Merci, rendez-vous sur la page 'Rendu' pour obtenir votre rendu"
            }

        case "ON_DELETE":
            delete state.texts[action.key]
            
            if(!Array.isArray(state.texts)) {
                state.texts = [];
            }

            return {
                ...state,
                texts: state.texts,
                message: ""
            }

        default:
            return state;
    }
}

const CharContext = createContext([]);

export { initialState, reducer, CharContext };