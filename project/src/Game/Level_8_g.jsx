function Game_8({ code = "" }) {
    const correctCode = `React.useState(0)`;
    return (
        <>
            <div className="Game">
                <div className="center">
                    {code === correctCode 
                        ? "Correct! `useState` is used to manage state in functional components." 
                        : code 
                        ? "Incorrect! Try again." 
                        : "Awaiting your answer..."}
                </div>
            </div>
        </>
    );
}
export default Game_8;