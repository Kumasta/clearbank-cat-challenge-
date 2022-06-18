import React, { useState } from 'react'
import axios from 'axios'

import CatCard from '../catCard/CatCard'
const FinalRound = ({ firstWinner, secondWinner, setFinalWinner, finalWinner, reset }) => {

  const [isCatSaved, setIsCatSaved] = useState(false)

  const saveCat = async () => {
    try {
      const { data } = await axios.post('https://api.thecatapi.com/v1/favourites?api_key=9ce586fc-5d9e-4586-9913-f12b26d8c0a1',
        { image_id: finalWinner.id })
      console.log(data)
      setIsCatSaved(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {finalWinner ?
        <div className='final-winner'>
          <h1>Winner!</h1>
          <div>
            {isCatSaved ? null : <button onClick={saveCat}>Save Cat?</button>}
            {isCatSaved && <p>Cat has been saved</p>}

          </div>
          <button onClick={reset}>Reset</button>
          <img src={finalWinner.url} />
        </div>
        :
        <>
          <h1 className='round-title'>Final Round</h1>
          <div className='three-grid'>
            <CatCard cat={firstWinner} setFinalWinner={setFinalWinner} />
            <h2 className='vs'>Vs</h2>
            <CatCard cat={secondWinner} setFinalWinner={setFinalWinner} />
          </div>
        </>
      }
    </>
  )
}


export default FinalRound