import React from "react";
import Head from "./Head";

function Game_8({ code = "" }) {
    const correctCode = `useState(0)`;
    return (
        <>
            <div className="Game">
                <div className="center" style={{ fontSize: "1.5rem" }}>
                    {code === correctCode 
                        ? "🎉 Correct! `useState` is used to manage state in functional components." 
                        : code 
                        ? "❌ Incorrect! Try again." 
                        : "Awaiting your answer..."}
                </div>
            </div>
        </>
    );
}

function Level_8({ setLevel, win }) {
    const [code, setCode] = React.useState("");
    const correctCode = `useState(0)`; // Correct code snippet
  
    React.useEffect(() => {
      if (code === correctCode) {
        // Optionally display success feedback here
      }
    }, [code, correctCode]);
  
    return (
      <>
          {/* Left Section: Description */}
            <div className="Description">
              <Head level={8} changeLevel={setLevel} isWin={win} />
              <div className="code">
                <p>
                  Help initialize the state variable `count` with a default value of `0`!<br />
                  Complete the code below:
                </p>
                <pre>
                  {`import { useState } from "react";\n\nconst [count, setCount] = `}
                  <input
                    type="text"
                    value={code}
                    placeholder="Type the missing code here..."
                    onChange={(e) => setCode(e.target.value)}
                    style={{ width: "100px"}}
                  />
                  {`;`}
                </pre>
              </div>
            </div>
          {/* Right Section: Feedback */}
          <Game_8 code={code} />
      </>
    );
  }
  
  export default Level_8;