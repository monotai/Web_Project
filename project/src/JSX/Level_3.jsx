// Arrow Functions
import '../CSS/Game.css';
import React, { useState } from "react";
import Head from './Head';

function Game_3({ text = "" }) {
    let code = false;
    if (text === "react.svg") {
        code = true;
    }
    return (
        <div className="Game">
            <div className="center" style={{fontSize: "1.5rem"}}>
                {code
                    ? "🎉 Correct! Props are passed as attributes in JSX." 
                    : code 
                    ? "Incorrect! Try again." 
                    : "Awaiting your answer..."}
            </div>
        </div>
)};

function Level_3(){
    const [text, setText] = React.useState("")
    return <>
        <div className='Description'>
        <Head level={3} />
        <div className='code'>
        Arrow Fucntion<br />
            <pre>
            {
`hello = () => {
    return "Hello World!";
};
hello = () => "Hello World!";
hello = (val) => "Hello " + val;
hello = val => "Hello " + val;`
            }  
            </pre>
        <input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Type something..."
            style={{ marginTop: "20px" }} // Increased margin for a bigger gap
        />
        </div>
        </div>
        <Game_3 text={text}></Game_3>
        </>
}
export default Level_3;