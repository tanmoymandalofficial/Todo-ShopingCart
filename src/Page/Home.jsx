import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
        <div>
            <p>
                Welcome to our online shopping website! We are thrilled to have you here and provide you with an incredible shopping experience. Whether you're looking for the latest fashion trends, home essentials, electronic gadgets, or unique gifts, we've got you covered.
                <br />
                <br />
                One of the standout features of our website is the Todo List function. We understand that managing your shopping activities can sometimes be overwhelming, so we've created a Todo List to help you stay organized.
            </p>
            
        </div>
    </div>
  )
}

export default Home
