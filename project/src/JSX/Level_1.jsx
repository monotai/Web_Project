import '../CSS/Level_1.css';
import React from "react";

function Game_1({ text = "" }) {
    return <>
        <div className="Game">
            <div className="center">{text}</div>
        </div>
        </>
}

function Level_1() {
    const [text, setText] = React.useState("");
    return (<>
        <div className='Description'>
            <h1>Learning React</h1>
            <div className='code'>
            <pre>
{
`function Game_1() {
    return (
        <>
            <div className="Game">
                <div className="center">
`}
</pre>
<input 
    id='input_1'
    value={text} 
    onChange={(e) => setText(e.target.value)} 
    placeholder="" 
/>
<pre>
{
`                </div>
            </div>
        </>
    );
}`
}
</pre>
            </div>
        </div>
        <Game_1 text={text}></Game_1>
    </>
    );
}
export default Level_1;