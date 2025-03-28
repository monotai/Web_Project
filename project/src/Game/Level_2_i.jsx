import React, { useState } from "react";
import Game_2 from "./Level_2_g";
function Input_2(){
    const [path, setPath] = React.useState("")
    return <>
        <div className='Description'>
        <h1>Learning React</h1>
        <input 
            value={path} 
            onChange={(e) => setPath(e.target.value)} 
            placeholder="Type something..." 
        />
        </div>
        <Game_2 path={path}></Game_2>
        </>
}
export default Input_2;