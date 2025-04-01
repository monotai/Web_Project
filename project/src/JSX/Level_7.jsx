import React from "react";
import "../CSS/Game.css";
import Head from "./Head";

function Game_7({ code = "" }) {
    const correctCode = `title="React"`;
    return (
        <>
            <div className="Game">
                <div className="center" style={{fontSize: "1.5rem"}}>
                    {code === correctCode 
                        ? "🎉 Correct! Props are passed as attributes in JSX." 
                        : code 
                        ? "Incorrect! Try again." 
                        : "Awaiting your answer..."
                      }
                </div>
            </div>
        </>
    );
}

function Level_7({ setLevel, win }) { 
  const [code, setCode] = React.useState("");
  const correctCode = `title="React"`; 


  React.useEffect(() => {
    if (code === correctCode) {
      // Optionally display success feedback here
    }
  }, [code, correctCode]);

  return (
    <>
        <div className="Description">
          <Head level={7} changeLevel={setLevel} isWin={win} />
          <div className="code">
            <p>
          Help the component display the correct title by passing the `title` prop!<br />
          Complete the code below by typing the correct prop in the input box. 
          Remember, props in JSX are passed as attributes in the format <code>propName="value"</code>.
            </p>
            <p>
          For example, if you want to pass a prop named <code>name</code> with the value <code>"John"</code>, 
          you would write: <code>name="John"</code>.
            </p>
            <pre>
          {`<MyComponent `}
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Type the missing code here..."
          />
          {` />`}
            </pre>
            <p>
          Once you type the correct code, you'll see a success message below!
            </p>
          </div>
        </div>

        {/* Right Section: Feedback */}
      <Game_7 code={code} />
    </>
    );
  }
  
export default Level_7;

