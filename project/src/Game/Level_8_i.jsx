import './Level_8.css';
import React from "react";

function Input_8({ onComplete }) {
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
              {`const [count, setCount] = `}
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyPress={handleKeyPress} // Listen for Enter key
                placeholder="Type the missing code here..."
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

export default Input_8;