import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStud from './components/AddStud'
import Searchstd from './components/Searchstd'
import DeleteStd from './components/DeleteStd'
import ViewStud from './components/ViewStud'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddStud/>}/>
       <Route path='/view' element={<ViewStud/>}/>
        <Route path='/search' element={<Searchstd/>}/>
         <Route path='/delete' element={<DeleteStd/>}/>
       
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
