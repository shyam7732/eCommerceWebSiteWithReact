import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./Css/ecommerce.css"
import { ecommerceContext } from './Main'

function ECommerce() {
  
    const[products, setProducts] = useState([])
    const{cart, setCart} = useContext(ecommerceContext)

    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then((result) => {
                // console.log(result.data)
                setProducts(result.data)
        })
    }, [])
        
    function trimDescription(desc){
      return(
        desc.length > 100 ? desc.slice(0, 100) + "..." : desc 
      )
    }

    function handleToCart(e, id){
      e.preventDefault()
      setCart([...cart, products[id]])
    }

    function exitInCart(productId){
      let exits  =false
      cart.forEach((c) => {
        if(c.id == productId){
          exits = true
        }
      })
      return exits
    }
    console.log(cart)

  return (
    <>
      <div className='product-container'>
        <h2>Products</h2>
        <div className='Products'>
          {products.map((product, index) => {
            return(
              <div className='product' key={index}>
                <img src= {product.image} alt={product.name} />
                <h3><a href=''>{product.title}</a></h3>
                <h3>Price: {product.price}</h3>
                <p className='description'>{trimDescription(product.description)}</p>
                {
                  (exitInCart(product.id)) ? (<a href='' className='addedToCart'> Added to cart</a>) : (<a href='' className='addToCart ' onClick={(e)=> handleToCart(e,index)}>Add to cart</a>)                            
                }
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ECommerce



