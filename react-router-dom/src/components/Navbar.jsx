import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='nav' className='bg-cyan-900'>
        <h2>Ownly</h2>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/product'>Product</Link>
          <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar