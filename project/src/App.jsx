import { use, useState, useEffect } from 'react'
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
import End from './JSX/End'

function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState(10);
  
  useEffect(() => {
    if (currentLevel > completedLevels) {
      setCompletedLevels(currentLevel);
    }
  }
  , [currentLevel]);

  return (
    <> 
    <div className='Container'>
      {currentLevel === 1 &&<Level_1 setLevel={setCurrentLevel} win={completedLevels > 1}/>}
      {currentLevel === 2 &&<Level_2 setLevel={setCurrentLevel} win={completedLevels > 2}/>}
      {currentLevel === 3 &&<Level_3 setLevel={setCurrentLevel} win={completedLevels > 3}/>}
      {currentLevel === 4 &&<Level_4 setLevel={setCurrentLevel} win={completedLevels > 4}/>}
      {currentLevel === 5 &&<Level_5 setLevel={setCurrentLevel} win={completedLevels > 5}/>}
      {currentLevel === 6 &&<Level_6 setLevel={setCurrentLevel} win={completedLevels > 6}/>}
      {currentLevel === 7 &&<Level_7 setLevel={setCurrentLevel} win={completedLevels > 7}/>}
      {currentLevel === 8 &&<Level_8 setLevel={setCurrentLevel} win={completedLevels > 8}/>}
      {currentLevel === 9 &&<Level_9 setLevel={setCurrentLevel} win={completedLevels > 9}/>}
      {currentLevel === 10 &&<End setLevel={setCurrentLevel} win={completedLevels > 10}/>}
    </div>
    </>
  );
}


export default App;
