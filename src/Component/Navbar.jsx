import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>Shopping and Todo</h1>
        <div>
            <Link to='/'>Shopping App </Link>
            <Link to='/todo'> Task Manager </Link>
        </div>
    </div>
  )
}

export default Navbar