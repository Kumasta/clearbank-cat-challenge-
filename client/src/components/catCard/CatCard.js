import React from 'react'


const CatCard = ({ cat, roundOne, roundTwo, setFirstWinner, setSecondWinner, setFinalWinner }) => {

  const click = (e) => {
    e.target.classList.add('winner')
    if (roundTwo) {
      setSecondWinner(roundTwo[roundTwo.findIndex(object => object.id === cat.id)])
      roundTwo.splice(roundTwo.findIndex(object => object.id === cat.id) === 1 ? 0 : 1, 1)
      return
    }
    if (roundOne) {
      setFirstWinner(roundOne[roundOne.findIndex(object => object.id === cat.id)])
      roundOne.splice(roundOne.findIndex(object => object.id === cat.id) === 1 ? 0 : 1, 1)
      return
    }
    setFinalWinner(cat)
    console.log(cat)
    e.target.onClick = null
  }

  return (
    <img onClick={click} className='card hover ' src={cat.url} />
  )
}

export default CatCard