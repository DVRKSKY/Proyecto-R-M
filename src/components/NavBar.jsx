import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div>
        <div>
          <Link  to='/about'>
            <button>About</button>
          </Link>
          <Link to='/home'>
            <button>Home</button>
          </Link>
          <Link to='/favorites'>
            <button>Favoritos</button>
          </Link>
          <Link to='/404'>
            <button>Error</button>
          </Link>
          <Link to='/'>
            <button>Login</button>
          </Link>
          <button onClick={props.logOut}>Log out</button>
        </div>
        <SearchBar onSearch={props.onSearch} onRamdon={props.onRamdon} />
    </div>
  )
}
