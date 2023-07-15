import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Loding from '../Component/Loding';
import Foorter from '../Component/Foorter';

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
    const handleOrder = ()=>{
        if(total === 0){
            alert("Your Cart is empty");
            return;
        }
        alert("Your order has been placed");
        setCartProdect([]);
        localStorage.setItem('cartProduct', JSON.stringify([]));
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
        <div className=' flex w-9/12 m-auto gap-10 my-10 min-h-screen'>
            <div className=' w-9/12 '>
                <table>
                {   
                    cartProdect.map(product => {
                        return(
                            <tr className=' flex justify-between w-full gap-5 my-3 shadow px-2'>
                                <td className=' w-2/12'><img className=' h-20' src={product.image} alt="" /></td>
                                <td className=' w-6/12'><h3>{product.title}</h3></td>
                                <td className=' w-2/12'><h5>Price: ₹{product.price}</h5></td>
                                <td className=' w-2/12 text-red-600 font-semibold'><button onClick={()=> handleDelete(product.id)}>Remove</button></td>
                            </tr>
                        )
                    })
                }
                </table>
                
            </div>
            <div className=' w-3/12'>
                <h2 className=' font-semibold text-2xl'><b>Total Amount:</b> <br /> ₹{total}</h2>
                {/* <p>Delever to default Address</p> */}
                <Link to='/shoping' className=' w-full text-center bg-orange-400 font-bold rounded-lg py-1 bottom-0 mt-3 block ' onClick={handleOrder}>Place Order</Link>
            </div>
        </div>
        <Foorter/>
    </div>
  )
}

export default Cart