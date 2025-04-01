// Arrow Functions
import '../CSS/Game.css';
import React, { useState } from "react";

function Game_3({ path = "" }) {
    if (path === "react.svg") {
        path = pic_ture
    }
    return (
        <div className="Game">
            <img src={path} alt="Game visual" />
        </div>
)};

function Level_3(){
    const [path, setPath] = React.useState("")
    return <>
        <div className='Description'>
        <h1>Learning React</h1>
        <p>
            Arrow Fucntion<br />
            <pre>
                {`hello = () => {
    return "Hello World!";
};
hello = () => "Hello World!";
hello = (val) => "Hello " + val;
hello = val => "Hello " + val;`}
            </pre>
        </p>
        <input 
            value={path} 
            onChange={(e) => setPath(e.target.value)} 
            placeholder="Type something..." 
        />
        </div>
        <Game_3 path={path}></Game_3>
        </>
}
export default Level_3;