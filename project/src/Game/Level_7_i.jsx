import './Level_7.css';
import React from "react";

function Input_7({ onComplete }) {
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
            <h1>React Quiz - Level 7</h1>
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

export default Input_7;