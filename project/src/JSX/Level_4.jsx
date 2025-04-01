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
      <h1>Learning React</h1>
      <input
        value={firstIn}
        onChange={(e) => setFirstIn(e.target.value)}
        placeholder="Type the first input here..."
      />
      <input
        value={secondIn}
        onChange={(e) => setSecondIn(e.target.value)}
        placeholder="Type the second input here..."
      />
    </div>
    <Game_4 firstIn={firstIn} secondIn={secondIn} />
  </>
    
}

export default Level_4;
