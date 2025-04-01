import '../CSS/Game.css';
import pic_ture from '../assets/react.svg';
import React, { useState } from "react";
import Head from './Head';

function Game_2({ path = "" }) {
    if (path === "react.svg") {
        path = pic_ture
    }
    return (
        <div className="Game">
            <img id='reactImage' src={path} alt="Game visual" />
        </div>
    );
}

function Level_2(){
    const [path, setPath] = React.useState("")
    return <>
        <div className='Description'>
        <Head level={2} />
        <input 
            value={path} 
            onChange={(e) => setPath(e.target.value)} 
            placeholder="" 
        />
        </div>
        <Game_2 path={path}></Game_2>
        </>
}
export default Level_2;