import { Fragment, useContext } from "react";
import { CharContext } from "../Reducers/Characters";

const Message = () => {
    const [state, dispatch] = useContext(CharContext);

    function handleChange(event) {
        dispatch({type: "ON_CHANGE", name: event.target.name, value: event.target.value.trim()});
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "ON_SUBMIT"});
    }

    return(
        <Fragment>
            {state.message !== "" && <p>{state.message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userText">Veuillez saisir votre texte :</label>
                    <input type="text" name="userText" value={state.userText} onChange={handleChange}/>
                    <span>Nombre de lettres : {state.userText.length}</span>
                </div>
                
                <div>
                    <label htmlFor="userTextStyle">Veuillez choisir la couleur de votre texte :</label>
                    <select name="userTextStyle" onChange={handleChange} value={state.userTextStyle}>
                        <option value="palevioletred">Palevioletred</option>
                        <option value="tomato">Tomato</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="userTextSize">Veuillez choisir la taille de votre texte :</label>
                    <select name="userTextSize" onChange={handleChange} value={state.userTextSize}>
                        <option value="15px">15</option>
                        <option value="16px">16</option>
                        <option value="17px">17</option>
                        <option value="18px">18</option>
                        <option value="19px">19</option>
                        <option value="20px">20</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </Fragment>
    )
}

export default Message;