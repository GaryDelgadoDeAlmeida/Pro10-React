import { Fragment, useContext } from "react";
import { CharContext } from "../Reducers/Characters";
import Paragraph from "../Style/ParagraphColor";
import List from "../Style/List";

const StyleRender = () => {
    const [state, dispatch] = useContext(CharContext);

    console.log(state.texts);

    return (
        <Fragment>
            <p>Style Render</p>
            {/* <Paragraph color={state.userTextStyle} size={state.userTextSize}>userText : {state.userText}</Paragraph>
            <p>userTextStyle : {state.userTextStyle}</p> */}

            {state.texts.length > 0 && state.texts.map((oneText, i) => (
                <List key={i}>
                    <Paragraph color={oneText[1]} size={oneText[2]}>userText : {oneText[0]}</Paragraph>
                    <button onClick={() => dispatch({type: "ON_DELETE", key: i})}>D</button>
                </List>
            ))}
        </Fragment>
    )
}

export default StyleRender;