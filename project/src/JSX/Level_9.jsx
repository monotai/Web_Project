import React from "react";

function Game_9({ code = "" }) {
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
                </div>
            </div>
        </>
    );
}

function Level_9({ onComplete }) {
    const [count, setCount] = React.useState(0);
    const [code, setCode] = React.useState("");
    const correctCode = `setCount(count + 1)`; 
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && code === correctCode) {
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
                <h1 className="webName">React Quiz - Level 9</h1>
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
                            onKeyPress={handleKeyPress}
                        />
                        {`\n}`}
                    </pre>
                </div>
            </div>
            {/* Right Section: Feedback */}
            <div className="Game">
                <p>Current Count: {count}</p>
                <button onClick={() => eval(code)}>Click Me</button>
            </div>
            <Game_9 code={code} />
        </>
    );
}

export default Level_9;