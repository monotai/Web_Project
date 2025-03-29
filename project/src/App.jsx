import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input_1 from './Game/Level_1_i'
import Input_2 from './Game/Level_2_i'
//import Level_4 from './Game/Level_4'
import FileHandler from './Game/Test'
import Input_7 from './Game/Level_7_i';
import Input_8 from './Game/Level_8_i';

function App() {
  const [currentLevel, setCurrentLevel] = useState(7); // Start with Level 7

  const handleLevelComplete = (level) => {
    if (level === 7) {
      setCurrentLevel(8); // Unlock Level 8 when Level 7 is completed
    } else if (level === 8) {
      alert("🎉 Congratulations! You've completed all levels!"); // End of the game
    }
  };

  return (
    <>
      <div className="Container">
        <h1>React Quiz Game</h1>
        {currentLevel === 7 && <Input_7 onComplete={() => handleLevelComplete(7)} />}
        {currentLevel === 8 && <Input_8 onComplete={() => handleLevelComplete(8)} />}
      </div>
    </>
  );
}

export default App;
