import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const localCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
    const [cartProdect, setCartProdect] = useState(localCart);

    useEffect(()=>{
        console.log('riched')
        const getdata = async ()=>{
            try {
                const responce = await axios.get('https://fakestoreapi.com/products');
                // console.log(responce.data);
                setProducts(responce.data);
            } catch (error) {
                console.log(error);
            }
        }
        getdata()

    },[])
    // console.log(products);

    const handleCart = (product)=>{

            setCartProdect(prev => {
                const val = prev.filter(prod => product.id === prod.id);
                console.log(typeof(val));
                if(val.length === 0){
                    const newVal = [product, ...prev];
                    return newVal;
                }else{
                    alert("Product is already present")
                    return prev;
                }
                
            })

    }

    localStorage.setItem('cartProduct', JSON.stringify(cartProdect));
    console.log(cartProdect);
    

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
        <div >
            {
                products.map(product => {
                    return(
                        <div>
                            <img src={product.image} alt="" />
                            <p>Category: {product.category}</p>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <h5>Price: ₹{product.price}</h5>
                            <button onClick={()=> handleCart(product)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default Shop