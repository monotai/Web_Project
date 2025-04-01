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

function Level_9({ onComplete }) {
    const [code, setCode] = React.useState("");
    const correctCode = `setCount(count + 1)`; 
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && code.trim() === correctCode) {
            onComplete(); 
        }
    };

    React.useEffect(() => {
        if (code === correctCode) {
            // Optionally display success feedback here
        }
    }, [code, correctCode]);

    return (
        <>
            {/* Left Section: Description */}
            <div className="Description">
                <Head level={9} />
                <div className="code">
                    <p>
                        Handle the button click event to update the `count` state!<br />
                        Complete the code below:
                    </p>
                    <pre>
                        {`function handleClick() {\n`}
                        {`  `}
                        <input
                            type="text"
                            value={code}
                            placeholder="Type the missing code here..."
                            onChange={(e) => setCode(e.target.value)}
                            style={{ width: "200px" }}
                            onKeyDown={handleKeyPress}
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