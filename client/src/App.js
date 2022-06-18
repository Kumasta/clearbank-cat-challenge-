import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componets
import Navbar from './components/navbar/Navbar'
import Rounds from './components/versus/Rounds'
import WinnerPage from './components/winners/WinnerPage'

const App = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Rounds />} />
        <Route path='/favorite-cats' element={<WinnerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
