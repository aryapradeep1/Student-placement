import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStud from './components/AddStud'
import Searchstd from './components/Searchstd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStud/>
      <Searchstd/>
    </>
  )
}

export default App
