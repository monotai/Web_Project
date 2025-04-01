import '../CSS/Game.css';
import logo from '../assets/logo_p.png';

export default function Head({ level, changeLevel, isWin }) {

  const increaseLevel = () => {
    if (isWin) {
      changeLevel(level + 1);
      isWin = false;
    }
  }
  const decreaseLevel = () => {
    if (level > 1) {
      changeLevel(level - 1);
    }
  }
  const goHome = () => {
    changeLevel(1);
  }
  return (
    <div className="header-container" style={{ textAlign: "center", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px"}}>
      <img src={logo} alt="Logo" className="logo" style={{ width: "120px", marginBottom: "10px" }} />
      <div className="webName" style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>Learning React</div>
      <div className="webName" style={{ fontSize: "18px", color: "#555", marginBottom: "15px" }}>Level {level}</div>
      <div className="buttons" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={decreaseLevel} className="buttonLevel" style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>Prev</button>
        <button onClick={goHome} className="buttonLevel" style={{ padding: "10px 20px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>First</button>
        <button onClick={increaseLevel} className="buttonLevel" style={{ padding: "10px 20px", backgroundColor: "#FFC107", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>Next</button>
      </div>
    </div>
  );
}