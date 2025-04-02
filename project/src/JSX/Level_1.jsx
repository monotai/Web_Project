import React from "react";
import Head from "./Head";

function Game_1({ text = "" }) {
    return <>
        <div className="Game">
            <div className="center">{text}<br />
                <p style={{ fontSize: "1rem", color: "white" }}>
                {text === "Hello World!"
                        ? "🎉 Correct! Enter for go to next level"
                        : text 
                        ? "❌ Incorrect! Try again." 
                        : "Awaiting your answer..."}
                </p>
            </div>
        </div>
        </>
}

function  Level_1({ setLevel,win }) {
    const [text, setText] = React.useState("");

    const is_win = (text) => {
        return text === "Hello World!";
    }
    return (<>
        <div className='Description'>
            <Head level={1} changeLevel={setLevel} isWin={win} />
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
    placeholder="Type 'Hello World!' here"
    onKeyDown={(e) => {
        if (e.key === "Enter" && is_win(text)) {
            setLevel(2);
        }
    }}
/>
<pre>
{
`                </div>
            </div>
        </>
    );
}`}
</pre>
<p>Hint: Type "Hello World!" in the input box and press Enter to proceed to the next level.</p>
            </div>
        </div>
        <Game_1 text={text}></Game_1>
    </>
    );
}
export default Level_1;