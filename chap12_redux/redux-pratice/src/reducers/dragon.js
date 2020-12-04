const stateInit = {
    dragons: [
        "Apalala",
        "Balaur",
        "Bolla"
    ],
    dragon: "",
    message: "",
    count: 0
 };

const reducerDragon = (state, action) => {
    switch(action.type) {
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

            return {
                ...state,
                dragons: delete state.dragons[action.key],
                count: state.count - 1,
                message: ""
            }

        default:
            return state;
    }
}

export default reducerDragon;