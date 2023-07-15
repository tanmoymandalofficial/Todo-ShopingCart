import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Loding from '../Component/Loding';

const Cart = () => {

    const localCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
    const [cartProdect, setCartProdect] = useState(localCart);

    // const [total, setTotal] = useState(0);
    let total = 0;

    cartProdect.map(prod => total = total + prod.price);
    console.log(total);

    const handleDelete = (id)=>{
        setCartProdect(prev => {
            const newVal = prev.filter(prod => prod.id !== id);
            return newVal;
        })
    }

    localStorage.setItem('cartProduct', JSON.stringify(cartProdect));


  return (
    <div>
        <h1  className=' text-center text-4xl font-bold mt-6 p-2  '>SHOP SMART </h1>
        <h3 className=' text-center text-xs font-semibold'>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div className=' text-center p-5 my-5'>
            <Link className=' rounded-full bg-blue-400 px-6 font-bold text-white py-3 mr-5' to='/'>Back to Home</Link>
            <Link className=' rounded-full bg-orange-400 px-6 font-bold text-white py-3' to='/todo'>Explore Todo List</Link>
        </div>
        <div className=' flex justify-center bg-cyan-500  font-bold '>
            <div className=' w-8/12 flex justify-end align-middle p-1'>
                <Link className='mr-5 py-1 ' to='/shoping'>Products</Link>
                <Link className='rounded bg-amber-400 py-1 px-4 ' to='/cart'>Cart - {cartProdect.length}</Link>
            </div>
        </div>
        <div>
            <div>
                <table>
                {   
                    cartProdect.map(product => {
                        return(
                            <tr>
                                <td><img src={product.image} alt="" /></td>
                                <td><h3>{product.title}</h3></td>
                                <td><h5>Price: ₹{product.price}</h5></td>
                                <td><button onClick={()=> handleDelete(product.id)}>delete</button></td>
                            </tr>
                        )
                    })
                }
                </table>
                
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Cart