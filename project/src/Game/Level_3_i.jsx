import React, { useState } from "react";
import Game_2 from "./Level_2_g";
function Input_3(){
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
        <Game_2 path={path}></Game_2>
        </>
}
export default Input_3;