import React, { useState } from "react";
import "../CSS/Level_1.css";

// Level 5 Events

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   };

//   return <button onClick={shoot}>Take the shot!</button>;
// }


function fistCheck({ firstIn }) {
  return firstIn === '<button onClick={shoot}>Take the shot!</button>';
}

const handleCheck = ({ firstIn }) => {
  if (!fistCheck({ firstIn })) {
    return "Please input it!";
  }
  return "Success! The input is correct!";
};

function Game_5({ firstIn }) {
  const showText = handleCheck({ firstIn });

  return (
    <div className="Game">
      <div id="small" className="center">
        {showText}
      </div>
    </div>
  );
}

function Level_5() {
  const [firstIn, setFirstIn] = useState("");

  return (
    <>
      <div className="Description">
        <div className="webName">Learning React</div>
        <h3>Level 5</h3>
        <p>Hello! Welcome to my game</p>
        <div className="code">
          <pre>
            {`function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

}`}
          </pre>
          <div className="inputType" style={{ marginLeft: "40px" }}>
            return <input
              className="inputBox"
              value={firstIn}
              onChange={(e) => setFirstIn(e.target.value)}
              placeholder="Type the input here..."
            />
            {`;`}
          </div>
        </div>
      </div>
      <Game_5 firstIn={firstIn} />
    </>
  );
}

export default Level_5;