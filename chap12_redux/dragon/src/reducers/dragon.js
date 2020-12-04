const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon: "",
    message: "",
    count: 3
 };

const reducer = (state = stateInit, action) => {
    console.log("reducer", state, action);
    switch(action.type) {
        case "ON_CHANGE":
            return {
                ...state,
                dragon: action.dragon,
                message: ""
            }

        case "ADD_DRAGON":
            if(state.dragons.includes(state.dragon)) {
                return {
                    ...state,
                    message: "Attention, vous ne pouvez pas ajouter deux fois le même dragon"
                }
            }

            return {
                ...state,
                dragons: state.dragons.concat(state.dragon),
                count: state.count + 1,
                message: ""
            }

        case "DELETE_DRAGON":
            if(state.dragons.includes(state.dragon) === false) {
                return {
                    ...state,
                    message: "Attention, vous ne pouvez pas supprimer un dragon non existant"
                }
            }

            delete state.dragons[action.key]
            return {
                ...state,
                dragons: state.dragons,
                count: state.count - 1,
                message: ""
            }

        default:
            return state;
    }
}

export default reducer;