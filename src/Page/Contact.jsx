import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h1>SHOP SMART </h1>
        <h3>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div>
            <Link to='/shoping'>Visit Shopping Site</Link>
            <Link to='/todo'>Explore Todo List</Link>
        </div>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contect</Link>
        </div>
    </div>
  )
}

export default Contact