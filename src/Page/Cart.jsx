import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

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
        <h1>SHOP SMART </h1>
        <h3>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div>
            <Link to='/'>Back to Home</Link>
            <Link to='/todo'>Explore Todo List</Link>
        </div>
        <div>
            <Link to='/shoping'>Products</Link>
            <Link to='/cart'>Cart {cartProdect.length}</Link>
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