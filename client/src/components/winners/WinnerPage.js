import axios from 'axios'
import React, { useEffect, useState } from 'react'


import SimpleCatCard from '../catCard/SimpleCatCard'
const WinnerPage = () => {

  const [winnerCats, setWinnerCats] = useState(null)


  useEffect(() => {
    const getFavCats = async () => {
      try {
        const { data } = await axios('https://api.thecatapi.com/v1/favourites?api_key=9ce586fc-5d9e-4586-9913-f12b26d8c0a1')
        setWinnerCats(data)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getFavCats()
  }, [])

  return (
    <>
      {winnerCats && winnerCats.map((cat) => {
        return (
          <SimpleCatCard cat={cat} key={cat.id} />
        )
      })}
    </>
  )
}


export default WinnerPage