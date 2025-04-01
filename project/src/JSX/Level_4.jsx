import React, { useState } from "react";
import "../CSS/Level_1.css";

// Level 4 Conditional

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false} />);

function fistCheck({ firstIn }) {
  if (firstIn === "<MadeGoal/>" || firstIn === "<MadeGoal />" || firstIn === "<MadeGoal></MadeGoal>"){
    return true;
  }
  else {
    return false;
  }
}

function secondCheck({ secondIn }) {
  if (secondIn === "<MissedGoal/>" || secondIn === "<MissedGoal />" || secondIn === "<MissedGoal></MissedGoal>"){
    return true;
  }
  else {
    return false;
  }
}

const handleCheck = ({ firstIn, secondIn }) => {
  let showText = "";
  if (!fistCheck({ firstIn })) {
    showText = "first input is not correct!";
    if (!secondCheck({ secondIn })) {
      showText = "both inputs are not correct!";
    }
  }
  else {
    if (!secondCheck({ secondIn })) {
      showText = "second input is not correct!";
    }
    else {
      showText = "success! both inputs are correct!";
    }
  }
  return showText;
}

function Game_4({ firstIn, secondIn }) {
  let showText = handleCheck({ firstIn, secondIn });

  return (
    <div className="Game">
      <div id="small" className="center">
        {showText}
      </div>
    </div>
  );
}

function Level_4() {

  const [firstIn, setFirstIn] = useState("");
  const [secondIn, setSecondIn] = useState("");

  return <>
    <div className="Description">
      <div className="webName">Learning React</div>
      <h3>Level 4</h3>
      <p>Hello Welcome to my game</p>
      <div className="code">
      <pre>
        {
`function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
     `}</pre>
     <div className="inputType" style={{ marginLeft: "40px" }}>
      return <input
        className="inputBox"
        value={firstIn}
        onChange={(e) => setFirstIn(e.target.value)}
        placeholder="Type the first input here..."
      />{`;`}
     </div>
    
    <pre>{
`  }`}</pre>
  <div className="inputType" style={{ marginLeft: "15px" }}>
  return <input
        className="inputBox"
        value={secondIn}
        onChange={(e) => setSecondIn(e.target.value)}
        placeholder="Type the second input here..."
      />{`;`}
  </div>
  <pre>{
`}`}
      </pre>
      </div>
            
    </div>
    <Game_4 firstIn={firstIn} secondIn={secondIn} />
  </>
    
}


export default Level_4;