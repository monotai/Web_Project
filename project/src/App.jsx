import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input_1 from './Game/Level_1_i'
import Input_2 from './Game/Level_2_i'
import Input_3 from './Game/Level_3_i'
import FileHandler from './Game/Test'

function App() {
  return (
    <>
    <div className='Container'>
      {/* Decripction */}
      <Input_3 />
      {/* Game Interface */}
    </div>
    </>
  )
}

export default App;
