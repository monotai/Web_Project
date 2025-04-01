import '../CSS/Game.css';

export default function Head({ level, changeLevel }) {
  return (
    <>
    <div className='webName'>Learning React</div>
    <div className='webName' style={{fontSize: "20px"}}>Level {level}</div>
    <div className='buttons'>
        <button className='buttonLevel'>Prev</button>
        <button className='buttonLevel'>Home</button>
        <button className='buttonLevel'>Next</button>
    </div>
    </>

  );
}