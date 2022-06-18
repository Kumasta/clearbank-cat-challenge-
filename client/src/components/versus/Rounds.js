import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FinalRound from './FinalRound'
import RoundOne from './RoundOne'

const Rounds = () => {
  const [isFinalReady, setIsFinalReady] = useState(false)
  const [firstWinner, setFirstWinner] = useState(null)
  const [secondWinner, setSecondWinner] = useState(null)
  const [finalWinner, setFinalWinner] = useState(null)
  const [roundOne, setRoundOne] = useState(null)
  const [roundTwo, setRoundTwo] = useState(null)
  const [getCats, setGetCats] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?limit=4&size=small')
      setRoundOne([data[0], data[1]])
      setRoundTwo([data[2], data[3]])
    }
    getData()
  }, [getCats])

  useEffect(() => {
    if (firstWinner && secondWinner) setIsFinalReady(!isFinalReady)
  }, [firstWinner, secondWinner])

  const reset = () => {
    setIsFinalReady(false)
    setFirstWinner(null)
    setSecondWinner(null)
    setFinalWinner(null)
    setGetCats(!getCats)
  }

  return (
    <>
      {
        isFinalReady ?
          <FinalRound firstWinner={firstWinner} secondWinner={secondWinner} setFinalWinner={setFinalWinner} finalWinner={finalWinner} reset={reset} />
          :
          <RoundOne roundOne={roundOne} roundTwo={roundTwo} firstWinner={firstWinner} setFirstWinner={setFirstWinner} secondWinner={secondWinner} setSecondWinner={setSecondWinner} />
      }

    </>
  )
}


export default Rounds