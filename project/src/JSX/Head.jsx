import '../CSS/Game.css';

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
    <>
    <div className='webName'>Learning React</div>
    <div className='webName' style={{fontSize: "20px"}}>Level {level}</div>
    <div className='buttons'>
        <button onClick={decreaseLevel} className='buttonLevel'>Prev</button>
        <button onClick={goHome} className='buttonLevel'>First</button>
        <button onClick={increaseLevel} className='buttonLevel'>Next</button>
    </div>
    </>

  );
}