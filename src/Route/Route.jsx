import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Page/Home'
import About from '../Page/About'
import Contact from '../Page/Contact'
import Shop from '../Page/Shop'
import Todo from '../Page/Todo'
import Cart from '../Page/Cart'


const RouteFun = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/shoping' element={<Shop/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    
  )
}

export default RouteFun