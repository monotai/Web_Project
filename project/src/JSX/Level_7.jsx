import React from "react";
import "../CSS/Game.css";

function Game_7({ code = "" }) {
    const correctCode = `title="React"`;
    return (
        <>
            <div className="Game">
                <div className="center">
                    {code === correctCode 
                        ? "Correct! Props are passed as attributes in JSX." 
                        : code 
                        ? "Incorrect! Try again." 
                        : "Awaiting your answer..."}
                </div>
            </div>
        </>
    );
}

function Level_7({ onComplete }) {
    const [code, setCode] = React.useState("");
    const correctCode = `title="React"`; // Correct code snippet
  
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
          {/* Left Section: Description and Input */}
          <div className="LeftSection">
            <div className="Description">
              <h1 className="webName">React Quiz - Level 7</h1>
              <p>
                Help the component display the correct title by passing the `title` prop!<br />
                Complete the code below:
              </p>
            </div>
            <div className="InputSection">
              <pre>
                {`<MyComponent `}
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyPress={handleKeyPress} // Listen for Enter key
                  placeholder="Type the missing code here..."
                />
                {` />`}
              </pre>
            </div>
          </div>
  
          {/* Right Section: Feedback */}
          <div className="RightSection">
            <div className="FeedbackSection">
              {code === correctCode
                ? "🎉 Correct! The title prop has been passed successfully."
                : code
                ? "❌ Incorrect! Try again."
                : "Waiting for the correct title..."}
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default Level_7;