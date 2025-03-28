import './Game.css';
import pic_ture from '../assets/react.svg';

function Game_2({ path = "" }) {
    if (path === "react.svg") {
        path = pic_ture
    }
    return (
        <div className="Game">
            <img src={path} alt="Game visual" />
        </div>
    );
}

export default Game_2;