import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './Game/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Container'>
      {/* Decripction */}
      <div className='Decription'>
        Learning React
      </div>
      {/* Game Interface */}
      <Game></Game>
    </div>
    </>
  )
}

export default App
