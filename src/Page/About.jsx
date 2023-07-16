import React from 'react'
import { Link } from 'react-router-dom'
import Foorter from '../Component/Foorter'

const About = () => {
  return (
    <div>
        <h1 className=' text-center text-4xl font-bold mt-6 p-2  '>SHOP SMART </h1>
        <h3 className=' text-center text-xs font-semibold'>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div className=' text-center p-5 my-5'>
            <Link className=' rounded-full bg-blue-400 px-6 font-bold text-white py-3 mr-5' to='/shoping'>Visit Shopping Site</Link>
            <Link className=' rounded-full bg-orange-400 px-6 font-bold text-white py-3'  to='/todo'>Explore Todo List</Link>
        </div>
        <div className=' flex justify-center bg-cyan-500  font-bold '>
            <Link className=' py-3 px-6' to='/'>Home</Link>
            <Link className=' py-3 px-6 text-white' to='/about'>About</Link>
            <Link className=' py-3 px-6' to='/contact'>Contact</Link>
        </div>
        <div className=' container w-8/12 m-auto py-16 text-center'>
            <p>
                Our website is designed to make your shopping journey smooth, convenient, and enjoyable. With a wide range of products from renowned brands, competitive prices, and secure payment options, we aim to cater to all your needs and preferences.
            </p>
            <br />
            <p>
                One of the standout features of our website is the Todo List function. We understand that managing your shopping activities can sometimes be overwhelming, so we've created a Todo List to help you stay organized. Whether it's creating a wishlist, setting reminders for upcoming sales or promotions, or tracking your order status, our Todo List will keep you on top of things. You can easily access your personalized Todo List from your account dashboard, making it a convenient tool to streamline your shopping experience.
            </p>
            <br />  
            <p>
                Thank you for choosing our shopping website. We hope you have a delightful time exploring our extensive collection and find exactly what you're looking for. Happy shopping!
            </p>
        </div>
        <Foorter/>
    </div>
  )
}

export default About