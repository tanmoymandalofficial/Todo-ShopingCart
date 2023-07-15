import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
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
                Our website is designed to make your shopping journey smooth, convenient, and enjoyable. With a wide range of products from renowned brands, competitive prices, and secure payment options, we aim to cater to all your needs and preferences.
            </p>
            <p>
                One of the standout features of our website is the Todo List function. We understand that managing your shopping activities can sometimes be overwhelming, so we've created a Todo List to help you stay organized. Whether it's creating a wishlist, setting reminders for upcoming sales or promotions, or tracking your order status, our Todo List will keep you on top of things. You can easily access your personalized Todo List from your account dashboard, making it a convenient tool to streamline your shopping experience.
            </p>
            <p>
                Thank you for choosing our shopping website. We hope you have a delightful time exploring our extensive collection and find exactly what you're looking for. Happy shopping!
            </p>
        </div>
    </div>
  )
}

export default About