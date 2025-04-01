import React from "react";

function Game_8({ code = "" }) {
    const correctCode = `React.useState(0)`;
    return (
        <>
            <div className="Game">
                <div className="center">
                    {code === correctCode 
                        ? "Correct! `useState` is used to manage state in functional components." 
                        : code 
                        ? "Incorrect! Try again." 
                        : "Awaiting your answer..."}
                </div>
            </div>
        </>
    );
}

function Level_8({ onComplete }) {
    const [code, setCode] = React.useState("");
    const correctCode = `React.useState(0)`; // Correct code snippet
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && code === correctCode) {
        onComplete(); // Move to the next level when Enter is pressed and the answer is correct
      }
    };
  
    React.useEffect(() => {
      if (code === correctCode) {
        // Optionally display success feedback here
      }
    }, [code, correctCode]);
  
    return (
      <>
        <div className="InputFeedbackContainer">
          {/* Left Section: Description */}
          <div className="LeftSection">
            <div className="Description">
              <h1>React Quiz - Level 8</h1>
              <p>
                Help initialize the state variable `count` with a default value of `0`!<br />
                Complete the code below:
              </p>
            </div>
            <div className="InputSection">
            <pre>
                {`import { useState } from "react";\n\nconst [count, setCount] = `}
                <input
                  type="text"
                  value={code}
                  placeholder="Type the missing code here..."
                  onChange={(e) => onCodeChange(e.target.value)}
                />
                {`;`}
              </pre>
            </div>
          </div>
  
          {/* Right Section: Feedback */}
          <div className="RightSection">
            <div className="FeedbackSection">
              {code === correctCode
                ? "🎉 Correct! The state variable has been initialized successfully."
                : code
                ? "❌ Incorrect! Try again."
                : "Waiting for correct state initialization..."}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Level_8;