import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav({onSearch, logout}) {
  return (
    <div className='content-nav'>

<Link to="/about"><button>About</button> </Link>
<Link to="/home"> <button>Home</button> </Link>
<Link to="/favorites"><button>Favorites</button></Link>
            <SearchBar onSearch={onSearch}/>
   <button onClick={logout}>Logout</button> 
   </div>
    
  )
}
