function Game_7({ code = "" }) {
    const correctCode = `title="React"`;
    return (
        <>
            <div className="Game">
                <div className="center">
                    {code === correctCode 
                        ? "Correct! Props are passed as attributes in JSX." 
                        : code 
                        ? "Incorrect! Try again." 
                        : "Awaiting your answer..."}
                </div>
            </div>
        </>
    );
}
export default Game_7;