import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Level_1 from './JSX/Level_1'
import Level_2 from './JSX/Level_2'
import Level_3 from './JSX/Level_3'
import Level_4 from './JSX/Level_4'
import Level_5 from './JSX/Level_5'
import Level_6 from './JSX/Level_6'
import Level_7 from './JSX/Level_7'
import Level_8 from './JSX/Level_8'
import Level_9 from './JSX/Level_9'

function App() {
  // const [currentLevel, setCurrentLevel] = useState(7); // Start with Level 7

  // const handleLevelComplete = (level) => {
  //   if (level === 7) {
  //     setCurrentLevel(8); // Unlock Level 8 when Level 7 is completed
  //   } else if (level === 8) {
  //     alert("🎉 Congratulations! You've completed all levels!"); // End of the game
  //   }
  // };

  return (
    <> 
    <div className='Container'>
    <Level_1 />
    </div>
      {/* <div className="Container">
        {currentLevel === 7 && <Level_7 onComplete={() => handleLevelComplete(7)} />}
        {currentLevel === 8 && <Level_8 onComplete={() => handleLevelComplete(8)} />}
      </div> */}
    </>
  );
}


export default App;
