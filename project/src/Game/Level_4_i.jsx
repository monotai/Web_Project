import Game_1 from "./Level_1_g";
import './Level_1.css';
import React from "react";

function Input_1() {
    const [text, setText] = React.useState("");
    return (<>
        <div className='Description'>
            <h1>Learning React</h1>
            <p>
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
    value={text} 
    onChange={(e) => setText(e.target.value)} 
    placeholder="Type something..." 
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
            </p>
        </div>
        <Game_1 text={text}></Game_1>
    </>
    );
}
export default Input_1;