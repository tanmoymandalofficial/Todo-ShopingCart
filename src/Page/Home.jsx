import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className=' text-center text-4xl font-bold mt-6 p-2  '>SHOP SMART </h1>
        <h3 className=' text-center text-xs font-semibold'>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div className=' text-center p-5 my-5'>
            <Link className=' rounded-full bg-blue-400 px-6 font-bold text-white py-3 mr-5' to='/shoping'>Visit Shopping Site</Link>
            <Link className=' rounded-full bg-orange-400 px-6 font-bold text-white py-3' to='/todo'>Explore Todo List</Link>
        </div>
        <div className=' flex justify-center bg-cyan-500  font-bold '>
            <Link className=' py-3 px-6 text-white' to='/'>Home</Link>
            <Link className=' py-3 px-6' to='/about'>About</Link>
            <Link className=' py-3 px-6' to='/contact'>Contect</Link>
        </div>
        <div className=' container w-8/12 m-auto py-20 text-center'>
            <p className= ''>
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
