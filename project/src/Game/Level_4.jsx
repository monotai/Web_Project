function Game_1({ text = "" }) {
    return <>
        <div className="Game">
            <div className="center">{text}</div>
        </div>
        </>
}

import './Level_1.css';
import React from "react";

function Level_4() {
    const [missed, setMissed] = React.useState("");
    const [made, setMade] = React.useState("");
    return (<>
        <div className='Description'>
            <h1>Learning React</h1>
            <p>
<pre>
{
`

    function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return`{</pre> 
    <pre>}`;
  }
  return;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

`}
</pre>

<input 
    value={missed} 
    onChange={(e) => setMissed(e.target.value)} 
    placeholder="Type something..." 
/>
            </p>
        </div>
        <Game_1 text={missed}></Game_1>
    </>
    );
}
export default Level_4;

// Exercise 4: Conditional Exercise
