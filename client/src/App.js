import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componets
import Navbar from './components/navbar/Navbar'
import RoundOne from './components/versus/RoundOne'
import FinalRound from './components/versus/FinalRound'

const App = () => {
  const [roundOne, setRoundOne] = useState(null)
  const [roundTwo, setRoundTwo] = useState(null)
  const [firstWinner, setFirstWinner] = useState(null)
  const [secondWinner, setSecondWinner] = useState(null)
  const [isFinalReady, setIsFinalReady] = useState(false)
  const [finalWinner, setFinalWinner] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?limit=4&size=small')
      setRoundOne([data[0], data[1]])
      setRoundTwo([data[2], data[3]])
    }
    getData()
  }, [])

  useEffect(() => {
    if (firstWinner && secondWinner) setIsFinalReady(!isFinalReady)
  }, [firstWinner, secondWinner])

  return (
    <>
      <Navbar />
      {
        isFinalReady ?
          <FinalRound firstWinner={firstWinner} secondWinner={secondWinner} setFinalWinner={setFinalWinner} finalWinner={finalWinner} />
          :
          <RoundOne roundOne={roundOne} roundTwo={roundTwo} firstWinner={firstWinner} setFirstWinner={setFirstWinner} secondWinner={secondWinner} setSecondWinner={setSecondWinner} />
      }
    </>
  )
}

export default App
