import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Row from './Components/Row'
import Start from './Components/Start'
import Won from './Components/Won'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
function App() {
  return(
    <>
    <Start/>
    
    <Routes>
      <Route path='/game' element={<Row />} />
    </Routes>
    </>
  )
}

export default App
