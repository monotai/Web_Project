// Arrow Functions
import '../CSS/Game.css';
import React, { useState } from "react";
import Head from './Head';

function Game_3({ text = "" }) {
    let code = false;
    if (text === "() => 'Hello World!'") {
        code = true;
    }
    return (
        <div className="Game">
            <div className="center" style={{fontSize: "1.5rem"}}>
                {code
                    ? "🎉 Correct! This is a valid arrow function that returns 'Hello World!'." 
                    : "Incorrect! Try again."}
            </div>
        </div>
    );
}

function Level_3({setLevel, win}) {
    const [text, setText] = React.useState("")
    return <>
        <div className='Description'>
        <Head level={3} changeLevel={setLevel} isWin={win}/>
        <div className='code'>
        <h3>Arrow Function Examples</h3>
            <pre>
            {
`// Basic Arrow Function
const hello = () => {
    return "Hello World!";
};

// Simplified Arrow Function
const hello = () => "Hello World!";

// Arrow Function with Parameters
const hello = (val) => "Hello " + val;

// Further Simplified (Single Parameter)
const hello = val => "Hello " + val;

// Arrow Function with Multiple Parameters
const add = (a, b) => a + b;

// Arrow Function with Block Body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};`
            }  
            </pre>
        <p>Type a valid arrow function that returns "Hello World!" in the input box below:</p>
        <input 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="e.g., () => 'Hello World!'" 
            style={{ marginTop: "20px", padding: "5px", width: "200px" }} 
        />
        </div>
        </div>
        <Game_3 text={text}></Game_3>
        </>
}
export default Level_3;