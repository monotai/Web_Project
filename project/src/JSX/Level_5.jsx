import React, { useState } from "react";
import "../CSS/Level_1.css";

// Level 5 Events

function fistCheck({ firstIn }) {
  return firstIn === "onClick={shoot}";
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
        <div className="code">
          <pre>
            {`function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (`}
          </pre>
          <div className="inputType" style={{ marginLeft: "40px" }}>
          {`<button`}<input
              className="inputBox"
              value={firstIn}
              onChange={(e) => setFirstIn(e.target.value)}
              placeholder="Type input here..."
            />{`>Take the shot!</button>`}
          </div>
          <pre>{`}`}</pre>
        </div>
      </div>
      <Game_5 firstIn={firstIn} />
    </>
  );
}

export default Level_5;