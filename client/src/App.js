import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [cats, setCats] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&size=small')
      console.log(data)
      setCats(data)
    }
    getData()
  }, [])

  return (
    <>
      <h1>Cat v Cat</h1>
      {cats && cats.map((cat, i) => {
        return (
          <img style={{ maxHeight: 200 }} src={cat.url} key={i} />
        )
      })}
    </>
  )
}

export default App
