import React from "react";
import Head from "./Head";

function Game_9({ code = "" }) {
    const [count, setCount] = React.useState(0);
    const correctCode = `setCount(count + 1)`;
    return (
        <>
            <div className="Game">
                <div className="center" style={{ fontSize: "20px" }}>
                {code === correctCode 
                        ? "🎉 Correct! You successfully updated the state using the event handler." 
                        : code 
                        ? "❌ Incorrect! Try again." 
                        : "Awaiting your answer..."}
                <p>Current Count: {count}</p>
                <button className="buttonClick" onClick={() => code.trim() === correctCode && setCount(count + 1)}>Click Me</button>
                </div>
            </div>
        </>
    );
}

function Level_9({ setLevel, win }) {
    const [code, setCode] = React.useState("");
    const correctCode = `setCount(count + 1)`; 

    React.useEffect(() => {
        if (code === correctCode) {
            // Optionally display success feedback here
        }
    }, [code, correctCode]);

    return (
        <>
            <div className="Description">
                <Head level={9} changeLevel={setLevel} isWin={win} />
                <div className="code">
                    <p>
                        Welcome to Level 9! Your task is to fix the code and make the button functional.<br />
                        Think of it as a puzzle: can you figure out the correct code to update the `count` state?<br />
                        Complete the code below and test it in the game!
                    </p>
                    <pre>
                        {`const [count, setCount] = useState(0);\n\n`}
                        {`function handleClick() {\n`}
                        {`  `}
                        <input
                            type="text"
                            value={code}
                            placeholder="Type the missing code here..."
                            onChange={(e) => setCode(e.target.value)}
                            style={{ width: "200px" }}
                        />
                        {`\n}`}
                    </pre>
                </div>
            </div>
            {/* Right Section: Feedback */}
            <Game_9 code={code} />
        </>
    );
}

export default Level_9;