import React, { useState } from 'react'

import CatCard from '../catCard/CatCard'

const RoundOne = ({ roundOne, roundTwo, firstWinner, setFirstWinner, secondWinner, setSecondWinner }) => {

  return (
    <div className='round-one'>
      <h1 className='round-title'>Round One</h1>
      <div className='three-grid'>
        {roundOne && roundOne.map((cat, i) => {
          return (
            <CatCard cat={cat} key={cat.id} i={i} roundOne={roundOne} setFirstWinner={setFirstWinner} />
          )
        })}
        {!firstWinner ? <h2 className='vs'>Vs</h2> : <h2 className='vs'>Winner!</h2>}
      </div>
      <hr />
      <h1 className='round-title'>Round Two</h1>
      <div className='three-grid'>
        {roundTwo && roundTwo.map((cat, i) => {
          return (
            <CatCard cat={cat} key={cat.id} i={i} roundTwo={roundTwo} setSecondWinner={setSecondWinner} />
          )
        })}
        {!secondWinner ? <h2 className='vs'>Vs</h2> : <h2 className='vs'>Winner!</h2>}
      </div>
    </div>
  )
}


export default RoundOne