import React, { useState } from "react";
import "./Level_1.css";

function MadeGoal() {
  return <h1 style={{ color: "green" }}>GOAL!</h1>;
}

function MissedGoal() {
  return <h1 style={{ color: "red" }}>MISSED!</h1>;
}

// This function uses Babel to transpile JSX to plain JavaScript at runtime.
function evaluateBranch(code, expectedComponent) {
  try {
    // Transpile the input code using Babel (preset "react" handles JSX)
    const transformedCode = Babel.transform(code, { presets: ["react"] }).code;
    // Wrap the transformed code in a function that receives React and our components.
    const func = new Function("React", "MadeGoal", "MissedGoal", transformedCode);
    const result = func(React, MadeGoal, MissedGoal);
    // Check if the returned element is valid and of the expected type.
    if (React.isValidElement(result) && result.type === expectedComponent) {
      return { success: true, result };
    } else {
      return { success: false, error: "The returned element is not as expected." };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function Level4({ onBack }) {
  const [ifInput, setIfInput] = useState("");
  const [elseInput, setElseInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [output, setOutput] = useState(null);

  const handleCheck = () => {
    // Trim the inputs to remove extra whitespace
    const ifResult = evaluateBranch(ifInput.trim(), MadeGoal);
    const elseResult = evaluateBranch(elseInput.trim(), MissedGoal);

    if (!ifResult.success || !elseResult.success) {
      const errMsg = ifResult.error || elseResult.error;
      setFeedback(`❌ Error: ${errMsg}`);
      setOutput(<MissedGoal />);
    } else {
      setFeedback("🎉 Correct! You completed Level 4!");
      setOutput(<MadeGoal />);
    }
  };

  return (
    <div className="level-container">
      <h2>Level 4: Conditional Rendering with Runtime JSX Transpilation</h2>
      <p>
        Complete the <code>Goal</code> function by providing the correct code
        for each branch. You may use either a self-closing tag (e.g.,
        <code>&lt;MadeGoal /&gt;</code>) or an explicit closing tag (e.g.,
        <code>&lt;MadeGoal&gt;&lt;/MadeGoal&gt;</code>).
      </p>
      <p>For the <strong>if</strong> branch, try for example:</p>
      <pre className="code-snippet">
        {`return <MadeGoal />; // or return <MadeGoal></MadeGoal>;`}
      </pre>
      <textarea
        className="jsx-input"
        value={ifInput}
        onChange={(e) => setIfInput(e.target.value)}
        placeholder='Type code for the "if" branch here'
      />
      <p>For the <strong>else</strong> branch, try for example:</p>
      <pre className="code-snippet">
        {`return <MissedGoal />; // or return <MissedGoal></MissedGoal>;`}
      </pre>
      <textarea
        className="jsx-input"
        value={elseInput}
        onChange={(e) => setElseInput(e.target.value)}
        placeholder='Type code for the "else" branch here'
      />
      <button className="check-btn" onClick={handleCheck}>
        Check Answer
      </button>
      <p className="feedback">{feedback}</p>
      <div className="preview">
        <h3>Output Preview:</h3>
        {output || <MissedGoal />}
      </div>
      <button className="back-btn" onClick={onBack}>
        ← Back to Levels
      </button>
    </div>
  );
}

export default Level4;
