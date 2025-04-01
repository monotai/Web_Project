import React from "react";

function Game_8({ code = "" }) {
    const correctCode = `React.useState(0)`;
    return (
        <>
            <div className="Game">
                <div className="center" style={{ fontSize: "20px" }}>
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

function Level_8({ onComplete }) {
    const [code, setCode] = React.useState("");
    const correctCode = `useState(0)`; // Correct code snippet
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && code === correctCode) {
        onComplete(); 
      }
    };
  
    React.useEffect(() => {
      if (code === correctCode) {
        // Optionally display success feedback here
      }
    }, [code, correctCode]);
  
    return (
      <>
          {/* Left Section: Description */}
            <div className="Description">
              <h1 className="webName">React Quiz - Level 8</h1>
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