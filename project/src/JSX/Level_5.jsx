import React, { useState } from "react";
import Head from "./Head";
import ball from "../assets/ball.png";
import goal from "../assets/goal.jpg";
// Level 5 Events

function fistCheck({ firstIn }) {
  return firstIn === "onClick={shoot}";
}

const handleCheck = ({ firstIn }) => {
  if (!fistCheck({ firstIn })) {
    return "Incorrect input!";
  }
  return "🎉 Success! The input is correct!";
};

function Game_5({ firstIn }) {
  const showText = handleCheck({ firstIn });
  const [isShooted, setIsShoot] = useState(false);

  React.useEffect(() => {
    if (showText === "🎉 Success! The input is correct!") {
      setIsShoot(true);
    }
  }, [showText]);

  const moveBallUp = () => {
    const ballElement = document.querySelector(".ball");
    if (ballElement && isShooted) {
      setIsShoot(false);
      ballElement.style.transition = "top 0.5s linear, transform 0.5s linear"; // Linear movement
      ballElement.style.top = "20%";
      ballElement.style.transform = "scale(0.8)";

      setTimeout(() => {
        ballElement.style.top = "25%";
        ballElement.style.transform = "scale(0.6)";
      }, 500);
    }
  };

  return (
    <div className="Game">
      <div className="football">
        <img
          src={goal}
          alt="goal"
          className="field"
        />
        <img
          src={ball}
          alt="ball"
          className={"ball"}
        />
        <div className="details">
          <div>{showText}</div>
          <button
            className="button"
            onClick={moveBallUp}
          >
            Shoot!
          </button>
        </div>
      </div>
    </div>
  );
}

function Level_5({ setLevel, win }) {
  const [firstIn, setFirstIn] = useState("");

  return (
    <>
      <div className="Description">
        <Head level={5} changeLevel={setLevel} isWin={win} />
        <div className="code">
          <pre>
            {`function Football() {
  const shoot = () => {
    shoot_animation();
  };

  return (`}
          </pre>
          <div className="inputType" style={{ marginLeft: "40px" }}>
          {`<button`}<input
              className="inputBox"
              value={firstIn}
              onChange={(e) => setFirstIn(e.target.value)}
              placeholder="Type input here..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && text === 'onClick={shoot}') {
                    setLevel(6);
                }
            }}
            />{`>Shoot!</button>`}
          </div>
          <pre>{`}`}</pre>
        </div>
      </div>
      <Game_5 firstIn={firstIn} />
    </>
  );
}

export default Level_5;