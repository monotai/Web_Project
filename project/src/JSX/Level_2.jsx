import '../CSS/Game.css';
import pic_ture from '../assets/react.svg';
import React, { useState } from "react";
import Head from './Head';

function Game_2({ path = ""}) {
    if (path === "react.svg") {
        path = pic_ture
    }
    return (
        <div className="Game">
            <img id='reactImage' src={path} style={{ border: "none"}}/>
        </div>
    );
}

function Level_2({setLevel, win}) {
    const [path, setPath] = React.useState("")
    return <>
        <div className='Description'>
        <Head level={2} changeLevel={setLevel} isWin={win} />
        <div className='code'>
            <label htmlFor="pathInput">Enter the image file name (e.g., react.svg):</label>
            <input 
                id="pathInput"
                value={path} 
                onChange={(e) => setPath(e.target.value)} 
                placeholder="Type the file name here..." 
                onKeyDown={(e) => {
                    if (e.key === "Enter" && path === "react.svg") {
                        setLevel(3);
                    }
                }}
            />
        </div>
        </div>
        <Game_2 path={path} set={setLevel}></Game_2>
        </>
}
export default Level_2;