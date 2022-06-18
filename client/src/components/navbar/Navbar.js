import React from 'react'
import { useLocation, Link } from 'react-router-dom'


const Navbar = () => {
  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <nav className='nav'>
      <h1>Cat v Cat</h1>
      <div className='flex'>
        {pathname === '/' ?
          <button>
            <Link to={'/favorite-cats'}>Saved Cats</Link>
          </button>
          :
          <button>
            <Link to={'/'}>Cat tournament</Link>
          </button>
        }
      </div>
    </nav>
  )
}


export default Navbar