import React, { useState } from "react";
import Head from "./Head";

// Level 6 Forms

// function MyForm() {
//     return (
//       <form>
//         <label>Enter your name:
//           <input type="text" />
//         </label>
//       </form>
//     )
//   }  

function fistCheck({ firstIn }) {
  return firstIn === "<form>";
}

function secondCheck({ secondIn }) {
  return secondIn === "</form>";
}

const handleCheck = ({ firstIn, secondIn }) => {
  if (!fistCheck({ firstIn }) && !secondCheck({ secondIn })) {
    return "Both inputs are incorrect!";
  }
  if (!fistCheck({ firstIn })) {
    return "First input is incorrect!";
  }
  if (!secondCheck({ secondIn })) {
    return "Second input is incorrect!";
  }
  return "🎉 Success! Both inputs are correct!";
};

function Game_6({ firstIn, secondIn }) {
  const showText = handleCheck({ firstIn, secondIn });

  return (
    <div className="Game">
      <div id="small" className="center">
        {showText}
      </div>
    </div>
  );
}

function Level_6() {
  const [firstIn, setFirstIn] = useState("");
  const [secondIn, setSecondIn] = useState("");

  return (
    <>
      <div className="Description">
        <Head level={6} />
        <div className="code">
          <pre>
            {`function MyForm() {
  return (
    `}
          </pre>
          <div className="inputType" style={{ marginLeft: "40px" }}>
            <input
              className="inputBox"
              value={firstIn}
              onChange={(e) => setFirstIn(e.target.value)}
              placeholder="Input here..."
            />
          </div>
          <pre>{`
      <label>Enter your name:
        <input type="text" />
      </label>
    `}</pre>
          <div className="inputType" style={{ marginLeft: "40px" }}>
            <input
              className="inputBox"
              value={secondIn}
              onChange={(e) => setSecondIn(e.target.value)}
              placeholder="Input here..."
            />
          </div>
          <pre>{`
  );
}`}</pre>
        </div>
      </div>
      <Game_6 firstIn={firstIn} secondIn={secondIn} />
    </>
  );
}

export default Level_6;