import React from 'react'
import { Link } from 'react-router-dom'
import Foorter from '../Component/Foorter'

const Contact = () => {
  return (
    <div>
        <h1 className=' text-center text-4xl font-bold mt-6 p-2'>SHOP SMART </h1>
        <h3 className=' text-center text-xs font-semibold'>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div className=' text-center p-5 my-5'>
            <Link className=' rounded-full bg-blue-400 px-6 font-bold text-white py-3 mr-5' to='/shoping'>Visit Shopping Site</Link>
            <Link className=' rounded-full bg-orange-400 px-6 font-bold text-white py-3' to='/todo'>Explore Todo List</Link>
        </div>
        <div className=' flex justify-center bg-cyan-500  font-bold '>
            <Link className=' py-3 px-6' to='/'>Home</Link>
            <Link className=' py-3 px-6'  to='/about'>About</Link>
            <Link className=' py-3 px-6 text-white' to='/contact'>Contect</Link>
        </div>
        <div className=' w-5/12 mx-auto my-10 p-12 text-center border rounded-sm bg-cyan-100 shadow-lg'>
          <h2 className=' text-2xl font-semibold mb-4'>Tanmoy Mondal</h2>
          <p className=' mb-2'><b>Mobile: </b>+91 8972782368</p>
          <p className=' mb-2'><b>Email: </b>tanmoymondal@10409@gmail.com</p>
          <div className='flex justify-center my-8 '>
            <p><Link className=' rounded-full bg-orange-400 px-6 font-bold text-white py-2 mr-4' target='_blank' to='https://tanmoymondal.netlify.app/'>Portfolio</Link> </p>
            <p> <Link className=' rounded-full bg-blue-400 px-6 font-bold text-white py-2 ' to='https://github.com/tanmoymandalofficial'>Github</Link></p>
          </div>

        </div>
        <Foorter/>
    </div>
  )
}

export default Contact