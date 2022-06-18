import React from 'react'

import CatCard from '../catCard/CatCard'
const FinalRound = ({ firstWinner, secondWinner, setFinalWinner, finalWinner }) => {

  return (
    <>
      {finalWinner ?
        <div className='final-winner'>
          <h1>Winner!</h1>
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