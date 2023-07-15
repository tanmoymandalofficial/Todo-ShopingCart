import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Loding from '../Component/Loding';
import Foorter from '../Component/Foorter';

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
                    alert("Product is Added to Cart")
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
        <h1  className=' text-center text-4xl font-bold mt-6 p-2  '>SHOP SMART </h1>
        <h3 className=' text-center text-xs font-semibold'>Your Ultimate Shopping Destination with a Todo List Feature</h3>
        <div className=' text-center p-5 my-5'>
            <Link className=' rounded-full bg-blue-400 px-6 font-bold text-white py-3 mr-5' to='/'>Back to Home</Link>
            <Link className=' rounded-full bg-orange-400 px-6 font-bold text-white py-3' to='/todo'>Explore Todo List</Link>
        </div>
        <div className=' flex justify-center bg-cyan-500  font-bold '>
            <div className=' w-8/12 flex justify-end align-middle p-1'>
                <Link className='mr-5 py-1 text-white' to='/shoping'>Products</Link>
                <Link className='rounded bg-amber-400 py-1 px-4 ' to='/cart'>Cart - {cartProdect.length}</Link>
            </div>
        </div>
        <div className=' container  w-10/12 m-auto gap-4 my-10 gap-y-6 min-h-screen' style={{gridTemplateColumns:'repeat(4, 1fr)', display:'grid'}}>
            {/* <Loding/> */}
            {
                // cartProdect.length === 0? <Loding/> :
                products.map(product => {
                    return(
                        <div className=' shadow p-2'>
                            <img className=' h-60 w-fit ' src={product.image} alt="" />
                            <p className=' text-sm mb-2'><b>Category:</b> {product.category}</p>
                            <h3 className=' font-semibold h-12 overflow-hidden' >{product.title}</h3>
                            {/* <p>{product.description}</p>  */}
                            <h5 className=' mt-4 text-xl'><b>Price:</b> ₹{product.price}</h5>
                            <button className=' w-full text-center bg-orange-400 font-bold rounded-lg py-1 bottom-0 mt-3 ' onClick={()=> handleCart(product)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
        <Foorter/>
    </div>
  )
}

export default Shop