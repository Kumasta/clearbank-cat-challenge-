import React from 'react'


const SimpleCatCard = ({ cat }) => {

  return (
    <>
      <img className='small-img' src={cat.image.url} />
    </>
  )
}


export default SimpleCatCard